import { notFound } from "next/navigation";

// /admin always returns 404 — real admin is at the secret route
export default function AdminPage() {
  notFound();
}
