/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CyberTheme } from '../types';
import { ShieldCheck, Database, HelpCircle, Eye, Cpu, Zap, Radio, Globe, Scan } from 'lucide-react';

interface FeaturesGridProps {
  currentTheme: CyberTheme;
}

export default function FeaturesGrid({ currentTheme }: FeaturesGridProps) {
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

  // Feature 1 states: Decryption simulator
  const [decrypting, setDecrypting] = useState(false);
  const [pincode, setPincode] = useState('X8-90_2AL');
  const [decryptProgress, setDecryptProgress] = useState(0);

  // Feature 2 states: Molecular level slider
  const [molecularScale, setMolecularScale] = useState(1.4);

  // Feature 3 states: Hologram stream rate
  const [holoFrames, setHoloFrames] = useState(120);

  // Feature 4 states: AQI density selector
  const [aqiSync, setAqiSync] = useState(100);

  // Simulator loop for cryptographic decryptor
  useEffect(() => {
    let interval: any;
    if (decrypting) {
      interval = setInterval(() => {
        setDecryptProgress((p) => {
          if (p >= 100) {
            setDecrypting(false);
            setPincode('KEY_UNLOCKED_0x4F8');
            return 100;
          }
          // Random hex string scrambling during decrypt simulation
          const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_#@*&%";
          let randCode = "";
          for (let i = 0; i < 9; i++) {
            randCode += chars[Math.floor(Math.random() * chars.length)];
          }
          setPincode(randCode);
          return p + 4;
        });
      }, 60);
    }
    return () => clearInterval(interval);
  }, [decrypting]);

  const runDecryptionTest = () => {
    setDecryptProgress(0);
    setDecrypting(true);
  };

  return (
    <section id="features" className="relative py-28 bg-black text-white overflow-hidden">
      {/* Background visual details */}
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full blur-[160px] opacity-10 pointer-events-none" style={{ backgroundColor: currentTheme.secondary }} />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 rounded-full blur-[160px] opacity-10 pointer-events-none" style={{ backgroundColor: currentTheme.accent }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <motion.div 
          {...fadeInUp}
          className="max-w-3xl mb-16"
        >
          <span
            className="font-mono text-xs uppercase tracking-[0.25em] font-semibold"
            style={{ color: currentTheme.accent }}
          >
            // COGNITIVE TASK MATRIX
          </span>
          <h2 className="mt-3 font-sans font-black text-3xl sm:text-5xl uppercase tracking-tight">
            DEEP SPACE & PLANETARY ASSISTANCE
          </h2>
          <p className="mt-4 text-neutral-400 font-sans text-sm sm:text-base leading-relaxed font-light">
            Designed for operations exceeding normal human endurance thresholds. The Aetheris platform integrates high-frequency sensor nets, real-time chemical synthesis, and secure tactical override pathways.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Synaptic Decryption (md:span-7) */}
          <motion.div 
            {...scaleIn}
            className="md:col-span-7 bg-neutral-900/40 border border-white/5 hover:border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md transition-all duration-300 relative group flex flex-col justify-between overflow-hidden"
          >
            {/* Hover shadow glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl" style={{ backgroundImage: `linear-gradient(to right, ${currentTheme.accent}, ${currentTheme.secondary})` }} />
            
            <div>
              <div className="flex items-center space-x-3 text-neutral-400 mb-6 font-mono text-[10px]">
                <ShieldCheck className="w-4 h-4" style={{ color: currentTheme.accent }} />
                <span className="uppercase tracking-widest font-black">TACTICAL DECISION INTAKE</span>
              </div>
              <h3 className="font-sans text-xl sm:text-2xl font-extrabold uppercase text-white tracking-tight">
                Synaptic Decryption Node
              </h3>
              <p className="mt-3 text-neutral-400 font-sans text-xs sm:text-sm font-light leading-relaxed max-w-lg">
                Fully functional quantum cybernetic decryption algorithms allow Aetheris to break through high-security subcircuits and identify security breach protocols in seconds.
              </p>
            </div>

            {/* Simulated Live Interface */}
            <div className="bg-black/60 rounded-2xl border border-white/5 p-5 mt-8 font-mono text-xs">
              <div className="flex justify-between items-center text-[10px] text-neutral-500 uppercase tracking-widest border-b border-white/5 pb-2.5 mb-3">
                <span className="flex items-center space-x-1.5 font-bold">
                  <span className={`inline-block w-1.5 h-1.5 rounded-full ${decrypting ? 'bg-amber-500 animate-pulse' : 'bg-green-500'}`} />
                  <span>ALGO_RUNNER // V3</span>
                </span>
                <span>CIPHER KEY // MD5_X</span>
              </div>
              
              <div className="flex justify-between items-center bg-neutral-950 px-4 py-3.5 rounded-xl border border-white/5 text-sm">
                <span className="text-neutral-500 font-bold select-none">[HASH]:</span>
                <span className="font-mono font-black text-white tracking-widest">{pincode}</span>
                <span className="text-neutral-500 font-bold select-none">{decryptProgress}%</span>
              </div>

              {/* Progress scroll bar */}
              <div className="h-1 bg-white/5 rounded-full overflow-hidden mt-3">
                <div
                  className="h-full rounded-full transition-all duration-200"
                  style={{
                    width: `${decryptProgress}%`,
                    backgroundColor: currentTheme.accent,
                    boxShadow: `0 0 8px ${currentTheme.glowColor}`,
                  }}
                />
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={runDecryptionTest}
                  disabled={decrypting}
                  className="px-4 py-1.5 text-[9px] font-bold tracking-widest uppercase rounded border transition-all duration-300 disabled:opacity-50"
                  style={{
                    borderColor: `${currentTheme.accent}50`,
                    color: 'white',
                    backgroundColor: decrypting ? `${currentTheme.accent}10` : 'transparent',
                  }}
                  data-cursor="hover"
                >
                  {decrypting ? 'DECRYPTING...' : 'INITIATE SECURITY TRACE'}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Subcellular Synthesis (md:span-5) */}
          <motion.div 
            {...scaleIn}
            className="md:col-span-5 bg-neutral-900/40 border border-white/5 hover:border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md transition-all duration-300 relative group flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl" style={{ backgroundImage: `linear-gradient(to right, ${currentTheme.secondary}, ${currentTheme.accent})` }} />
            
            <div>
              <div className="flex items-center space-x-3 text-neutral-400 mb-6 font-mono text-[10px]">
                <Database className="w-4 h-4" style={{ color: currentTheme.secondary }} />
                <span className="uppercase tracking-widest font-black">MATERIAL SYNTH DESIGN</span>
              </div>
              <h3 className="font-sans text-xl sm:text-2xl font-extrabold uppercase text-white tracking-tight">
                Subcellular Fabricator
              </h3>
              <p className="mt-3 text-neutral-400 font-sans text-xs sm:text-sm font-light leading-relaxed">
                A localized laser micro-cell array grown inside fingertips synthesize complex drugs, synthetic compounds, and critical polymer structures under 1 micro-millimeter precision.
              </p>
            </div>

            {/* Interactive Molecular Matrix Controls */}
            <div className="bg-black/60 rounded-2xl border border-white/5 p-5 mt-8 flex flex-col space-y-4">
              <div className="flex justify-between items-center text-[10px] font-mono text-neutral-500 uppercase tracking-widest border-b border-white/5 pb-2.5">
                <span className="font-bold">LATTICE RESOLUTION</span>
                <span className="text-white font-black font-sans">{molecularScale.toFixed(2)} Å</span>
              </div>

              <div className="flex flex-col space-y-2">
                <input
                  type="range"
                  min="0.4"
                  max="5.0"
                  step="0.1"
                  value={molecularScale}
                  onChange={(e) => setMolecularScale(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-neutral-800 rounded-full appearance-none cursor-pointer accent-white"
                  style={{
                    background: `linear-gradient(to right, ${currentTheme.accent}, ${currentTheme.secondary})`,
                  }}
                  data-cursor="hover"
                  title="Molecular lattice resolution slider"
                />
                <div className="flex justify-between text-[8px] font-mono text-neutral-500">
                  <span>Atomic scale list (0.4Å)</span>
                  <span>Macro density (5.0Å)</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono pt-1 text-neutral-300">
                <span>Material:</span>
                <span className="font-bold text-white uppercase bg-neutral-900 border border-white/5 px-2.5 py-0.5 rounded leading-none">
                  {molecularScale < 1.5 ? 'Graphene Matrix' : molecularScale < 3.2 ? 'Polymer Compound' : 'Ceramic Lattice'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Holographic Telepresence (md:span-5) */}
          <motion.div 
            {...scaleIn}
            className="md:col-span-5 bg-neutral-900/40 border border-white/5 hover:border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md transition-all duration-300 relative group flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl" style={{ backgroundImage: `linear-gradient(to right, ${currentTheme.accent}, ${currentTheme.secondary})` }} />
            
            <div>
              <div className="flex items-center space-x-3 text-neutral-400 mb-6 font-mono text-[10px]">
                <Scan className="w-4 h-4" style={{ color: currentTheme.accent }} />
                <span className="uppercase tracking-widest font-black">OPTICAL RAY TELEPATHY</span>
              </div>
              <h3 className="font-sans text-xl sm:text-2xl font-extrabold uppercase text-white tracking-tight">
                Hologram Telepresence
              </h3>
              <p className="mt-3 text-neutral-400 font-sans text-xs sm:text-sm font-light leading-relaxed">
                Project vivid, low-latency 3D architectural blueprint arrays and multi-spectrum scanning feeds straight to companion fields, replicating natural human focal depth.
              </p>
            </div>

            {/* Hologram Controls */}
            <div className="bg-black/60 rounded-2xl border border-white/5 p-5 mt-8 flex flex-col space-y-4">
              <div className="flex justify-between items-center text-[10px] font-mono text-neutral-500 uppercase tracking-widest border-b border-white/5 pb-2.5">
                <span className="font-bold">PROJECTION RATE</span>
                <span className="text-white font-black font-sans">{holoFrames} FPS</span>
              </div>

              <div className="flex flex-col space-y-2">
                <input
                  type="range"
                  min="30"
                  max="240"
                  step="10"
                  value={holoFrames}
                  onChange={(e) => setHoloFrames(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-neutral-800 rounded-full appearance-none cursor-pointer accent-white"
                  style={{
                    background: `linear-gradient(to right, ${currentTheme.secondary}, ${currentTheme.accent})`,
                  }}
                  data-cursor="hover"
                  title="Hologram projection frequency slider"
                />
                <div className="flex justify-between text-[8px] font-mono text-neutral-500">
                  <span>Legacy: 30 FPS</span>
                  <span>Hyperfluid: 240 FPS</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-neutral-400 pt-1">
                <div className="bg-neutral-900 border border-white/5 p-2 rounded text-left">
                  <span>COGN_DELAY:</span>
                  <span className="block text-white font-bold">{Math.max(1, Math.round(480 / holoFrames))}ms</span>
                </div>
                <div className="bg-neutral-900 border border-white/5 p-2 rounded text-left">
                  <span>POWER_INLET:</span>
                  <span className="block text-white font-bold">{Math.round(holoFrames * 1.5)}W</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Atmospheric Re-shaping (md:span-7) */}
          <motion.div 
            {...scaleIn}
            className="md:col-span-7 bg-neutral-900/40 border border-white/5 hover:border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md transition-all duration-300 relative group flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl" style={{ backgroundImage: `linear-gradient(to right, ${currentTheme.secondary}, ${currentTheme.accent})` }} />
            
            <div>
              <div className="flex items-center space-x-3 text-neutral-400 mb-6 font-mono text-[10px]">
                <Globe className="w-4 h-4" style={{ color: currentTheme.secondary }} />
                <span className="uppercase tracking-widest font-black">HAZARDOUS BIO ENCORE</span>
              </div>
              <h3 className="font-sans text-xl sm:text-2xl font-extrabold uppercase text-white tracking-tight">
                Atmospheric Reshaping Catalyst
              </h3>
              <p className="mt-3 text-neutral-400 font-sans text-xs sm:text-sm font-light leading-relaxed max-w-lg">
                Utilizing high-voltage catalyst injectors, Aetheris units can neutralize carbon, extract hydrogen, and filter high-toxin nuclear particulates from surrounding atmospheric modules.
              </p>
            </div>

            {/* Dynamic AQI Selector Interface */}
            <div className="bg-black/60 rounded-2xl border border-white/5 p-5 mt-8 font-mono text-xs">
              <div className="flex justify-between items-center text-[10px] text-neutral-500 uppercase tracking-widest border-b border-white/5 pb-2.5 mb-3.5">
                <span className="font-bold flex items-center space-x-1.5">
                  <Scan className="w-3.5 h-3.5 mr-0.5 inline" /> CATALYST LEVEL SENSOR
                </span>
                <span>SEC_VAL: 104_AQI</span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[100, 50, 10].map((level) => {
                  const isLevelSelected = aqiSync === level;
                  return (
                    <button
                      key={level}
                      onClick={() => setAqiSync(level)}
                      className={`py-3.5 rounded-xl border font-mono font-bold text-center transition-all duration-300`}
                      style={{
                        backgroundColor: isLevelSelected ? `${currentTheme.accent}15` : 'bg-neutral-900',
                        borderColor: isLevelSelected ? currentTheme.accent : 'rgba(255, 255, 255, 0.05)',
                        color: isLevelSelected ? 'white' : 'rgba(255, 255, 255, 0.4)',
                        boxShadow: isLevelSelected ? `0 0 10px ${currentTheme.accent}20` : 'none',
                      }}
                      data-cursor="hover"
                    >
                      <div className="text-[9px] text-neutral-500 uppercase font-bold mb-1">
                        {level === 100 ? 'Peak filtering' : level === 50 ? 'Medium eco' : 'Idle low'}
                      </div>
                      <div className="text-sm font-sans tracking-tight">
                        {level === 100 ? '99.9%' : level === 50 ? '48.2%' : '8.1%'}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 flex justify-between items-center text-neutral-400 text-[10px] pt-1">
                <span>Active particulate scavenger core:</span>
                <span className="font-extrabold uppercase" style={{ color: aqiSync === 100 ? '#39ff14' : aqiSync === 50 ? '#ffb900' : '#ff003c' }}>
                  {aqiSync === 100 ? 'EXCELLENT' : aqiSync === 50 ? 'MODERATE WARNING' : 'CRITICAL BYPASS'}
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
