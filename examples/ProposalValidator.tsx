'use client';

import React from 'react';

interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

interface ProposalValidatorProps {
  result: ValidationResult;
  className?: string;
}

/**
 * Educational component for validating a multi-sig proposal.
 */
export function ProposalValidator({ result, className = '' }: ProposalValidatorProps) {
  return (
    <div className={`rounded-2xl border border-white/10 p-6 ${className}`}>
      <h3 className="font-semibold mb-4">Proposal Validation</h3>

      <div className={`text-sm mb-3 ${result.isValid ? 'text-emerald-400' : 'text-red-400'}`}>
        {result.isValid ? '✓ Proposal is valid' : '✗ Proposal has issues'}
      </div>

      {result.errors.length > 0 && (
        <div className="mb-3">
          <div className="text-xs text-red-400 mb-1">Errors</div>
          <ul className="text-xs space-y-1">
            {result.errors.map((err, i) => <li key={i}>• {err}</li>)}
          </ul>
        </div>
      )}

      {result.warnings.length > 0 && (
        <div>
          <div className="text-xs text-amber-400 mb-1">Warnings</div>
          <ul className="text-xs space-y-1">
            {result.warnings.map((warn, i) => <li key={i}>• {warn}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}
