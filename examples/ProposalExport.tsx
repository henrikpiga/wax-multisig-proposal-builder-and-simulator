'use client';

import React from 'react';

interface ProposalExportProps {
  proposalData: any;
  className?: string;
}

/**
 * Educational component for exporting proposal data.
 */
export function ProposalExport({ proposalData, className = '' }: ProposalExportProps) {
  const handleExport = (format: string) => {
    const dataStr = JSON.stringify(proposalData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    const exportFileDefaultName = `proposal-${Date.now()}.${format}`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className={`rounded-2xl border border-white/10 p-6 ${className}`}>
      <h3 className="font-semibold mb-4">Export Proposal</h3>

      <div className="flex gap-3">
        <button
          onClick={() => handleExport('json')}
          className="px-3 py-1 text-xs bg-white/10 hover:bg-white/20 rounded"
        >
          Export as JSON
        </button>
        <button
          onClick={() => handleExport('txt')}
          className="px-3 py-1 text-xs bg-white/10 hover:bg-white/20 rounded"
        >
          Export as Text
        </button>
      </div>

      <p className="text-xs text-muted-foreground mt-3">
        Export the current proposal data for backup or sharing.
      </p>
    </div>
  );
}
