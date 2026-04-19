import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { connectDB } from "@/lib/db";
import { Lead } from "@/models/Lead";
import StatusDropdown from "@/components/admin/StatusDropdown";
import NotesPanel from "@/components/admin/NotesPanel";
import TagEditor from "@/components/admin/TagEditor";

// Server component — fetches data directly, no API round-trip needed
export default async function LeadDetailPage({
  params,
}: {
  params: { adminPath: string; id: string };
}) {
  await connectDB();
  const lead = await Lead.findById(params.id).lean();

  if (!lead) notFound();

  // lean() returns plain objects, not Mongoose documents
  // We need to serialize _id and dates to strings for client components
  const serialized = JSON.parse(JSON.stringify(lead));

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <div className="max-w-4xl">
      {/* Back button */}
      <Link
        href={`/${params.adminPath}/leads`}
        className="inline-flex items-center gap-2 text-sm text-navy/50 dark:text-gray-400 hover:text-gold transition-colors mb-6"
      >
        <ArrowLeft size={16} />
        Back to Leads
      </Link>

      {/* Lead info card */}
      <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-8 mb-6">
        <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
          <div>
            <h1 className="font-serif text-3xl text-navy dark:text-white font-bold">{serialized.name}</h1>
            <p className="text-navy/50 dark:text-gray-400 text-sm mt-1">
              Submitted on {formatDate(serialized.createdAt)}
            </p>
          </div>
          <StatusDropdown
            leadId={serialized._id}
            initialStatus={serialized.status}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-xs font-semibold text-navy/40 dark:text-gray-500 uppercase tracking-wider mb-1">Email</p>
            <p className="text-navy dark:text-gray-200">{serialized.email}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-navy/40 dark:text-gray-500 uppercase tracking-wider mb-1">Phone</p>
            <p className="text-navy dark:text-gray-200">{serialized.phone}</p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
          <TagEditor leadId={serialized._id} initialTags={serialized.tags || []} />
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
          <p className="text-xs font-semibold text-navy/40 dark:text-gray-500 uppercase tracking-wider mb-2">Message</p>
          <p className="text-navy/80 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">{serialized.message}</p>
        </div>
      </div>

      {/* Notes */}
      <NotesPanel leadId={serialized._id} initialNotes={serialized.notes || []} />
    </div>
  );
}
