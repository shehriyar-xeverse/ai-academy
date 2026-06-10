/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CyberTheme } from '../types';
import { Send, Terminal, ShieldAlert, CheckCircle, Mail, MapPin, Phone, Github } from 'lucide-react';

interface ContactFormProps {
  currentTheme: CyberTheme;
}

interface LogLine {
  text: string;
  type: 'info' | 'success' | 'warn';
}

export default function ContactForm({ currentTheme }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    urgency: 'routine',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitLogs, setSubmitLogs] = useState<LogLine[]>([]);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || !formData.name || !formData.email) return;

    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitLogs([
      { text: '[UPLINK] RESOLVING SECURE COMPANION ENDPOINT...', type: 'info' },
      { text: '[UPLINK] ESTABLISHING 512-BIT OPTICAL TUNNEL PROXY...', type: 'info' },
    ]);

    const steps = [
      { text: '[BIOMETRICS] VALIDATING HUMAN ENVELOPE STRUCTS...', type: 'info' },
      { text: '[HANDSHAKE] SHARPENING QUANTUM COHERENT ENGINES...', type: 'info' },
      { text: '[OVERRIDE] INJECTING MORAL GUARD VERIFICATION PROTOCOLS...', type: 'success' },
      { text: `[DISPATCH] PACKAGING PAYLOAD FROM IDENTITY HASH: "${formData.name.toUpperCase()}"`, type: 'info' },
      { text: '[COMPLETED] NEURAL TRANSMISSION SUCCESSFULLY BEAMED TO AETHERIS COMMAND SITE.', type: 'success' },
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setSubmitLogs((prev) => [...prev, step as LogLine]);
        if (idx === steps.length - 1) {
          setIsSubmitting(false);
          setSubmitSuccess(true);
          // Reset form on success
          setFormData({ name: '', email: '', urgency: 'routine', message: '' });
        }
      }, (idx + 1) * 600);
    });
  };

  return (
    <section id="contact" className="relative py-28 bg-black text-white overflow-hidden">
      {/* Background decor */}
      <div className="absolute left-1/2 bottom-0 w-96 h-96 rounded-full blur-[180px] opacity-10 pointer-events-none -translate-x-1/2" style={{ backgroundColor: currentTheme.accent }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="font-mono text-xs uppercase tracking-[0.25em] font-semibold"
            style={{ color: currentTheme.accent }}
          >
            // COGNITIVE BRIDGE LOCK
          </span>
          <h2 className="mt-3 font-sans font-black text-3xl sm:text-5xl uppercase tracking-tight">
            ESTABLISH NEURAL UPLINK
          </h2>
          <p className="mt-4 text-neutral-400 font-sans text-sm leading-relaxed font-light">
            Ready to integrate cognitive humanoid fleets inside your command centers? Establish a direct dispatch message below. Humanoid engineers respond under 6 cycles.
          </p>
        </div>

        {/* Contact Body Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Dispatch Info Panel (lg:span-4) */}
          <div className="lg:col-span-4 bg-neutral-900/40 border border-white/5 p-6 sm:p-8 rounded-3xl backdrop-blur-md flex flex-col justify-between text-left">
            <div>
              <h3 className="font-sans text-base font-bold uppercase tracking-tight text-white mb-6">
                AETHERIS COMMAND NODES
              </h3>
              
              <div className="space-y-6">
                {/* Physical Sector */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-neutral-950 border border-white/5" style={{ color: currentTheme.accent }}>
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 block">Sector Region Location</span>
                    <span className="text-xs text-neutral-300 font-semibold font-sans">Silo-7, Sub-Grid A6, Cosmic City</span>
                  </div>
                </div>

                {/* Secure Line */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-neutral-950 border border-white/5" style={{ color: currentTheme.accent }}>
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 block">Secure Audio Channel</span>
                    <span className="text-xs text-neutral-300 font-semibold font-sans">UPLINK_0x4F9_CYBER</span>
                  </div>
                </div>

                {/* Email Server */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-neutral-950 border border-white/5" style={{ color: currentTheme.accent }}>
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 block">Encrypted Mail Socket</span>
                    <span className="text-xs text-neutral-300 font-semibold font-sans">silo7@aetheris-robot.net</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom corporate credits */}
            <div className="border-t border-white/5 pt-6 mt-10">
              <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-widest block mb-2">
                ASSIMILATION LICENSE PROTOCOL
              </span>
              <p className="text-[10px] text-neutral-400 font-light font-sans leading-relaxed">
                By establishing this beam transmission, your signature identity hash agrees to the Robotic Coexistence Accords under Section 49B of the Galactic Non-Aggression Treaties.
              </p>
            </div>
          </div>

          {/* Contact Dispatch Form Grid (lg:span-8) */}
          <div className="lg:col-span-8 bg-neutral-900/50 border border-white/5 p-6 sm:p-8 rounded-3xl backdrop-blur-md flex flex-col justify-between overflow-hidden relative">
            <h3 className="font-sans text-base font-bold uppercase tracking-tight text-white mb-6 border-b border-white/5 pb-4 flex items-center">
              <Terminal className="w-4 h-4 mr-2" style={{ color: currentTheme.accent }} />
              <span>COMMAND DISPATCH INTERFACE</span>
            </h3>

            <form onSubmit={handleFormSubmission} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Name */}
                <div className="flex flex-col space-y-1.5 text-left">
                  <label className="font-mono text-[9px] uppercase font-black text-neutral-400">
                    Your Identity / Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. SHEHRIYAR ALAM"
                    className="bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-xs w-full text-white placeholder-neutral-600 focus:outline-none focus:border-white/30"
                    data-cursor="hover"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-1.5 text-left">
                  <label className="font-mono text-[9px] uppercase font-black text-neutral-400">
                    Digital Uplink Node / Email
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. client@silo7.org"
                    className="bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-xs w-full text-white placeholder-neutral-600 focus:outline-none focus:border-white/30"
                    data-cursor="hover"
                  />
                </div>
              </div>

              {/* Urgency */}
              <div className="flex flex-col space-y-1.5 text-left">
                <label className="font-mono text-[9px] uppercase font-black text-neutral-400">
                  Uplink Urgency Level
                </label>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  className="bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-xs w-full text-white focus:outline-none focus:border-white/30 appearance-none cursor-pointer"
                  data-cursor="hover"
                  title="Select urgency level"
                >
                  <option value="routine">Routine ping (Consultation request)</option>
                  <option value="fail">Emergency system intervention (Chassis bypass)</option>
                  <option value="fleet">Strategic corporate lease acquisition (Fleet deployment)</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col space-y-1.5 text-left box-border">
                <label className="font-mono text-[9px] uppercase font-black text-neutral-400">
                  Neural Message Payload (Your message)
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Initiate message packet details here..."
                  className="bg-neutral-950 border border-white/10 rounded-xl px-4 py-3 text-xs w-full text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 resize-none"
                  data-cursor="hover"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email}
                  className="px-6 py-3.5 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center space-x-2 transition-all duration-300 disabled:opacity-50 cursor-pointer text-black"
                  style={{
                    backgroundColor: currentTheme.accent,
                    boxShadow: `0 0 10px ${currentTheme.glowColor}`,
                  }}
                  data-cursor="hover"
                >
                  <Send className="w-3.5 h-3.5 mr-1" />
                  <span>{isSubmitting ? 'ESTABLISHING PATH...' : 'BEAM MESSAGE PAYLOAD'}</span>
                </button>
              </div>
            </form>

            {/* Submission log trace overlay */}
            <AnimatePresence>
              {(isSubmitting || submitLogs.length > 0) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 pt-4 border-t border-white/5 bg-black/50 p-4 rounded-xl border font-mono text-[10px]"
                  style={{ borderColor: `${currentTheme.accent}20` }}
                >
                  <div className="font-bold border-b border-white/5 pb-1 mb-2 text-neutral-500 uppercase tracking-widest flex items-center">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping mr-2" />
                    <span>SECURE TUNNEL DISPATCH SEQUENCE LOGS</span>
                  </div>
                  <div className="space-y-1 text-left">
                    {submitLogs.map((log, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start space-x-1.5 ${
                          log.type === 'success' ? 'text-emerald-400 font-semibold' : 'text-neutral-400'
                        }`}
                      >
                        <span style={{ color: currentTheme.accent }}>[UPLINK]</span>
                        <span>{log.text}</span>
                      </div>
                    ))}
                    {submitSuccess && (
                      <div className="text-emerald-400 font-bold flex items-center space-x-1 mt-1 font-sans text-xs">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mr-1" />
                        <span>QUANTUM ENCRYPTED TRANSMISSION HAS BEEN REGISTERED. DISPATCH PROTOCOL SUCCESS.</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
