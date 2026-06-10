import { useEffect, useRef } from 'react';
import { Compass, BookOpen, Clock, Award, Star, ArrowRight, CheckCircle2, Trophy, Flame } from 'lucide-react';
import { PageId } from '../types';
import { BATCHES, LANDING_SECTIONS } from '../data';

interface HomeProps {
  onNavigate: (page: PageId) => void;
  onSectionReveal: (sectionId: string) => void;
  activeSection: string;
}

export default function Home({ onNavigate, onSectionReveal, activeSection }: HomeProps) {
  // Use IntersectionObservers to track which adventure section is currently center-stage
  useEffect(() => {
    const sectionIds = ['hero', 'guide', 'worlds', 'roadmap', 'testimonials', 'success', 'cta'];
    const observers = sectionIds.map((id) => {
      const element = document.getElementById(`section-${id}`);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
              onSectionReveal(id);
            }
          });
        },
        {
          root: null,
          threshold: [0.1, 0.3, 0.5, 0.7],
          rootMargin: '-10% 0px -20% 0px', // Center focused check
        }
      );

      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((item) => {
        if (item) item.observer.unobserve(item.element);
      });
    };
  }, [onSectionReveal]);

  return (
    <div id="homescreen-view" className="relative w-full overflow-hidden text-slate-100">
      {/* 1. HERO SECTION */}
      <section
        id="section-hero"
        className="relative min-h-[92vh] flex flex-col justify-center items-start px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-20 py-12"
      >
        <div className="max-w-2xl text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-900/45 border border-indigo-400/30 text-indigo-300 font-mono text-xs font-semibold tracking-wider">
            <Flame className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
            {LANDING_SECTIONS[0].badge}
          </div>

          <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-none">
            Learn Technology Through{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Adventure
            </span>
          </h1>

          <p className="text-slate-300 font-sans text-base sm:text-lg leading-relaxed max-w-xl">
            {LANDING_SECTIONS[0].subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              id="hero-cta-start"
              onClick={() => onNavigate('courses')}
              className="px-6 h-13 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-600 to-fuchsia-600 font-bold text-sm uppercase tracking-wider text-white hover:scale-[1.03] active:scale-95 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Start Quest</span>
              <ArrowRight className="h-4.5 w-4.5" />
            </button>
            <button
              id="hero-cta-notes"
              onClick={() => onNavigate('courses')}
              className="px-6 h-13 rounded-xl bg-slate-900/80 border border-slate-700/60 hover:bg-slate-800/80 text-sm font-semibold tracking-wide text-indigo-200 hover:text-white hover:border-indigo-400/45 transition-all cursor-pointer"
            >
              Explore Study Archives
            </button>
          </div>
        </div>
      </section>

      {/* 2. MEET YOUR ADVENTURER COMPANION */}
      <section
        id="section-guide"
        className="relative min-h-[80vh] flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 h-[300px] pointer-events-none md:block hidden" />
          <div className="md:col-span-7 space-y-6">
            <span className="px-3 py-1 rounded-full bg-purple-900/40 border border-purple-400/30 text-purple-300 font-mono text-xs font-semibold uppercase tracking-wider">
              {LANDING_SECTIONS[1].badge}
            </span>

            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Meet Alex, Your Interactive{' '}
              <span className="text-cyan-400 font-extrabold">Learning Companion</span>
            </h2>

            <p className="text-slate-300 font-sans text-base leading-relaxed">
              {LANDING_SECTIONS[1].subtitle}
            </p>

            <div className="p-5 rounded-2xl bg-indigo-950/30 border border-indigo-900/40 backdrop-blur-md">
              <span className="mono text-xs uppercase text-cyan-400 tracking-wider font-bold block mb-2">
                🌟 Explorer Equipment Upgrades:
              </span>
              <ul className="space-y-2.5 text-sm text-slate-200">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Dual lenses configured for reading orbital matrix streams.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Waterproof canvas backpack equipped with three ancient academic spellbooks.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Glowing cyan student tablet mapping multidimensional data clusters.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LEARNING WORLDS */}
      <section
        id="section-worlds"
        className="relative min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 py-16"
      >
        <div className="text-center space-y-4 mb-12 max-w-2xl mx-auto">
          <span className="px-3 py-1 rounded-full bg-emerald-900/40 border border-emerald-400/30 text-emerald-300 font-mono text-xs font-semibold uppercase tracking-wider">
            {LANDING_SECTIONS[2].badge}
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Step into the 4 Learning Worlds
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Select a pathway file below. Alex's holographic torch adapts to highlight your path!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto w-full">
          {[
            {
              id: 'world-coding',
              title: 'Creative Coding World',
              icon: Compass,
              gradient: 'from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/25 hover:to-blue-500/25',
              borderColor: 'border-cyan-500/20 hover:border-cyan-400/50',
              spotColor: 'text-cyan-400',
              desc: 'Master the rendering loop coordinates, physics simulations, and responsive matrix transformations.',
              syllabus: ['Canvas Drawing API', 'Vector Physics Basics', 'Three.js Camera Orbits']
            },
            {
              id: 'world-ai',
              title: 'Artificial Intelligence World',
              icon: Star,
              gradient: 'from-purple-500/10 to-fuchsia-500/10 hover:from-purple-500/25 hover:to-fuchsia-500/25',
              borderColor: 'border-purple-500/20 hover:border-purple-400/50',
              spotColor: 'text-purple-400',
              desc: 'Animate query structures, query key weights, attention multipliers, and deep model architectures.',
              syllabus: ['Attention Mechanisms', 'transformer networks', 'LLM state parameters']
            },
            {
              id: 'world-data',
              title: 'Data Science Cosmos',
              icon: BookOpen,
              gradient: 'from-emerald-500/10 to-teal-500/10 hover:from-emerald-500/25 hover:to-teal-500/25',
              borderColor: 'border-emerald-500/20 hover:border-emerald-400/50',
              spotColor: 'text-emerald-400',
              desc: 'Leverage reduction strategies (PCA, standard reduction) to render conceptual data clusters.',
              syllabus: ['Multidimensional Data', 'Linear regression models', 'Cluster Plotting']
            },
            {
              id: 'world-future',
              title: 'Future Tech Horizons',
              icon: Clock,
              gradient: 'from-amber-500/10 to-orange-500/10 hover:from-amber-500/25 hover:to-orange-500/25',
              borderColor: 'border-amber-500/20 hover:border-amber-400/50',
              spotColor: 'text-amber-400',
              desc: 'Expose cryptographic puzzles, ledger registers, and global quantum state algorithms.',
              syllabus: ['Web3 Cryptography', 'Quantum bits behavior', 'Decentralized nodes']
            }
          ].map((world) => {
            const Icon = world.icon;
            return (
              <div
                key={world.id}
                id={`world-card-${world.id}`}
                className={`p-6 rounded-2xl border ${world.borderColor} bg-slate-950/80 [background-image:radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:14px_14px] backdrop-blur-md transition-all duration-300 relative overflow-hidden group hover:-translate-y-1.5 hover:shadow-xl hover:shadow-indigo-500/5 flex flex-col justify-between`}
              >
                {/* Futuristic Cyber Laser neon highlight */}
                <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-1 right-1 w-12 h-12 bg-indigo-500/5 rounded-full blur-xl pointer-events-none" />
                <div>
                  <div className={`p-3 rounded-xl bg-slate-950/80 w-fit mb-5 border ${world.borderColor}`}>
                    <Icon className={`h-6 w-6 ${world.spotColor}`} />
                  </div>
                  <h3 className="font-sans font-bold text-lg text-white group-hover:text-cyan-400 transition-colors duration-200">
                    {world.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed font-sans font-normal mb-6">
                    {world.desc}
                  </p>
                </div>

                <div className="border-t border-slate-800/60 pt-4 mt-auto">
                  <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-slate-400 block mb-2">
                    🎓 Key Syllabus topics:
                  </span>
                  <div className="flex flex-col gap-1.5">
                    {world.syllabus.map((topic, index) => (
                      <span key={index} className="text-xs text-slate-300 flex items-center gap-1.5">
                        <CheckCircle2 className={`h-3 w-3 ${world.spotColor}`} />
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. LEARNING JOURNEY ROADMAP */}
      <section
        id="section-roadmap"
        className="relative min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 py-16"
      >
        <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto">
          <span className="px-3 py-1 rounded-full bg-cyan-900/40 border border-cyan-400/30 text-cyan-300 font-mono text-xs font-semibold uppercase tracking-wider">
            {LANDING_SECTIONS[3].badge}
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            The Explorer's Academic Roadmap
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            As your viewport scrolls through the stars, watch your milestones glow in sync!
          </p>
        </div>

        {/* Vertical tracking path timeline */}
        <div className="relative border-l-2 border-slate-800/80 max-w-2xl mx-auto pl-6 sm:pl-10 space-y-12">
          {/* Tracking glow ball indicator */}
          <div className="absolute top-0 -left-[5px] w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-ping" />

          {[
            {
              id: 'roadmap-node-1',
              title: 'Beginner Cadet Core',
              subtitle: 'Step 1: Variables, drawing loops, basic coordinate math, logic structures.',
              desc: 'Learn standard programming syntax, conditional statements, and procedural grid coordinate math.',
              color: 'border-cyan-500/30 text-cyan-400',
              tag: 'Beginner Phase'
            },
            {
              id: 'roadmap-node-2',
              title: 'Intermediate Pathfinder',
              subtitle: 'Step 2: Linear modeling, state variables, WebGL context grids.',
              desc: 'Understand matrix manipulations, vectors dot-product mechanics, and basic neural arrays.',
              color: 'border-purple-500/30 text-purple-400',
              tag: 'Intermediate Phase'
            },
            {
              id: 'roadmap-node-3',
              title: 'Hands-on Codex Projects',
              subtitle: 'Step 3: Solar orbital animations, neural regression equations.',
              desc: 'Apply your theoretical lessons by uploading genuine project files directly inside homework queues.',
              color: 'border-emerald-500/30 text-emerald-400',
              tag: 'Practical Projects'
            },
            {
              id: 'roadmap-node-4',
              title: 'Global Scholar Certification',
              subtitle: 'Step 4: Cryptographic credentials, verified peer badges.',
              desc: 'Claim your signed smart certification, showing off your customized adventurer badge to global peers!',
              color: 'border-amber-500/30 text-amber-400',
              tag: 'Global Scholar Certificate'
            }
          ].map((milestone, idx) => {
            return (
              <div
                key={milestone.id}
                id={milestone.id}
                className="relative p-6 rounded-2xl bg-slate-950/80 [background-image:radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:16px_16px] border border-slate-800/80 backdrop-blur-md group hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-400/5 transition-all duration-300"
              >
                {/* Symmetric Cyber tech border accent */}
                <div className="absolute top-0 left-0 w-8 h-[2px] bg-cyan-400" />
                <div className="absolute top-0 left-0 w-[2px] h-8 bg-cyan-400" />
                <div className="absolute top-1/2 right-0 w-12 h-12 bg-cyan-400/5 rounded-full blur-xl pointer-events-none" />
                {/* Node counter label on left margins */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-6 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-900 border-2 border-indigo-500/40 flex items-center justify-center font-mono text-xs font-bold text-white group-hover:border-cyan-400 transition-colors">
                  {idx + 1}
                </div>

                <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                  <span className={`text-[10px] uppercase font-mono tracking-wider font-semibold`}>
                    🛡️ {milestone.tag}
                  </span>
                  <span className="text-xs text-sky-300 font-mono">Module Complete</span>
                </div>

                <h3 className="font-sans font-bold text-lg text-white group-hover:text-cyan-400 transition-colors">
                  {milestone.title}
                </h3>
                <h4 className="text-xs text-slate-300 font-sans tracking-wide font-medium mt-1">
                  {milestone.subtitle}
                </h4>
                <p className="text-xs text-indigo-200 mt-2 leading-relaxed">
                  {milestone.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. STUDENT TESTIMONIALS */}
      <section
        id="section-testimonials"
        className="relative min-h-[90vh] flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 py-16"
      >
        <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto">
          <span className="px-3 py-1 rounded-full bg-purple-900/40 border border-purple-400/30 text-purple-300 font-mono text-xs font-semibold uppercase tracking-wider">
            ★ Verified Peer Testimonials
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Scholars Share Their Odyssey
          </h2>
          <p className="text-slate-300 text-sm">
            Hear from interactive coders who successfully compiled orbits and certified their cryptographic IDs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              id: 'testimonial-1',
              name: 'Elena Rostova',
              tag: 'Web3 & Graphics Dev',
              text: 'The interactive 3D guide Alex is mind-blowing! Watching him point towards vector syllabus clusters and blink when I hover made render coordinates math click instantly.',
              stars: '★★★★★'
            },
            {
              id: 'testimonial-2',
              name: 'Marcus Vance',
              tag: 'AI Research Assistant',
              text: 'The Forbidden Archives note summaries are the best resource for learning scale dot Attention matrices and LLM normalization pathways. Highly visual and deeply educational.',
              stars: '★★★★★'
            },
            {
              id: 'testimonial-3',
              name: 'Yuki Takahashi',
              tag: 'Fullstack Apprentice',
              text: 'Submitting my orbital regression canvas code of three.js inside Assignments and receiving instant feedback was extremely seamless. The user interface layout feels absolutely premium.',
              stars: '★★★★★'
            }
          ].map((feat) => (
            <div
              key={feat.id}
              id={feat.id}
              className="p-6 rounded-2xl bg-slate-950/80 [background-image:radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:14px_14px] border border-slate-800/65 hover:border-purple-400/50 transition-all duration-300 shadow-xl group hover:shadow-purple-500/10 cursor-pointer text-left relative overflow-hidden"
            >
              {/* Laser neon header line */}
              <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-indigo-500 to-fuchsia-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-purple-500/5 rounded-full blur-xl pointer-events-none" />
              <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest pl-2 border-l-2 border-amber-500 mb-4 flex items-center justify-between">
                <span>{feat.tag}</span>
                <span className="text-amber-400">{feat.stars}</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-sans font-normal mb-6 min-h-[100px] italic">
                "{feat.text}"
              </p>
              <div className="border-t border-slate-800/60 pt-4">
                <span className="font-sans font-bold text-white text-md tracking-tight block group-hover:text-cyan-400 transition-colors">
                  {feat.name}
                </span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Verified Cadet ID</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. SUCCESS GRADUATE RECORDS */}
      <section
        id="section-success"
        className="relative min-h-[75vh] flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 space-y-6">
            <span className="px-3 py-1 rounded-full bg-emerald-900/40 border border-emerald-400/30 text-emerald-300 font-mono text-xs font-semibold uppercase tracking-wider">
              {LANDING_SECTIONS[5].badge}
            </span>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Explorer Success Achievements
            </h2>
            <p className="text-indigo-200 text-sm sm:text-base leading-relaxed">
              Our graduates now code solar orbits and analyze multidimensional embeddings across global high-tech fields. We support open verification!
            </p>

            {/* Micro counting metrics */}
            <div id="metrics-panel-counters" className="grid grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/80 [background-image:radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:14px_14px] shadow-md relative overflow-hidden group">
                <div className="absolute top-0 inset-x-0 h-[2px] bg-cyan-400/60" />
                <span className="block font-mono text-2xl sm:text-3xl font-extrabold text-cyan-400">
                  15K+
                </span>
                <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">
                  Verified Scholars
                </span>
              </div>
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/80 [background-image:radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:14px_14px] shadow-md relative overflow-hidden group">
                <div className="absolute top-0 inset-x-0 h-[2px] bg-purple-400/60" />
                <span className="block font-mono text-2xl sm:text-3xl font-extrabold text-purple-400">
                  480+
                </span>
                <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">
                  Orbits Deployed
                </span>
              </div>
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/80 [background-image:radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:14px_14px] shadow-md relative overflow-hidden group">
                <div className="absolute top-0 inset-x-0 h-[2px] bg-emerald-400/60" />
                <span className="block font-mono text-2xl sm:text-3xl font-extrabold text-emerald-400">
                  4.95
                </span>
                <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">
                  Academy Rating
                </span>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 pointer-events-none md:block hidden h-[250px]" />
        </div>
      </section>

      {/* 7. FINAL ENROLLMENT CTA */}
      <section
        id="section-cta"
        className="relative min-h-[70vh] flex flex-col justify-center items-center text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-20 py-16"
      >
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-indigo-950/40 backdrop-blur-md space-y-6 max-w-3xl">
          <span className="px-3.5 py-1.5 rounded-full bg-indigo-900/40 border border-indigo-400/30 text-indigo-300 font-mono text-xs font-semibold uppercase tracking-wider">
            {LANDING_SECTIONS[6].badge}
          </span>

          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Ready to Start Your Academy Quest?
          </h2>

          <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
            Register your Student ID today. Receive instant workspace privileges, academic notes archives, and start competing inside our coding arenas.
          </p>

          <button
            id="cta-enroll-btn"
            onClick={() => onNavigate('profile')}
            className="px-8 h-14 rounded-xl bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 text-white font-bold text-sm uppercase tracking-widest hover:scale-[1.03] active:scale-95 transition-all duration-300 shadow-xl shadow-indigo-500/15 cursor-pointer inline-flex items-center gap-2"
          >
            <span>Access Student Desk free</span>
            <ArrowRight className="h-4.5 w-4.5" />
          </button>
        </div>
      </section>
    </div>
  );
}
