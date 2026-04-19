import { redirect } from "next/navigation";

// Dashboard index — redirect to leads table
export default function AdminIndexPage({
  params,
}: {
  params: { adminPath: string };
}) {
  redirect(`/${params.adminPath}/overview`);
}
