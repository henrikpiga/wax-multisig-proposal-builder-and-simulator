'use client';

import React from 'react';

interface DashboardStats {
  totalProposals: number;
  pending: number;
  executed: number;
  failed: number;
}

interface MultiSigDashboardSummaryProps {
  stats: DashboardStats;
  className?: string;
}

/**
 * Educational component for showing a summary dashboard of multi-sig activity.
 */
export function MultiSigDashboardSummary({ stats, className = '' }: MultiSigDashboardSummaryProps) {
  return (
    <div className={`rounded-2xl border border-white/10 p-6 ${className}`}>
      <h3 className="font-semibold mb-4">Multi-Sig Dashboard Summary</h3>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <div className="text-muted-foreground text-xs">Total Proposals</div>
          <div className="text-2xl font-mono text-emerald-400">{stats.totalProposals}</div>
        </div>
        <div>
          <div className="text-muted-foreground text-xs">Pending</div>
          <div className="text-2xl font-mono text-amber-400">{stats.pending}</div>
        </div>
        <div>
          <div className="text-muted-foreground text-xs">Executed</div>
          <div className="text-2xl font-mono text-blue-400">{stats.executed}</div>
        </div>
        <div>
          <div className="text-muted-foreground text-xs">Failed</div>
          <div className="text-2xl font-mono text-red-400">{stats.failed}</div>
        </div>
      </div>
    </div>
  );
}
