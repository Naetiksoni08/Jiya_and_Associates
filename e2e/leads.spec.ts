import { test, expect, APIRequestContext } from "@playwright/test";

// Requires TEST_ADMIN_EMAIL + TEST_ADMIN_PASSWORD to run.
// All tests in this file are skipped when credentials are absent.

const LOGIN = "/api/admin/login";
const LEADS = "/api/admin/leads";

async function getAuthContext(request: APIRequestContext) {
  const email = process.env.TEST_ADMIN_EMAIL;
  const password = process.env.TEST_ADMIN_PASSWORD;
  if (!email || !password) return null;

  const res = await request.post(LOGIN, { data: { email, password } });
  if (res.status() !== 200) return null;
  return request; // cookie jar is shared within the same request context
}

test.describe("Lead management CRUD", () => {
  let leadId: string;

  test("create lead via POST /api/admin/leads", async ({ request }) => {
    const authed = await getAuthContext(request);
    if (!authed) {
      test.skip(true, "Admin credentials not set");
      return;
    }

    const res = await authed.post(LEADS, {
      data: {
        name: "E2E Test Lead",
        email: "e2e-lead@example.com",
        phone: "9000000001",
        message: "Created by Playwright E2E test",
        source: "whatsapp",
        status: "pending",
      },
    });

    expect(res.status()).toBe(201);
    const body = await res.json();
    expect(body.success).toBe(true);
    expect(body.lead._id).toBeDefined();
    leadId = body.lead._id;
  });

  test("list leads via GET /api/admin/leads", async ({ request }) => {
    const authed = await getAuthContext(request);
    if (!authed) {
      test.skip(true, "Admin credentials not set");
      return;
    }

    const res = await authed.get(LEADS);
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(Array.isArray(body.leads)).toBe(true);
  });

  test("update lead status via PATCH /api/admin/leads/:id", async ({ request }) => {
    const authed = await getAuthContext(request);
    if (!authed || !leadId) {
      test.skip(true, "Admin credentials not set or lead not created");
      return;
    }

    const res = await authed.patch(`${LEADS}/${leadId}`, {
      data: { status: "contacted" },
    });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.lead.status).toBe("contacted");
  });

  test("reject invalid status via PATCH /api/admin/leads/:id", async ({ request }) => {
    const authed = await getAuthContext(request);
    if (!authed || !leadId) {
      test.skip(true, "Admin credentials not set or lead not created");
      return;
    }

    const res = await authed.patch(`${LEADS}/${leadId}`, {
      data: { status: "invalid-status" },
    });
    expect(res.status()).toBe(400);
  });

  test("delete lead via DELETE /api/admin/leads/:id", async ({ request }) => {
    const authed = await getAuthContext(request);
    if (!authed || !leadId) {
      test.skip(true, "Admin credentials not set or lead not created");
      return;
    }

    const res = await authed.delete(`${LEADS}/${leadId}`);
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.success).toBe(true);

    // Verify it no longer appears in active leads
    const listRes = await authed.get(LEADS);
    const list = await listRes.json();
    const found = list.leads.find((l: { _id: string }) => l._id === leadId);
    expect(found).toBeUndefined();
  });
});
