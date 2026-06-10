/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CyberTheme } from '../types';
import { Shield, Cpu, Smile, Check, Zap, Server } from 'lucide-react';

interface PricingCalculatorProps {
  currentTheme: CyberTheme;
}

interface TierModel {
  id: string;
  name: string;
  tagline: string;
  baseCost: number;
  icon: React.ComponentType<any>;
  includedSpecs: string[];
  recommendedRole: string;
}

export default function PricingCalculator({ currentTheme }: PricingCalculatorProps) {
  const models: TierModel[] = [
    {
      id: 'sentry',
      name: 'Sentry Core v4',
      tagline: 'High-Alert Patrol & Area Security',
      baseCost: 1450,
      icon: Shield,
      includedSpecs: [
        'Solid-State LiDAR ocular mapping',
        'Fibre-insulated impact armor casing',
        'Standard moral heuristic buffers',
        '40 Degrees of Freedom (DoF)',
      ],
      recommendedRole: 'Secure perimeter control / patrol',
    },
    {
      id: 'companion',
      name: 'Companion v4',
      tagline: 'Domestic Stewardship & Analytics',
      baseCost: 2890,
      icon: Smile,
      includedSpecs: [
        'Liquid polymer muscle tensioners',
        'Fluent multilingual vocal nodes',
        'Inductive magnetic fast-charging core',
        '48 Degrees of Freedom (DoF)',
      ],
      recommendedRole: 'Executive support & nursing care',
    },
    {
      id: 'supercluster',
      name: 'Supercluster Node v4',
      tagline: 'Industrial Fabrication & Ecosystem Reshaping',
      baseCost: 5900,
      icon: Server,
      includedSpecs: [
        'Dual 4,096 Qubit quantum compute units',
        'Atmospheric catalyst injector cells',
        'Cryo-liquid cooling loops array',
        '64 Degrees of Freedom (DoF)',
      ],
      recommendedRole: 'Bio-chemical synthesize / macro research',
    },
  ];

  const [selectedModel, setSelectedModel] = useState<TierModel>(models[1]);

  // Customizable addon metrics
  const [qubitsAddon, setQubitsAddon] = useState(256); // 1 Qubit = $0.50 margin
  const [actuatorRank, setActuatorRank] = useState<'standard' | 'bio' | 'quantum'>('bio'); // standard: $0, bio: $200, quantum: $550
  const [includeDock, setIncludeDock] = useState(true); // default dock: $150

  // Totalized dynamic equation
  const calculateTotal = () => {
    let price = selectedModel.baseCost;

    // Qubits calculation
    price += qubitsAddon * 1.25;

    // Actuator upgrades
    if (actuatorRank === 'bio') price += 240;
    if (actuatorRank === 'quantum') price += 580;

    // Docking pad
    if (includeDock) price += 120;

    return Math.round(price);
  };

  return (
    <section id="pricing" className="relative py-28 bg-neutral-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span
            className="font-mono text-xs uppercase tracking-[0.25em] font-semibold"
            style={{ color: currentTheme.accent }}
          >
            // LEASE MODEL METRICS
          </span>
          <h2 className="mt-3 font-sans font-black text-3xl sm:text-5xl uppercase tracking-tight">
            FLEET LEASING OPTIONS
          </h2>
          <p className="mt-4 text-neutral-400 font-sans text-sm sm:text-base leading-relaxed font-light">
            Rent top-tier Aetheris humanoids. Choose from prefabricated specialty tiers, then fine-tune computational power and physical actuators in our real-time price builder.
          </p>
        </div>

        {/* Level Tiers Comparison cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {models.map((model) => {
            const isModelSelected = model.id === selectedModel.id;
            const ModelIcon = model.icon;
            return (
              <button
                key={model.id}
                onClick={() => setSelectedModel(model)}
                className={`flex flex-col justify-between text-left p-6 sm:p-8 rounded-3xl border transition-all duration-500 relative bg-neutral-900/30 backdrop-blur-md group min-h-[440px]`}
                style={{
                  borderColor: isModelSelected ? currentTheme.accent : 'rgba(255, 255, 255, 0.05)',
                  boxShadow: isModelSelected ? `0 0 15px ${currentTheme.glowColor}` : '0 4px 12px rgba(0,0,0,0.5)',
                }}
                data-cursor="hover"
              >
                {/* Visual glow indicator */}
                <span
                  className="absolute top-4 right-4 w-2 h-2 rounded-full duration-500"
                  style={{
                    backgroundColor: model.baseCost > 3000 ? '#ff003c' : model.baseCost > 2000 ? currentTheme.accent : '#39ff14',
                    boxShadow: `0 0 6px ${model.baseCost > 3000 ? '#ff003c' : model.baseCost > 2000 ? currentTheme.accent : '#39ff14'}`,
                  }}
                />

                <div className="w-full">
                  <div
                    className="p-3.5 rounded-2xl border bg-black/60 w-fit mb-5 transition-colors duration-500"
                    style={{ borderColor: isModelSelected ? currentTheme.accent : 'rgba(255, 255, 255, 0.1)' }}
                  >
                    <ModelIcon className="w-6 h-6 text-white" style={isModelSelected ? { color: currentTheme.accent } : undefined} />
                  </div>

                  <h3 className="font-sans text-xl font-bold uppercase text-white tracking-tight">{model.name}</h3>
                  <p className="text-neutral-500 font-mono text-[10px] tracking-widest uppercase mt-0.5">{model.tagline}</p>
                  
                  {/* Dynamic Pricing Gauge */}
                  <div className="my-5 border-b border-white/5 pb-5">
                    <span className="font-sans text-3xl font-black text-white">${model.baseCost}</span>
                    <span className="font-mono text-neutral-500 text-[10px] tracking-widest uppercase"> / MONTH BASE</span>
                  </div>

                  {/* Included features checklist */}
                  <ul className="space-y-2.5">
                    {model.includedSpecs.map((spec, id) => (
                      <li key={id} className="flex items-start space-x-2.5 text-xs text-neutral-400 font-sans">
                        <Check className="w-4 h-4 text-neutral-500 flex-none mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-full pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="font-mono text-[9px] uppercase text-neutral-500 tracking-wider">
                    ROLE: <span className="text-white block font-sans font-semibold mt-0.5">{model.recommendedRole}</span>
                  </div>
                  {isModelSelected && (
                    <span
                      className="text-[9px] uppercase font-bold tracking-wider px-2 py-1 rounded"
                      style={{
                        backgroundColor: `${currentTheme.accent}15`,
                        color: currentTheme.accent,
                        border: `1px solid ${currentTheme.accent}30`,
                      }}
                    >
                      Active Builder Target
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Hardware Customizer & Addon metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
          
          {/* Sliders panel (lg:span-7) */}
          <div className="lg:col-span-7 bg-neutral-900/40 border border-white/5 p-6 sm:p-8 rounded-3xl backdrop-blur-md flex flex-col justify-between">
            <h3 className="font-sans text-lg font-bold uppercase tracking-tight text-white mb-6 flex items-center space-x-2">
              <Cpu className="w-5 h-5 mr-1" style={{ color: currentTheme.accent }} />
              <span>CUSTOM HARDWARE CONFIGURATOR</span>
            </h3>

            <div className="space-y-6">
              {/* Option 1: Neural Qubits slider */}
              <div className="flex flex-col space-y-2.5 text-left">
                <div className="flex justify-between font-mono text-[10px] text-neutral-400 uppercase font-black">
                  <span>Additional Synapse CPU Nodes</span>
                  <span className="text-white font-sans font-bold">{qubitsAddon} Qubits</span>
                </div>
                <input
                  type="range"
                  min="64"
                  max="1024"
                  step="32"
                  value={qubitsAddon}
                  onChange={(e) => setQubitsAddon(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-neutral-800 rounded-full appearance-none accent-white"
                  style={{
                    background: `linear-gradient(to right, ${currentTheme.accent}, ${currentTheme.secondary})`,
                  }}
                  data-cursor="hover"
                  title="Scale secondary synapse computational capacities"
                />
                <div className="flex justify-between text-[8px] font-mono text-neutral-500">
                  <span>Standard Buffer (64 Qubits)</span>
                  <span>Supercomputer Node (1,024 Qubits)</span>
                </div>
              </div>

              {/* Option 2: Actuator Fluidity multi-selectors */}
              <div className="flex flex-col space-y-2.5 text-left">
                <span className="font-mono text-[10px] text-neutral-400 uppercase font-black">
                  Actuator Fluidity Tier
                </span>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'standard', name: 'Standard', desc: 'Skeletal Joints', price: 'Included' },
                    { id: 'bio', name: 'Bio-Resonant', desc: 'Silenced Elasticity', price: '+$240 / m' },
                    { id: 'quantum', name: 'Quantum Liquid', desc: 'Molecular Float', price: '+$580 / m' },
                  ].map((act) => {
                    const isActSelected = actuatorRank === act.id;
                    return (
                      <button
                        key={act.id}
                        onClick={() => setActuatorRank(act.id as any)}
                        className={`p-3 rounded-xl border text-center transition-all duration-300`}
                        style={{
                          backgroundColor: isActSelected ? `${currentTheme.accent}15` : 'transparent',
                          borderColor: isActSelected ? currentTheme.accent : 'rgba(255, 255, 255, 0.05)',
                          boxShadow: isActSelected ? `0 0 10px ${currentTheme.accent}20` : 'none',
                        }}
                        data-cursor="hover"
                      >
                        <div className="font-sans font-bold text-xs text-white leading-relaxed">{act.name}</div>
                        <div className="text-[8px] text-neutral-500 mt-0.5 leading-none">{act.desc}</div>
                        <div className="text-[9px] font-mono font-semibold mt-1.5" style={{ color: isActSelected ? 'white' : currentTheme.accent }}>
                          {act.price}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Option 3: Inductive Charger dock checkmark */}
              <div className="flex items-center justify-between bg-black/40 border border-white/5 p-4 rounded-xl mt-4 text-left">
                <div className="flex flex-col">
                  <span className="font-sans text-xs font-extrabold text-white">INDUCTIVE MAGNETIC CHARGING DOCK</span>
                  <span className="text-[9px] font-mono text-neutral-500 uppercase mt-0.5">High-speed wireless battery deck (charges in 4 mins)</span>
                </div>

                <button
                  onClick={() => setIncludeDock(!includeDock)}
                  className="w-12 h-6 rounded-full p-0.5 transition-colors relative border border-white/15"
                  style={{ backgroundColor: includeDock ? currentTheme.secondary : '#1c1c1e' }}
                  data-cursor="hover"
                >
                  <span
                    className={`w-4.5 h-4.5 rounded-full bg-white block absolute top-0.5 left-0.5 transition-transform duration-300 ${
                      includeDock ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

            </div>
          </div>

          {/* Dynamic Invoice summary block (lg:span-5) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10 p-6 sm:p-8 rounded-3xl backdrop-blur-md flex flex-col justify-between relative overflow-hidden text-left">
            {/* Glow decor background */}
            <div
              className="absolute -right-20 -bottom-20 w-44 h-44 rounded-full blur-[80px] opacity-15 pointer-events-none"
              style={{ backgroundColor: currentTheme.accent }}
            />

            <div>
              <div className="flex items-center space-x-2 border-b border-white/5 pb-4 mb-5 text-neutral-500 text-[10px] uppercase font-bold tracking-widest font-mono">
                <Zap className="w-4 h-4" style={{ color: currentTheme.accent }} />
                <span>DYNAMIC SUMMARY INVOICE</span>
              </div>

              <div className="space-y-3.5">
                <div className="flex justify-between items-baseline text-xs">
                  <span className="text-neutral-400">Prefabricated Humanoid base:</span>
                  <span className="font-mono text-white font-bold">${selectedModel.baseCost} / m</span>
                </div>

                <div className="flex justify-between items-baseline text-xs">
                  <span className="text-neutral-400">Additional Synapse Core ({qubitsAddon} Qubits):</span>
                  <span className="font-mono text-white font-bold">${qubitsAddon * 1.25} / m</span>
                </div>

                <div className="flex justify-between items-baseline text-xs">
                  <span className="text-neutral-400">Actuator Polymer upgrade:</span>
                  <span className="font-mono text-white font-bold">
                    ${actuatorRank === 'quantum' ? '580' : actuatorRank === 'bio' ? '240' : '0'} / m
                  </span>
                </div>

                {includeDock && (
                  <div className="flex justify-between items-baseline text-xs">
                    <span className="text-neutral-400">Inductive Wireless Fast Dock:</span>
                    <span className="font-mono text-white font-bold">+$120 / m</span>
                  </div>
                )}
              </div>
            </div>

            {/* Price readout section */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold block">
                Total Estimated Lease Cost
              </span>
              <div className="flex items-baseline space-x-1.5 mt-1">
                <span className="font-sans text-4xl sm:text-5xl font-black tracking-tight" style={{ color: currentTheme.accent, filter: `drop-shadow(0 0 10px ${currentTheme.glowColor})` }}>
                  ${calculateTotal()}
                </span>
                <span className="text-neutral-400 font-mono text-xs uppercase font-semibold"> / month lease</span>
              </div>

              <button
                onClick={() => {
                  const contactSec = document.getElementById('contact');
                  if (contactSec) {
                    window.scrollTo({
                      top: contactSec.getBoundingClientRect().top + window.scrollY - 80,
                      behavior: 'smooth',
                    });
                  }
                }}
                className="w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs mt-6 transition-all duration-300 shadow-xl text-center block text-black cursor-pointer hover:opacity-90"
                style={{
                  backgroundColor: currentTheme.accent,
                  boxShadow: `0 0 15px ${currentTheme.glowColor}`,
                }}
                data-cursor="hover"
              >
                REQUEST NEURAL RETRUST UPLINK
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
