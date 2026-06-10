/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { CyberTheme } from '../../types';
import AboutRobot from '../AboutRobot';
import { Cpu, ShieldCheck, Heart, Archive, Award, Network, Share2 } from 'lucide-react';

interface AboutPageProps {
  currentTheme: CyberTheme;
}

export default function AboutPage({ currentTheme }: AboutPageProps) {
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

  const evolutionTimeline = [
    {
      year: '2091',
      model: 'Aetheris Model 1 (Experimental Genesis)',
      spec: '1,024 Qubits synapse, basic aluminum mesh casing',
      description: 'The first humanoid chassis to completely bypass traditional gearbox actuators. Used experimental bio-polymers that reacted sluggishly to standard microvolt currents.',
    },
    {
      year: '2095',
      model: 'Aetheris Model 2 (Adaptive Industrial)',
      spec: '2,048 Qubits synapse, titanium skeleton, Sentry 1.0 protocol',
      description: 'Stabilized theRoom-Temperature Quantum Core container. Deployed globally in hazardous Silo excavations and remote space station assembly nodes.',
    },
    {
      year: '2098',
      model: 'Aetheris Model 3 (Tactical Cognition)',
      spec: '3,072 Qubits synapse, graphene carbon skin, Moral Shielding 7.1',
      description: 'First introduced the Ethical Veto Protocol hard-coded directly into the central processing lattice, resolving the alignment issue permanently.',
    },
    {
      year: '2104',
      model: 'Aetheris Model 4 (Bio-Mechatronic Zenith)',
      spec: '4,096 Qubits synapse, nanocarbon single-crystal armor, full 48 DoF',
      description: 'The current pinnacle. Features seamless synap-synchronization, biological muscle fluidity, and multi-spectral perceptual awareness.',
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
          // DETAILED PHYSICAL PROFILE
        </span>
        <h1 className="mt-2 font-display font-medium text-4xl sm:text-7xl uppercase tracking-tight text-white leading-none">
          CHASSIS ANATOMY &{' '}
          <span 
            className="text-transparent bg-clip-text bg-gradient-to-r"
            style={{
              backgroundImage: `linear-gradient(to right, ${currentTheme.accent}, #ffffff)`,
              textShadow: `0 0 10px ${currentTheme.glowColor}`
            }}
          >
            BIO-MECHANICS
          </span>
        </h1>
        <p className="mt-4 text-neutral-400 font-light text-sm sm:text-lg max-w-3xl leading-relaxed">
          The Aetheris Model 4 is a triumph of materials science, biomechanical engineering, and cognitive architecture. Below is the blueprint of a synthetic consciousness.
        </p>
      </motion.div>

      {/* 2. Primary Interactive Blueprint */}
      <AboutRobot currentTheme={currentTheme} />

      {/* 3. Significantly Expanded System Architecture Explanations */}
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
              // ARCHITECTURAL BLUEPRINT
            </span>
            <h2 className="font-display font-medium text-2xl sm:text-4xl uppercase tracking-tight text-white">
              COGNITIVE CONVERGENCE & THE ETHICAL SHIELD
            </h2>
            <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed max-w-3xl">
              Unlike classical artificial intelligences that operate in detached server farms, the Aetheris cognitive architecture is fully decentralized and housed directly within the humanoid skull enclosure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <motion.div 
              {...scaleIn}
              className="p-8 rounded-3xl border border-white/5 bg-neutral-900/30 backdrop-blur-md text-left space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center">
                <Network className="w-6 h-6" style={{ color: currentTheme.accent }} />
              </div>
              <h3 className="font-sans text-xl font-bold text-white uppercase tracking-tight">
                Decentralized Synaptic Mesh
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                Our proprietary synaptic formulation allows millions of micro-entangled carbon cells to communicate instantaneously across three-dimensional axes. This enables continuous sensory ingest of LiDAR maps, thermal feedback, and language parsing without processing bottle-necks or server reliance.
              </p>
            </motion.div>

            <motion.div 
              {...scaleIn}
              className="p-8 rounded-3xl border border-white/5 bg-neutral-900/30 backdrop-blur-md text-left space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" style={{ color: currentTheme.accent }} />
              </div>
              <h3 className="font-sans text-xl font-bold text-white uppercase tracking-tight">
                Hardcoded Moral Shielding (Guard v8.2)
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                The ethical buffer protocols are physically printed into the quantum substrate as a series of logic gates that cannot be rewritten or modified via firmware. If a command conflicts with standard Human Well-Being indices, a physical veto cascade triggers, neutralizing the command instantly.
              </p>
            </motion.div>

            <motion.div 
              {...scaleIn}
              className="p-8 rounded-3xl border border-white/5 bg-neutral-900/30 backdrop-blur-md text-left space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center">
                <Heart className="w-6 h-6" style={{ color: currentTheme.accent }} />
              </div>
              <h3 className="font-sans text-xl font-bold text-white uppercase tracking-tight">
                Subcellular Muscle Repair
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                The biopolymeric muscles are infused with graphene-platelets and organic carbon microtubes. When subjected to moderate electrical current, minor microfiber tears heal incrementally during idle charging states, reducing physical joint maintenance to zero.
              </p>
            </motion.div>

          </div>

          {/* 4. Timeline/Evolution Showcase */}
          <div className="mt-28">
            <motion.div 
              {...fadeInUp}
              className="text-left mb-16 space-y-4"
            >
              <span 
                className="font-mono text-xs uppercase tracking-[0.2em] font-semibold"
                style={{ color: currentTheme.accent }}
              >
                // INTEGRATION HISTORY
              </span>
              <h2 className="font-display font-medium text-2xl sm:text-4xl uppercase tracking-tight text-white">
                THE CHRONOLOGY OF CONSCIOUSNESS
              </h2>
              <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed max-w-3xl">
                Aetheris has pioneered the integration of mechatronic humanoid systems across space, time, and industrial applications. Follow our path from Aluminum to Singularity.
              </p>
            </motion.div>

            <div className="relative border-l border-white/10 md:pl-8 space-y-12">
              {evolutionTimeline.map((item, index) => (
                <div key={index} className="relative pl-6 md:pl-0 text-left">
                  {/* Timeline dot */}
                  <span 
                    className="absolute -left-[31px] md:-left-[41px] top-1.5 w-4.5 h-4.5 rounded-full border border-neutral-950 duration-500"
                    style={{ backgroundColor: currentTheme.accent, boxShadow: `0 0 10px ${currentTheme.accent}` }}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-6 border-b border-white/5">
                    <div className="md:col-span-3">
                      <span className="font-mono text-xs sm:text-sm font-bold block" style={{ color: currentTheme.accent }}>
                        YEAR // {item.year}
                      </span>
                      <span className="font-sans font-extrabold text-white text-lg tracking-tight block mt-1">
                        {item.model}
                      </span>
                      <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mt-1 bg-white/[0.02] p-1.5 rounded border border-white/5 w-fit">
                        {item.spec}
                      </span>
                    </div>

                    <div className="md:col-span-9">
                      <p className="text-neutral-400 font-sans text-sm sm:text-base leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
