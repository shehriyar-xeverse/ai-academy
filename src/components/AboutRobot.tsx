/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CyberTheme } from '../types';
import { Cpu, Eye, Zap, Shield, HelpCircle, HardDrive } from 'lucide-react';

interface AboutRobotProps {
  currentTheme: CyberTheme;
}

interface ChassisPart {
  id: string;
  name: string;
  label: string;
  icon: React.ComponentType<any>;
  coordinates: { x: string; y: string };
  specTitle: string;
  specValue: string;
  metric: string;
  description: string;
  details: string[];
}

export default function AboutRobot({ currentTheme }: AboutRobotProps) {
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

  const parts: ChassisPart[] = [
    {
      id: 'cpu',
      name: 'Neural Quantum core',
      label: 'Cognitive Core',
      icon: Cpu,
      coordinates: { x: '50%', y: '18%' },
      specTitle: 'Synaptic Computation',
      specValue: '18.4 PFLOPS / S',
      metric: 'Telemetry Load: 14%',
      description: 'The cognitive core replicates human neuron clusters utilizing hybrid room-temperature quantum computation cells. Learns and adapts behavior in real-time.',
      details: [
        'Quantum entanglement gates: 4,096 Qubits',
        'Direct cerebral wireless linking interface',
        'Heuristic moral-ethical buffer protocol (Guard v8.2)',
        'Cognitive expansion slots for specialty task units',
      ],
    },
    {
      id: 'optics',
      name: 'Multispectrum LiDAR Cluster',
      label: 'Optical Matrix',
      icon: Eye,
      coordinates: { x: '50%', y: '10%' },
      specTitle: 'Focal Perception Matrix',
      specValue: '86K Resolution, 240FPS',
      metric: 'LiDAR range: 450 meters',
      description: 'Engineered with ultra-high sensitivity micro-cameras and spatial solid-state LiDAR sensors. Maps surroundings in instantaneous 3D mesh representations.',
      details: [
        'Infrared, thermal, and ultraviolet wavelengths tracking',
        'Spatial layout collision matrix auto-mapping',
        'Holographic emitter arrays for telemetry previews',
        'Biometric eye-movement focus tracing',
      ],
    },
    {
      id: 'actuator',
      name: 'Bio-Polymer Actuators',
      label: 'Myofibril Systems',
      icon: HardDrive,
      coordinates: { x: '42%', y: '45%' },
      specTitle: 'Elastic Actuator Tension',
      specValue: '450 Kg / Micro-Joint',
      metric: 'Elasticity Rate: 99.8%',
      description: 'Replaces conventional spinning gearboxes with synthetically grown polymer fibers responding to variable microvolt pulses, duplicating organic muscle fluidity.',
      details: [
        'High-density graphene skeletal joints',
        'Silent operation threshold (under 4db at peak speed)',
        'Full 48 Degrees of Freedom (DoF) humanoid movement',
        'Self-healing polymer casing on surface structures',
      ],
    },
    {
      id: 'battery',
      name: 'Solid-State Fusion Cells',
      label: 'Quantum Battery',
      icon: Zap,
      coordinates: { x: '50%', y: '32%' },
      specTitle: 'Power Storage Unit',
      specValue: '14.2 KW / Hour Cells',
      metric: 'Sustain: 72H Operation',
      description: 'An advanced solid-state electrochemical core housed in an armored heat-sink array. Charges inductively to full capacity in under 4 minutes flat.',
      details: [
        'Triple-barrier thermal protection casing',
        'Inductive magnetic shielding grid layers',
        'Kinetic feedback power harvesting',
        'Instant discharge tolerance up to 250 kW',
      ],
    },
    {
      id: 'hull',
      name: 'Nanocarbon Graphene Shell',
      label: 'Skeletal Armor',
      icon: Shield,
      coordinates: { x: '40%', y: '70%' },
      specTitle: 'Impact Resilience',
      specValue: '120 GPa Shock Limit',
      metric: 'Deflection rate: 94.2%',
      description: 'Skeletal framework milled out of single-crystal carbon fibers layered with structural aerogel. Offers extreme weight-to-strength ratios.',
      details: [
        'Thermal dissipation surface structure',
        'Sub-zero and high-heat insulation shield (-120°C to 450°C)',
        'Non-magnetic alloy coating modules',
        'Sleek ceramic-finished outer plate skin',
      ],
    },
  ];

  const [activePart, setActivePart] = useState<ChassisPart>(parts[0]);

  return (
    <section id="about" className="relative py-28 bg-neutral-950 text-white overflow-hidden">
      {/* Dynamic ambient grid overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.015] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          {...fadeInUp}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span
            className="font-mono text-xs uppercase tracking-[0.25em] font-semibold"
            style={{ color: currentTheme.accent }}
          >
            // BIOMECHANICAL INSIGHT
          </span>
          <h2 className="mt-3 font-sans font-black text-3xl sm:text-5xl uppercase tracking-tight">
            THE CHASSIS RE-IMAGINED
          </h2>
          <p className="mt-4 text-neutral-400 font-sans text-sm sm:text-base leading-relaxed font-light">
            Every component of the Aetheris series is optimized to perform. Click on anatomical nodes below to reveal detailed material telemetry and diagnostic metrics.
          </p>
        </motion.div>

        {/* Anatomical Explorer Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Schematic blueprints vector view (lg:span-6) */}
          <motion.div 
            {...scaleIn}
            className="lg:col-span-6 flex flex-col items-center justify-center relative bg-neutral-900/40 p-4 sm:p-8 rounded-3xl border border-white/5 backdrop-blur-md min-h-[500px] sm:min-h-[580px] overflow-hidden"
          >
            
            {/* Holographic scanning overlay */}
            <div className={`absolute top-0 bottom-0 left-0 right-0 pointer-events-none opacity-40 duration-500`}>
              <div
                className="w-full h-[2px] bg-gradient-to-r from-transparent via-current to-transparent opacity-60 animate-[bounce_4s_infinite]"
                style={{ color: currentTheme.accent, background: `linear-gradient(90deg, transparent, ${currentTheme.accent}, transparent)` }}
              />
            </div>

            {/* Glowing Tech Circles behind blueprint */}
            <div className="absolute w-72 h-72 rounded-full border border-dashed border-white/5 animate-[spin_50s_linear_infinite]" />
            <div
              className="absolute w-96 h-96 rounded-full border border-dotted opacity-20 animate-[spin_100s_linear_infinite]"
              style={{ borderColor: currentTheme.accent }}
            />

            {/* Main Interactive Blueprint SVG */}
            <div className="relative w-full h-full max-w-[280px] sm:max-w-[340px] aspect-[1/2] flex items-center justify-center">
              
              {/* Humanoid Vector Graphic Blueprint (Slick glowing lines) */}
              <svg className="w-full h-full text-neutral-800" viewBox="0 0 200 400" fill="none" stroke="currentColor">
                {/* Reference Grid */}
                <line x1="0" y1="200" x2="200" y2="200" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" strokeDasharray="2 2" />
                <line x1="100" y1="0" x2="100" y2="400" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" strokeDasharray="2 2" />

                {/* Head */}
                <circle cx="100" cy="50" r="16" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
                <ellipse cx="100" cy="50" rx="10" ry="12" stroke={activePart.id === 'optics' || activePart.id === 'cpu' ? currentTheme.accent : "rgba(255, 255, 255, 0.3)"} strokeWidth={activePart.id === 'optics' || activePart.id === 'cpu' ? "1.5" : "1"} />
                
                {/* Neck & Spine line */}
                <line x1="100" y1="66" x2="100" y2="160" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                
                {/* Torso & Rib Chest Frame */}
                {/* Shoulder Bar */}
                <line x1="60" y1="84" x2="140" y2="84" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                <rect x="72" y="90" width="56" height="50" rx="6" stroke={activePart.id === 'battery' ? currentTheme.accent : "rgba(255, 255, 255, 0.15)"} strokeWidth="1" />
                <circle cx="100" cy="115" r="14" stroke={activePart.id === 'battery' ? currentTheme.accent : "rgba(255,255,255,0.1)"} strokeWidth="1" />
                
                {/* Arms */}
                {/* Left Arm */}
                <line x1="56" y1="86" x2="42" y2="150" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5" />
                <line x1="42" y1="152" x2="35" y2="210" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                <circle cx="58" cy="85" r="4" fill="rgba(255,255,255,0.5)" />
                <circle cx="42" cy="151" r="3.5" fill="rgba(255,255,255,0.5)" />
                
                {/* Right Arm */}
                <line x1="144" y1="86" x2="158" y2="150" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5" />
                <line x1="158" y1="152" x2="165" y2="210" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                <circle cx="142" cy="85" r="4" fill="rgba(255,255,255,0.5)" />
                <circle cx="158" cy="151" r="3.5" fill="rgba(255,255,255,0.5)" />
                
                {/* Pelvis Area */}
                <rect x="76" y="152" width="48" height="24" rx="4" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />

                {/* Legs (Active Actuators details overlay) */}
                {/* Left Leg */}
                <line x1="84" y1="178" x2="80" y2="260" stroke={activePart.id === 'actuator' ? currentTheme.accent : "rgba(255, 255, 255, 0.15)"} strokeWidth="3" />
                <line x1="80" y1="264" x2="76" y2="340" stroke={activePart.id === 'actuator' ? currentTheme.accent : "rgba(255, 255, 255, 0.15)"} strokeWidth="2" />
                <circle cx="84" cy="178" r="4.5" fill="rgba(255,255,255,0.5)" />
                <circle cx="80" cy="262" r="4" fill="rgba(255,255,255,0.5)" />

                {/* Right Leg */}
                <line x1="116" y1="178" x2="120" y2="260" stroke={activePart.id === 'actuator' ? currentTheme.accent : "rgba(255, 255, 255, 0.15)"} strokeWidth="3" />
                <line x1="120" y1="264" x2="124" y2="340" stroke={activePart.id === 'actuator' ? currentTheme.accent : "rgba(255, 255, 255, 0.15)"} strokeWidth="2" />
                <circle cx="116" cy="178" r="4.5" fill="rgba(255,255,255,0.5)" />
                <circle cx="120" cy="262" r="4" fill="rgba(255,255,255,0.5)" />
              </svg>

              {/* Dynamic Interactive Hotspot buttons overlay mapping to coordinates */}
              {parts.map((p) => {
                const isSelected = p.id === activePart.id;
                const Icon = p.icon;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActivePart(p)}
                    className="absolute z-10 p-2.5 rounded-full backdrop-blur-md border transition-all duration-300 pointer-events-auto transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: p.coordinates.x,
                      top: p.coordinates.y,
                      backgroundColor: isSelected ? currentTheme.accent : 'rgba(10, 10, 10, 0.85)',
                      borderColor: isSelected ? 'white' : 'rgba(255, 255, 255, 0.2)',
                      boxShadow: isSelected ? `0 0 15px ${currentTheme.glowColor}` : '0 4px 10px rgba(0,0,0,0.6)',
                    }}
                    data-cursor="hover"
                    title={`Diagnose ${p.label}`}
                  >
                    <Icon className={`w-3.5 h-3.5 transition-colors ${isSelected ? 'text-black' : 'text-white'}`} />
                    <span className="absolute -inset-1 rounded-full border border-dashed animate-spin opacity-45 pointer-events-none" style={{ borderColor: isSelected ? 'white' : currentTheme.accent, animationDuration: isSelected ? '5s' : '15s' }} />
                  </button>
                );
              })}
            </div>

            {/* Micro diagnostic status lines on outer blueprint boundary */}
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between font-mono text-[9px] text-neutral-500 uppercase">
              <span>SCANNER // ACC_CORE: ACTIVE</span>
              <span>GRID LOCKOUT RESOLUTION // H7X</span>
            </div>
          </motion.div>

          {/* Column 2: Specific Metrics & Explanations panel (lg:span-6) */}
          <motion.div 
            {...scaleIn}
            className="lg:col-span-6 flex flex-col space-y-6"
          >
            
            {/* Modular Hotspot Tab Buttons quick list */}
            <div className="flex flex-wrap gap-2">
              {parts.map((p) => {
                const isSelected = p.id === activePart.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActivePart(p)}
                    className={`px-4 py-2 text-xs font-mono tracking-wider uppercase border rounded transition-all duration-300 ${
                      isSelected
                        ? 'text-white shadow-md'
                        : 'text-neutral-400 border-white/5 bg-neutral-900/30 hover:text-white hover:bg-neutral-900/60'
                    }`}
                    style={{
                      borderColor: isSelected ? currentTheme.accent : undefined,
                      backgroundColor: isSelected ? `${currentTheme.accent}15` : undefined,
                      boxShadow: isSelected ? `0 0 10px ${currentTheme.accent}20` : undefined,
                    }}
                    data-cursor="hover"
                  >
                    {p.label}
                  </button>
                );
              })}
            </div>

            {/* Dynamic Telemetry View Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePart.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden"
              >
                {/* Glow decor background */}
                <div
                  className="absolute -right-24 -top-24 w-48 h-48 rounded-full blur-[90px] opacity-15 pointer-events-none duration-500"
                  style={{ backgroundColor: currentTheme.accent }}
                />

                <div className="flex items-center space-x-3.5 border-b border-white/5 pb-5">
                  <div
                    className="p-3 rounded-xl border bg-black/40"
                    style={{ borderColor: `${currentTheme.accent}30` }}
                  >
                    {(() => {
                      const PartIcon = activePart.icon;
                      return <PartIcon className="w-6 h-6" style={{ color: currentTheme.accent }} />;
                    })()}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase font-bold text-neutral-500 tracking-widest">
                      CHASSIS SUY_SYS MODULE
                    </span>
                    <h3 className="font-sans text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mt-0.5">
                      {activePart.name}
                    </h3>
                  </div>
                </div>

                {/* Cyber bento numbers indicator row */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-neutral-950/70 rounded-xl border border-white/5 p-4 text-left">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500">
                      Telemetry Output
                    </span>
                    <div className="mt-1 font-sans text-lg sm:text-2xl font-black text-white uppercase tracking-tight">
                      {activePart.specValue}
                    </div>
                    <span className="font-mono text-[9px] text-neutral-500 block mt-0.5">
                      {activePart.specTitle}
                    </span>
                  </div>

                  <div className="bg-neutral-950/70 rounded-xl border border-white/5 p-4 text-left relative overflow-hidden">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500">
                      Active diagnostics
                    </span>
                    <div
                      className="mt-1 font-mono text-xs font-bold uppercase tracking-widest flex items-center space-x-1.5"
                      style={{ color: currentTheme.accent }}
                    >
                      <span className="inline-block w-2.5 h-2.5 rounded-full border border-dashed animate-spin" style={{ borderColor: currentTheme.accent }} />
                      <span>{activePart.metric.split(':')[0]}</span>
                    </div>
                    <span className="font-sans text-xs text-neutral-300 block mt-1 tracking-tight">
                      {activePart.metric.split(':')[1]?.trim() || activePart.metric}
                    </span>
                  </div>
                </div>

                {/* Narrative core text */}
                <p className="mt-6 font-sans text-neutral-300 text-sm leading-relaxed font-light">
                  {activePart.description}
                </p>

                {/* Subspecs list with cyber crosshair lists */}
                <div className="mt-6 border-t border-white/5 pt-6">
                  <h4 className="font-mono text-[10px] uppercase font-bold text-neutral-400 tracking-wider mb-3">
                    Sub-circuit Specifications List
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {activePart.details.map((detail, index) => (
                      <div key={index} className="flex items-start space-x-2 text-xs font-sans text-neutral-400">
                        <span className="font-mono text-[10px] font-bold mt-0.5" style={{ color: currentTheme.accent }}>
                          [+]
                        </span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
