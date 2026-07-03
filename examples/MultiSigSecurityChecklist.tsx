'use client';

import React from 'react';

interface SecurityItem {
  id: string;
  title: string;
  description: string;
  checked?: boolean;
}

interface MultiSigSecurityChecklistProps {
  items: SecurityItem[];
  onToggle?: (id: string, checked: boolean) => void;
  className?: string;
}

/**
 * Security checklist for multi-sig setups.
 * Educational and useful for audits.
 */
export function MultiSigSecurityChecklist({ items, onToggle, className = '' }: MultiSigSecurityChecklistProps) {
  return (
    <div className={`rounded-2xl border border-white/10 p-6 ${className}`}>
      <h3 className="font-semibold mb-4">Multi-Sig Security Checklist</h3>

      <div className="space-y-3">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={item.checked || false}
                onChange={(e) => onToggle?.(item.id, e.target.checked)}
                className="mt-1 accent-emerald-500"
              />
              <div>
                <div className="font-medium text-sm">{item.title}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{item.description}</div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-muted-foreground">No items listed.</p>
        )}
      </div>
    </div>
  );
}
