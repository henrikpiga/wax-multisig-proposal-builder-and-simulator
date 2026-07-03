'use client';

import React from 'react';

interface Key {
  key: string;
  weight: number;
}

interface MultiSigThresholdValidatorProps {
  threshold: number;
  keys: Key[];
  className?: string;
}

/**
 * Educational component for validating multi-sig thresholds.
 * Shows whether the current keys can meet the required threshold.
 */
export function MultiSigThresholdValidator({ threshold, keys, className = '' }: MultiSigThresholdValidatorProps) {
  const totalWeight = keys.reduce((sum, k) => sum + k.weight, 0);
  const canMeetThreshold = totalWeight >= threshold;
  const missingWeight = Math.max(0, threshold - totalWeight);

  return (
    <div className={`rounded-2xl border border-white/10 p-6 ${className}`}>
      <h3 className="font-semibold mb-4">Multi-Sig Threshold Validation</h3>

      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span>Required Threshold</span>
          <span className="font-mono text-emerald-400">{threshold}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Total Available Weight</span>
          <span className="font-mono">{totalWeight}</span>
        </div>

        <div className={`mt-4 p-3 rounded-lg text-sm ${canMeetThreshold ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
          {canMeetThreshold 
            ? '✓ This multi-sig configuration can execute proposals.' 
            : `✗ Missing ${missingWeight} weight. This configuration cannot execute.`}
        </div>

        {!canMeetThreshold && (
          <p className="text-xs text-muted-foreground">
            Add more keys or reduce the threshold to make this multi-sig usable.
          </p>
        )}
      </div>
    </div>
  );
}
