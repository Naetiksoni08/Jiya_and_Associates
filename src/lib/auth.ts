import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET!;

// Create a token that expires in 7 days
export function signToken(email: string): string {
  return jwt.sign({ email }, SECRET, { expiresIn: "7d" });
}

// Verify the token — returns the payload or null if invalid/expired
export function verifyToken(token: string): { email: string } | null {
  try {
    return jwt.verify(token, SECRET) as { email: string };
  } catch {
    return null;
  }
}
