/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { CyberTheme } from '../../types';
import TechnologySpecs from '../TechnologySpecs';
import { Cpu, Hammer, Thermometer, Radio } from 'lucide-react';

interface TechnologyPageProps {
  currentTheme: CyberTheme;
}

export default function TechnologyPage({ currentTheme }: TechnologyPageProps) {
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

  const hardwareSchematics = [
    {
      title: 'Active Helium Core Subcooler',
      stat: 'TEMPERATURE: -145°C Stabilized',
      icon: Thermometer,
      description: 'The 4,096 carbon qubits in the primary quantum synapse generate considerable micro-thermal friction. To prevent quantum decoherence, a specialized closed-circuit superfluid helium pump circulates continuously behind the optic sensors, cooling the processor core to perfect subcooled indexes within 3 seconds of activation.',
    },
    {
      title: 'Milled Graphitic Graphene Skeleton',
      stat: 'YIELD LIMIT: 120 GPa Tension',
      icon: Hammer,
      description: 'Conventional alloy frameworks bend under high torque stress. Aetheris incorporates dry-milled carbon single-crystal tubes reinforced with high-density graphite mesh. This skeletal core deflects ballistic kinetic bursts up to 120 GPa while weighing only 45% of traditional titanium alloys.',
    },
    {
      title: 'Direct Synaptic RF Integration Network',
      stat: 'BANDWIDTH: 100 Gb / Millisecond',
      icon: Radio,
      description: 'Utilizes highly shielded orbital quantum RF transmitters to synchronize motor telemetry directly with sub-orbital command drop-vessels. Features cryptographic physical layer security (quantum-key expansion) ensuring that wireless telemetry arrays are completely jam-proof.',
    },
  ];

  return (
    <div className="w-full relative py-20">
      
      {/* 1. Header Banner */}
      <motion.div 
        {...fadeInUp}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-left"
      >
        <span 
          className="font-mono text-xs uppercase tracking-[0.2em]"
          style={{ color: currentTheme.accent }}
        >
          // ENGINEERING CORE TERMINAL
        </span>
        <h1 className="mt-2 font-display font-medium text-4xl sm:text-7xl uppercase tracking-tight text-white leading-none">
          SYSTEM CORE HARDWARE &{' '}
          <span 
            className="text-transparent bg-clip-text bg-gradient-to-r"
            style={{
              backgroundImage: `linear-gradient(to right, ${currentTheme.accent}, #ffffff)`,
              textShadow: `0 0 10px ${currentTheme.glowColor}`
            }}
          >
            FIRMWARE LOGIC
          </span>
        </h1>
        <p className="mt-4 text-neutral-400 font-light text-sm sm:text-lg max-w-3xl leading-relaxed">
          Access local mechatronic compilation streams, analyze high-frequency core sensor fluctuations, and interface directly with real-time hardware compile loops.
        </p>
      </motion.div>

      {/* 2. Interactive Oscilloscope and Code Editor Panel */}
      <TechnologySpecs currentTheme={currentTheme} />

      {/* 3. Deep Hardware Schematics Section */}
      <section className="relative py-20 bg-neutral-950 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.015] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            {...fadeInUp}
            className="text-left mb-16 space-y-4"
          >
            <span 
              className="font-mono text-xs uppercase tracking-[0.2em] font-semibold"
              style={{ color: currentTheme.accent }}
            >
              // SYSTEM DIAGNOSTICS DEEP SCHEMATIC
            </span>
            <h2 className="font-display font-medium text-2xl sm:text-4xl uppercase tracking-tight text-white">
              CORE THERMAL & MECHANICAL LAYERS
            </h2>
            <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed max-w-3xl">
              Model 4 achieves ultimate survivability indices by separating structural skeletal elements, sensory telemetry pathways, and active subcooling channels into fully decoupled, isolated physical modules.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hardwareSchematics.map((schem, index) => {
              const TechIcon = schem.icon;
              return (
                <motion.div 
                  key={index} 
                  {...scaleIn}
                  className="p-8 rounded-3xl border border-white/5 bg-neutral-900/30 backdrop-blur-md text-left flex flex-col justify-between hover:border-white/10 transition-all group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center transition-all group-hover:border-white/15">
                      <TechIcon className="w-6 h-6" style={{ color: currentTheme.accent }} />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 block mb-0.5">
                        {schem.stat}
                      </span>
                      <h3 className="font-sans text-xl font-bold text-white uppercase tracking-tight">
                        {schem.title}
                      </h3>
                    </div>
                    <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                      {schem.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between font-mono text-[9px] text-neutral-500">
                    <span>SECTOR MODULE REGISTERED</span>
                    <span style={{ color: currentTheme.accent }}>ID // 0{index + 1}-AETHERIS</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
