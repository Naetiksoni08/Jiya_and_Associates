import { Suspense } from "react";
import LeadsTable from "@/components/admin/LeadsTable";

// Suspense is required by Next.js 14 when a child uses useSearchParams
export default function LeadsPage({
  params,
}: {
  params: { adminPath: string };
}) {
  return (
    <Suspense fallback={<div className="text-navy/50 text-sm">Loading...</div>}>
      <LeadsTable adminPath={params.adminPath} />
    </Suspense>
  );
}
