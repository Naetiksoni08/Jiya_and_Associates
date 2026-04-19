"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Users, Clock, Phone, CheckCircle, Star, Calendar, Ban, TrendingUp } from "lucide-react";

interface Stats {
  total: number;
  pending: number;
  contacted: number;
  closed: number;
  spam: number;
  thisWeek: number;
  thisMonth: number;
  starred: number;
}

function StatCard({
  label,
  value,
  icon: Icon,
  labelColor,
  sub,
}: {
  label: string;
  value: number;
  icon: React.ElementType;
  labelColor?: string;
  sub?: string;
}) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 hover:-translate-y-1 hover:shadow-xl transition-transform duration-200 cursor-default">
      <div className="flex items-start justify-between">
        <div>
          <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${labelColor ?? "text-navy/70 dark:text-white"}`}>{label}</p>
          <p className="text-4xl font-bold text-navy dark:text-white font-serif">{value}</p>
          {sub && <p className="text-xs font-semibold text-navy/50 dark:text-gray-500 mt-2">{sub}</p>}
        </div>
        <Icon size={22} className="text-navy/20 dark:text-gray-600 mt-1" />
      </div>
    </div>
  );
}

export default function OverviewPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const adminPath = pathname.split("/")[1];

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((r) => {
        if (r.status === 401) { router.push(`/${adminPath}/login?unauthorized=1`); return null; }
        return r.json();
      })
      .then((data) => { if (data) setStats(data); })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-serif text-3xl text-navy dark:text-white font-bold">Overview</h1>
        <p className="text-navy/50 dark:text-gray-400 text-sm mt-1">Your leads at a glance</p>
      </div>

      {loading ? (
        <div className="text-navy/40 dark:text-gray-500 text-sm">Loading stats...</div>
      ) : stats ? (
        <div className="space-y-8">
          {/* Main stats */}
          <div>
            <p className="text-xs font-bold text-navy/60 dark:text-gray-500 uppercase tracking-wider mb-3">All Time</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard label="Total Leads" value={stats.total} icon={Users} />
              <StatCard label="Pending" value={stats.pending} icon={Clock} labelColor="text-orange-400" />
              <StatCard label="Contacted" value={stats.contacted} icon={Phone} labelColor="text-green-400" />
              <StatCard label="Closed" value={stats.closed} icon={CheckCircle} labelColor="text-red-400" />
            </div>
          </div>

          {/* Secondary stats */}
          <div>
            <p className="text-xs font-bold text-navy/60 dark:text-gray-500 uppercase tracking-wider mb-3">Activity</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard label="This Week" value={stats.thisWeek} icon={TrendingUp} sub="new enquiries" />
              <StatCard label="This Month" value={stats.thisMonth} icon={Calendar} sub="new enquiries" />
              <StatCard label="Starred" value={stats.starred} icon={Star} sub="important leads" />
              <StatCard label="Spam" value={stats.spam} icon={Ban} labelColor="text-gray-400" sub="filtered out" />
            </div>
          </div>

          {/* Quick action */}
          <div className="flex gap-3">
            <button
              onClick={() => router.push(`/${adminPath}/leads`)}
              className="bg-navy dark:bg-gray-700 text-cream px-5 py-2.5 text-sm font-semibold hover:bg-navy-light transition-colors"
            >
              View All Leads
            </button>
            <button
              onClick={() => router.push(`/${adminPath}/leads?status=pending`)}
              className="border border-gray-200 dark:border-gray-600 text-navy dark:text-gray-200 px-5 py-2.5 text-sm font-semibold hover:border-gold transition-colors"
            >
              View Pending ({stats.pending})
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
