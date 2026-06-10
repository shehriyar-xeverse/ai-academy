import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, CheckCircle2, Sliders, GraduationCap, Compass, Trophy, Flame, Award, Star, Calendar, MessageSquare, Send, Mail, ShieldCheck, KeyRound, ArrowRight } from 'lucide-react';
import { AvatarConfig, ChatMessage } from '../types';

interface ProfileProps {
  isLoggedIn: boolean;
  studentName: string;
  onLoginSuccess: (name: string) => void;
  onToggleLogin: () => void;
  onNavigate: (page: string) => void;
}

export default function Profile({ isLoggedIn, studentName, onLoginSuccess, onToggleLogin, onNavigate }: ProfileProps) {
  // Login Page simulation states
  const [typedEmail, setTypedEmail] = useState('');
  const [typedName, setTypedName] = useState('');
  const [loginFeedback, setLoginFeedback] = useState(false);

  // Avatar Builder states
  const [avatar, setAvatar] = useState<AvatarConfig>({
    bgColor: 'from-cyan-500 to-blue-600',
    hairType: 'spiky',
    hairColor: 'text-amber-400',
    outfitColor: 'from-orange-500 to-red-600',
    glassesStyle: 'round',
    accessory: 'none',
  });

  const [scholarBio, setScholarBio] = useState('Navigating WebGL orbits and studying multidimensional attention matrices.');
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Ticket dispatcher states
  const [ticketName, setTicketName] = useState('');
  const [ticketMail, setTicketMail] = useState('');
  const [ticketMsg, setTicketMsg] = useState('');
  const [ticketSent, setTicketSent] = useState(false);

  // Companion Chatbot states
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-profile-init-1',
      sender: 'assistant',
      text: "Waving hello! I am Alex, your companion! Type keywords like 'study', 'badge', 'error', 'marks' or 'grade' to trigger interactive answers!",
      timestamp: 'Just now',
    },
  ]);

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const handleUpdateAvatar = (updates: Partial<AvatarConfig>) => {
    setAvatar((prev) => ({ ...prev, ...updates }));
  };

  const handleSaveAvatar = (e: React.FormEvent) => {
    e.preventDefault();
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!typedName || !typedEmail) return;

    setLoginFeedback(true);
    setTimeout(() => {
      onLoginSuccess(typedName);
      setLoginFeedback(false);
    }, 1200);
  };

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketName || !ticketMail || !ticketMsg) return;

    setTicketSent(true);
    setTicketName('');
    setTicketMail('');
    setTicketMsg('');
    setTimeout(() => setTicketSent(false), 4000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput;
    const userMsg: ChatMessage = {
      id: `chat-usr-${Date.now()}`,
      sender: 'user',
      text: userText,
      timestamp: 'Just now',
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setChatInput('');

    setTimeout(() => {
      let replyText = "Fascinating query! I am mapping learning parameters right here. Go to the 'Courses' page for lessons regarding canvas loops & neural nets!";
      const lower = userText.toLowerCase();

      if (lower.includes('error') || lower.includes('bug') || lower.includes('fail')) {
        replyText = "CPU compilation glitch? Check your manual ResizeObservers & Three.js disposals to restore structural harmony!";
      } else if (lower.includes('study') || lower.includes('notes') || lower.includes('archives')) {
        replyText = "Our study library is loaded! Check standard category tabs like 'Coding' or 'AI' to read Cartesian planes or Scale Dot mathematical proofs!";
      } else if (lower.includes('badge') || lower.includes('medal') || lower.includes('star')) {
        replyText = "Earn star badges such as CADET_V1 by answering sequential quizzes in the Quiz Arena!";
      } else if (lower.includes('grade') || lower.includes('score') || lower.includes('marks')) {
        replyText = "Once you submit a regression coordinate log inside 'Assignments', high-tech mentors issue feedback metrics. You will claim an A+!";
      } else if (lower.includes('hello') || lower.includes('hi')) {
        replyText = "Greetings cadet explorer! Ready to configure your backpack spectacles or check live telemetry?";
      }

      const companionMsg: ChatMessage = {
        id: `chat-alex-${Date.now()}`,
        sender: 'assistant',
        text: replyText,
        timestamp: 'Just now',
      };

      setChatMessages((prev) => [...prev, companionMsg]);
    }, 800);
  };

  // Static performance data
  const telemetryMetrics = [
    { title: 'Gathered Stars', value: '45 ★', desc: 'From Active Quizzes', color: 'text-amber-400' },
    { title: 'Studied Lessons', value: '8 Core', desc: 'WebGL & Attention Weights', color: 'text-cyan-400' },
    { title: 'Completed Projects', value: '2 Uploads', desc: 'Orbits Compiled', color: 'text-purple-400' },
  ];

  const earnedBadges = [
    { name: '★ WEBGL_CADET_V1', desc: 'Drawn 2D orbits with accurate trajectories', color: 'from-cyan-950 to-blue-900 border-cyan-500/30 text-cyan-300' },
    { name: '★ TENSOR_FOUND_V1', desc: 'Verified scale dot attention matrices formulas', color: 'from-purple-950 to-indigo-900 border-purple-500/30 text-purple-300' },
    { name: '★ CHAT_ODYSSEY', desc: 'Invocated Companion chatbot telemetry link', color: 'from-emerald-950 to-teal-900 border-emerald-500/30 text-emerald-300' },
  ];

  const futureLiveLectures = [
    { title: 'Interactive Seminar: Optimizing soft tensor weights', date: 'June 08 • 7:00 PM UTC', mentor: 'Dr. Aaron Vance' },
    { title: 'Live Lab: Advanced Orbit Canvas Coordinates', date: 'June 12 • 4:00 PM UTC', mentor: 'Prof. Evelyn Thrasher' },
  ];

  // Render Login Card if not authenticated
  if (!isLoggedIn) {
    return (
      <div id="student-onboarding-portal" className="max-w-md mx-auto my-12 relative z-20 text-left">
        <div className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md space-y-6 shadow-2xl">
          <div className="text-center space-y-2">
            <div className="inline-flex p-3 rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-600 mb-2">
              <KeyRound className="h-6 w-6 text-white animate-pulse" />
            </div>
            <h3 className="font-sans font-black text-2xl text-white tracking-tight">Onboarding Desk</h3>
            <p className="text-slate-300 text-xs">
              Access your digital student badge and telemetry stats. Let's calibrate your academic portal!
            </p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wide">
                Scholar Codename
              </label>
              <input
                type="text"
                placeholder="eg: Nero Scholar"
                value={typedName}
                onChange={(e) => setTypedName(e.target.value)}
                className="w-full h-11 bg-slate-950 border border-slate-850 rounded-xl px-4 text-xs text-white focus:outline-none focus:border-cyan-500"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wide">
                Security Student Mail
              </label>
              <input
                type="email"
                placeholder="eg: you@vu.edu.pk"
                value={typedEmail}
                onChange={(e) => setTypedEmail(e.target.value)}
                className="w-full h-11 bg-slate-950 border border-slate-850 rounded-xl px-4 text-xs text-white focus:outline-none focus:border-cyan-500"
                required
              />
            </div>

            {loginFeedback && (
              <div className="p-3 bg-indigo-950/40 border border-indigo-400/20 rounded-xl flex items-center gap-2.5">
                <ShieldCheck className="h-4.5 w-4.5 text-indigo-400 animate-spin" />
                <span className="text-[10px] text-indigo-300 font-mono">Calibrating cryptographic identity nodes...</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-white text-xs font-mono font-bold uppercase tracking-wider hover:scale-[1.01] active:scale-95 transition-all cursor-pointer shadow-lg shadow-indigo-500/10 flex items-center justify-center gap-2"
            >
              <span>Verify Cryptographic Credentials</span>
              <ArrowRight className="h-4.5 w-4.5" />
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Render main consolidated dashboards
  return (
    <div id="unified-profile-workspace" className="max-w-6xl mx-auto my-4 relative z-20 text-left space-y-14">
      
      {/* SECTION 1: WELCOME HERO & TELEMETRY metrics */}
      <section id="profile-heading-section" className="border-b border-slate-850 pb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="px-3 py-1 rounded-full bg-cyan-900/40 border border-cyan-400/30 text-cyan-300 font-mono text-[10px] font-semibold uppercase tracking-wider">
              ★ Active Scholar Portal
            </span>
            <h2 className="font-sans font-extrabold text-3xl text-white mt-3 tracking-tight">
              Welcome back, <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">{studentName}</span>!
            </h2>
            <p className="text-xs text-indigo-200 mt-1">
              Analyze metrics telemetry, modify vector badges, and interact with Companion Alex.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={onToggleLogin}
              className="px-4 py-2 bg-slate-950 border border-slate-800 hover:border-red-400/30 rounded-lg text-indigo-300 hover:text-red-400 text-xs font-mono font-bold uppercase cursor-pointer transition-colors"
            >
              Disconnect Session
            </button>
          </div>
        </div>

        {/* Bento telemetry counters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
          {telemetryMetrics.map((met, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-900/40 border border-slate-850 backdrop-blur-md flex flex-col justify-between hover:border-indigo-500/20 transition-all duration-300"
            >
              <span className="text-[9px] uppercase font-mono text-slate-400 block tracking-widest font-extrabold">
                {met.title}
              </span>
              <div className={`font-mono text-2xl font-black ${met.color} mt-2 mb-1`}>
                {met.value}
              </div>
              <span className="text-[11px] text-slate-300 leading-none">{met.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: VECTOR AVATAR CUSTOMIZER */}
      <section id="profile-avatar-section" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* SVG Live Vector Preview Panel */}
        <div 
          className="lg:col-span-4 bg-slate-950/85 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-md text-center flex flex-col items-center relative overflow-hidden group shadow-lg"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '14px 14px' }}
        >
          {/* Laser neon header line */}
          <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block mb-4 font-bold self-start">
            🛡️ Live Badge Identity Vector:
          </span>

          {/* Core SVG Avatar construct */}
          <div className="relative w-40 h-40 rounded-full overflow-hidden bg-slate-950 border-4 border-slate-850 flex items-center justify-center mb-5 shadow-inner">
            <div className={`absolute inset-0 bg-gradient-to-br ${avatar.bgColor}`} />

            <svg viewBox="0 0 100 100" className="w-36 h-36 z-10 select-none">
              {/* Ears */}
              <circle cx="28" cy="52" r="4.5" fill="#ffd1b3" />
              <circle cx="72" cy="52" r="4.5" fill="#ffd1b3" />

              {/* Head Base */}
              <circle cx="50" cy="52" r="22" fill="#ffd1b3" />

              {/* Hair setups selection */}
              {avatar.hairType === 'spiky' && (
                <path d="M28 42 L32 25 L40 32 L50 20 L60 32 L68 25 L72 42 Z" fill="#facc15" />
              )}
              {avatar.hairType === 'curly' && (
                <g fill="#facc15">
                  <circle cx="36" cy="36" r="7.5" />
                  <circle cx="50" cy="31" r="7.5" />
                  <circle cx="64" cy="36" r="7.5" />
                  <circle cx="30" cy="43" r="6" />
                  <circle cx="70" cy="43" r="6" />
                </g>
              )}
              {avatar.hairType === 'crew' && (
                <path d="M28 44 C28 30, 72 30, 72 44 Z" fill="#facc15" />
              )}
              {avatar.hairType === 'academic-cap' && (
                <g>
                  <ellipse cx="50" cy="31" rx="17" ry="5.5" fill="#1e293b" />
                  <polygon points="50,21 72,29 50,37 28,29" fill="#0f172a" />
                  <path d="M68,29 L72,38" stroke="#eab308" strokeWidth="1.2" />
                  <circle cx="72" cy="38" r="1.2" fill="#eab308" />
                </g>
              )}

              {/* Shiny Scholar Eyes */}
              <circle cx="41" cy="52" r="3" fill="#ffffff" />
              <circle cx="41" cy="52" r="1.5" fill="#1e293b" />
              <circle cx="59" cy="52" r="3" fill="#ffffff" />
              <circle cx="59" cy="52" r="1.5" fill="#1e293b" />

              {/* Specs Glassware layout */}
              {avatar.glassesStyle === 'round' && (
                <g stroke="#06b6d4" strokeWidth="2" fill="none">
                  <circle cx="41" cy="52" r="7" />
                  <circle cx="59" cy="52" r="7" />
                  <line x1="48" y1="52" x2="52" y2="52" />
                </g>
              )}
              {avatar.glassesStyle === 'classic' && (
                <g stroke="#d946ef" strokeWidth="2.2" fill="none">
                  <rect x="34" y="46" width="13.5" height="11" rx="1.5" />
                  <rect x="52.5" y="46" width="13.5" height="11" rx="1.5" />
                  <line x1="47.5" y1="51.5" x2="52.5" y2="51.5" />
                </g>
              )}
              {avatar.glassesStyle === 'adventurer' && (
                <g stroke="#e2e8f0" strokeWidth="2.5" fill="none">
                  <polygon points="33,44 47,44 44,57 35,57" />
                  <polygon points="53,44 67,44 65,57 56,57" />
                  <line x1="47" y1="48" x2="53" y2="48" />
                </g>
              )}

              {/* Smile mouth curve */}
              <path d="M44 61 Q50 66 56 61" stroke="#475569" strokeWidth="1.8" strokeLinecap="round" fill="none" />

              {/* Academic tunic outfit */}
              <path d="M26 80 C26 71, 74 71, 74 80 L76 100 L24 100 Z" fill="#6366f1" />
              {/* High precision coordinates v-collar */}
              <polygon points="50,71 43,79 50,87 57,79" fill="#ffd1b3" />
            </svg>
          </div>

          <h4 className="font-sans font-black text-white text-md tracking-tight">{studentName}</h4>
          <span className="font-mono text-[9px] uppercase tracking-wider text-cyan-400 mt-1">
            Verified AI Scholar
          </span>
          <p className="text-[11px] text-slate-300 mt-3 font-sans italic">"{scholarBio}"</p>
        </div>

        {/* Configurations edit controls */}
        <div 
          className="lg:col-span-8 bg-slate-950/85 border border-slate-800/85 p-6 sm:p-8 rounded-2xl backdrop-blur-md relative overflow-hidden group shadow-md"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '16px 16px' }}
        >
          {/* Laser neon header line */}
          <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          <form onSubmit={handleSaveAvatar} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pb-5 border-b border-slate-850">
              <div className="space-y-1">
                <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wide">
                  Edit Scholar Persona Name
                </label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => onLoginSuccess(e.target.value)}
                  className="w-full h-11 bg-slate-950 border border-slate-850 rounded-xl px-4 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wide">
                  Edit Academy Bio / Mission
                </label>
                <input
                  type="text"
                  value={scholarBio}
                  onChange={(e) => setScholarBio(e.target.value)}
                  className="w-full h-11 bg-slate-950 border border-slate-850 rounded-xl px-4 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h5 className="text-[10px] font-mono uppercase font-bold text-slate-400 flex items-center gap-1.5">
                <Sliders className="h-4 w-4 text-cyan-400" />
                <span>Adjust Badge Vector Coordinates</span>
              </h5>

              {/* Hairstyle chooser */}
              <div className="space-y-1.5">
                <span className="text-[10px] text-slate-300 font-medium block">Select Scholar Hairstyle:</span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { id: 'spiky', label: 'Playful Spiky' },
                    { id: 'curly', label: 'Artistic Curly' },
                    { id: 'crew', label: 'Symmetric Crew' },
                    { id: 'academic-cap', label: 'Academic Cap' },
                  ].map((style) => (
                    <button
                      key={style.id}
                      type="button"
                      onClick={() => handleUpdateAvatar({ hairType: style.id as any })}
                      className={`px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider border cursor-pointer ${
                        avatar.hairType === style.id
                          ? 'bg-cyan-950 text-cyan-400 border-cyan-500/30 font-extrabold'
                          : 'bg-slate-950 text-slate-400 border-slate-850 hover:border-slate-800'
                      }`}
                    >
                      {style.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Eyewear chooser */}
              <div className="space-y-1.5 mt-2">
                <span className="text-[10px] text-slate-300 font-medium block">Select Eyewear Frame Design:</span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { id: 'none', label: 'No Spectacles' },
                    { id: 'round', label: 'Academic Round' },
                    { id: 'classic', label: 'Classic Square' },
                    { id: 'adventurer', label: 'Quest Goggles' },
                  ].map((specs) => (
                    <button
                      key={specs.id}
                      type="button"
                      onClick={() => handleUpdateAvatar({ glassesStyle: specs.id as any })}
                      className={`px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider border cursor-pointer ${
                        avatar.glassesStyle === specs.id
                          ? 'bg-purple-950 text-purple-400 border-purple-500/30 font-extrabold'
                          : 'bg-slate-950 text-slate-400 border-slate-850 hover:border-slate-800'
                      }`}
                    >
                      {specs.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Background gradient chooser */}
              <div className="space-y-1.5 mt-2">
                <span className="text-[10px] text-slate-300 font-medium block">Background Color Gradients:</span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { style: 'from-cyan-500 to-blue-600', label: 'Oceanic' },
                    { style: 'from-purple-500 to-fuchsia-600', label: 'Quantum' },
                    { style: 'from-emerald-500 to-teal-600', label: 'Emerald' },
                    { style: 'from-amber-500 to-orange-600', label: 'Nebula' },
                  ].map((bg) => (
                    <button
                      key={bg.style}
                      type="button"
                      onClick={() => handleUpdateAvatar({ bgColor: bg.style })}
                      className={`px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider border cursor-pointer ${
                        avatar.bgColor === bg.style
                          ? 'bg-indigo-950 text-indigo-400 border-indigo-500/30'
                          : 'bg-slate-950 text-slate-400 border-slate-850 hover:border-slate-800'
                      }`}
                    >
                      {bg.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {saveSuccess && (
              <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs font-mono text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Scholar ID cryptographic credentials updated successfully!</span>
              </div>
            )}

            <div className="flex justify-end pt-4 border-t border-slate-850 mt-4">
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-600 to-fuchsia-600 text-white font-bold text-xs uppercase tracking-wider hover:scale-[1.01] transition-transform duration-200 cursor-pointer shadow-lg inline-flex items-center gap-1.5"
              >
                <Sparkles className="h-4 w-4 text-amber-300" />
                <span>Save credentials</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* SECTION 3: EARNED STAR BADGES SHELF & CALENDARS */}
      <section id="profile-achievements-section" className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4">
        {/* Achievements Shelf */}
        <div 
          className="md:col-span-8 bg-slate-950/85 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-md relative overflow-hidden group shadow-md"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '14px 14px' }}
        >
          {/* Laser neon header line */}
          <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="flex items-center gap-2 mb-6 border-b border-slate-850 pb-3">
            <Award className="h-5 w-5 text-cyan-400" />
            <h4 className="font-sans font-bold text-lg text-white">Your Earned Scholar Badges Shelf</h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {earnedBadges.map((badge, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border bg-gradient-to-b flex flex-col justify-between h-32 border-slate-850 ${badge.color}`}
              >
                <div className="p-1 w-fit bg-slate-950/60 rounded-md">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 animate-pulse" />
                </div>
                <div>
                  <h5 className="font-mono text-[10px] font-bold truncate">{badge.name}</h5>
                  <p className="text-[9px] text-slate-300 mt-1 leading-snug">
                    {badge.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live calendars of lectures */}
        <div 
          className="md:col-span-4 bg-slate-950/85 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-md relative overflow-hidden group shadow-md"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '14px 14px' }}
        >
          {/* Laser neon header line */}
          <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-purple-500 to-fuchsia-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="flex items-center gap-2 mb-6 border-b border-slate-850 pb-3">
            <Calendar className="h-5 w-5 text-purple-400" />
            <h4 className="font-sans font-bold text-lg text-white">Calendar Classes</h4>
          </div>

          <div className="space-y-4">
            {futureLiveLectures.map((evt, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-850 space-y-1">
                <span className="text-[8px] uppercase font-mono tracking-widest text-cyan-400 block font-bold">
                  ★ Broadcast Live
                </span>
                <h5 className="font-sans font-bold text-xs text-white leading-tight">
                  {evt.title}
                </h5>
                <p className="text-[9px] text-slate-400 font-mono mt-2">{evt.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: COMPANION ALEX CHAT & TICKET OFFICE */}
      <section id="profile-support-section" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch pt-4">
        {/* Support ticketing log */}
        <div 
          className="md:col-span-5 bg-slate-950/85 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-md flex flex-col justify-between relative overflow-hidden group shadow-md"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '14px 14px' }}
        >
          {/* Laser neon header line */}
          <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-indigo-500 to-fuchsia-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          <form onSubmit={handleTicketSubmit} className="space-y-4">
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 block mb-2 font-bold">
              ✉️ Submit Support Ticket:
            </span>

            <div className="space-y-1">
              <label className="block text-[10px] font-mono font-semibold text-slate-400">Your Codename Name</label>
              <input
                type="text"
                value={ticketName}
                onChange={(e) => setTicketName(e.target.value)}
                placeholder="Nero Scholar"
                className="w-full h-11 bg-slate-950 border border-slate-850 rounded-xl px-4 text-xs text-white focus:outline-none focus:border-cyan-500"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-mono font-semibold text-slate-400">Security Email Address</label>
              <input
                type="email"
                value={ticketMail}
                onChange={(e) => setTicketMail(e.target.value)}
                placeholder="you@academy.edu"
                className="w-full h-11 bg-slate-950 border border-slate-850 rounded-xl px-4 text-xs text-white focus:outline-none focus:border-cyan-500"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-mono font-semibold text-slate-400">Compile Glitch Description</label>
              <textarea
                value={ticketMsg}
                onChange={(e) => setTicketMsg(e.target.value)}
                placeholder="Describe coordinate mapping bugs here..."
                rows={3}
                className="w-full bg-slate-950 border border-slate-850 rounded-xl p-4 text-xs text-white focus:outline-none focus:border-cyan-500 resize-none"
                required
              />
            </div>

            {ticketSent && (
              <div className="p-3 bg-emerald-950/20 border border-emerald-500/20 text-xs text-emerald-300 rounded-xl font-mono">
                🚀 Support log dispatched! We are compiling coordinates.
              </div>
            )}

            <button
              type="submit"
              className="w-full h-11 rounded-xl bg-slate-950 border border-slate-850 hover:border-slate-700 text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-300 hover:text-white transition-all cursor-pointer"
            >
              Dispatch Ticket Log
            </button>
          </form>
        </div>

        {/* Mascot companion active chat */}
        <div 
          className="md:col-span-7 bg-slate-950/85 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-md flex flex-col h-[400px] relative overflow-hidden group shadow-md"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '14px 14px' }}
        >
          {/* Laser neon header line */}
          <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-600 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="flex items-center justify-between pb-3 border-b border-slate-850 mb-4 shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <h4 className="font-sans font-bold text-sm text-white">Alex Companion Live Active</h4>
            </div>
            <span className="text-[9px] uppercase font-mono text-cyan-400 tracking-wider">
              ✦ Speech Link Online
            </span>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto pr-1 space-y-3 pb-3">
            {chatMessages.map((msg) => {
              const isAlex = msg.sender === 'assistant';
              return (
                <div key={msg.id} className={`flex ${isAlex ? 'justify-start' : 'justify-end'}`}>
                  <div
                    className={`max-w-[85%] rounded-xl p-3 text-xs leading-relaxed font-sans text-left ${
                      isAlex
                        ? 'bg-slate-950 border border-slate-850 text-slate-200'
                        : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                    }`}
                  >
                    {isAlex && (
                      <span className="text-[8px] uppercase font-mono text-cyan-400 font-extrabold tracking-wider block mb-1">
                        ★ Alex Companion
                      </span>
                    )}
                    <span>{msg.text}</span>
                  </div>
                </div>
              );
            })}
            <div ref={chatEndRef} />
          </div>

          {/* Typing inputs */}
          <form onSubmit={handleSendMessage} className="border-t border-slate-800 pt-3 flex gap-2 shrink-0">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask Alex eg: 'badges', 'errors', 'studies'..."
              className="flex-1 h-11 bg-slate-950 border border-slate-850 rounded-xl px-4 text-xs text-white focus:outline-none focus:border-cyan-500"
            />
            <button
              type="submit"
              className="w-11 h-11 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 active:scale-95 transition-all flex items-center justify-center shrink-0 cursor-pointer"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
