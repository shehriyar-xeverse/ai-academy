/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { CyberTheme } from '../types';
import { ShieldAlert, ShieldCheck, Terminal, Compass, Eye, VolumeX, Volume2 } from 'lucide-react';

interface HomeHeroProps {
  currentTheme: CyberTheme;
  setActiveSection: (section: string) => void;
}

export default function HomeHero({ currentTheme, setActiveSection }: HomeHeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized position relative to center of screen: values from -1 to 1
      const normalizedX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const normalizedY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      setMousePos({ x: normalizedX, y: normalizedY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsVideoMuted(videoRef.current.muted);
    }
  };

  const jumpToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  // Parallax offsets for different depth layers
  const textOffset = {
    transform: `translate3d(${mousePos.x * -18}px, ${mousePos.y * -18}px, 0)`,
  };

  const hudOffsetFront = {
    transform: `translate3d(${mousePos.x * 30}px, ${mousePos.y * 30}px, 0)`,
  };

  const hudOffsetBack = {
    transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 12}px, 0)`,
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* Absolute Fullscreen Video Background */}
      <div className="absolute inset-0 w-full h-full select-none pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-[1.03] opacity-100"
          src="https://res.cloudinary.com/dju25z9v3/video/upload/v1780503016/Enhancer-Ultra_HD-PixVerse_V6_Image_Text_540P_A_cinematic_contin_lrut3o.mp4"
        />
        {/* Cinematic Multi-layered Shading Layer for Text Legibility - Minimal opacity only */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-neutral-950/30" />
        {/* Scanlines layer */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,_rgba(0,0,0,0.25)_50%),_linear-gradient(90deg,_rgba(255,0,0,0.06),_rgba(0,255,0,0.02),_rgba(0,0,255,0.06))] bg-[size:100%_4px,_6px_100%] opacity-10 pointer-events-none" />
      </div>

      {/* Interactive Floating Backdrop Grid (Back layer parallax) */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10 transition-transform duration-300 ease-out"
        style={hudOffsetBack}
      >
        <div
          className="w-[85%] h-[85%] border border-dotted border-white/5 rounded-[50px] relative"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.01) 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        >
          {/* Virtual holographic frame brackets */}
          <span className="absolute top-8 left-8 w-4 h-4 border-t border-l border-white/20" />
          <span className="absolute top-8 right-8 w-4 h-4 border-t border-r border-white/20" />
          <span className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-white/20" />
          <span className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-white/20" />
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 flex flex-col items-center justify-between min-h-screen w-full z-20">
        
        {/* Upper tech meta block */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-full flex-none flex flex-col md:flex-row md:items-center justify-between text-neutral-500 font-mono text-[10px] tracking-widest uppercase py-4 border-b border-white/5"
        >
          <div className="flex items-center space-x-2.5 mb-2 md:mb-0">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>AI SYNAPTIC FEED ACTIVE</span>
          </div>
          <div className="flex items-center space-x-6">
            <span>COGNITIVE MATRIX // AWAKENING V.4</span>
            <span>SEC_LOC // GRID_7A_X</span>
          </div>
        </motion.div>

        {/* Core display branding (Parallax text) */}
        <div
          className="flex-1 flex flex-col items-center justify-center text-center my-auto transition-transform duration-200 ease-out max-w-4xl px-4 select-none"
          style={textOffset}
        >
          {/* Small Tech Label Header */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-900/80 border border-white/5 backdrop-blur-md mb-6 shadow-xl"
          >
            <Terminal className="w-3.5 h-3.5" style={{ color: currentTheme.accent }} />
            <span className="font-mono text-[10px] uppercase font-semibold tracking-[0.2em] text-neutral-300">
              NEXT-GEN BIOMECHANICAL HUMANOID
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="font-sans font-black text-4xl sm:text-6xl md:text-8xl tracking-tight leading-none uppercase select-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
          >
            THE NEW ERA OF{' '}
            <span
              className="font-bold relative inline-block transition-colors duration-500 bg-clip-text text-transparent bg-gradient-to-r"
              style={{
                backgroundImage: `linear-gradient(to right, ${currentTheme.accent}, #ffffff)`,
                filter: `drop-shadow(0 0 15px ${currentTheme.glowColor})`,
              }}
            >
              COGNITION
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-6 font-sans text-neutral-200 text-sm sm:text-lg max-w-2xl leading-relaxed font-light mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] bg-neutral-950/30 p-4 rounded-xl backdrop-blur-[2px]"
          >
            Aetheris Model 4 introduces adaptive hybrid quantum compute core, synthetically grown myofibril muscles, and deep sensory synchronization. Engineered for seamless assimilation in critical analytical roles and human-symbiotic companionship.
          </motion.p>

          {/* Call to actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => jumpToSection('about')}
              className="group relative w-full sm:w-56 px-8 py-4 overflow-hidden rounded font-sans text-xs uppercase tracking-widest font-bold border transition-all duration-300 shadow-xl"
              style={{
                borderColor: `${currentTheme.accent}80`,
                boxShadow: `0 0 15px ${currentTheme.glowColor}`,
              }}
              data-cursor="hover"
            >
              {/* Dynamic sliding fill */}
              <span
                className="absolute inset-0 transition-transform duration-500 ease-out -translate-x-full group-hover:translate-x-0"
                style={{ backgroundColor: currentTheme.accent }}
              />
              <span className="relative z-10 text-white flex items-center justify-center space-x-2">
                <Compass className="w-4 h-4" />
                <span>EXPLORE CHASSIS</span>
              </span>
            </button>

            <button
              onClick={() => jumpToSection('demo')}
              className="w-full sm:w-56 px-8 py-4 rounded bg-neutral-900/80 border border-white/10 text-neutral-300 text-xs font-sans tracking-widest font-bold uppercase transition-all duration-300 hover:text-white hover:bg-neutral-800/80 hover:border-white/20 flex items-center justify-center space-x-2"
              data-cursor="hover"
            >
              <Terminal className="w-4 h-4" />
              <span>LAUNCH SIMULATION</span>
            </button>
          </motion.div>
        </div>

        {/* Foreground Parallax HUD Rings (Interactive holographic widgets) */}
        <div
          className="absolute right-[5%] bottom-[12%] hidden xl:flex flex-col items-center pointer-events-auto z-15 p-4 rounded-2xl border border-white/5 bg-neutral-900/35 backdrop-blur-xl transition-all duration-300 text-left select-none max-w-sm cursor-grab active:cursor-grabbing font-mono text-[10px]"
          style={hudOffsetFront}
          title="Interactive Parallax Telemetry Module"
        >
          <div className="flex items-center justify-between w-full border-b border-white/5 pb-2.5 mb-2.5 text-neutral-400">
            <span className="flex items-center space-x-1.5 font-bold tracking-widest">
              <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span>SENTRY MONITOR</span>
            </span>
            <span className="text-neutral-500 font-semibold uppercase">ID // 909-V3</span>
          </div>
          <div className="space-y-1.5 w-full text-neutral-300">
            <div className="flex justify-between">
              <span className="text-neutral-500">SYSTEM READYSTATE:</span>
              <span className="font-semibold text-emerald-400 flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 mr-0.5 inline" /> ONLINE
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">THERMAL EQUALIZER:</span>
              <span className="font-semibold" style={{ color: currentTheme.accent }}>
                OPTIMAL (34.2°C)
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">AMORPHOUS RECEPTOR:</span>
              <span className="font-semibold text-neutral-100">89.4% SYNC</span>
            </div>
            {/* Real-time simulation bar */}
            <div className="pt-2">
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r rounded-full animate-[pulse_1.5s_infinite]"
                  style={{
                    width: '89.4%',
                    backgroundImage: `linear-gradient(to right, ${currentTheme.accent}, ${currentTheme.secondary})`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metadata & controls */}
        <div className="w-full flex-none flex items-center justify-between border-t border-white/5 pt-4 text-neutral-500 font-mono text-[10px] tracking-widest uppercase">
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleMute}
              className="hover:text-white transition-all p-1.5 rounded-md border border-white/5 bg-neutral-900/40 cursor-pointer"
              title={isVideoMuted ? "Unmute Cinematic Audio Feed" : "Mute Cinematic Audio Feed"}
              data-cursor="hover"
            >
              {isVideoMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>
            <span className="hidden md:inline">STREAM // CINEMATIC AWAKENING HD 1080P</span>
          </div>

          <motion.div
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex items-center space-x-1.5 text-neutral-400 font-sans text-[11px]"
          >
            <span>SCROLL DOWN TO INITIATE INGESTION</span>
            <span>↓</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
