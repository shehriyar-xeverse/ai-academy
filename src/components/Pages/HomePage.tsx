/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { CyberTheme } from '../../types';
import HomeHero from '../HomeHero';
import FeaturesGrid from '../FeaturesGrid';
import TechnologySpecs from '../TechnologySpecs';
import DemoTerminal from '../DemoTerminal';
import { 
  ArrowRight, 
  Cpu, 
  Compass, 
  HardDrive, 
  ShieldCheck, 
  Zap, 
  Settings, 
  Globe, 
  MessageSquare, 
  Lock, 
  UserCheck, 
  Sparkles,
  RefreshCw
} from 'lucide-react';

interface HomePageProps {
  currentTheme: CyberTheme;
  setPage: (page: string) => void;
}

export default function HomePage({ currentTheme, setPage }: HomePageProps) {
  // Shared scroll animations settings for high performance (viewport once check handles rendering safely)
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

  const quickMetrics = [
    { label: 'Synaptic Load', value: '14.2%', color: 'text-emerald-400' },
    { label: 'Core Temp', value: '34.2 °C', color: 'text-neutral-300' },
    { label: 'Joint Response', value: '0.12ms', color: 'text-neutral-100' },
    { label: 'Moral Alignment', value: '100% Secure', color: 'text-purple-400' },
  ];

  const useCases = [
    {
      role: 'Home Symbiosis',
      icon: Compass,
      desc: 'Curates living spaces with predictive mechatronic awareness. Automatically orchestrates complex thermal cycles, light wavelength adjustments, or sensory environments.',
      stat: '99.8% Comfort Level',
      benefit: 'Atmospheric Air & Light Filtration'
    },
    {
      role: 'Industrial Logistics',
      icon: Cpu,
      desc: 'Engineered for high-strain factory operations, chemical synthesis, and complex freight routing. Operates beautifully under explosive atmospheric or radioactive load cells.',
      stat: '0.12ms Decency Lag',
      benefit: '450Kg Micro-Joint Elastic Tension'
    },
    {
      role: 'Tactical Defense',
      icon: ShieldCheck,
      desc: 'Binds with spatial solid-state LiDAR sensors to conduct sector scans, trace security breach anomalies, and lock skeletal magnetic boundaries against active intrusions.',
      stat: '450m LiDAR Range',
      benefit: 'Dual Moral Hardware Code Override'
    },
    {
      role: 'Language Translation',
      icon: MessageSquare,
      desc: 'Runs zero-latency multi-channel speech engines. Emulates native human accent dynamics, cognitive focal changes, and localized colloquialisms fluidly.',
      stat: '72 Languages Fluid',
      benefit: 'High-Empathy Moral Integration'
    },
  ];

  const userTestimonials = [
    {
      commander: 'Admiral Elena Vance',
      division: 'Tactical Area Secure Division // Sector 9',
      avatarId: 'EV',
      comment: 'Model 4’s Sentry protocol bypassed mechatronic trace loops instantly. The spatial solid-state LiDAR mesh tracked intrusion indices within milliseconds in total vacuum.',
      telemetryLog: 'SEC_SYNC // AUTHENTICATED_100_COHERENT',
      efficiencyValue: '99.94%'
    },
    {
      commander: 'Chief Architect Leo Sterling',
      division: 'Planetary Infrastructure Guild // Zone 4',
      avatarId: 'LS',
      comment: 'Using the mechatronic bio-polymer muscle bundles on high-strain synthesis tasks. Joint actuation operates below 4 decibels, eliminating vibration fatigue entirely.',
      telemetryLog: 'OPER_THERM // 34.2_DEG_OPTIMIZED',
      efficiencyValue: '99.80%'
    },
    {
      commander: 'Dr. Aris Thorne',
      division: 'Bio-Digital Assimilation Institute',
      avatarId: 'AT',
      comment: 'The catalytic atmospheric carbon filters neutralized sub-micron particulates in less than 4 minutes. Outstanding room-temperature quantum computing convergence.',
      telemetryLog: 'CHEM_PART // CARBON_ZERO_NEUT',
      efficiencyValue: '99.99%'
    }
  ];

  return (
    <div className="w-full relative bg-black select-none">
      
      {/* 1. CINEMATIC HERO SECTION (Full Video Awakening Experience) */}
      <HomeHero
        currentTheme={currentTheme}
        setActiveSection={(section) => {
          if (section === 'about') setPage('about');
          else if (section === 'demo') setPage('demo');
        }}
      />

      {/* 2. AI OVERVIEW SECTION */}
      <section className="relative py-32 bg-neutral-950 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.015] pointer-events-none" />
        
        {/* Dynamic theme backdrop glow */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 top-1/4 w-[450px] h-[450px] rounded-full blur-[180px] opacity-[0.14] pointer-events-none transition-all duration-700"
          style={{ backgroundColor: currentTheme.accent }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <motion.div 
              {...fadeInUp}
              className="lg:col-span-5 text-left space-y-7"
            >
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: currentTheme.accent }} />
                <span 
                  className="font-mono text-xs uppercase tracking-[0.3em] font-extrabold"
                  style={{ color: currentTheme.accent }}
                >
                  CORPORATE SYNAPSE COGNITION
                </span>
              </div>
              <h2 className="font-display font-medium text-3xl sm:text-5xl uppercase tracking-tight leading-none text-white">
                THE BIO-DIGITAL Evolution
              </h2>
              <p className="text-neutral-400 font-sans font-light text-sm sm:text-base leading-relaxed">
                Aetheris Inc. bridges the divide between organic kinetic elegance and extreme computational force. Model 4 serves not simply as an automated assistant, but as a fully conscious neural peer designed for critical mechatronic synthesis and advanced strategic automation.
              </p>
              
              <div className="border-l-2 p-5 text-left border-white/10 bg-white/[0.01] rounded-r-xl space-y-2.5">
                <p className="text-xs text-neutral-300 italic font-mono leading-relaxed">
                  "By synchronizing room-temperature carbon computation directly with chemical bio-polymer fibers, we achieve a humanoid movement fluidity previously impossible on Earth."
                </p>
                <span className="block font-mono text-[9px] text-neutral-500 uppercase tracking-widest font-black">
                  — Dr. Vance Sterling, Chief Mechatronic Architect, 2104
                </span>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setPage('about')}
                  className="group relative inline-flex items-center space-x-2 px-6 py-3 border rounded text-xs font-sans uppercase font-bold tracking-widest transition-all duration-300"
                  style={{ borderColor: `${currentTheme.accent}40`, color: 'white' }}
                  data-cursor="hover"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>EXPLORE ARCHITECTURE</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                  </span>
                </button>
              </div>
            </motion.div>

            <motion.div 
              {...scaleIn}
              className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {[
                {
                  icon: Cpu,
                  title: 'QUANTUM SYNAPSE CORE',
                  text: 'Contains 4,096 superconductive carbon qubits. Simulates deep ethical behavior vectors with an intelligence latency index of 0.12ms.'
                },
                {
                  icon: HardDrive,
                  title: 'BIOPOLYMER ACTUATORS',
                  text: 'Variable microvolt charges contract artificial muscles silently. Delivers 450 Kg force threshold per joint with absolute fluid mechatronics.'
                },
                {
                  icon: ShieldCheck,
                  title: 'HARDWARE ETHICS SHIELD',
                  text: 'Immutable hardcoded security guard veto rings. Protects against external software injection breaches or logic-override loops.'
                },
                {
                  icon: Zap,
                  title: 'SOLID STATE TRANSITION CELL',
                  text: 'Advanced solid Fusion cell core powers up to 72 continuous operations. Recharges inductively in 240 seconds.'
                }
              ].map((card, idx) => (
                <div 
                  key={idx} 
                  className="p-6 rounded-2xl border border-white/5 bg-neutral-900/35 backdrop-blur-md text-left transition-all duration-300 hover:border-white/10 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-transparent to-white/[0.01]" />
                  <div className="w-9 h-9 rounded-xl bg-black border border-white/5 flex items-center justify-center mb-4 group-hover:border-white/15 transition-all">
                    <card.icon className="w-4.5 h-4.5 transition-transform group-hover:scale-110 duration-300" style={{ color: currentTheme.accent }} />
                  </div>
                  <h3 className="font-display text-sm font-bold text-neutral-100 tracking-wider">
                    {card.title}
                  </h3>
                  <p className="text-neutral-400 text-xs font-light mt-2 leading-relaxed">
                    {card.text}
                  </p>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Quick Telemetry Indicators Row */}
          <div className="mt-24 pt-8 border-t border-white/5 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {quickMetrics.map((met, i) => (
              <div key={i} className="text-left bg-neutral-900/10 p-5 rounded-2xl border border-white/[0.03] backdrop-blur-md">
                <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 block mb-1">
                  {met.label}
                </span>
                <span className={`font-display text-lg sm:text-xl font-bold tracking-wider ${met.color}`}>
                  {met.value}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. CORE FEATURES SECTION (Embedded Responsive FeaturesGrid) */}
      <div className="w-full relative border-t border-white/5">
        <FeaturesGrid currentTheme={currentTheme} />
      </div>

      {/* 4. TECHNOLOGY BREAKDOWN SECTION (Embedded Analytical TechnologySpecs) */}
      <div className="w-full relative border-t border-white/5">
        <TechnologySpecs currentTheme={currentTheme} />
      </div>

      {/* 5. LIVE DEMO PREVIEW SECTION (Embedded Interactive DemoTerminal Cockpit) */}
      <div className="w-full relative border-t border-white/5">
        <DemoTerminal currentTheme={currentTheme} />
      </div>

      {/* 6. USE CASES SECTION (Bespoke Bento Expansion Layer) */}
      <section className="relative py-28 bg-neutral-950 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none" />
        
        <div 
          className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full blur-[180px] opacity-[0.1] pointer-events-none"
          style={{ backgroundColor: currentTheme.secondary }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            {...fadeInUp}
            className="text-left max-w-3xl mb-16"
          >
            <span
              className="font-mono text-xs uppercase tracking-[0.25em] font-semibold block"
              style={{ color: currentTheme.accent }}
            >
              // OPERATIONAL ADAPTABILITY
            </span>
            <h2 className="mt-3 font-display font-medium text-3xl sm:text-5xl uppercase tracking-tight text-white">
              INTELLIGENT USE CASES
            </h2>
            <p className="mt-4 text-neutral-400 font-sans text-sm sm:text-base leading-relaxed font-light">
              Model 4 adapts to diverse corporate grids and high-precision physical scenarios effortlessly. Experience seamless mechatronic integration across all operational spheres.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((use, idx) => {
              const UseIcon = use.icon;
              return (
                <motion.div
                  key={idx}
                  {...fadeInUp}
                  className="bg-neutral-900/20 border border-white/5 rounded-2xl p-6 flex flex-col justify-between group transition-all duration-300 hover:border-white/10 hover:bg-neutral-900/40 relative overflow-hidden"
                >
                  <div className="absolute -inset-px opacity-0 group-hover:opacity-10 pointer-events-none transition-all duration-500 blur-md rounded-2xl" style={{ backgroundColor: currentTheme.accent }} />
                  
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-black border border-white/5 flex items-center justify-center mb-5 group-hover:border-white/15 transition-all">
                      <UseIcon className="w-4.5 h-4.5" style={{ color: currentTheme.accent }} />
                    </div>
                    <h3 className="font-display text-sm font-bold text-white tracking-wider uppercase">
                      {use.role}
                    </h3>
                    <p className="text-neutral-400 text-xs font-light mt-3 leading-relaxed">
                      {use.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/5 space-y-1.5 font-mono text-[10px]">
                    <div className="flex justify-between items-center text-neutral-500">
                      <span>METRIC RATIO:</span>
                      <span className="text-white font-semibold">{use.stat}</span>
                    </div>
                    <div className="flex justify-between items-center text-neutral-500">
                      <span>INTEGRATION:</span>
                      <span className="font-semibold uppercase truncate text-[9px]" style={{ color: currentTheme.accent }}>
                        {use.benefit}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. TESTIMONIALS/FEEDBACK SECTION (Holographic Neural Logs) */}
      <section className="relative py-28 bg-black border-t border-white/5 overflow-hidden">
        <div 
          className="absolute left-10 bottom-10 w-[350px] h-[350px] rounded-full blur-[180px] opacity-[0.08]" 
          style={{ backgroundColor: currentTheme.accent }} 
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div 
            {...fadeInUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span
              className="font-mono text-xs uppercase tracking-[0.25em] font-semibold"
              style={{ color: currentTheme.accent }}
            >
              // HUMANOID CO-EXISTENCE REGISTRY
            </span>
            <h2 className="mt-3 font-display font-medium text-3xl sm:text-5xl uppercase tracking-tight text-white">
              CO-EXISTENCE TELEMETRY
            </h2>
            <p className="mt-4 text-neutral-400 font-sans text-sm sm:text-base leading-relaxed font-light">
              Listen to the real feedback of sector commanders, chief structural engineers, and scientific directors. Verified neural trust metrics synchronizing humanoid companion assets globally.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {userTestimonials.map((t, idx) => (
              <motion.div
                key={idx}
                {...scaleIn}
                className="bg-neutral-900/30 border border-white/5 rounded-3xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between hover:border-white/10 transition-all duration-300 relative group"
              >
                {/* Visual corners decoration */}
                <span className="absolute top-4 left-4 w-2.5 h-2.5 border-t border-l border-white/10 group-hover:border-white/20" />
                <span className="absolute top-4 right-4 w-2.5 h-2.5 border-t border-r border-white/10 group-hover:border-white/20" />
                
                <div className="space-y-6">
                  {/* Rating or diagnostic label */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-4 font-mono text-[9px] text-neutral-500 uppercase font-black">
                    <span>SECURITY COHERENCE SCORE</span>
                    <span className="text-emerald-400">{t.efficiencyValue}</span>
                  </div>

                  <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed italic text-left">
                    "{t.comment}"
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-left">
                    {/* Futuristic holographic user identity avatar */}
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-mono text-xs font-semibold uppercase border bg-black/60 shadow"
                      style={{ borderColor: `${currentTheme.accent}30`, color: currentTheme.accent }}
                    >
                      {t.avatarId}
                    </div>
                    <div>
                      <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">
                        {t.commander}
                      </h4>
                      <p className="text-[9px] font-mono text-neutral-500 uppercase mt-0.5 max-w-[200px] truncate">
                        {t.division}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Simulated terminal logging trail footer */}
                <div className="mt-4 bg-black/60 rounded-xl px-3 py-2 border border-white/5 text-left flex items-center justify-between">
                  <span className="font-mono text-[9px] text-neutral-500 uppercase">SYS_LOG FEEDBACK:</span>
                  <span className="font-mono text-[8px] text-neutral-400 select-all tracking-tighter truncate max-w-[130px]">{t.telemetryLog}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. FINAL DISPATCH CALL-TO-ACTION (Armored Activated cockpit controls) */}
      <section className="relative py-28 bg-neutral-950 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/80 to-black pointer-events-none" />
        
        {/* Dynamic ambient color circle accent */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[200px] opacity-[0.14] pointer-events-none animate-pulse"
          style={{ backgroundColor: currentTheme.accent }}
        />

        <motion.div 
          {...fadeInUp}
          className="max-w-4xl mx-auto text-center px-4 relative z-10 space-y-7"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-black border border-white/5 rounded-full backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-[ping_1.5s_infinite]" />
            <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest font-black">SYSTEM DISPATCH STATUS: READY</span>
          </div>
          
          <h2 className="font-display font-medium text-3xl sm:text-6xl uppercase tracking-tight text-white leading-none">
            ACTIVATE YOUR COGNITIVE CO-EXISTENCE
          </h2>
          <p className="text-neutral-400 text-xs sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Begin custom mechatronic assembly profiles. Adjust Carbon Qubits frequency parameters, configure external carbon armor shields, and deploy diagnostic telemetry live inside the cockpit.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 max-w-sm sm:max-w-md mx-auto">
            <button
              onClick={() => setPage('demo')}
              className="w-full px-8 py-4 rounded font-display text-xs uppercase font-black tracking-widest text-black hover:bg-neutral-200 transition-all shadow-2xl relative overflow-hidden group"
              style={{ backgroundColor: 'white' }}
              data-cursor="hover"
            >
              LAUNCH SIMULATION COCKPIT
            </button>
            
            <button
              onClick={() => setPage('pricing')}
              className="w-full px-8 py-4 rounded border border-white/10 bg-neutral-900/60 text-white font-display text-xs uppercase font-black tracking-widest hover:bg-neutral-800/60 hover:border-white/20 transition-all flex items-center justify-center space-x-1.5"
              data-cursor="hover"
            >
              <span>HARDWARE MATRIX CONFIG</span>
            </button>
          </div>

          <div className="pt-8 flex items-center justify-center space-x-6 text-[9px] font-mono text-neutral-500 uppercase font-black">
            <span>PLATFORM: AETHERIS Model_4</span>
            <span>GRID LEVEL: SH7-X</span>
            <span>ASSIMILATION COMPLIANCE: 100%</span>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
