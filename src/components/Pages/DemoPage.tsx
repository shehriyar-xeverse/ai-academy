/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CyberTheme } from '../../types';
import DemoTerminal from '../DemoTerminal';
import { ShieldCheck, Play, Radio, Sparkles, Terminal } from 'lucide-react';

interface DemoPageProps {
  currentTheme: CyberTheme;
}

export default function DemoPage({ currentTheme }: DemoPageProps) {
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

  const [suiteLogs, setSuiteLogs] = useState<string[]>([
    'SYSTEM READY: SYNAPSE TESTING COCKPIT INIT',
    'Click "EXECUTE TEST CYCLE" below to cycle quantum telemetry routines.',
  ]);
  const [activeTest, setActiveTest] = useState<string | null>(null);

  const triggerTestRoutine = (testName: string) => {
    setActiveTest(testName);
    const initialLog = `>> INITIATING [${testName.toUpperCase()}] ROUTINE...`;
    setSuiteLogs((prev) => [initialLog, ...prev]);

    setTimeout(() => {
      let resultLog = '';
      if (testName === 'ping') {
        resultLog = `>> [PING DETECTED] COGNITIVE LATENCY: 0.12ms | SIGNAL LOSS: 0.00% [OPTIMAL]`;
      } else if (testName === 'integrity') {
        resultLog = `>> [INTEGRITY CHECK] JOINT FLEX COEFFICIENT: 99.8% | HULL DEFLECTION: 94.2% [SECURE]`;
      } else if (testName === 'purge') {
        resultLog = `>> [PURGE CORE] CACHE CLEARED: 1.2 Terabytes of synaptic metadata recycled. NEW CACHE CAPACITY: 100%`;
      }
      setSuiteLogs((prev) => [resultLog, `>> CORE REGISTER SUCCESSFUL`, ...prev]);
      setActiveTest(null);
    }, 1200);
  };

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
          // LIVE INTERACTIVE FLIGHT DECK
        </span>
        <h1 className="mt-2 font-display font-medium text-4xl sm:text-7xl uppercase tracking-tight text-white leading-none">
          DIAGNOSTIC SIMULATOR COCKPIT &{' '}
          <span 
            className="text-transparent bg-clip-text bg-gradient-to-r"
            style={{
              backgroundImage: `linear-gradient(to right, ${currentTheme.accent}, #ffffff)`,
              textShadow: `0 0 10px ${currentTheme.glowColor}`
            }}
          >
            ACTIVE TEST FLIGHT
          </span>
        </h1>
        <p className="mt-4 text-neutral-400 font-light text-sm sm:text-lg max-w-3xl leading-relaxed">
          Take control of the Aetheris cockpit interface. Cycle behavioral protocol matrices, monitor real-time sensor fluctuation metrics, or launch custom stress routines below.
        </p>
      </motion.div>

      {/* 2. Interactive cockpit terminal */}
      <DemoTerminal currentTheme={currentTheme} />

      {/* 3. Deep Stress Test Simulator Panel */}
      <section className="relative py-20 bg-neutral-950 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.015] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left controller (lg:span-5) */}
            <motion.div 
              {...scaleIn}
              className="lg:col-span-5 text-left space-y-6"
            >
              <h3 
                className="font-mono text-xs uppercase tracking-[0.2em] font-semibold"
                style={{ color: currentTheme.accent }}
              >
                // INTEGRITY TESTING COCKPIT
              </h3>
              <h2 className="font-display font-medium text-2xl sm:text-4xl uppercase tracking-tight text-white leading-none">
                SYNAPTIC ACTIVE STRESS SUITE
              </h2>
              <p className="text-neutral-400 font-light text-sm leading-relaxed">
                Test the physical and digital boundaries of Model 4. By dispatching diagnostic RF routines, you can observe latency responses and telemetry outcomes simulated instantly across real-time neural clusters.
              </p>

              <div className="space-y-3.5 pt-2">
                
                {/* Routine 1 */}
                <button
                  disabled={activeTest !== null}
                  onClick={() => triggerTestRoutine('ping')}
                  className="w-full flex items-center justify-between p-4 rounded-2xl border border-white/5 bg-neutral-900/40 backdrop-blur-md text-left hover:border-white/10 transition-all font-sans font-semibold text-xs disabled:opacity-50"
                  data-cursor="hover"
                >
                  <div className="flex items-center space-x-3">
                    <Radio className="w-5 h-5 text-neutral-400" style={{ color: activeTest === 'ping' ? currentTheme.accent : undefined }} />
                    <div>
                      <h4 className="text-white uppercase font-bold tracking-tight">CEREBRAL NETWORK PING ROUTINE</h4>
                      <p className="text-neutral-500 font-normal font-mono text-[9px] mt-0.5">ESTIMATE LATENCY RESPONSES</p>
                    </div>
                  </div>
                  <Play className="w-4 h-4 text-neutral-400" />
                </button>

                {/* Routine 2 */}
                <button
                  disabled={activeTest !== null}
                  onClick={() => triggerTestRoutine('integrity')}
                  className="w-full flex items-center justify-between p-4 rounded-2xl border border-white/5 bg-neutral-900/40 backdrop-blur-md text-left hover:border-white/10 transition-all font-sans font-semibold text-xs disabled:opacity-50"
                  data-cursor="hover"
                >
                  <div className="flex items-center space-x-3">
                    <ShieldCheck className="w-5 h-5 text-neutral-400" style={{ color: activeTest === 'integrity' ? currentTheme.accent : undefined }} />
                    <div>
                      <h4 className="text-white uppercase font-bold tracking-tight">PHYSICAL INTEGRITY CALIBRATION</h4>
                      <p className="text-neutral-500 font-normal font-mono text-[9px] mt-0.5">CHECK HIGH-SPEED JOINT COEFFICIENT</p>
                    </div>
                  </div>
                  <Play className="w-4 h-4 text-neutral-400" />
                </button>

                {/* Routine 3 */}
                <button
                  disabled={activeTest !== null}
                  onClick={() => triggerTestRoutine('purge')}
                  className="w-full flex items-center justify-between p-4 rounded-2xl border border-white/5 bg-neutral-900/40 backdrop-blur-md text-left hover:border-white/10 transition-all font-sans font-semibold text-xs disabled:opacity-50"
                  data-cursor="hover"
                >
                  <div className="flex items-center space-x-3">
                    <Sparkles className="w-5 h-5 text-neutral-400" style={{ color: activeTest === 'purge' ? currentTheme.accent : undefined }} />
                    <div>
                      <h4 className="text-white uppercase font-bold tracking-tight">SYNAPSE MEMORY RECLAIM SWEEP</h4>
                      <p className="text-neutral-500 font-normal font-mono text-[9px] mt-0.5">CLEAR FLOATING SYSTEM CACHE DATA</p>
                    </div>
                  </div>
                  <Play className="w-4 h-4 text-neutral-400" />
                </button>

              </div>
            </motion.div>

            {/* Right log viewer (lg:span-7) */}
            <motion.div 
              {...scaleIn}
              className="lg:col-span-7 bg-black hover:border-white/10 transition-all border border-white/5 rounded-3xl p-6 sm:p-8 relative overflow-hidden font-mono text-xs min-h-[350px] flex flex-col justify-between"
            >
              
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4 text-neutral-500 text-[10px] tracking-wider uppercase">
                <span className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4" style={{ color: currentTheme.accent }} />
                  <span>STRESS COCKPIT TELEMETRY OUT</span>
                </span>
                <span>SECURE DISPATCH TERMINAL</span>
              </div>

              {/* Logs area */}
              <div className="flex-1 overflow-y-auto space-y-2.5 max-h-[250px] pr-2 text-left">
                {suiteLogs.map((log, index) => (
                  <div key={index} className="space-y-1">
                    <div className="text-neutral-400 flex items-start space-x-2">
                      <span className="font-bold shrink-0" style={{ color: currentTheme.accent }}>{'[>]'}</span>
                      <span className="leading-relaxed">{log}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/5 mt-4 flex items-center justify-between text-neutral-600 text-[9px] tracking-wider uppercase">
                <span>BUFFER STATUS: 100% SYNCD</span>
                <span>GRID ROUTE // SIM_FLIGHT</span>
              </div>

            </motion.div>

          </div>

        </div>
      </section>

    </div>
  );
}
