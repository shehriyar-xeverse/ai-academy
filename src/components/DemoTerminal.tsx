/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CyberTheme, SystemStatus } from '../types';
import { Play, RotateCw, Shield, Zap, Smile, Search, Settings, CheckCircle, Terminal } from 'lucide-react';

interface DemoTerminalProps {
  currentTheme: CyberTheme;
}

type ModeType = 'sentry' | 'steward' | 'analytical';

interface BehaviorProfile {
  id: ModeType;
  name: string;
  desc: string;
  icon: React.ComponentType<any>;
  cpu: number;
  temp: number;
  sync: number;
  drain: number;
  terminalLogs: string[];
}

export default function DemoTerminal({ currentTheme }: DemoTerminalProps) {
  // Shared scroll animations settings for high performance
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-5% 0px' },
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.94 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: '-5% 0px' },
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
  };

  // Profiles mapping
  const profiles: BehaviorProfile[] = [
    {
      id: 'sentry',
      name: 'Sentry Protocol',
      desc: 'Maximizes LiDAR scanning frequency and skeletal defensive rigidity. Ideal for extreme area surveillance.',
      icon: Shield,
      cpu: 64,
      temp: 41.2,
      sync: 98.4,
      drain: 210,
      terminalLogs: [
        'Sentry mode override established.',
        'LiDAR radius extended to max boundaries (450m).',
        'Skeletal magnetic locks engaged at joints (60Nm/rad).',
        'Threat-detection heuristics set to Stage 4.',
      ],
    },
    {
      id: 'steward',
      name: 'Steward Protocol',
      desc: 'Optimizes motor fluid elasticity, vocal matrix resonance, and power conservation limits. Perfect for household integration.',
      icon: Smile,
      cpu: 28,
      temp: 34.1,
      sync: 99.8,
      drain: 85,
      terminalLogs: [
        'Steward friendly subroutines loaded.',
        'Actuators set to silent organic tensioning.',
        'Cochlear conversational modules online in English/Japanese.',
        'Energy drain rate optimized to safe threshold.',
      ],
    },
    {
      id: 'analytical',
      name: 'Analytical Engine',
      desc: 'Diverts solid-state energy cells to bio-processor core. Accelerates quantum decryption and physics-calculation matrices.',
      icon: Zap,
      cpu: 96,
      temp: 48.5,
      sync: 89.2,
      drain: 380,
      terminalLogs: [
        'Diverting 85% secondary power to Neural Matrix.',
        'Supercomputer core computing initialized (18.4 PFLOPS).',
        'Cryo-liquid pumps set to peak performance.',
        'Solving local micro-gravity particle coordinates...',
      ],
    },
  ];

  const [activeProfile, setActiveProfile] = useState<BehaviorProfile>(profiles[1]);
  const [isRebooting, setIsRebooting] = useState(false);
  const [rebootProgress, setRebootProgress] = useState(0);
  const [terminalLogs, setTerminalLogs] = useState<string[]>(activeProfile.terminalLogs);
  const [thermalSweeping, setThermalSweeping] = useState(false);

  // Core status telemetry with decimal fluctuations
  const [telemetry, setTelemetry] = useState<SystemStatus>({
    coreTemp: activeProfile.temp,
    cpuLoad: activeProfile.cpu,
    powerReserve: 84.4,
    neuralSync: activeProfile.sync,
    diagnosticMode: activeProfile.id,
    errors: [],
  });

  // Base telemetry updates for realistic feeling
  useEffect(() => {
    const timer = setInterval(() => {
      if (isRebooting) return;
      
      // Fluctuating stats slightly
      setTelemetry((prev) => {
        const offsetTemp = (Math.random() - 0.5) * 0.15;
        const offsetCpu = (Math.random() - 0.5) * 2;
        const offsetPower = -0.01; // steady drain
        const offsetSync = (Math.random() - 0.5) * 0.05;

        return {
          ...prev,
          coreTemp: parseFloat((activeProfile.temp + offsetTemp).toFixed(2)),
          cpuLoad: Math.min(100, Math.max(5, Math.round(activeProfile.cpu + offsetCpu))),
          powerReserve: parseFloat(Math.max(0, prev.powerReserve + offsetPower).toFixed(2)),
          neuralSync: parseFloat(Math.min(100, Math.max(10, activeProfile.sync + offsetSync)).toFixed(2)),
        };
      });
    }, 1200);

    return () => clearInterval(timer);
  }, [activeProfile, isRebooting]);

  // Sync profile logs
  useEffect(() => {
    if (!isRebooting) {
      setTerminalLogs(activeProfile.terminalLogs);
    }
  }, [activeProfile, isRebooting]);

  // Reboot sequencer logic
  const handleReboot = () => {
    setIsRebooting(true);
    setRebootProgress(0);
    setTerminalLogs(['[SYSTEM ALERT] INITIATING TOTAL COGNITIVE REBOOT SEQUENCE...', 'Bypassing current protocol modes...', 'Powering down quantum cells...']);

    const steps = [
      { prg: 20, log: 'Discharging residual thermal grids...' },
      { prg: 40, log: 'Shutting down LiDAR scanning cameras...' },
      { prg: 55, log: 'Power cells isolated safely on grid nodes.' },
      { prg: 70, log: 'Initializing clean bio-compute kernels...' },
      { prg: 85, log: 'Activating ethical moral safety lock: ENGAGED' },
      { prg: 100, log: 'All systems reloaded successfully.' },
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setRebootProgress(step.prg);
        setTerminalLogs((prev) => [...prev, `[INIT] ${step.log}`]);
        if (step.prg === 100) {
          setIsRebooting(false);
          setTelemetry((p) => ({ ...p, powerReserve: 100 })); // reset battery back to 100%
          setTerminalLogs((prev) => [...prev, '[COMPLETED] Sentry Core re-assimilated correctly. Ready.']);
        }
      }, (idx + 1) * 600);
    });
  };

  // Thermal sweep scanner simulation
  const handleThermalSweep = () => {
    if (thermalSweeping || isRebooting) return;
    setThermalSweeping(true);
    setTerminalLogs((prev) => [...prev, '>> INITIATING MULTI-SPECTRUM THERMAL RADAR SWEEP...']);

    setTimeout(() => {
      setTerminalLogs((prev) => [
        ...prev,
        '>> SCANNING ZONE SECTOR 7A-X...',
        '>> Thermal echo readings normal. Zero foreign anomalies detected.',
        '>> Sweep complete.',
      ]);
      setThermalSweeping(false);
    }, 1500);
  };

  return (
    <section id="demo" className="relative py-28 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-neutral-950 to-neutral-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <motion.div 
          {...fadeInUp}
          className="max-w-3xl mb-16"
        >
          <span
            className="font-mono text-xs uppercase tracking-[0.25em] font-semibold"
            style={{ color: currentTheme.accent }}
          >
            // COGNITIVE COMPUTE SHELL
          </span>
          <h2 className="mt-3 font-sans font-black text-3xl sm:text-5xl uppercase tracking-tight">
            SYSTEM DIAGNOSTICS DECK
          </h2>
          <p className="mt-4 text-neutral-400 font-sans text-sm leading-relaxed font-light font-sans">
            Take full command of the Aetheris diagnostic terminal. Choose operational behaviors, trigger localized thermal sweeps, or reboot the entire core kernel live.
          </p>
        </motion.div>

        {/* Command Center layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Col 1: Action Controls & Protocol triggers (lg:4) */}
          <motion.div 
            {...scaleIn}
            className="lg:col-span-4 flex flex-col space-y-5"
          >
            
            {/* Action Select Header */}
            <div className="bg-neutral-900/40 border border-white/5 p-5 rounded-2xl backdrop-blur-md">
              <h3 className="font-mono text-[10px] uppercase font-black text-neutral-500 tracking-widest mb-4">
                Active Protocol Selectors
              </h3>
              
              <div className="space-y-3">
                {profiles.map((p) => {
                  const isCurProfile = p.id === activeProfile.id;
                  const ProfIcon = p.icon;
                  return (
                    <button
                      key={p.id}
                      onClick={() => !isRebooting && setActiveProfile(p)}
                      disabled={isRebooting}
                      className={`w-full flex items-center p-3.5 rounded-xl border text-left transition-all duration-300 disabled:opacity-50`}
                      style={{
                        backgroundColor: isCurProfile ? `${currentTheme.accent}15` : 'transparent',
                        borderColor: isCurProfile ? currentTheme.accent : 'rgba(255, 255, 255, 0.05)',
                        boxShadow: isCurProfile ? `0 0 10px ${currentTheme.accent}20` : 'none',
                      }}
                      data-cursor="hover"
                    >
                      <div
                        className="p-2.5 rounded-lg border bg-black/50 mr-3.5 text-white flex-none"
                        style={{ borderColor: isCurProfile ? currentTheme.accent : 'rgba(255, 255, 255, 0.1)' }}
                      >
                        <ProfIcon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="font-sans text-sm font-extrabold text-white">{p.name}</div>
                        <div className="text-[10px] text-neutral-400 font-light font-sans mt-0.5 leading-tight">{p.desc.substring(0, 70)}...</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Action Switches (Reboot, Sweep) */}
            <div className="bg-neutral-900/40 border border-white/5 p-5 rounded-2xl backdrop-blur-md flex flex-wrap gap-3">
              <button
                onClick={handleReboot}
                disabled={isRebooting}
                className="flex-1 min-w-[130px] px-4 py-3.5 rounded-xl border bg-neutral-950 font-mono text-[10px] tracking-widest text-center uppercase font-bold text-white transition-all hover:bg-neutral-900 flex items-center justify-center space-x-1.5 border-white/5"
                data-cursor="hover"
              >
                <RotateCw className={`w-3.5 h-3.5 ${isRebooting ? 'animate-spin' : ''}`} />
                <span>{isRebooting ? 'REBOOTING...' : 'FORCE CORE REBOOT'}</span>
              </button>

              <button
                onClick={handleThermalSweep}
                disabled={thermalSweeping || isRebooting}
                className="flex-1 min-w-[130px] px-4 py-3.5 rounded-xl border bg-neutral-950 font-mono text-[10px] tracking-widest text-center uppercase font-bold text-white transition-all hover:bg-neutral-900 flex items-center justify-center space-x-1.5 border-white/5"
                data-cursor="hover"
              >
                <Search className={`w-3.5 h-3.5 ${thermalSweeping ? 'animate-pulse' : ''}`} />
                <span>{thermalSweeping ? 'SWEEPING...' : 'TRIGGER SWEEP'}</span>
              </button>
            </div>
          </motion.div>

          {/* Col 2: Diagnostics Viewport Terminal (lg:8) */}
          <motion.div 
            {...scaleIn}
            className="lg:col-span-8 bg-neutral-900/50 rounded-3xl border border-white/5 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative"
          >
            
            {/* Header banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/5 pb-4 mb-6 text-neutral-500 font-mono text-[10px] uppercase font-bold tracking-widest gap-2">
              <span className="flex items-center space-x-2 text-white font-black text-sm tracking-tight font-sans">
                <Terminal className="w-4 h-4 mr-1 text-neutral-400" /> SYSTEM DIAGNOSTICS MONITOR
              </span>
              <span>DEV_LOCK // 0x47B_7</span>
            </div>

            {/* Micro Dashboard stats grid layout */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {[
                { label: 'Core Temp', value: `${telemetry.coreTemp} °C`, state: telemetry.coreTemp > 45 ? 'WARN_HEAT' : 'OPTIMAL' },
                { label: 'CPU Workload', value: `${telemetry.cpuLoad} %`, state: `${activeProfile.name}` },
                { label: 'Energy Bank', value: `${telemetry.powerReserve} %`, state: 'STEADY_DRAIN' },
                { label: 'Cortex Sync', value: `${telemetry.neuralSync} %`, state: 'COHERENT' },
              ].map((stat, id) => (
                <div key={id} className="bg-neutral-950/80 border border-white/5 rounded-xl p-4 text-left relative overflow-hidden">
                  <div className="text-[8px] font-mono uppercase text-neutral-500 tracking-wider font-bold mb-1">{stat.label}</div>
                  <div className="font-sans text-lg sm:text-xl font-black text-white uppercase tracking-tight">{stat.value}</div>
                  <div className="text-[8px] font-mono text-neutral-500 uppercase mt-1 flex items-center">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse" />
                    <span>{stat.state}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Terminal Output panel */}
            <div className="bg-black/80 rounded-2xl border border-white/10 p-5 font-mono text-neutral-400 text-xs min-h-[190px] flex-1 flex flex-col justify-between mb-4">
              
              <div className="space-y-1.5 text-left leading-relaxed">
                {isRebooting && (
                  <div className="mb-4">
                    <div className="flex justify-between text-[10px] text-amber-500 font-bold uppercase mb-1">
                      <span>SEC_CORE REBOOT DECK:</span>
                      <span>{rebootProgress}%</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 duration-200" style={{ width: `${rebootProgress}%` }} />
                    </div>
                  </div>
                )}

                {terminalLogs.map((log, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <span style={{ color: currentTheme.accent }}>[SYS_KERN]</span>
                    <span className="break-all">{log}</span>
                  </div>
                ))}
              </div>

              {/* Input simulated line */}
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center font-mono text-[11px] text-neutral-500 justify-between">
                <div className="flex items-center space-x-2">
                  <span style={{ color: currentTheme.accent }}>root@aetheris:~#</span>
                  <span className="text-white animate-[pulse_1s_infinite] font-black">_</span>
                </div>
                <span>AUTO_REFRESH: ACTIVE</span>
              </div>
            </div>

            {/* Quick calibration feedback check */}
            <div className="flex items-center space-x-2 text-[10px] font-mono text-neutral-500 uppercase">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
              <span>Moral Ethics Buffer integrity verified (100.0% coherent)</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
