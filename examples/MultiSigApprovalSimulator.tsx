'use client';

import React from 'react';

interface Approver {
  name: string;
  weight: number;
  approved?: boolean;
}

interface MultiSigApprovalSimulatorProps {
  threshold: number;
  approvers: Approver[];
  onToggleApproval?: (index: number) => void;
  className?: string;
}

/**
 * Educational component for simulating multi-sig approvals.
 * Users can toggle approvals to see if the threshold is met.
 */
export function MultiSigApprovalSimulator({ threshold, approvers, onToggleApproval, className = '' }: MultiSigApprovalSimulatorProps) {
  const currentWeight = approvers
    .filter(a => a.approved)
    .reduce((sum, a) => sum + a.weight, 0);

  const canExecute = currentWeight >= threshold;

  return (
    <div className={`rounded-2xl border border-white/10 p-6 ${className}`}>
      <h3 className="font-semibold mb-4">Approval Simulator</h3>

      <div className="mb-4 text-sm">
        <span className="text-muted-foreground">Current Weight: </span>
        <span className="font-mono text-emerald-400">{currentWeight}</span>
        <span className="text-muted-foreground"> / {threshold} required</span>
      </div>

      <div className="space-y-2 mb-4">
        {approvers.map((approver, index) => (
          <div
            key={index}
            onClick={() => onToggleApproval?.(index)}
            className={`flex justify-between items-center p-2 rounded cursor-pointer transition-colors ${approver.approved ? 'bg-emerald-500/20' : 'bg-white/5 hover:bg-white/10'}`}
          >
            <span>{approver.name}</span>
            <div className="flex items-center gap-2">
              <span className="text-amber-400 text-sm">{approver.weight}</span>
              <span className={`text-xs px-2 py-0.5 rounded ${approver.approved ? 'bg-emerald-500 text-black' : 'bg-white/20'}`}>
                {approver.approved ? 'Approved' : 'Pending'}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className={`text-sm p-3 rounded ${canExecute ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>
        {canExecute 
          ? '✓ Threshold met — Proposal can execute.' 
          : 'More approvals needed to reach threshold.'}
      </div>
    </div>
  );
}
