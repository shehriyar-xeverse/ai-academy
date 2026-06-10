import React, { useState } from 'react';
import { Search, BookOpen, AlertCircle, Eye, X, BookMarked, Calendar, Clock, User, Sparkles, CheckCircle, AlertTriangle, Compass, Star, ChevronDown, HelpCircle, Layers } from 'lucide-react';
import { STUDY_NOTES, BATCHES } from '../data';
import { StudyNote, Batch } from '../types';

interface CoursesProps {
  currentBatchId: string | null;
  onSelectBatch: (batchId: string) => void;
}

export default function Courses({ currentBatchId, onSelectBatch }: CoursesProps) {
  // Select Batch states
  const [successId, setSuccessId] = useState<string | null>(null);

  // Study Notes states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Coding' | 'AI' | 'Data' | 'Future Tech'>('All');
  const [activeNote, setActiveNote] = useState<StudyNote | null>(null);

  // Course Interactive syllabus expander
  const [expandedSyllabus, setExpandedSyllabus] = useState<string | null>('world-coding');

  // FAQ Accordion states
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categories: ('All' | 'Coding' | 'AI' | 'Data' | 'Future Tech')[] = ['All', 'Coding', 'AI', 'Data', 'Future Tech'];

  const handleEnroll = (batch: Batch) => {
    onSelectBatch(batch.id);
    setSuccessId(batch.id);
    setTimeout(() => setSuccessId(null), 3000);
  };

  // Filter study parameters
  const filteredNotes = STUDY_NOTES.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || note.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const syllabusDetails = [
    {
      id: 'world-coding',
      title: 'Creative Coding & Interactive Canvas Spaces',
      duration: '4 Weeks',
      modules: [
        'Module 1: Cartesian canvas plotting matrix rules & vector logic.',
        'Module 2: Smooth motion interpolation (quadratic ease out structures).',
        'Module 3: Advanced Three.js lighting arrays (point vs ambient specs).',
        'Module 4: Dynamic CPU optimization and manual event observers.'
      ],
      difficulty: 'Beginner Friendly'
    },
    {
      id: 'world-ai',
      title: 'Transformer Architectures & Attention Matrices',
      duration: '6 Weeks',
      modules: [
        'Module 1: Scale dot-product calculations (Query, Key, Value).',
        'Module 2: Dimensional normalization divisor vectors (Symmetric gradients).',
        'Module 3: Large Language Model parameter weight optimization.',
        'Module 4: Modern agent architectures & semantic parsing layers.'
      ],
      difficulty: 'Intermediate'
    },
    {
      id: 'world-data',
      title: 'Multidimensional Data Reduction & Plotting',
      duration: '5 Weeks',
      modules: [
        'Module 1: High dimensional vector embeddings (1536 dimension parsing).',
        'Module 2: Principal Component Analysis (orthogonal coordinate reduction).',
        'Module 3: Stochastic neighbor embedding layouts (UMAP vs t-SNE loops).',
        'Module 4: Real-time telemetry clusters on interactive D3 charts.'
      ],
      difficulty: 'Intermediate'
    },
    {
      id: 'world-future',
      title: 'Quantum Cryptography & Smart Ledgers',
      duration: '8 Weeks',
      modules: [
        'Module 1: Quantum superposition algorithms (qubits math properties).',
        'Module 2: Decentralized ledger registers & cryptographic signatures.',
        'Module 3: Cloud ledger node sync workflows.',
        'Module 4: Quantum keys verification ledger systems.'
      ],
      difficulty: 'Advanced'
    }
  ];

  const faqItems = [
    {
      question: "Are there any mathematical prerequisites for these courses?",
      answer: "No specialized initial knowledge is mandatory! We break down Descartes coordinate logic, linear projections, and fractional weight grids step-by-step with live visual canvases. Alex our companion will guide your learning."
    },
    {
      question: "Can I transition between cohort batches?",
      answer: "Absolutely! If your coordinates shift, you can claim a seat in another batch instantly. Your academic progress logs and homework certifications will maintain absolute integrity."
    },
    {
      question: "What are the cryptographic star badges?",
      answer: "Badges are tokens representing peer-reviewed milestones. Completing sequential quiz blocks automatically publishes cryptographic badges to your Student ID badge wall."
    }
  ];

  return (
    <div id="unified-courses-workspace" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-6 relative z-20 text-left space-y-16">
      
      {/* SECTION 1: HERO & EXPLANATION COMMAND */}
      <section id="courses-section-hero" className="text-center space-y-4 py-8 relative">
        <span className="px-3.5 py-1.5 rounded-full bg-indigo-900/40 border border-indigo-400/30 text-indigo-300 font-mono text-xs font-semibold uppercase tracking-wider">
          ★ Academy Curricula Center
        </span>
        <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          Learning Worlds & Cohorts
        </h2>
        <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed">
          Unlock high-fidelity course topics, choose a custom scholar cohort, and research forbidden library scroll notes! Alex our companion is pointing out coordinates to help you.
        </p>
      </section>

      {/* SECTION 2: INTERACTIVE SYLLABUS Detail Nodes */}
      <section id="courses-section-syllabus" className="bg-slate-900/50 rounded-2xl border border-slate-800/80 p-6 sm:p-8 backdrop-blur-md space-y-6">
        <div className="flex items-center gap-2.5 mb-2">
          <Layers className="h-5 w-5 text-indigo-400" />
          <h3 className="font-sans font-bold text-xl text-white">Interactive Syllabus Roadmap</h3>
        </div>
        <p className="text-slate-300 text-xs sm:text-sm">
          Click on any technology world pathway to explore detailed lesson structures managed by our scholar guides.
        </p>

        <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto w-full pt-4">
          {syllabusDetails.map((syl) => {
            const isExpanded = expandedSyllabus === syl.id;
            return (
              <div
                key={syl.id}
                onClick={() => setExpandedSyllabus(isExpanded ? null : syl.id)}
                className={`p-5 rounded-xl border text-left cursor-pointer transition-all duration-305 relative overflow-hidden group ${
                  isExpanded
                    ? 'bg-slate-950 border-cyan-500/60 shadow-[0_0_18px_rgba(34,211,238,0.12)]'
                    : 'bg-slate-950/80 border-slate-800 hover:border-slate-700 hover:shadow-lg'
                }`}
                style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '14px 14px' }}
              >
                {/* Micro tech line tag */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500 opacity-40 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase bg-indigo-950 text-indigo-300 px-2.5 py-1 rounded border border-indigo-900/40">
                    {syl.duration}
                  </span>
                  <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180 text-cyan-400' : ''}`} />
                </div>
                <h4 className="font-sans font-bold text-sm text-white mb-2 leading-tight">
                  {syl.title}
                </h4>
                <span className="text-[9px] font-mono text-amber-400">{syl.difficulty}</span>

                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2 text-xs text-slate-300 animate-fadeIn">
                    {syl.modules.map((m, idx) => (
                      <div key={idx} className="flex gap-2 items-start">
                        <span className="text-[10px] text-cyan-400 font-bold mt-0.5">•</span>
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: COHORT BATCHES SELECTION (SelectBatch code) */}
      <section id="courses-section-cohorts" className="space-y-6">
        <div className="text-center md:text-left space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-extrabold block">
            👥 Academic Student Cohorts
          </span>
          <h3 className="font-sans font-black text-2xl text-white">Enroll in a Batch</h3>
          <p className="text-slate-300 text-xs sm:text-sm">
            Alex will reserve your seat in real-time. Pick an active scheduling calendar!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto w-full">
          {BATCHES.map((batch) => {
            const isEnrolled = currentBatchId === batch.id;
            const isSuccess = successId === batch.id;

            return (
              <div
                key={batch.id}
                className={`rounded-2xl text-left p-6 flex flex-col justify-between transition-all duration-300 backdrop-blur-md relative overflow-hidden group hover:-translate-y-1 ${
                  isEnrolled
                    ? 'border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.18)] bg-slate-1050 scale-[1.01]'
                    : 'border-slate-800 bg-slate-950/85 hover:border-indigo-400/40 hover:shadow-xl hover:shadow-indigo-500/5 shadow-md'
                }`}
                style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '14px 14px' }}
              >
                {/* Advanced tech top gradient line */}
                <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 opacity-60 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute top-1 right-1 w-16 h-16 bg-cyan-400/5 rounded-full blur-xl pointer-events-none" />
                {isEnrolled && (
                  <div className="absolute top-0 right-0 bg-cyan-400 text-slate-950 font-mono text-[9px] font-extrabold uppercase px-3 py-1 rounded-bl-xl tracking-wider z-10 animate-pulse">
                    ★ Active Cohort
                  </div>
                )}

                <div>
                  <span className="px-2.5 py-1 text-[10px] uppercase font-semibold font-mono bg-indigo-950 text-indigo-300 rounded-md border border-indigo-900/60 block w-fit mb-4">
                    {batch.difficulty} Grade
                  </span>

                  <h4 className="font-sans font-bold text-lg text-white mb-2 leading-tight">
                    {batch.name}
                  </h4>

                  <div className="space-y-2 mt-4 text-xs text-slate-300 font-sans">
                    <div className="flex items-center gap-2.5">
                      <Clock className="h-4 w-4 text-cyan-400 shrink-0" />
                      <span>{batch.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <User className="h-4 w-4 text-purple-400 shrink-0" />
                      <span>Mentor: {batch.mentor}</span>
                    </div>
                  </div>

                  <div className="border-t border-slate-800/60 pt-4 mt-6">
                    <span className="text-[9px] uppercase font-mono tracking-wider font-semibold text-slate-400 block mb-2">
                      Syllabus topics:
                    </span>
                    <div className="flex flex-col gap-1.5 pl-1">
                      {batch.topics.map((t, idx) => (
                        <span key={idx} className="text-xs text-slate-300 flex items-center gap-1.5">
                          <span className="w-1.2 h-1.2 bg-cyan-500 rounded-full shrink-0" />
                          <span className="truncate">{t}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="text-[9px] text-slate-400 font-mono uppercase block">Desk Status</span>
                    <span className="font-mono text-xs font-bold text-amber-400">
                      {batch.spotsLeft} spots available
                    </span>
                  </div>

                  <button
                    id={`enroll-btn-${batch.id}`}
                    onClick={() => handleEnroll(batch)}
                    disabled={isEnrolled}
                    className={`px-3 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                      isEnrolled
                        ? 'bg-slate-950 border border-cyan-500/40 text-cyan-400 cursor-default'
                        : 'bg-gradient-to-r from-indigo-505 to-fuchsia-600 bg-indigo-600 text-white hover:scale-[1.02] active:scale-95 shadow-md shadow-indigo-500/10'
                    }`}
                  >
                    {isSuccess ? (
                      <>
                        <CheckCircle className="h-3.5 w-3.5" />
                        <span>Ready!</span>
                      </>
                    ) : isEnrolled ? (
                      'Enrolled'
                    ) : (
                      <>
                        <Sparkles className="h-3.5 w-3.5 text-yellow-300 animate-spin" />
                        <span>Claim Seat</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 text-center max-w-md mx-auto flex items-center gap-3 justify-center">
          <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0" />
          <span className="text-[11px] text-indigo-300 font-semibold font-sans">
            You can switch cohorts anytime to re-calibrate study parameters!
          </span>
        </div>
      </section>

      {/* SECTION 4: LIBRARY VAULT SCROLL NOTES (Notes code) */}
      <section id="courses-section-archives" className="space-y-6 pt-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 font-extrabold block">
              📚 Forbidden Library Archives
            </span>
            <h3 className="font-sans font-black text-2xl text-white">Theoretical study logs</h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              Search notes about GPU manual resize handlers, network calculations, and coordinates algorithms.
            </p>
          </div>
        </div>

        {/* Search and Filters grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-5 relative">
            <span className="absolute left-3.5 top-3.5 text-slate-500">
              <Search className="h-4 w-4" />
            </span>
            <input
              type="text"
              placeholder="Search coordinate records..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-11 bg-slate-950 border border-slate-850 rounded-xl pl-10 pr-4 text-xs text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="md:col-span-7 flex flex-wrap gap-1.5 justify-start md:justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider cursor-pointer border transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-indigo-400/40 shadow-sm shadow-indigo-500/10'
                    : 'bg-slate-950 text-indigo-200 border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Main Study Cards listing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredNotes.map((note) => (
            <div
              key={note.id}
              className="p-5.5 rounded-xl bg-slate-950/80 [background-image:radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:14px_14px] border border-slate-800 hover:border-indigo-400/55 backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-indigo-500/5 relative overflow-hidden group"
            >
              {/* Laser neon header line */}
              <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-1 right-1 w-12 h-12 bg-indigo-500/5 rounded-full blur-xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] uppercase font-mono tracking-widest font-extrabold text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/10">
                    {note.category}
                  </span>
                  <span className="text-[9px] text-slate-400 font-mono">
                    {note.readTime}
                  </span>
                </div>

                <h4 className="font-sans font-bold text-md text-white mb-1 leading-snug">
                  {note.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans mb-5">
                  {note.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between mt-auto">
                <span className="text-[9px] font-mono uppercase font-bold text-amber-400">
                  ⭐ {note.difficulty}
                </span>
                <button
                  id={`read-note-btn-${note.id}`}
                  onClick={() => setActiveNote(note)}
                  className="flex items-center gap-1 text-[11px] font-mono font-semibold text-cyan-400 hover:text-cyan-300 cursor-pointer"
                >
                  <Eye className="h-3.5 w-3.5" />
                  <span>Read Scroll</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredNotes.length === 0 && (
          <div className="p-10 text-center rounded-2xl bg-slate-900/40 border border-slate-900">
            <AlertCircle className="h-6 w-6 text-slate-500 mx-auto mb-2" />
            <p className="text-xs text-slate-400 font-mono">No matching scroll logs found.</p>
          </div>
        )}
      </section>

      {/* SECTION 5: COURSE FAQ ACCORDION */}
      <section id="courses-section-faq" className="bg-slate-900/50 rounded-2xl border border-slate-850 p-6 sm:p-8 backdrop-blur-md space-y-6">
        <div className="flex items-center gap-2.5">
          <HelpCircle className="h-5 w-5 text-purple-400" />
          <h3 className="font-sans font-bold text-xl text-white">Course Coordination FAQ</h3>
        </div>

        <div className="divide-y divide-slate-800/85">
          {faqItems.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="py-4">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                >
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                    {item.question}
                  </span>
                  <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
                </button>
                {isOpen && (
                  <p className="mt-3 text-xs text-slate-300 leading-relaxed font-sans font-normal pl-2 border-l border-cyan-500/45 animate-fadeIn">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Deep study modal overlay */}
      {activeNote && (
        <div
          id="notes-over-modal-backdrop"
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setActiveNote(null)}
        >
          <div
            id="notes-modal-body"
            className="w-full max-w-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-2xl relative max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              id="close-notes-modal-btn"
              onClick={() => setActiveNote(null)}
              className="absolute top-4 right-4 p-2 text-indigo-300 hover:text-white rounded-lg hover:bg-slate-800 cursor-pointer"
              style={{ minWidth: '44px', minHeight: '44px' }}
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-4">
              <BookMarked className="h-4 w-4" />
              <span>{activeNote.category} Core Lesson</span>
            </div>

            <h3 className="font-sans font-extrabold text-2xl text-white mb-2 leading-tight pr-8 text-left">
              {activeNote.title}
            </h3>

            <div className="flex items-center gap-4 text-[10px] text-slate-400 font-mono mb-6 border-b border-slate-800 pb-4 justify-start">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                Academic Vault logs
              </span>
              <span>•</span>
              <span>{activeNote.readTime}</span>
              <span>•</span>
              <span className="text-amber-400 uppercase font-bold">{activeNote.difficulty} level</span>
            </div>

            <div className="markdown-body text-xs sm:text-sm text-slate-200 leading-relaxed space-y-4 font-sans whitespace-pre-line text-left">
              {activeNote.content}
            </div>

            <div className="mt-8 pt-5 border-t border-slate-850 flex justify-end">
              <button
                id="close-modal-bottom-btn"
                onClick={() => setActiveNote(null)}
                className="px-5 py-2 rounded-xl bg-slate-950 border border-slate-850 text-xs font-mono font-bold uppercase hover:bg-slate-800 text-indigo-300 hover:text-white cursor-pointer"
              >
                Close Scroll
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
