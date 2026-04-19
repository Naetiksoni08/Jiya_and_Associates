import AdminShell from "@/components/admin/AdminShell";

// This layout only wraps authenticated dashboard pages (leads list, lead detail)
// Login page is outside this group so it doesn't get the AdminShell
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminShell>{children}</AdminShell>;
}
