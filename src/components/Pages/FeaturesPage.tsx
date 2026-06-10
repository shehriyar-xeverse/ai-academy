/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { CyberTheme } from '../../types';
import FeaturesGrid from '../FeaturesGrid';
import { ShieldCheck, Compass, Anchor, Crosshair, HeartPulse, Globe, ArrowUpRight } from 'lucide-react';

interface FeaturesPageProps {
  currentTheme: CyberTheme;
}

export default function FeaturesPage({ currentTheme }: FeaturesPageProps) {
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

  const deepApps = [
    {
      title: 'Benthic Deep-Sea Exploration',
      icon: Anchor,
      stat: 'DEPTH INDECES: Up to 10,000M',
      riskAnalysis: 'High hydrostatic compression tolerance (100 MPa), sub-zero benthic cooling loops, non-corrosive synthetic dermis, tactile sensing feedback under zero-visibility.',
      expl: 'Model 4 humanoids actively deploy to benthic trenches in search of clean geothermal energy grids. Operating with continuous 3D sensory mesh LiDAR, they replace highly risky manned submersibles and coordinate heavy machinery in absolute pitch black environments.',
    },
    {
      title: 'Tactical Strategic Command Assistance',
      icon: Crosshair,
      stat: 'COMPUTE: 18.4 PFLOPS synaptic network',
      riskAnalysis: 'Real-time multi-spectral signal processing, simultaneous evaluation of 100,000 risk nodes per second, active threat-mitigation logic, absolute jam-resilient encrypted radio.',
      expl: 'In heavy defense nodes or satellite communication centers, Model 4 humanoids operate as direct command-center peers. They process orbital satellite streams and radar coordinates within micro-seconds, formulating optimal contingency projections while ensuring human squad safety stays top priority.',
    },
    {
      title: 'Advanced Bio-Surgery & Pico-Precision Grafts',
      icon: HeartPulse,
      stat: 'PRECISION INDECES: Sub-Micron Precision',
      riskAnalysis: 'Carbon single-crystal skeleton stabilization, sub-millisecond trembling mitigation, active tactile biofeedback pressure cells, integrated thermal imaging cameras.',
      expl: 'Equipped with special surgical attachment pods, Aetheris units execute microscopic cellular grafts directly on damaged human organs. Our actuators filter out all physical micro-vibration, ensuring pristine needle tracking at scales where human hand limits are reached.',
    },
    {
      title: 'Planetary Ecological Restoration',
      icon: Globe,
      stat: 'ADAPTIVE TEMPERATURES: -120°C to 450°C',
      riskAnalysis: 'Toxic atmosphere neutralizing shell, chemical air-quality mass spectrometers, self-recharging solar-fusion cell induction, high nuclear-radiation deflection.',
      expl: 'Deploying deep into toxic fallout zones, nuclear reclamation sites, or active volcanic areas, Aetheris units construct purification biosystems and clear lethal chemical debris. They operate independently of atmospheric support, managing toxic material containing vaults safely.',
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
          // BEHAVIORAL COGNITIVE TASK LIST
        </span>
        <h1 className="mt-2 font-display font-medium text-4xl sm:text-7xl uppercase tracking-tight text-white leading-none">
          SYSTEM FEATURES &{' '}
          <span 
            className="text-transparent bg-clip-text bg-gradient-to-r"
            style={{
              backgroundImage: `linear-gradient(to right, ${currentTheme.accent}, #ffffff)`,
              textShadow: `0 0 10px ${currentTheme.glowColor}`
            }}
          >
            TASK ABILITIES
          </span>
        </h1>
        <p className="mt-4 text-neutral-400 font-light text-sm sm:text-lg max-w-3xl leading-relaxed">
          Through synaptic learning and high-fidelity sensory mesh tracking, the Aetheris humanoid adapts to critical industrial workloads and highly complex human-symbiotic roles.
        </p>
      </motion.div>

      {/* 2. Bento Grid Interactive Showcase */}
      <FeaturesGrid currentTheme={currentTheme} />

      {/* 3. Deep Real-World Industrial Applications Section */}
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
              // ACTIVE INTEGRATION SECTORS
            </span>
            <h2 className="font-display font-medium text-2xl sm:text-4xl uppercase tracking-tight text-white">
              STRATEGIC REAL-WORLD OPERATIONS
            </h2>
            <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed max-w-3xl">
              Model 4 is currently helping sovereign fleets, biosurgery groups, and eco-reclamation systems run dangerous workflows with minimal human risk. Below is a deep profile of current work sectors.
            </p>
          </motion.div>

          <div className="space-y-8">
            {deepApps.map((app, index) => {
              const AppIcon = app.icon;
              return (
                <motion.div 
                  key={index}
                  {...scaleIn}
                  className="bg-neutral-900/40 p-6 sm:p-10 rounded-3xl border border-white/5 backdrop-blur-md text-left flex flex-col lg:flex-row gap-8 items-start hover:border-white/10 transition-all group"
                >
                  {/* Left: Icon & Title metadata */}
                  <div className="lg:w-1/3 space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center transition-all group-hover:border-white/15">
                      <AppIcon className="w-7 h-7" style={{ color: currentTheme.accent }} />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 block">
                        {app.stat}
                      </span>
                      <h3 className="font-sans text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mt-1 group-hover:text-neutral-200 transition-colors">
                        {app.title}
                      </h3>
                    </div>
                    <div className="inline-flex items-center space-x-1.5 font-mono text-[9px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>COGNITIVELY CERTIFIED</span>
                    </div>
                  </div>

                  {/* Right: Rich Explanations */}
                  <div className="lg:w-2/3 space-y-4">
                    <div>
                      <h4 className="font-mono text-[10px] uppercase font-bold text-neutral-400 tracking-wider mb-1">
                        System Risk Safeguards & Technical Analysis
                      </h4>
                      <p className="text-neutral-400 text-xs sm:text-sm font-mono leading-relaxed bg-black/30 p-3.5 rounded-lg border border-white/[0.03]">
                        {app.riskAnalysis}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-mono text-[10px] uppercase font-bold text-neutral-400 tracking-wider mb-1">
                        Operational Objective Context
                      </h4>
                      <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                        {app.expl}
                      </p>
                    </div>
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
