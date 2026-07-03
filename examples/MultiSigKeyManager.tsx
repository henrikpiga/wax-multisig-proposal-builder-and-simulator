'use client';

import React from 'react';

interface Key {
  publicKey: string;
  weight: number;
}

interface MultiSigKeyManagerProps {
  keys: Key[];
  onAddKey?: (key: Key) => void;
  onRemoveKey?: (index: number) => void;
  className?: string;
}

/**
 * Educational component for managing keys in a multi-sig setup.
 * Placeholder for future full implementation.
 */
export function MultiSigKeyManager({ keys, onAddKey, onRemoveKey, className = '' }: MultiSigKeyManagerProps) {
  return (
    <div className={`rounded-2xl border border-white/10 p-6 ${className}`}>
      <h3 className="font-semibold mb-4">Multi-Sig Key Manager</h3>

      <div className="space-y-2 mb-4">
        {keys.length > 0 ? (
          keys.map((key, index) => (
            <div key={index} className="flex justify-between items-center bg-white/5 p-2 rounded">
              <span className="font-mono text-xs truncate">{key.publicKey}</span>
              <div className="flex items-center gap-2">
                <span className="text-amber-400 text-sm">{key.weight}</span>
                {onRemoveKey && (
                  <button onClick={() => onRemoveKey(index)} className="text-red-400 text-xs hover:underline">Remove</button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-muted-foreground">No keys added yet.</p>
        )}
      </div>

      {onAddKey && (
        <button
          onClick={() => onAddKey({ publicKey: 'PUBKEY_HERE', weight: 1 })}
          className="text-xs underline hover:text-emerald-400"
        >
          + Add Key (demo)
        </button>
      )}
    </div>
  );
}
