/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { CyberTheme } from '../../types';
import PricingCalculator from '../PricingCalculator';
import { ShieldAlert, Ship, Scale, FileText, CheckCircle } from 'lucide-react';

interface PricingPageProps {
  currentTheme: CyberTheme;
}

export default function PricingPage({ currentTheme }: PricingPageProps) {
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

  const customFAQS = [
    {
      q: 'How does heavy orbital drop delivery work?',
      a: 'Once your Aetheris lease invoice is cleared, our logistics fleet schedules drop-cargo delivery. Units are securely enclosed within hermetic temperature chambers and planetary drop capsules, arriving directly at your secure coordinates inside 48 hours globally.',
    },
    {
      q: 'Is local sovereign override allowed?',
      a: 'No. To ensure unified robot compliance safety under Unified Cognitive Standards (V8.2), any attempts to hard-compromise or forcefully crack the physical logic gates of the central CPU container trigger an automatic wireless override lockout, routing the robot back to Silo-7 securely.',
    },
    {
      q: 'Do you offer custom multi-unit fleet coverage?',
      a: 'Yes. Enterprise leasing deals can scale up to 100 units synchronously. All custom units are pre-connected to a secure local private server module managed via Private Fiber lattices.',
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
          // CONTRACT LEASING CALCULATOR
        </span>
        <h1 className="mt-2 font-display font-medium text-4xl sm:text-7xl uppercase tracking-tight text-white leading-none">
          TIER LEASE CONFIGS &{' '}
          <span 
            className="text-transparent bg-clip-text bg-gradient-to-r"
            style={{
              backgroundImage: `linear-gradient(to right, ${currentTheme.accent}, #ffffff)`,
              textShadow: `0 0 10px ${currentTheme.glowColor}`
            }}
          >
            CUSTOM EQUATION RATES
          </span>
        </h1>
        <p className="mt-4 text-neutral-400 font-light text-sm sm:text-lg max-w-3xl leading-relaxed">
          Configure physical qubit capacities, activate specialized sensor grids, and calculate detailed commercial billing indices instantly using our mechatronic calculator sliding tool.
        </p>
      </motion.div>

      {/* 2. Interactive Calculator module */}
      <PricingCalculator currentTheme={currentTheme} />

      {/* 3. Deep Enterprise logistics fleet deployment specs */}
      <section className="relative py-20 bg-neutral-950 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.015] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: enterprise cargo text (lg:span-6) */}
            <motion.div 
              {...scaleIn}
              className="lg:col-span-6 text-left space-y-6"
            >
              <span 
                className="font-mono text-xs uppercase tracking-[0.2em] font-semibold"
                style={{ color: currentTheme.accent }}
              >
                // GLOBAL SUPPLY INFRASTRUCTURE
              </span>
              <h2 className="font-display font-medium text-2xl sm:text-4xl uppercase tracking-tight text-white leading-none">
                ENTERPRISE LOGISTICS & ORBITAL DISPATCH
              </h2>
              <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed">
                Leasing a fleet of conscious Aetheris Model 4 structures requires highly specialized deployment infrastructure. Every physical dispatch contract guarantees continuous hardware monitoring, real-time wireless synapse status sync, and specialized carbon transport enclosing cages.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-4 rounded-xl border border-white/5 bg-neutral-900/20 text-left space-y-2">
                  <div className="flex items-center space-x-2 text-white font-bold text-xs uppercase">
                    <Ship className="w-4 h-4 text-neutral-400" style={{ color: currentTheme.accent }} />
                    <span>Heavy Drop-Cargo</span>
                  </div>
                  <p className="text-neutral-500 text-xs font-light">
                    Secured orbital shipping containers reaching any global coord array in 48H.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-white/5 bg-neutral-900/20 text-left space-y-2">
                  <div className="flex items-center space-x-2 text-white font-bold text-xs uppercase">
                    <Scale className="w-4 h-4 text-neutral-400" style={{ color: currentTheme.accent }} />
                    <span>Unified Indemnity</span>
                  </div>
                  <p className="text-neutral-500 text-xs font-light">
                    Fleet contracts include unified coverage against accidental physical damage up to $10M.
                  </p>
                </div>

              </div>
            </motion.div>

            {/* Right: leasing FAQ accordion blocks (lg:span-6) */}
            <motion.div 
              {...scaleIn}
              className="lg:col-span-6 space-y-4"
            >
              <h3 className="font-mono text-[10px] uppercase font-bold text-neutral-400 tracking-wider mb-4 border-b border-white/5 pb-2 text-left">
                Commercial Leasing FAQS
              </h3>
              
              {customFAQS.map((faq, index) => (
                <div 
                  key={index}
                  className="p-5 rounded-2xl border border-white/5 bg-neutral-900/40 text-left hover:border-white/10 transition-all space-y-2"
                >
                  <h4 className="font-sans font-bold text-sm uppercase text-white flex items-start space-x-2">
                    <span style={{ color: currentTheme.accent }}>[Q]</span>
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed pl-5">
                    {faq.a}
                  </p>
                </div>
              ))}
            </motion.div>

          </div>

        </div>
      </section>

    </div>
  );
}
