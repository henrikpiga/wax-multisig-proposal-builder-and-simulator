'use client';

import React from 'react';

interface HistoryItem {
  id: string;
  title: string;
  status: string;
  date: string;
}

interface ProposalHistoryProps {
  history: HistoryItem[];
  className?: string;
}

/**
 * Educational component for showing proposal history.
 */
export function ProposalHistory({ history, className = '' }: ProposalHistoryProps) {
  return (
    <div className={`rounded-2xl border border-white/10 p-6 ${className}`}>
      <h3 className="font-semibold mb-4">Proposal History</h3>

      {history.length > 0 ? (
        <div className="space-y-2">
          {history.map((item, index) => (
            <div key={index} className="flex justify-between items-center bg-white/5 p-2 rounded text-sm">
              <span>{item.title}</span>
              <div className="flex items-center gap-3 text-xs">
                <span className="text-muted-foreground">{item.date}</span>
                <span className="text-emerald-400">{item.status}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">No proposal history available.</p>
      )}
    </div>
  );
}
