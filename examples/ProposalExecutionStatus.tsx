'use client';

import React from 'react';

interface ProposalExecutionStatusProps {
  status: 'pending' | 'approved' | 'executed' | 'failed';
  approvalsReceived: number;
  approvalsRequired: number;
  className?: string;
}

/**
 * Educational component for showing the execution status of a multi-sig proposal.
 */
export function ProposalExecutionStatus({ status, approvalsReceived, approvalsRequired, className = '' }: ProposalExecutionStatusProps) {
  const statusColor =
    status === 'executed' ? 'text-emerald-400' :
    status === 'approved' ? 'text-blue-400' :
    status === 'failed' ? 'text-red-400' : 'text-amber-400';

  return (
    <div className={`rounded-2xl border border-white/10 p-6 ${className}`}>
      <h3 className="font-semibold mb-4">Proposal Execution Status</h3>

      <div className={`text-lg font-bold mb-3 ${statusColor}`}>{status.toUpperCase()}</div>

      <div className="text-sm">
        <span className="text-muted-foreground">Approvals: </span>
        <span className="font-mono">{approvalsReceived} / {approvalsRequired}</span>
      </div>

      <div className="mt-3 text-xs text-muted-foreground">
        {status === 'pending' && 'Waiting for more approvals...'}
        {status === 'approved' && 'All approvals received. Ready to execute.'}
        {status === 'executed' && 'Proposal has been successfully executed on-chain.'}
        {status === 'failed' && 'Execution failed. Check logs for details.'}
      </div>
    </div>
  );
}
