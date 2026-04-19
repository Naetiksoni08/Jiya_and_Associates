import { notFound } from "next/navigation";

// This layout wraps ALL pages under /[adminPath] (including login)
// Job: only validate the secret path. AdminShell is added in (dashboard)/layout.tsx
export default function AdminRootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { adminPath: string };
}) {
  // If someone visits /anything-else, return 404 — not the admin shell
  if (params.adminPath !== process.env.ADMIN_PATH) {
    notFound();
  }

  return <>{children}</>;
}
