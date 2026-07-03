'use client';

import React from 'react';

interface Permission {
  name: string;
  actor: string;
  permission: string;
}

interface PermissionSelectorProps {
  permissions: Permission[];
  selected?: string[];
  onChange?: (selected: string[]) => void;
  className?: string;
}

/**
 * Educational component for selecting permissions when building a multi-sig proposal.
 */
export function PermissionSelector({ permissions, selected = [], onChange, className = '' }: PermissionSelectorProps) {
  const toggle = (permName: string) => {
    if (!onChange) return;
    if (selected.includes(permName)) {
      onChange(selected.filter(p => p !== permName));
    } else {
      onChange([...selected, permName]);
    }
  };

  return (
    <div className={`rounded-2xl border border-white/10 p-6 ${className}`}>
      <h3 className="font-semibold mb-4">Permission Selector</h3>

      <div className="space-y-2">
        {permissions.length > 0 ? (
          permissions.map((perm, index) => {
            const isSelected = selected.includes(perm.name);
            return (
              <div
                key={index}
                onClick={() => toggle(perm.name)}
                className={`flex justify-between items-center p-2 rounded cursor-pointer transition-colors ${isSelected ? 'bg-emerald-500/20' : 'bg-white/5 hover:bg-white/10'}`}
              >
                <span>{perm.name}</span>
                <span className="text-xs text-muted-foreground">{perm.actor}@{perm.permission}</span>
              </div>
            );
          })
        ) : (
          <p className="text-sm text-muted-foreground">No permissions available.</p>
        )}
      </div>
    </div>
  );
}
