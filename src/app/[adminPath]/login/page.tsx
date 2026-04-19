import { notFound } from "next/navigation";
import LoginForm from "@/components/admin/LoginForm";

// Login page — does NOT use the AdminShell (user isn't authenticated yet)
// We override the layout by rendering without the shell wrapper

export default function LoginPage({
  params,
}: {
  params: { adminPath: string };
}) {
  if (params.adminPath !== process.env.ADMIN_PATH) {
    notFound();
  }

  return <LoginForm adminPath={params.adminPath} />;
}
