'use client';

import React from 'react';

interface AdvancedTemplate {
  name: string;
  description: string;
  recommendedFor: string;
  riskLevel: string;
}

interface AdvancedProposalTemplatesProps {
  templates: AdvancedTemplate[];
  onSelect?: (template: AdvancedTemplate) => void;
  className?: string;
}

/**
 * More advanced proposal templates with risk level and recommended use case.
 */
export function AdvancedProposalTemplates({ templates, onSelect, className = '' }: AdvancedProposalTemplatesProps) {
  return (
    <div className={`rounded-2xl border border-white/10 p-6 ${className}`}>
      <h3 className="font-semibold mb-4">Advanced Proposal Templates</h3>

      <div className="space-y-3">
        {templates.length > 0 ? (
          templates.map((template, index) => (
            <div
              key={index}
              onClick={() => onSelect?.(template)}
              className="cursor-pointer bg-white/5 hover:bg-white/10 rounded-lg p-3 transition-colors"
            >
              <div className="flex justify-between">
                <div className="font-medium text-emerald-400">{template.name}</div>
                <div className="text-xs text-amber-400">{template.riskLevel}</div>
              </div>
              <div className="text-xs text-muted-foreground mt-1">{template.description}</div>
              <div className="text-xs mt-1">Recommended for: {template.recommendedFor}</div>
            </div>
          ))
        ) : (
          <p className="text-sm text-muted-foreground">No advanced templates available.</p>
        )}
      </div>
    </div>
  );
}
