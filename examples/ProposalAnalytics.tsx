'use client';

import React from 'react';

interface AnalyticsData {
  totalCreated: number;
  successRate: number;
  averageApprovals: number;
  mostCommonAction: string;
}

interface ProposalAnalyticsProps {
  data: AnalyticsData;
  className?: string;
}

/**
 * Educational component for showing analytics on multi-sig proposals.
 */
export function ProposalAnalytics({ data, className = '' }: ProposalAnalyticsProps) {
  return (
    <div className={`rounded-2xl border border-white/10 p-6 ${className}`}>
      <h3 className="font-semibold mb-4">Proposal Analytics</h3>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <div className="text-muted-foreground text-xs">Total Created</div>
          <div className="text-2xl font-mono text-emerald-400">{data.totalCreated}</div>
        </div>
        <div>
          <div className="text-muted-foreground text-xs">Success Rate</div>
          <div className="text-2xl font-mono text-blue-400">{data.successRate}%</div>
        </div>
        <div>
          <div className="text-muted-foreground text-xs">Avg. Approvals</div>
          <div className="text-2xl font-mono text-amber-400">{data.averageApprovals}</div>
        </div>
        <div>
          <div className="text-muted-foreground text-xs">Most Common Action</div>
          <div className="text-sm">{data.mostCommonAction}</div>
        </div>
      </div>
    </div>
  );
}
