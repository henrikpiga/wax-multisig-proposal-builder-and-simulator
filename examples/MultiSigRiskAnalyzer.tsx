'use client';

import React from 'react';

interface RiskWarning {
  level: 'critical' | 'warning' | 'info';
  message: string;
}

interface MultiSigRiskAnalyzerProps {
  warnings: RiskWarning[];
  className?: string;
}

/**
 * Educational component for displaying multi-sig risk warnings.
 * Helps users understand potential issues with their multi-sig setup.
 */
export function MultiSigRiskAnalyzer({ warnings, className = '' }: MultiSigRiskAnalyzerProps) {
  if (warnings.length === 0) {
    return (
      <div className={`rounded-2xl border border-white/10 p-6 ${className}`}>
        <h3 className="font-semibold mb-2">Risk Analysis</h3>
        <p className="text-emerald-400 text-sm">✓ No major risks detected in this multi-sig configuration.</p>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl border border-white/10 p-6 ${className}`}>
      <h3 className="font-semibold mb-4">Risk Analysis</h3>

      <div className="space-y-3">
        {warnings.map((warning, index) => {
          const color =
            warning.level === 'critical' ? 'text-red-400' :
            warning.level === 'warning' ? 'text-amber-400' : 'text-blue-400';

          return (
            <div key={index} className="flex items-start gap-3 text-sm">
              <span className={`${color} mt-0.5`}>
                {warning.level === 'critical' ? '⛔' : warning.level === 'warning' ? '⚠️' : 'ℹ️'}
              </span>
              <span className={color}>{warning.message}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
