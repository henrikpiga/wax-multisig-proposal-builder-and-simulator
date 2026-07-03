'use client';

import React from 'react';

interface ProposalPreviewProps {
  title: string;
  description: string;
  actions: string[];
  requiredPermissions: string[];
  className?: string;
}

/**
 * Educational component for previewing a multi-sig proposal before submission.
 */
export function ProposalPreview({ title, description, actions, requiredPermissions, className = '' }: ProposalPreviewProps) {
  return (
    <div className={`rounded-2xl border border-white/10 p-6 ${className}`}>
      <h3 className="font-semibold mb-4">Proposal Preview</h3>

      <div className="space-y-4 text-sm">
        <div>
          <div className="text-muted-foreground text-xs">Title</div>
          <div className="font-medium">{title}</div>
        </div>

        <div>
          <div className="text-muted-foreground text-xs">Description</div>
          <div>{description}</div>
        </div>

        <div>
          <div className="text-muted-foreground text-xs mb-1">Actions</div>
          <ul className="list-disc list-inside text-xs">
            {actions.map((action, i) => <li key={i}>{action}</li>)}
          </ul>
        </div>

        <div>
          <div className="text-muted-foreground text-xs mb-1">Required Permissions</div>
          <div className="flex flex-wrap gap-2">
            {requiredPermissions.map((perm, i) => (
              <span key={i} className="text-xs bg-white/10 px-2 py-0.5 rounded">{perm}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
