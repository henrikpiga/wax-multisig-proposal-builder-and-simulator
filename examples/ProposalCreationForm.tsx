'use client';

import React from 'react';

interface ProposalCreationFormProps {
  className?: string;
}

/**
 * Educational stub for a proposal creation form.
 * Placeholder for future full implementation.
 */
export function ProposalCreationForm({ className = '' }: ProposalCreationFormProps) {
  return (
    <div className={`rounded-2xl border border-white/10 p-6 ${className}`}>
      <h3 className="font-semibold mb-4">Proposal Creation Form</h3>

      <div className="text-sm space-y-3">
        <p className="text-muted-foreground">
          This is a placeholder for an interactive proposal creation form.
          Future versions will include fields for title, description, action type, target, data, and permission requirements.
        </p>

        <div className="bg-black/50 p-3 rounded text-xs font-mono">
          // Form fields coming soon<br />
          // Title, Description, Action, Permissions, etc.
        </div>
      </div>
    </div>
  );
}
