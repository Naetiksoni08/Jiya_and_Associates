"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { toast } from "sonner";

const PRACTICE_TAGS = [
  "Corporate & Commercial Advisory",
  "Regulatory Compliance",
  "Tax Litigation & Advisory",
  "Intellectual Property Law",
  "Real Estate Advisory",
  "Licensing & Approvals",
  "Other",
];

export default function TagEditor({ leadId, initialTags }: { leadId: string; initialTags: string[] }) {
  const [tags, setTags] = useState<string[]>(initialTags || []);

  async function save(newTags: string[]) {
    setTags(newTags);
    const res = await fetch(`/api/admin/leads/${leadId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tags: newTags }),
    });
    if (!res.ok) toast.error("Failed to update tags");
    else toast.success("Tags saved");
  }

  function addTag(tag: string) {
    if (tags.includes(tag)) return;
    save([...tags, tag]);
  }

  function removeTag(tag: string) {
    save(tags.filter((t) => t !== tag));
  }

  const available = PRACTICE_TAGS.filter((t) => !tags.includes(t));

  return (
    <div>
      <p className="text-xs font-semibold text-navy/40 dark:text-gray-500 uppercase tracking-wider mb-2">Practice Areas</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.length === 0 && (
          <span className="text-sm text-navy/30 dark:text-gray-600">No tags yet</span>
        )}
        {tags.map((tag) => (
          <span
            key={tag}
            className="flex items-center gap-1 px-2.5 py-1 bg-gold/10 text-gold text-xs font-semibold rounded-full"
          >
            {tag}
            <button onClick={() => removeTag(tag)} className="hover:text-red-400 transition-colors ml-0.5">
              <X size={11} />
            </button>
          </span>
        ))}
      </div>
      {available.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {available.map((tag) => (
            <button
              key={tag}
              onClick={() => addTag(tag)}
              className="px-2.5 py-1 text-xs font-medium border border-gray-200 dark:border-gray-600 text-navy/50 dark:text-gray-400 hover:border-gold hover:text-gold transition-colors rounded-full"
            >
              + {tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
