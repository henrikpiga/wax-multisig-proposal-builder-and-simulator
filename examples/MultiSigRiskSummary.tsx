'use client';

import React from 'react';

interface RiskSummary {
  overallRisk: 'low' | 'medium' | 'high' | 'critical';
  issues: number;
  recommendations: string[];
}

interface MultiSigRiskSummaryProps {
  summary: RiskSummary;
  className?: string;
}

/**
 * Educational component for showing an overall risk summary for a multi-sig setup.
 */
export function MultiSigRiskSummary({ summary, className = '' }: MultiSigRiskSummaryProps) {
  const riskColor =
    summary.overallRisk === 'low' ? 'text-emerald-400' :
    summary.overallRisk === 'medium' ? 'text-amber-400' :
    summary.overallRisk === 'high' ? 'text-orange-400' : 'text-red-500';

  return (
    <div className={`rounded-2xl border border-white/10 p-6 ${className}`}>
      <h3 className="font-semibold mb-4">Multi-Sig Risk Summary</h3>

      <div className="mb-4">
        <div className="text-sm text-muted-foreground mb-1">Overall Risk Level</div>
        <div className={`text-2xl font-bold ${riskColor}`}>{summary.overallRisk.toUpperCase()}</div>
      </div>

      <div className="mb-4">
        <div className="text-sm text-muted-foreground">Issues Found</div>
        <div className="text-xl font-mono text-red-400">{summary.issues}</div>
      </div>

      {summary.recommendations.length > 0 && (
        <div>
          <div className="text-sm text-muted-foreground mb-2">Recommendations</div>
          <ul className="text-xs space-y-1">
            {summary.recommendations.map((rec, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">→</span>
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
