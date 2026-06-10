import { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data';
import { CheckCircle2, AlertCircle, ArrowRight, HelpCircle, Trophy, RefreshCw, Compass, Brain, Database, ShieldCheck, Layers } from 'lucide-react';

type QuizCategory = 'All' | 'Coding' | 'AI' | 'Data' | 'Future Tech';

export default function Quizzes() {
  const [selectedCategory, setSelectedCategory] = useState<QuizCategory>('All');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  // Filter questions based on our selection
  const filteredQuestions = selectedCategory === 'All'
    ? QUIZ_QUESTIONS
    : QUIZ_QUESTIONS.filter((q) => q.category === selectedCategory);

  const questionObj = filteredQuestions[currentIdx];

  const handleCategoryChange = (category: QuizCategory) => {
    setSelectedCategory(category);
    setCurrentIdx(0);
    setSelectedOpt(null);
    setHasAnswered(false);
    setScore(0);
    setQuizComplete(false);
  };

  const handleOptionClick = (optIdx: number) => {
    if (hasAnswered) return;

    setSelectedOpt(optIdx);
    setHasAnswered(true);

    if (optIdx === questionObj.correctAnswerIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setSelectedOpt(null);
    setHasAnswered(false);

    if (currentIdx < filteredQuestions.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setQuizComplete(true);
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setSelectedOpt(null);
    setHasAnswered(false);
    setScore(0);
    setQuizComplete(false);
  };

  // Select appropriate visual badge representing category expertise
  const getBadgeName = () => {
    switch (selectedCategory) {
      case 'Coding':
        return '★ CODE_COMPILER_MASTER';
      case 'AI':
        return '★ ATTENTION_NEURAL_PATHFINDER';
      case 'Data':
        return '★ HYPERDIMENSIONAL_VECTOR_ORBIT';
      case 'Future Tech':
        return '★ COGNITIVE_CRYPTO_SENTINEL';
      default:
        return '★ TITAN_OF_THE_SPACE_LABS';
    }
  };

  // Category Icon components map
  const renderCategoryIcon = (cat: QuizCategory, sizeClass = "h-4 w-4") => {
    switch (cat) {
      case 'Coding':
        return <Compass className={`${sizeClass} text-cyan-400`} />;
      case 'AI':
        return <Brain className={`${sizeClass} text-purple-400`} />;
      case 'Data':
        return <Database className={`${sizeClass} text-emerald-400`} />;
      case 'Future Tech':
        return <ShieldCheck className={`${sizeClass} text-amber-400`} />;
      default:
        return <Layers className={`${sizeClass} text-indigo-400`} />;
    }
  };

  // Progress metrics
  const progressPercent = filteredQuestions.length > 0 
    ? Math.round(((currentIdx + (hasAnswered ? 1 : 0)) / filteredQuestions.length) * 100) 
    : 0;

  return (
    <div id="quiz-quest-screen" className="max-w-3xl mx-auto px-4 sm:px-0 my-10 relative z-20 text-left">
      <div className="text-center space-y-3 mb-8">
        <span className="px-3.5 py-1.5 rounded-full bg-cyan-900/40 border border-cyan-400/30 text-cyan-300 font-mono text-xs font-semibold uppercase tracking-wider">
          ★ Gamified Arena: Quiz Quest
        </span>
        <h2 className="font-sans font-extrabold text-3xl text-white tracking-tight">
          Cryptographic Knowledge Arenas
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm text-center max-w-lg mx-auto leading-relaxed">
          Provide answers to code compiler parameters. Claim custom score stars, view instantaneous validations, and learn from Alex!
        </p>
      </div>

      {/* Interactive World Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
        {(['All', 'Coding', 'AI', 'Data', 'Future Tech'] as QuizCategory[]).map((cat) => (
          <button
            key={cat}
            id={`quiz-category-tab-${cat.toLowerCase().replace(' ', '-')}`}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium border cursor-pointer transition-all duration-300 flex items-center gap-1.5 ${
              selectedCategory === cat
                ? 'bg-slate-900 border-cyan-400/50 text-white shadow-md shadow-cyan-500/10 scale-[1.03]'
                : 'bg-slate-900/40 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
            }`}
          >
            {renderCategoryIcon(cat)}
            <span>{cat === 'All' ? 'Full Arena' : cat}</span>
          </button>
        ))}
      </div>

      {!quizComplete ? (
        filteredQuestions.length > 0 ? (
          <div 
            className="bg-slate-950/85 border border-slate-800/80 p-6 sm:p-8 rounded-2xl backdrop-blur-md relative overflow-hidden space-y-6 group"
            style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '16px 16px' }}
          >
            {/* Laser neon header line */}
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Background glow matrix effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

            {/* Progress bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400 uppercase tracking-widest flex items-center gap-1">
                  {renderCategoryIcon(selectedCategory, "h-3.5 w-3.5")}
                  <span>{selectedCategory === 'All' ? 'Full Challenge' : `${selectedCategory} Module`}</span>
                </span>
                <span className="text-cyan-400 font-bold">Calibration Level: {progressPercent}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Progress row */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs font-mono">
              <span className="text-slate-400 uppercase tracking-wider">
                Question {currentIdx + 1} of {filteredQuestions.length}
              </span>
              <span className="text-cyan-400 font-bold">Score: {score} Stars</span>
            </div>

            <div className="space-y-6 pt-2">
              <div className="flex gap-3 items-start">
                <div className="p-2.5 bg-indigo-950 text-indigo-300 rounded-xl border border-indigo-900 shrink-0">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <h3 className="font-sans font-bold text-lg text-white leading-snug">
                  {questionObj.question}
                </h3>
              </div>

              {/* Options lists */}
              <div className="space-y-3.5 pl-1.5">
                {questionObj.options.map((option, idx) => {
                  const isSelected = selectedOpt === idx;
                  const isCorrect = idx === questionObj.correctAnswerIndex;
                  const isIncorrect = isSelected && !isCorrect;

                  let btnStyles = 'border-slate-800 hover:border-slate-700 bg-slate-950/40 text-slate-200';
                  if (hasAnswered) {
                    if (isCorrect) {
                      btnStyles = 'border-emerald-500 bg-emerald-950/30 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.15)]';
                    } else if (isIncorrect) {
                      btnStyles = 'border-red-500 bg-red-950/30 text-red-200';
                    } else {
                      btnStyles = 'border-slate-850 bg-slate-950/20 text-slate-400 cursor-not-allowed';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      id={`quiz-option-${idx}`}
                      onClick={() => handleOptionClick(idx)}
                      disabled={hasAnswered}
                      className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 ${btnStyles}`}
                    >
                      <span>{option}</span>
                      {hasAnswered && isCorrect && (
                        <CheckCircle2 className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
                      )}
                      {hasAnswered && isIncorrect && (
                        <AlertCircle className="h-4.5 w-4.5 text-red-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Professor Alex explanation box */}
              {hasAnswered && (
                <div className="p-5 rounded-2xl bg-indigo-950/35 border border-indigo-400/20 text-left animate-fadeIn">
                  <h5 className="font-mono text-[10px] uppercase font-bold text-cyan-400 mb-1.5 tracking-wider">
                    📖 Professor Alex's Core Lecture Notes:
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans font-normal">
                    {questionObj.explanation}
                  </p>
                </div>
              )}

              <div className="flex justify-end pt-4 border-t border-slate-800/60 mt-6">
                <button
                  id="next-quiz-btn"
                  onClick={handleNext}
                  disabled={!hasAnswered}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer flex items-center gap-1.5 transition-all ${
                    hasAnswered
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:scale-[1.02]'
                      : 'bg-slate-950 border border-slate-800 text-slate-500 cursor-default'
                  }`}
                >
                  <span>{currentIdx < filteredQuestions.length - 1 ? 'Next Challenge' : 'Finish Quest'}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-900/80 border border-slate-800/80 p-8 rounded-2xl text-center backdrop-blur-md">
            <p className="text-slate-400 text-sm font-mono">No questions found in this domain.</p>
          </div>
        )
      ) : (
        <div 
          className="bg-slate-950/85 border border-slate-800/80 p-8 rounded-2xl text-center backdrop-blur-md overflow-hidden relative group"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '16px 16px' }}
        >
          {/* Laser neon header line */}
          <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-500 opacity-65 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Success glow decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="p-4 bg-indigo-950/60 w-fit rounded-full mx-auto border border-indigo-500/30 mb-2 animate-bounce">
              <Trophy className="h-10 w-10 text-amber-400" />
            </div>

            <h3 className="font-sans font-extrabold text-2xl text-white">Quiz Quest Passed!</h3>
            <p className="text-xs sm:text-sm text-indigo-200 max-w-sm mx-auto leading-relaxed">
              Astounding! You scored <span className="font-bold text-cyan-400 font-mono text-base">{score} out of {filteredQuestions.length}</span> stars. Alex has stamped your dynamic learning diary.
            </p>

            <div className="bg-slate-950 border border-slate-850 p-4 rounded-xl max-w-xs mx-auto text-left">
              <span className="text-[10px] uppercase font-mono text-slate-400 block mb-1">Earned Star Badge:</span>
              <div className="text-xs font-mono font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>{getBadgeName()}</span>
              </div>
            </div>

            <button
              id="reset-quiz-btn"
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-indigo-300 hover:text-white hover:bg-slate-800 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Retry compilation</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
