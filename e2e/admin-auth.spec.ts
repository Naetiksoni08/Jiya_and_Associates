import { test, expect } from "@playwright/test";

// These tests hit /api/admin/login directly — no browser required.
// Set TEST_ADMIN_EMAIL + TEST_ADMIN_PASSWORD in your .env.test (or shell) to run against real credentials.
const LOGIN = "/api/admin/login";

test.describe("POST /api/admin/login", () => {
  test("returns 400 when body is empty", async ({ request }) => {
    const res = await request.post(LOGIN, { data: {} });
    expect(res.status()).toBe(400);
  });

  test("returns 401 for wrong credentials", async ({ request }) => {
    const res = await request.post(LOGIN, {
      data: { email: "nobody@example.com", password: "wrongpassword" },
    });
    expect(res.status()).toBe(401);
    const body = await res.json();
    expect(body.error).toBe("Invalid credentials");
  });

  test("sets httpOnly admin_token cookie on valid login", async ({ request }) => {
    const email = process.env.TEST_ADMIN_EMAIL;
    const password = process.env.TEST_ADMIN_PASSWORD;

    if (!email || !password) {
      test.skip(true, "TEST_ADMIN_EMAIL / TEST_ADMIN_PASSWORD not set");
      return;
    }

    const res = await request.post(LOGIN, { data: { email, password } });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.success).toBe(true);

    // Cookie must be present in Set-Cookie header
    const setCookie = res.headers()["set-cookie"] ?? "";
    expect(setCookie).toContain("admin_token=");
    expect(setCookie).toContain("HttpOnly");
  });

  test("unauthenticated GET /api/admin/leads returns 401", async ({ request }) => {
    const res = await request.get("/api/admin/leads");
    expect(res.status()).toBe(401);
  });
});
