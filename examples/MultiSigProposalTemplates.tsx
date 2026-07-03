'use client';

import React from 'react';

interface ProposalTemplate {
  name: string;
  description: string;
  exampleAction: string;
}

interface MultiSigProposalTemplatesProps {
  templates: ProposalTemplate[];
  onSelect?: (template: ProposalTemplate) => void;
  className?: string;
}

/**
 * Component showing common multi-sig proposal templates.
 * Educational and useful for quick starts.
 */
export function MultiSigProposalTemplates({ templates, onSelect, className = '' }: MultiSigProposalTemplatesProps) {
  return (
    <div className={`rounded-2xl border border-white/10 p-6 ${className}`}>
      <h3 className="font-semibold mb-4">Common Proposal Templates</h3>

      <div className="space-y-3">
        {templates.length > 0 ? (
          templates.map((template, index) => (
            <div
              key={index}
              onClick={() => onSelect?.(template)}
              className="cursor-pointer bg-white/5 hover:bg-white/10 rounded-lg p-3 transition-colors"
            >
              <div className="font-medium text-emerald-400">{template.name}</div>
              <div className="text-xs text-muted-foreground mt-1">{template.description}</div>
              <div className="text-xs text-amber-400 mt-1">Example: {template.exampleAction}</div>
            </div>
          ))
        ) : (
          <p className="text-sm text-muted-foreground">No templates available.</p>
        )}
      </div>
    </div>
  );
}
