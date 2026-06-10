/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CyberTheme, CYBER_THEMES } from '../types';
import { Cpu, Palette, Zap, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentTheme: CyberTheme;
  setTheme: (theme: CyberTheme) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({
  currentTheme,
  setTheme,
  activeSection,
  setActiveSection,
}: NavbarProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About AI Robot' },
    { id: 'features', label: 'Features' },
    { id: 'technology', label: 'Technology' },
    { id: 'demo', label: 'Demo' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    // Reset scroll progress instantly on page mount / transition
    setScrollProgress(0);
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate reading scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }

      // 2. Change navbar background style on scroll
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setShowMobileMenu(false);
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'bg-neutral-950/80 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/50 py-3'
            : 'bg-transparent border-b border-transparent py-5'
        }`}
      >
        {/* 1. Scrolling Reading Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/5 pointer-events-none">
          <div
            className="h-full transition-all duration-100 ease-out"
            style={{
              width: `${scrollProgress}%`,
              background: `linear-gradient(to right, ${currentTheme.accent}, ${currentTheme.secondary})`,
              boxShadow: `0 0 10px ${currentTheme.accent}`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left Side: Brand Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
            data-cursor="hover"
          >
            <div className="relative">
              <Cpu
                className="w-8 h-8 transition-all duration-500"
                style={{
                  color: currentTheme.accent,
                  filter: `drop-shadow(0 0 8px ${currentTheme.glowColor})`,
                }}
              />
              {/* Pulsing core */}
              <span
                className="absolute inset-1.5 rounded-full animate-ping opacity-60 pointer-events-none"
                style={{ backgroundColor: currentTheme.accent }}
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5">
                <span className="font-sans font-extrabold tracking-[0.25em] text-white text-base">
                  AETHERIS
                </span>
                <span
                  className="font-bold text-[10px] tracking-wider px-1.5 py-0.5 rounded border leading-none bg-black/60"
                  style={{
                    color: currentTheme.accent,
                    borderColor: `${currentTheme.accent}30`,
                    boxShadow: `0 0 5px ${currentTheme.accent}20`,
                  }}
                >
                  V.4
                </span>
              </div>
              <span className="font-mono text-[9px] text-neutral-500 tracking-[0.15em] uppercase">
                Humanoid Systems Inc.
              </span>
            </div>
          </div>

          {/* Center: Scroll active nav items (Hidden on md/lg trigger point) */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isItemActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 font-sans text-xs tracking-wider uppercase transition-all duration-300 ${
                    isItemActive ? 'text-white font-medium' : 'text-neutral-400 hover:text-white'
                  }`}
                  data-cursor="hover"
                >
                  {item.label}
                  {isItemActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${currentTheme.accent}, ${currentTheme.secondary})`,
                        boxShadow: `0 0 12px ${currentTheme.accent}, 0 0 4px ${currentTheme.accent}`,
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Side: Theme Swapper Dropdown & Burger Control */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="relative">
              <button
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                className="flex items-center justify-center p-2 rounded-lg border border-white/5 bg-neutral-900/60 text-neutral-300 hover:text-white hover:bg-neutral-800/60 backdrop-blur-md transition-all relative"
                title="Aesthetic Sync Menu"
                data-cursor="hover"
              >
                <Palette className="w-4 h-4" />
                <span
                  className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: currentTheme.accent }}
                />
              </button>

              <AnimatePresence>
                {showThemeMenu && (
                  <>
                    {/* Click Overlay */}
                    <div className="fixed inset-0 z-40" onClick={() => setShowThemeMenu(false)} />
                    {/* Selector Bubble */}
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-3 w-64 z-50 rounded-xl border border-white/10 bg-neutral-950/95 backdrop-blur-2xl p-4 shadow-2xl shadow-black/80 font-sans"
                    >
                      <div className="flex items-center space-x-2 pb-2.5 mb-2.5 border-b border-white/5">
                        <Zap className="w-3.5 h-3.5 text-neutral-400" />
                        <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">
                          Select Accent Core
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        {CYBER_THEMES.map((theme) => {
                          const isSelected = theme.id === currentTheme.id;
                          return (
                            <button
                              key={theme.id}
                              onClick={() => {
                                setTheme(theme);
                                setShowThemeMenu(false);
                              }}
                              className={`w-full flex items-center justify-between p-2 rounded-lg border text-left transition-all text-xs ${
                                isSelected
                                  ? 'bg-neutral-900 border-white/15'
                                  : 'bg-transparent border-transparent hover:bg-white/5 hover:border-white/5'
                              }`}
                              data-cursor="hover"
                            >
                              <div className="flex items-center space-x-2.5">
                                {/* Glowing orb color indicator */}
                                <span
                                  className="w-2.5 h-2.5 rounded-full block border duration-500"
                                  style={{
                                    backgroundColor: theme.accent,
                                    borderColor: theme.secondary,
                                    boxShadow: `0 0 8px ${theme.accent}`,
                                  }}
                                />
                                <span className={isSelected ? 'text-white font-medium' : 'text-neutral-400'}>
                                  {theme.name}
                                </span>
                              </div>
                              {isSelected && (
                                <span
                                  className="text-[9px] uppercase font-semibold px-1.5 py-0.5 rounded"
                                  style={{
                                    backgroundColor: `${theme.accent}15`,
                                    color: theme.accent,
                                    border: `1px solid ${theme.accent}30`,
                                  }}
                                >
                                  Active
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Diagnostics Action button (Hidden on mobile) */}
            <button
              onClick={() => handleNavClick('demo')}
              className="relative overflow-hidden hidden md:flex items-center justify-center px-4 py-1.5 text-[11px] font-mono tracking-widest uppercase border rounded transition-all duration-300 shadow hover:shadow-lg"
              style={{
                borderColor: `${currentTheme.accent}50`,
                color: 'white',
                boxShadow: `0 0 10px ${currentTheme.accent}20`,
              }}
              data-cursor="hover"
            >
              <span
                className="absolute inset-0 opacity-10 transition-opacity hover:opacity-20"
                style={{ backgroundColor: currentTheme.accent }}
              />
              INIT DIAGNOSTICS
            </button>

            {/* Hamburger Button (Visible only on lg breakdown sizes) */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="flex lg:hidden items-center justify-center p-2 rounded-lg border border-white/5 bg-neutral-900/60 text-neutral-300 hover:text-white"
              data-cursor="hover"
            >
              {showMobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Slide-In Mobile Navigation Menu Drawer */}
      <AnimatePresence>
        {showMobileMenu && (
          <>
            {/* Backdrop Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMobileMenu(false)}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />

            {/* Drawer Container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] max-w-[90vw] bg-neutral-950/95 border-l border-white/5 backdrop-blur-2xl z-50 lg:hidden p-6 flex flex-col justify-between"
            >
              <div className="space-y-8">
                {/* Header close structure */}
                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                  <div className="flex items-center space-x-2">
                    <Cpu className="w-5 h-5" style={{ color: currentTheme.accent }} />
                    <span className="font-sans font-black tracking-widest text-white text-xs uppercase">
                      AETHERIS CORE
                    </span>
                  </div>
                  <button
                    onClick={() => setShowMobileMenu(false)}
                    className="p-1.5 rounded-lg border border-white/5 text-neutral-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Link Blocks */}
                <nav className="flex flex-col space-y-3.5 text-left">
                  {navItems.map((item) => {
                    const isItemActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className="p-3 rounded-xl border text-left transition-all text-xs font-sans uppercase tracking-widest font-semibold flex items-center justify-between"
                        style={{
                          borderColor: isItemActive ? `${currentTheme.accent}40` : 'rgba(255,255,255,0.02)',
                          backgroundColor: isItemActive ? `${currentTheme.accent}10` : 'transparent',
                          color: isItemActive ? 'white' : '#a3a3a3',
                        }}
                      >
                        <span>{item.label}</span>
                        {isItemActive && (
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{
                              backgroundColor: currentTheme.accent,
                              boxShadow: `0 0 8px ${currentTheme.accent}`,
                            }}
                          />
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Status footer inside drawer */}
              <div className="border-t border-white/5 pt-4 space-y-3">
                <div className="flex items-center justify-between text-[9px] font-mono text-neutral-500 uppercase">
                  <span>OPERATIONAL MATRIX</span>
                  <span style={{ color: currentTheme.accent }}>V4_ONLINE</span>
                </div>
                <button
                  onClick={() => handleNavClick('demo')}
                  className="w-full py-2.5 rounded text-center text-xs font-mono uppercase tracking-widest border border-white/10 text-white"
                  style={{
                    borderColor: `${currentTheme.accent}30`,
                    boxShadow: `0 0 10px ${currentTheme.accent}10`,
                  }}
                >
                  DIAGNOSTICS BOARD
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
