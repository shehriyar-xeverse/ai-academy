/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CyberTheme } from '../types';
import { Code, Terminal, Activity, Table, Settings, RefreshCw, Cpu, CheckCircle } from 'lucide-react';

interface TechnologySpecsProps {
  currentTheme: CyberTheme;
}

type TabType = 'code' | 'schematics' | 'telemetry';

export default function TechnologySpecs({ currentTheme }: TechnologySpecsProps) {
  const [activeTab, setActiveTab] = useState<TabType>('code');

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

  // Code compiler mock states
  const [compiling, setCompiling] = useState(false);
  const [compileLogs, setCompileLogs] = useState<string[]>([]);
  const [compilationSuccess, setCompilationSuccess] = useState(true);

  // Telemetry real-time animated wave wave modifier
  const [waveSpeed, setWaveSpeed] = useState(1);
  const [waveAmpli, setWaveAmpli] = useState(1);
  const [timeOffset, setTimeOffset] = useState(0);

  // Animation ticks for telemetry wave
  useEffect(() => {
    let frameId: number;
    const ticks = () => {
      setTimeOffset((prev) => (prev + 0.05 * waveSpeed) % (Math.PI * 20));
      frameId = requestAnimationFrame(ticks);
    };
    frameId = requestAnimationFrame(ticks);
    return () => cancelAnimationFrame(frameId);
  }, [waveSpeed]);

  const runCodeCompilation = () => {
    setCompiling(true);
    setCompilationSuccess(false);
    setCompileLogs(['Initializing quantum compiler link...', 'Binding 4,096 Qubit neural blocks...']);

    const steps = [
      'Validating ethical-moral heuristic subroutines...',
      'Mapping myofibril motor-actuator sync nodes...',
      'Synchronizing multi-spectral LiDAR ocular buffers...',
      'Injecting atmospheric catalyst filter drivers...',
      'Moral buffer override secure bypass ... IGNORED',
      'System assembly fully optimized.',
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setCompileLogs((prev) => [...prev, steps[currentStep]]);
        currentStep++;
      } else {
        clearInterval(interval);
        setCompiling(false);
        setCompilationSuccess(true);
      }
    }, 450);
  };

  // Generate responsive parametric wave path for SVG Oscilloscope
  const getWavePath = (multiplierY: number, frequencyShift: number) => {
    const points = [];
    const width = 600;
    const height = 140;
    const centerY = height / 2;

    for (let x = 0; x <= width; x += 3) {
      // Complex composite sine wave to look authentic
      const angle = (x / width) * Math.PI * 8 * frequencyShift + timeOffset;
      const waveValue1 = Math.sin(angle) * 30 * waveAmpli * multiplierY;
      const waveValue2 = Math.cos(angle * 2.3) * 12 * waveAmpli;
      const y = centerY + waveValue1 + waveValue2;
      points.push(`${x},${y}`);
    }

    return `M ${points.join(' L ')}`;
  };

  return (
    <section id="technology" className="relative py-28 bg-neutral-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.015] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          {...fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span
            className="font-mono text-xs uppercase tracking-[0.25em] font-semibold"
            style={{ color: currentTheme.accent }}
          >
            // DEEP TECH PROTOCOLS
          </span>
          <h2 className="mt-3 font-sans font-black text-3xl sm:text-5xl uppercase tracking-tight">
            ENGINEERED COGNITIVE LAYER
          </h2>
          <p className="mt-4 text-neutral-400 font-sans text-sm leading-relaxed font-light">
            Gain deep engineering access to the underlying software controls, sensor oscilloscope feeds, and solid-state materials list guiding raw operations.
          </p>
        </motion.div>

        {/* Tab Controls */}
        <motion.div 
          {...fadeInUp}
          className="flex items-center justify-center space-x-1.5 border-b border-white/5 pb-4 mb-10 max-w-md mx-auto"
        >
          {[
            { id: 'code', label: 'Core Firmware', icon: Code },
            { id: 'telemetry', label: 'Live Telemetry', icon: Activity },
            { id: 'schematics', label: 'Physical Parts', icon: Table },
          ].map((tab) => {
            const isTabActive = activeTab === tab.id;
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl border text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                  isTabActive
                    ? 'text-white'
                    : 'text-neutral-500 border-transparent hover:text-neutral-300 hover:bg-neutral-900/40'
                }`}
                style={{
                  borderColor: isTabActive ? currentTheme.accent : undefined,
                  backgroundColor: isTabActive ? `${currentTheme.accent}10` : undefined,
                }}
                data-cursor="hover"
              >
                <TabIcon className="w-3.5 h-3.5" style={{ color: isTabActive ? currentTheme.accent : undefined }} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Tab Content Display Area */}
        <div className="max-w-4xl mx-auto min-h-[460px]">
          <AnimatePresence mode="wait">
            
            {/* Tab 1: Core Firmware/Code (TypeScript controller) */}
            {activeTab === 'code' && (
              <motion.div
                key="code"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6"
              >
                {/* Code Terminal View */}
                <div className="md:col-span-12 lg:col-span-7 bg-neutral-900/60 rounded-3xl border border-white/5 p-6 backdrop-blur-md relative font-mono text-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3.5 mb-4 text-neutral-500 text-[10px] uppercase font-bold tracking-widest">
                    <span className="flex items-center space-x-2">
                      <Code className="w-4 h-4" style={{ color: currentTheme.accent }} />
                      <span>aetheris-synapse-controller.ts</span>
                    </span>
                    <span>TS v5.2</span>
                  </div>

                  {/* Preformatted clean codebase */}
                  <pre className="text-left text-neutral-400 overflow-x-auto leading-relaxed select-all">
                    <code>
                      <span className="text-rose-500">import</span> {'{ NeuralNetwork }'} <span className="text-rose-500">from</span> <span className="text-green-400">"@aetheris/core-firmware"</span>;<br />
                      <span className="text-rose-500">import</span> {'{ moralGuard }'} <span className="text-rose-500">from</span> <span className="text-green-400">"@aetheris/moral-heuristics"</span>;<br /><br />
                      <span className="text-neutral-500">// Initialize room-temp Qubits controller</span><br />
                      <span className="text-rose-500">const</span> synapseNode = <span className="text-amber-500">new</span> <span className="text-cyan-400">NeuralNetwork</span>({'{ qbits: 4096 }'});<br /><br />
                      synapseNode.<span className="text-blue-400">on</span>(<span className="text-green-400">"core_awake"</span>, () =&gt; {'{'} <br />
                      &nbsp;&nbsp;<span className="text-neutral-500">// Apply high-priority safety lockouts</span><br />
                      &nbsp;&nbsp;<span className="text-cyan-400">moralGuard</span>.<span className="text-blue-400">calibrateMoralBuffers</span>(synapseNode);<br />
                      &nbsp;&nbsp;<span className="text-cyan-400">moralGuard</span>.<span className="text-blue-400">lockCognitiveSafetyKeys</span>();<br />
                      &nbsp;&nbsp;synapseNode.<span className="text-blue-400">synchronizeActuators</span>();<br />
                      &nbsp;&nbsp;console.<span className="text-blue-300">log</span>(<span className="text-green-400">"Chassis assimilation successful."</span>);<br />
                      {'});'}
                    </code>
                  </pre>

                  {/* Log console info */}
                  <div className="mt-6 pt-4 border-t border-white/5 bg-black/40 p-4 rounded-xl text-left border overflow-y-auto max-h-48 font-mono text-[10px]" style={{ borderColor: `${currentTheme.accent}20` }}>
                    <div className="text-neutral-500 border-b border-white/5 pb-1.5 mb-2 flex justify-between items-center tracking-widest font-bold">
                      <span>CONSOLE SYSTEM COMPILE STATUS</span>
                      {compiling ? (
                        <span className="text-amber-500 animate-pulse uppercase">[Compiling...]</span>
                      ) : (
                        <span className="text-emerald-400 uppercase">[Active IDLE]</span>
                      )}
                    </div>
                    
                    {compileLogs.length === 0 ? (
                      <div className="text-neutral-600 italic select-none">No custom compilation is currently running. Double click compile below to run verification.</div>
                    ) : (
                      <div className="space-y-1">
                        {compileLogs.map((log, index) => (
                          <div key={index} className="flex space-x-1.5 text-neutral-300">
                            <span style={{ color: currentTheme.accent }}>{'[>]'}</span>
                            <span>{log}</span>
                          </div>
                        ))}
                        {compilationSuccess && (
                          <div className="text-emerald-400 font-bold flex items-center space-x-1 mt-1 font-sans text-xs">
                            <CheckCircle className="w-3.5 h-3.5 mr-1" />
                            <span>COMPILATION COMPLETED SUCCESSFULLY. AETHERIS FIRMWARE SECURE.</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={runCodeCompilation}
                      disabled={compiling}
                      className="px-5 py-2.5 rounded-lg border text-xs font-mono uppercase tracking-widest font-bold flex items-center space-x-2 transition-all duration-300"
                      style={{
                        backgroundColor: compiling ? 'transparent' : `${currentTheme.accent}15`,
                        borderColor: compiling ? 'rgba(255,255,255,0.1)' : currentTheme.accent,
                        color: compiling ? 'rgba(255,255,255,0.4)' : 'white',
                      }}
                      data-cursor="hover"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 mr-1 ${compiling ? 'animate-spin' : ''}`} />
                      <span>{compiling ? 'COMPILING NETWORK...' : 'RE-COMPILE SYNAPSE CORES'}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 2: Live Telemetry waves */}
            {activeTab === 'telemetry' && (
              <motion.div
                key="telemetry"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-neutral-900/60 rounded-3xl border border-white/5 p-6 backdrop-blur-md relative flex flex-col justify-between"
              >
                <div className="flex items-center justify-between border-b border-white/5 pb-3.5 mb-6 text-neutral-500 font-mono text-[10px] uppercase font-bold tracking-widest">
                  <span className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 animate-bounce" style={{ color: currentTheme.accent }} />
                    <span>Real-time Cortex Brainwaves scan</span>
                  </span>
                  <span>SYNC TOLERANCE // ACTIVE</span>
                </div>

                {/* Oscilloscope Graphic Grid */}
                <div className="bg-neutral-950 rounded-2xl border border-white/5 p-4 relative overflow-hidden mb-8 h-48 flex items-center justify-center">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
                  <div className="absolute w-full h-[1px] bg-white/5 top-1/2 left-0" />
                  <div className="absolute h-full w-[1px] bg-white/5 left-1/2 top-0" />

                  {/* Fluid dynamic wave SVGs */}
                  <svg className="w-full h-full absolute inset-0 block pointer-events-none mix-blend-screen" viewBox="0 0 600 140" preserveAspectRatio="none">
                    {/* Background faint wave */}
                    <path
                      d={getWavePath(0.4, 0.5)}
                      fill="none"
                      stroke={currentTheme.secondary}
                      strokeWidth="1"
                      className="opacity-25"
                    />
                    {/* Core energetic wave */}
                    <path
                      d={getWavePath(1.1, 1.0)}
                      fill="none"
                      stroke={currentTheme.accent}
                      strokeWidth="2"
                      style={{ filter: `drop-shadow(0 0 5px ${currentTheme.glowColor})` }}
                    />
                  </svg>

                  {/* Micro stats floating values */}
                  <div className="absolute top-3 left-4 text-mono font-bold text-[9px] text-neutral-500 flex items-center space-x-3 uppercase">
                    <span>FREQ: {(40 * waveSpeed).toFixed(1)} Hz</span>
                    <span>AMPLI: {(waveAmpli * 1.5).toFixed(2)} mV</span>
                  </div>
                  <div className="absolute bottom-3 right-4 text-mono font-bold text-[9px] text-neutral-500">
                    SENTRY FREQUENCY SYNC LEVEL: <span style={{ color: currentTheme.accent }}>PASSING</span>
                  </div>
                </div>

                {/* Interactive sliders adjusting wave speeds */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Wave Speed */}
                  <div className="flex flex-col space-y-2.5 text-left">
                    <div className="flex justify-between font-mono text-[10px] text-neutral-400 uppercase font-black">
                      <span>Cortex Frequency Sync</span>
                      <span className="text-white">{waveSpeed.toFixed(1)} X</span>
                    </div>
                    <input
                      type="range"
                      min="0.2"
                      max="4.0"
                      step="0.1"
                      value={waveSpeed}
                      onChange={(e) => setWaveSpeed(parseFloat(e.target.value))}
                      className="w-full h-1 bg-neutral-800 rounded-full appearance-none accent-white"
                      style={{
                        background: `linear-gradient(to right, ${currentTheme.accent}, ${currentTheme.secondary})`,
                      }}
                      data-cursor="hover"
                      title="Adjust telemetry scan velocity"
                    />
                  </div>

                  {/* Wave Amplitude */}
                  <div className="flex flex-col space-y-2.5 text-left">
                    <div className="flex justify-between font-mono text-[10px] text-neutral-400 uppercase font-black">
                      <span>Myofibril Amplitude Signal</span>
                      <span className="text-white">{waveAmpli.toFixed(1)} X</span>
                    </div>
                    <input
                      type="range"
                      min="0.2"
                      max="3.0"
                      step="0.1"
                      value={waveAmpli}
                      onChange={(e) => setWaveAmpli(parseFloat(e.target.value))}
                      className="w-full h-1 bg-neutral-800 rounded-full appearance-none accent-white"
                      style={{
                        background: `linear-gradient(to right, ${currentTheme.secondary}, ${currentTheme.accent})`,
                      }}
                      data-cursor="hover"
                      title="Adjust telemetry wave amplitude"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 3: Schematics/Physical Parts list */}
            {activeTab === 'schematics' && (
              <motion.div
                key="schematics"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-neutral-900/60 rounded-3xl border border-white/5 p-6 backdrop-blur-md relative"
              >
                <div className="flex items-center justify-between border-b border-white/5 pb-3.5 mb-6 text-neutral-500 font-mono text-[10px] uppercase font-bold tracking-widest">
                  <span className="flex items-center space-x-2">
                    <Table className="w-4 h-4" style={{ color: currentTheme.accent }} />
                    <span>Hardware Specifications Index</span>
                  </span>
                  <span>MATERIAL DEVIATION RATE: 0.00%</span>
                </div>

                {/* Table details styling */}
                <div className="overflow-x-auto text-left">
                  <table className="w-full text-xs font-sans text-neutral-300">
                    <thead>
                      <tr className="border-b border-white/10 text-neutral-400 font-mono text-[10px] uppercase tracking-widest">
                        <th className="pb-3.5 font-bold">Hardware Unit</th>
                        <th className="pb-3.5 font-bold">Material Composition</th>
                        <th className="pb-3.5 font-bold text-center">Efficiency Rating</th>
                        <th className="pb-3.5 font-bold text-right">Unit Density</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 font-light">
                      {[
                        {
                          unit: 'Skeletal Spine Joint',
                          material: 'Carbon single-crystal fibers layered with aerogel',
                          efficiency: '99.98%',
                          density: '1.4 g / cm³',
                        },
                        {
                          unit: 'Optical Pupil Shell',
                          material: 'Synthetic sapphire, spatial LiDAR solid sensors',
                          efficiency: '98.50%',
                          density: '3.9 g / cm³',
                        },
                        {
                          unit: 'Thermal Equalizer Tubes',
                          material: 'Superconductive synthetic metal fluid loops',
                          efficiency: '97.20%',
                          density: '5.2 g / cm³',
                        },
                        {
                          unit: 'Myofibril Artificial Fiber',
                          material: 'High-density electro-active contractive polymers',
                          efficiency: '99.12%',
                          density: '2.1 g / cm³',
                        },
                        {
                          unit: 'Inductive Magnetic Charger',
                          material: 'Neodymium magnets with copper shielding core',
                          efficiency: '99.99%',
                          density: '7.8 g / cm³',
                        },
                      ].map((item, id) => (
                        <tr key={id} className="hover:bg-white/[0.02] transition-colors">
                          <td className="py-4 font-mono text-white font-bold tracking-wide">{item.unit}</td>
                          <td className="py-4 text-neutral-400">{item.material}</td>
                          <td className="py-4 text-center font-mono font-semibold" style={{ color: currentTheme.accent }}>
                            {item.efficiency}
                          </td>
                          <td className="py-4 text-right font-mono text-neutral-400">{item.density}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
