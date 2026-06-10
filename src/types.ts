/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type CyberThemeId = 'cyber-blue' | 'neon-purple' | 'emerald-green' | 'fire-red' | 'electric-cyan' | 'golden-amber' | 'soft-pink' | 'ice-white';

export interface CyberTheme {
  id: CyberThemeId;
  name: string;
  accent: string;       // Primary glowing accent (e.g. #00f0ff)
  secondary: string;    // Secondary accent (e.g. #0066ff)
  hoverAccent: string;  // Darker hex or brighter variant for cursor/buttons
  glowColor: string;    // Shadow glowing class or hex rgba value
  bgGradient: string;   // Background glow gradient
  accentText: string;   // Text color class (e.g., text-cyan-400)
  accentBg: string;     // Color class for background (e.g., bg-cyan-500)
  accentBorder: string; // Color class for border (e.g., border-cyan-500/30)
  accentShadow: string; // Tailwind shadow class (e.g., shadow-[0_0_15px_rgba(0,240,255,0.5)])
}

export const CYBER_THEMES: CyberTheme[] = [
  {
    id: 'cyber-blue',
    name: 'Cyber Blue',
    accent: '#0084ff',
    secondary: '#00f0ff',
    hoverAccent: '#3399ff',
    glowColor: 'rgba(0, 132, 255, 0.6)',
    bgGradient: 'from-blue-950/20 to-neutral-950/20',
    accentText: 'text-blue-400',
    accentBg: 'bg-blue-500',
    accentBorder: 'border-blue-500/30',
    accentShadow: 'shadow-[0_0_20px_rgba(0,132,255,0.35)]',
  },
  {
    id: 'neon-purple',
    name: 'Neon Purple',
    accent: '#bd00ff',
    secondary: '#ff007a',
    hoverAccent: '#e000ff',
    glowColor: 'rgba(189, 0, 255, 0.6)',
    bgGradient: 'from-purple-950/20 to-pink-950/20',
    accentText: 'text-fuchsia-400',
    accentBg: 'bg-fuchsia-500',
    accentBorder: 'border-fuchsia-500/30',
    accentShadow: 'shadow-[0_0_20px_rgba(189,0,255,0.35)]',
  },
  {
    id: 'emerald-green',
    name: 'Emerald Green',
    accent: '#05ff67',
    secondary: '#00ffcc',
    hoverAccent: '#1eff7f',
    glowColor: 'rgba(5, 255, 103, 0.6)',
    bgGradient: 'from-emerald-950/20 to-teal-950/20',
    accentText: 'text-emerald-400',
    accentBg: 'bg-emerald-500',
    accentBorder: 'border-emerald-500/30',
    accentShadow: 'shadow-[0_0_20px_rgba(5,255,103,0.35)]',
  },
  {
    id: 'fire-red',
    name: 'Fire Red',
    accent: '#ff003c',
    secondary: '#ff5500',
    hoverAccent: '#dd0030',
    glowColor: 'rgba(255, 0, 60, 0.6)',
    bgGradient: 'from-red-950/20 to-neutral-950/20',
    accentText: 'text-red-550',
    accentBg: 'bg-red-500',
    accentBorder: 'border-red-500/30',
    accentShadow: 'shadow-[0_0_20px_rgba(255,0,60,0.35)]',
  },
  {
    id: 'electric-cyan',
    name: 'Electric Cyan',
    accent: '#00ffea',
    secondary: '#0088ff',
    hoverAccent: '#00ddcc',
    glowColor: 'rgba(0, 255, 234, 0.6)',
    bgGradient: 'from-cyan-950/20 to-blue-950/20',
    accentText: 'text-cyan-400',
    accentBg: 'bg-cyan-500',
    accentBorder: 'border-cyan-500/30',
    accentShadow: 'shadow-[0_0_20px_rgba(0,255,234,0.35)]',
  },
  {
    id: 'golden-amber',
    name: 'Golden Amber',
    accent: '#ffaa00',
    secondary: '#ff4c00',
    hoverAccent: '#ffbc33',
    glowColor: 'rgba(255, 170, 0, 0.6)',
    bgGradient: 'from-amber-950/20 to-red-950/20',
    accentText: 'text-orange-400',
    accentBg: 'bg-orange-500',
    accentBorder: 'border-orange-500/20',
    accentShadow: 'shadow-[0_0_20px_rgba(255,170,0,0.35)]',
  },
  {
    id: 'soft-pink',
    name: 'Soft Pink',
    accent: '#ff80b3',
    secondary: '#ff007f',
    hoverAccent: '#ff9ec2',
    glowColor: 'rgba(255, 128, 179, 0.6)',
    bgGradient: 'from-pink-950/20 to-purple-950/20',
    accentText: 'text-pink-400',
    accentBg: 'bg-pink-500',
    accentBorder: 'border-pink-500/30',
    accentShadow: 'shadow-[0_0_20px_rgba(255,128,179,0.35)]',
  },
  {
    id: 'ice-white',
    name: 'Ice White',
    accent: '#e2e8f0',
    secondary: '#94a3b8',
    hoverAccent: '#ffffff',
    glowColor: 'rgba(226, 232, 240, 0.5)',
    bgGradient: 'from-slate-900/20 to-neutral-950/20',
    accentText: 'text-slate-300',
    accentBg: 'bg-slate-450',
    accentBorder: 'border-slate-550/30',
    accentShadow: 'shadow-[0_0_20px_rgba(226,232,240,0.35)]',
  },
];

export interface SystemStatus {
  coreTemp: number;
  cpuLoad: number;
  powerReserve: number;
  neuralSync: number;
  diagnosticMode: string;
  errors: string[];
}
