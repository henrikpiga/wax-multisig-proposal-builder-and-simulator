'use client';

import React from 'react';

interface Change {
  field: string;
  before: string;
  after: string;
}

interface ProposalChangeDiffProps {
  changes: Change[];
  className?: string;
}

/**
 * Educational component for showing before/after changes in a proposal.
 * Very useful for reviewing what a multi-sig proposal actually does.
 */
export function ProposalChangeDiff({ changes, className = '' }: ProposalChangeDiffProps) {
  return (
    <div className={`rounded-2xl border border-white/10 p-6 ${className}`}>
      <h3 className="font-semibold mb-4">Proposed Changes</h3>

      {changes.length > 0 ? (
        <div className="space-y-4">
          {changes.map((change, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-3">
              <div className="font-medium text-sm mb-2 text-emerald-400">{change.field}</div>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="text-muted-foreground mb-1">Before</div>
                  <div className="font-mono bg-black/50 p-2 rounded">{change.before}</div>
                </div>
                <div>
                  <div className="text-muted-foreground mb-1">After</div>
                  <div className="font-mono bg-black/50 p-2 rounded">{change.after}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">No changes to display.</p>
      )}
    </div>
  );
}
