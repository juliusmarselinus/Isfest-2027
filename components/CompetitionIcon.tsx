'use client';

import React from 'react';
import { Compass, Database, Code2, Swords, Crosshair } from 'lucide-react';

interface CompetitionIconProps {
  name: 'compass' | 'database' | 'code' | 'swords' | 'crosshair';
  className?: string;
}

export default function CompetitionIcon({ name, className = 'w-6 h-6' }: CompetitionIconProps) {
  switch (name) {
    case 'compass':
      return <Compass className={className} />;
    case 'database':
      return <Database className={className} />;
    case 'code':
      return <Code2 className={className} />;
    case 'swords':
      return <Swords className={className} />;
    case 'crosshair':
      return <Crosshair className={className} />;
    default:
      return <Compass className={className} />;
  }
}
