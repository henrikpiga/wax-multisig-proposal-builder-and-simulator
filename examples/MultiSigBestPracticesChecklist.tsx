'use client';

import React from 'react';

interface BestPractice {
  id: string;
  title: string;
  description: string;
  checked?: boolean;
}

interface MultiSigBestPracticesChecklistProps {
  practices: BestPractice[];
  onToggle?: (id: string, checked: boolean) => void;
  className?: string;
}

/**
 * Checklist of best practices for multi-sig proposal management.
 * Educational and useful for audits and design reviews.
 */
export function MultiSigBestPracticesChecklist({ practices, onToggle, className = '' }: MultiSigBestPracticesChecklistProps) {
  return (
    <div className={`rounded-2xl border border-white/10 p-6 ${className}`}>
      <h3 className="font-semibold mb-4">Multi-Sig Best Practices Checklist</h3>

      <div className="space-y-3">
        {practices.length > 0 ? (
          practices.map((practice) => (
            <div key={practice.id} className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={practice.checked || false}
                onChange={(e) => onToggle?.(practice.id, e.target.checked)}
                className="mt-1 accent-emerald-500"
              />
              <div>
                <div className="font-medium text-sm">{practice.title}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{practice.description}</div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-muted-foreground">No best practices listed.</p>
        )}
      </div>
    </div>
  );
}
