/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CyberTheme, CYBER_THEMES } from './types';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import InteractiveCanvas from './components/InteractiveCanvas';

// Multi-Page components
import HomePage from './components/Pages/HomePage';
import AboutPage from './components/Pages/AboutPage';
import FeaturesPage from './components/Pages/FeaturesPage';
import TechnologyPage from './components/Pages/TechnologyPage';
import DemoPage from './components/Pages/DemoPage';
import PricingPage from './components/Pages/PricingPage';
import ContactPage from './components/Pages/ContactPage';

import { ShieldCheck, Cpu, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [currentTheme, setCurrentTheme] = useState<CyberTheme>(CYBER_THEMES[0]);
  const [currentPage, setCurrentPage] = useState<string>('home');

  const handleFooterLinkClick = (id: string) => {
    setCurrentPage(id);
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-neutral-950 font-sans text-white overflow-x-hidden selection:bg-white selection:text-black">
      
      {/* 1. Floating Custom Cybernetic Cursor */}
      <CustomCursor currentTheme={currentTheme} />

      {/* 2. Top-level Floating Glass Navbar & Scroll progress */}
      <Navbar
        currentTheme={currentTheme}
        setTheme={setCurrentTheme}
        activeSection={currentPage}
        setActiveSection={setCurrentPage}
      />

      {/* 3. Global Ambient Background Particle Canvas */}
      <InteractiveCanvas accentColor={currentTheme.accent} />

      {/* 4. Core Render Switch for separate page layouts */}
      <main className="relative z-10 flex-1 w-full flex flex-col justify-start">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex-1 flex flex-col"
          >
            {currentPage === 'home' && (
              <HomePage currentTheme={currentTheme} setPage={setCurrentPage} />
            )}
            {currentPage === 'about' && (
              <AboutPage currentTheme={currentTheme} />
            )}
            {currentPage === 'features' && (
              <FeaturesPage currentTheme={currentTheme} />
            )}
            {currentPage === 'technology' && (
              <TechnologyPage currentTheme={currentTheme} />
            )}
            {currentPage === 'demo' && (
              <DemoPage currentTheme={currentTheme} />
            )}
            {currentPage === 'pricing' && (
              <PricingPage currentTheme={currentTheme} />
            )}
            {currentPage === 'contact' && (
              <ContactPage currentTheme={currentTheme} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 5. Cybernetic Technical Footer */}
      <footer className="relative bg-neutral-950 border-t border-white/5 py-12 z-20 overflow-hidden font-sans mt-auto">
        {/* Subtle grid accent inside footer */}
        <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-stretch justify-between gap-10">
          
          {/* Corporate brand stamp */}
          <div className="flex flex-col space-y-4 max-w-sm text-left">
            <div className="flex items-center space-x-2.5">
              <Cpu className="w-6 h-6" style={{ color: currentTheme.accent }} />
              <span className="font-sans font-black tracking-[0.25em] text-white text-sm uppercase">
                AETHERIS INC.
              </span>
            </div>
            
            <p className="text-neutral-500 font-light text-xs leading-relaxed">
              Leading the bio-mechatronic evolution since 2091. Transforming human augmentation indices with certified, ethical and highly adaptive humanoid assistance structures.
            </p>

            <span className="font-mono text-[9px] text-neutral-600 uppercase tracking-widest block pt-1">
              © 2091-2104 AETHERIS HUMANOID INDUSTRIES. ALL RIGHTS INTACT.
            </span>
          </div>

          {/* Quick links navigations */}
          <div className="flex gap-16 text-left flex-wrap md:flex-nowrap">
            
            {/* Nav targets links */}
            <div>
              <h4 className="font-mono text-[9px] uppercase font-bold text-neutral-400 tracking-wider mb-4 border-b border-white/5 pb-2">
                Operational Directory
              </h4>
              <ul className="space-y-2 text-xs">
                {[
                  { id: 'home', label: 'Home System' },
                  { id: 'about', label: 'Anatomy Blueprint' },
                  { id: 'features', label: 'Cognitive Tasks' },
                  { id: 'technology', label: 'Engine Hardware' },
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleFooterLinkClick(link.id)}
                      className="text-neutral-500 hover:text-white transition-colors cursor-pointer flex items-center space-x-1"
                      data-cursor="hover"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 duration-300" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Diagnostic modules */}
            <div>
              <h4 className="font-mono text-[9px] uppercase font-bold text-neutral-400 tracking-wider mb-4 border-b border-white/5 pb-2">
                Diagnostics Node
              </h4>
              <ul className="space-y-2 text-xs">
                {[
                  { id: 'demo', label: 'Console Core Cockpit' },
                  { id: 'pricing', label: 'Custom pricing leasing' },
                  { id: 'contact', label: 'Secure neural dispatch' },
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleFooterLinkClick(link.id)}
                      className="text-neutral-500 hover:text-white transition-colors cursor-pointer text-left"
                      data-cursor="hover"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Status variables */}
            <div className="min-w-[150px]">
              <h4 className="font-mono text-[9px] uppercase font-bold text-neutral-400 tracking-wider mb-4 border-b border-white/5 pb-2">
                Assurance Index
              </h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-1.5 text-[10px] text-emerald-400 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span className="uppercase font-bold tracking-wider">AETHERIS COMPLIANT</span>
                </div>
                <p className="text-[10px] text-neutral-500 leading-normal font-light">
                  Aetheris systems conform to Unified Cognitive Safety Standards (V8.2) backed by dual-layered Moral Ethic guards.
                </p>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}
