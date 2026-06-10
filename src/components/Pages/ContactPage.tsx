/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { CyberTheme } from '../../types';
import ContactForm from '../ContactForm';
import { MapPin, Globe, Radio, ShieldAlert } from 'lucide-react';

interface ContactPageProps {
  currentTheme: CyberTheme;
}

export default function ContactPage({ currentTheme }: ContactPageProps) {
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

  const quantumBeacons = [
    {
      loc: 'Silo-1 (Primary Assembly)',
      coords: 'LAT: 52.5200° N, LON: 13.4050° E',
      node: 'Neo-Berlin Subterranean Lattice',
      status: 'ONLINE // OPTICAL FEED',
    },
    {
      loc: 'Silo-2 (Synaptic Lab)',
      coords: 'LAT: 35.6762° N, LON: 139.6503° E',
      node: 'Tokyo Prime Synaptic Research Chamber',
      status: 'ONLINE // SEC_SOCKET ACTIVE',
    },
    {
      loc: 'Silo-7 (Satellite Grid)',
      coords: 'ORBITAL INDICES: H-ALT 35,786 KM',
      node: 'Sovereign Quantum Hub and Encryption Relay',
      status: 'SECURE // ENTANGLED BEACON SYNC',
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
          // ENCRYPTED QUANTUM MESSAGE DECK
        </span>
        <h1 className="mt-2 font-display font-medium text-4xl sm:text-7xl uppercase tracking-tight text-white leading-none">
          NEURAL UPLINK &{' '}
          <span 
            className="text-transparent bg-clip-text bg-gradient-to-r"
            style={{
              backgroundImage: `linear-gradient(to right, ${currentTheme.accent}, #ffffff)`,
              textShadow: `0 0 10px ${currentTheme.glowColor}`
            }}
          >
            DISPATCH BEACONS
          </span>
        </h1>
        <p className="mt-4 text-neutral-400 font-light text-sm sm:text-lg max-w-3xl leading-relaxed">
          Establish real-time corporate connection. Submit direct procurement requests, initialize data channel sync, or locate our heavily fortified physical installations across the world.
        </p>
      </motion.div>

      {/* 2. Interactive message portal */}
      <ContactForm currentTheme={currentTheme} />

      {/* 3. Fortified Physical Sites Section */}
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
              // SECURED PHYSICAL INFRASTRUCTURE
            </span>
            <h2 className="font-display font-medium text-2xl sm:text-4xl uppercase tracking-tight text-white">
              AETHERIS GLOBAL FORTRESS SILOS
            </h2>
            <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed max-w-3xl">
              Our research and final assembly silos are underground, vacuum-jacketed structural hubs designed for absolute zero electrostatic static interference. Connect directly via the nearest physical node block.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quantumBeacons.map((beacon, index) => (
              <motion.div 
                key={index} 
                {...scaleIn}
                className="p-8 rounded-3xl border border-white/5 bg-neutral-900/30 backdrop-blur-md text-left flex flex-col justify-between hover:border-white/10 transition-all group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center transition-all group-hover:border-white/15">
                    <MapPin className="w-6 h-6" style={{ color: currentTheme.accent }} />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 block mb-0.5">
                      {beacon.coords}
                    </span>
                    <h3 className="font-sans text-xl font-bold text-white uppercase tracking-tight">
                      {beacon.loc}
                    </h3>
                  </div>
                  <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                    {beacon.node}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between font-mono text-[9px]">
                  <span className="text-neutral-600">SENS_GRID DATA: ACTIVE</span>
                  <span className="font-bold flex items-center space-x-1" style={{ color: currentTheme.accent }}>
                    <Radio className="w-3.5 h-3.5 animate-pulse inline mr-1 text-emerald-400" />
                    <span>{beacon.status}</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
