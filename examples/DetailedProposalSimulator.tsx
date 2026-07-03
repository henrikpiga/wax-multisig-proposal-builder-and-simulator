'use client';

import React, { useState } from 'react';

interface Approver {
  name: string;
  weight: number;
}

interface DetailedProposalSimulatorProps {
  threshold: number;
  approvers: Approver[];
  className?: string;
}

/**
 * More detailed educational simulator for multi-sig proposals.
 * Includes live weight calculation and status.
 */
export function DetailedProposalSimulator({ threshold, approvers, className = '' }: DetailedProposalSimulatorProps) {
  const [approved, setApproved] = useState<boolean[]>(approvers.map(() => false));

  const currentWeight = approvers
    .filter((_, i) => approved[i])
    .reduce((sum, a) => sum + a.weight, 0);

  const canExecute = currentWeight >= threshold;
  const missingWeight = Math.max(0, threshold - currentWeight);

  const toggle = (index: number) => {
    const newApproved = [...approved];
    newApproved[index] = !newApproved[index];
    setApproved(newApproved);
  };

  return (
    <div className={`rounded-2xl border border-white/10 p-6 ${className}`}>
      <h3 className="font-semibold mb-4">Detailed Proposal Simulator</h3>

      <div className="mb-4 text-sm">
        <span className="text-muted-foreground">Current Weight: </span>
        <span className="font-mono text-emerald-400">{currentWeight}</span>
        <span className="text-muted-foreground"> / {threshold} required</span>
      </div>

      <div className="space-y-2 mb-4">
        {approvers.map((approver, index) => (
          <div
            key={index}
            onClick={() => toggle(index)}
            className={`flex justify-between items-center p-2 rounded cursor-pointer transition-colors ${approved[index] ? 'bg-emerald-500/20' : 'bg-white/5 hover:bg-white/10'}`}
          >
            <span>{approver.name}</span>
            <div className="flex items-center gap-2">
              <span className="text-amber-400 text-sm">{approver.weight}</span>
              <span className={`text-xs px-2 py-0.5 rounded ${approved[index] ? 'bg-emerald-500 text-black' : 'bg-white/20'}`}>
                {approved[index] ? 'Approved' : 'Pending'}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className={`text-sm p-3 rounded ${canExecute ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>
        {canExecute 
          ? '✓ Threshold met — Proposal can execute.' 
          : `Missing ${missingWeight} weight. More approvals needed.`}
      </div>
    </div>
  );
}
