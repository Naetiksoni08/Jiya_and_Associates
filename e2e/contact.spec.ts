import { test, expect } from "@playwright/test";

const ENDPOINT = "/api/contact";

const validPayload = {
  name: "Test User",
  email: "test@example.com",
  phone: "9999999999",
  message: "This is a test enquiry message.",
  nature: "General",
};

test.describe("POST /api/contact", () => {
  test("returns 201 for valid submission", async ({ request }) => {
    const res = await request.post(ENDPOINT, { data: validPayload });
    expect(res.status()).toBe(201);
    const body = await res.json();
    expect(body.success).toBe(true);
  });

  test("returns 422 when name is too short", async ({ request }) => {
    const res = await request.post(ENDPOINT, {
      data: { ...validPayload, name: "A" },
    });
    expect(res.status()).toBe(422);
    const body = await res.json();
    expect(body.issues?.name).toBeDefined();
  });

  test("returns 422 for invalid email", async ({ request }) => {
    const res = await request.post(ENDPOINT, {
      data: { ...validPayload, email: "not-an-email" },
    });
    expect(res.status()).toBe(422);
    const body = await res.json();
    expect(body.issues?.email).toBeDefined();
  });

  test("returns 422 when message is too short", async ({ request }) => {
    const res = await request.post(ENDPOINT, {
      data: { ...validPayload, message: "Short" },
    });
    expect(res.status()).toBe(422);
    const body = await res.json();
    expect(body.issues?.message).toBeDefined();
  });

  test("returns 422 when phone is missing", async ({ request }) => {
    const res = await request.post(ENDPOINT, {
      data: { ...validPayload, phone: "" },
    });
    expect(res.status()).toBe(422);
    const body = await res.json();
    expect(body.issues?.phone).toBeDefined();
  });

  test("email notification does not block success even if Resend is unconfigured", async ({ request }) => {
    // The API wraps email in try/catch — a missing key must never yield 500
    const res = await request.post(ENDPOINT, { data: validPayload });
    expect(res.status()).not.toBe(500);
  });
});
