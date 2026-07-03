'use client';

import React from 'react';

interface WharfKitProposalExampleProps {
  className?: string;
}

/**
 * Educational example showing how to integrate with WharfKit for creating multi-sig proposals.
 */
export function WharfKitProposalExample({ className = '' }: WharfKitProposalExampleProps) {
  return (
    <div className={`rounded-2xl border border-white/10 p-6 ${className}`}>
      <h3 className="font-semibold mb-4">WharfKit Integration Example</h3>

      <div className="text-sm space-y-3">
        <p className="text-muted-foreground">
          This component demonstrates how to use WharfKit to create and sign a real multi-sig proposal on WAX.
        </p>

        <div className="bg-black/50 p-3 rounded text-xs font-mono">
          // Example code would go here<br />
          // const session = await wharfSession();<br />
          // await session.transact({ actions: [...] });
        </div>

        <p className="text-xs text-emerald-400">
          Full working example coming soon. This component serves as a placeholder and educational stub.
        </p>
      </div>
    </div>
  );
}
