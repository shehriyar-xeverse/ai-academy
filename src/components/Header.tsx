import React, { useState } from 'react';
import { Menu, X, GraduationCap, Compass, BookOpen, Clock, Award, Star, Sliders, MessageSquare, LogIn, LogOut } from 'lucide-react';
import { PageId } from '../types';

interface HeaderProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  isLoggedIn: boolean;
  onToggleLogin: () => void;
}

export default function Header({ activePage, onNavigate, isLoggedIn, onToggleLogin }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: { id: PageId; label: string; icon: React.ComponentType<any> }[] = [
    { id: 'home', label: 'Adventure Land', icon: Compass },
    { id: 'courses', label: 'Courses & Batches', icon: BookOpen },
    { id: 'quizzes', label: 'Quiz Quest', icon: Star },
    { id: 'assignments', label: 'Homework Guild', icon: Award },
    { id: 'profile', label: 'Scholar Station', icon: GraduationCap },
  ];

  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    setIsOpen(false);
  };

  return (
    <>
      <header
        id="app-glass-navbar"
        className="sticky top-0 left-0 w-full z-40 bg-slate-950/70 backdrop-blur-md border-b border-indigo-950/40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo with academic crest symbol */}
          <div
            id="brand-crest-logo"
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-600 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="font-sans font-bold text-lg tracking-tight text-white uppercase block leading-none">
                AI Academy
              </span>
              <span className="font-mono text-[9px] text-sky-400 tracking-wider font-semibold uppercase">
                Dark-Academic Explorer
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 relative cursor-pointer ${
                    isActive
                      ? 'text-white bg-indigo-505/20 border border-indigo-400/30 shadow-[0_0_15px_rgba(99,102,241,0.15)]'
                      : 'text-indigo-200 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? 'text-cyan-400' : 'text-indigo-300'}`} />
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-cyan-400 to-fuchsia-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Sign Up / Lock Badge */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="auth-toggle-btn"
              onClick={onToggleLogin}
              className="flex items-center gap-1.5 px-4 y-2 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 text-white border border-indigo-400/20 hover:scale-[1.03] active:scale-95 transition-all duration-300 shadow-md shadow-purple-500/10 cursor-pointer"
            >
              {isLoggedIn ? (
                <>
                  <LogOut className="h-4.5 w-4.5" />
                  <span>Log Out ID</span>
                </>
              ) : (
                <>
                  <LogIn className="h-4.5 w-4.5" />
                  <span>Student Portal</span>
                </>
              )}
            </button>
          </div>

          {/* Hamburger menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            {!isLoggedIn && (
              <button
                onClick={() => handleLinkClick('profile')}
                className="px-3 py-1.5 rounded-lg bg-indigo-600/80 text-white text-xs font-semibold cursor-pointer"
              >
                Entrance
              </button>
            )}
            <button
              id="hamburger-menu-trigger"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800/60 text-indigo-300 hover:text-white active:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              style={{ minWidth: '44px', minHeight: '44px' }}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Slide-In Side Drawer for Mobile and Tablet */}
      {isOpen && (
        <div
          id="mobile-drawer-backdrop"
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        >
          <div
            id="mobile-drawer-body"
            className="fixed top-0 right-0 w-72 h-full bg-slate-950 border-l border-indigo-950 p-6 flex flex-col shadow-2xl transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-6 border-b border-indigo-950/60">
              <span className="font-sans font-bold text-md text-white tracking-tight uppercase">
                Academy Chapters
              </span>
              <button
                id="drawer-close"
                onClick={() => setIsOpen(false)}
                className="p-2 text-indigo-300 hover:text-white rounded-lg active:bg-slate-900 cursor-pointer"
                style={{ minWidth: '44px', minHeight: '44px' }}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav id="mobile-nav" className="flex-1 py-6 flex flex-col gap-2 overflow-y-auto">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activePage === link.id;
                return (
                  <button
                    key={link.id}
                    id={`mobile-nav-link-${link.id}`}
                    onClick={() => handleLinkClick(link.id)}
                    className={`flex items-center gap-3 w-full px-4 h-12 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'text-white bg-indigo-600/30 border border-indigo-500/40 shadow-inner'
                        : 'text-indigo-200 hover:text-white hover:bg-slate-900'
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${isActive ? 'text-cyan-400' : 'text-indigo-400'}`} />
                    <span>{link.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="pt-6 border-t border-indigo-950/60 flex flex-col gap-3">
              <button
                id="drawer-auth-btn"
                onClick={() => {
                  onToggleLogin();
                  setIsOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full h-12 rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white font-semibold text-sm cursor-pointer shadow-lg"
              >
                {isLoggedIn ? (
                  <>
                    <LogOut className="h-4.5 w-4.5" />
                    <span>Log Out Account</span>
                  </>
                ) : (
                  <>
                    <LogIn className="h-4.5 w-4.5" />
                    <span>Student Portal Access</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
