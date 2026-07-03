'use client';

import React from 'react';

interface ProposalBuilderProps {
  className?: string;
}

/**
 * Educational stub for a multi-sig proposal builder UI.
 * Placeholder for future full implementation.
 */
export function ProposalBuilder({ className = '' }: ProposalBuilderProps) {
  return (
    <div className={`rounded-2xl border border-white/10 p-6 ${className}`}>
      <h3 className="font-semibold mb-4">Proposal Builder</h3>

      <div className="text-sm space-y-3">
        <p className="text-muted-foreground">
          This is a placeholder for an interactive multi-sig proposal builder.
          Future versions will include form fields for action selection, permission requirements, description, and live preview.
        </p>

        <div className="bg-black/50 p-3 rounded text-xs font-mono">
          // Full interactive builder coming soon<br />
          // Features: action type, target contract, data, required permissions
        </div>
      </div>
    </div>
  );
}
