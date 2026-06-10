import React, { useState, useRef } from 'react';
import { ASSIGNMENTS } from '../data';
import { UploadCloud, CheckCircle, FileText, Calendar, Award, Trash2 } from 'lucide-react';
import { Assignment } from '../types';

export default function Assignments() {
  const [assignments, setAssignments] = useState<Assignment[]>(ASSIGNMENTS);
  const [selectedAssignId, setSelectedAssignId] = useState<string>('assign-01');
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<{ name: string; size: number } | null>(null);
  const [successMessage, setSuccessMessage] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const selectedAssign = assignments.find((a) => a.id === selectedAssignId);

  // Drag handles
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const processFile = (file: File) => {
    setUploadedFile({
      name: file.name,
      size: Math.round(file.size / 1024), // Keep size in KB
    });
    setSuccessMessage('');
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFile(e.target.files[0]);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const clearFile = () => {
    setUploadedFile(null);
    setSuccessMessage('');
  };

  // Submit Homework file trigger
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadedFile) return;

    // Simulate upload pipeline
    setSuccessMessage('🚀 Homework submitted! Alex has verified your cryptographic file.');

    // Update assignment state to Submitted
    setAssignments((prev) =>
      prev.map((a) => (a.id === selectedAssignId ? { ...a, status: 'Submitted' } : a))
    );

    // Clear file state after brief timeout
    setTimeout(() => {
      setUploadedFile(null);
      setSuccessMessage('');
    }, 4500);
  };

  return (
    <div id="assignments-screen-view" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-10 relative z-20">
      <div className="text-center space-y-3 mb-10">
        <span className="px-3.5 py-1.5 rounded-full bg-purple-900/40 border border-purple-400/30 text-purple-300 font-mono text-xs font-semibold uppercase tracking-wider">
          ⚔️ Scholar Guild Assignments
        </span>
        <h2 className="font-sans font-extrabold text-3xl text-white tracking-tight">
          Homework Codex Board
        </h2>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          Test your code orbits. View active challenges, verify gradings, and drag-and-drop your asset logs directly into Alex's safe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
        {/* Left pane: Homework list selection */}
        <div className="md:col-span-4 space-y-4">
          <span className="text-[10px] uppercase font-mono tracking-widest font-extrabold text-slate-400 block mb-2">
            🧭 Active Assignments:
          </span>
          {assignments.map((assign) => (
            <button
              key={assign.id}
              onClick={() => setSelectedAssignId(assign.id)}
              className={`w-full p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                selectedAssignId === assign.id
                  ? 'bg-slate-950 border-indigo-400/60 shadow-lg shadow-indigo-500/10'
                  : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
              }`}
              style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '12px 12px' }}
            >
              {/* Laser neon indicator */}
              <div className={`absolute left-0 inset-y-0 w-[3px] bg-gradient-to-b from-indigo-400 to-purple-600 transition-opacity duration-300 ${
                selectedAssignId === assign.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'
              }`} />
              <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                <span className="text-[9px] uppercase font-mono tracking-wider font-bold text-slate-400">
                  {assign.subject}
                </span>
                <span
                  className={`text-[9px] uppercase font-mono font-bold px-2 py-0.5 rounded ${
                    assign.status === 'Graded'
                      ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/20'
                      : assign.status === 'Submitted'
                      ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/20'
                      : 'bg-red-950 text-red-300 border border-red-500/20'
                  }`}
                >
                  {assign.status}
                </span>
              </div>

              <h4 className="font-sans font-bold text-sm text-white">{assign.title}</h4>

              <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono mt-3">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3 text-indigo-400" />
                  Due {assign.dueDate}
                </span>
                <span className="font-bold text-cyan-400">{assign.points} pts</span>
              </div>
            </button>
          ))}
        </div>

        {/* Right pane: Dedicated homework parameters & drag-and-drop form uploader */}
        <div 
          className="md:col-span-8 bg-slate-950/85 border border-slate-800/80 p-6 sm:p-8 rounded-2xl backdrop-blur-md relative overflow-hidden group"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '16px 16px' }}
        >
          {/* Laser neon header line */}
          <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
          {/* Decorative glow */}
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          {selectedAssign ? (
            <div className="space-y-6">
              <div className="border-b border-indigo-950/60 pb-4">
                <div className="flex items-center justify-between gap-4 flex-wrap mb-2">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest pl-2 border-l-2 border-cyan-500">
                    {selectedAssign.subject}
                  </span>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-mono text-slate-400 block">Maximum Marks</span>
                    <span className="font-mono text-sm font-bold text-white pr-2">
                      {selectedAssign.points} points
                    </span>
                  </div>
                </div>

                <h3 className="font-sans font-bold text-xl text-white pr-8">
                  {selectedAssign.title}
                </h3>
              </div>

              <div className="space-y-2">
                <h5 className="text-[10px] font-mono uppercase font-bold text-slate-400">
                  Challenge Assignment Specifications:
                </h5>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans font-normal">
                  {selectedAssign.description}
                </p>
              </div>

              {/* Uploading workspace */}
              <div className="border-t border-slate-800/60 pt-6">
                {selectedAssign.status === 'Graded' ? (
                  <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 flex gap-4 items-center">
                    <div className="p-3 bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 rounded-xl">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <h5 className="font-sans font-bold text-sm text-white">Your Grade Awarded!</h5>
                      <span className="font-mono text-xs font-bold text-emerald-400">
                        {selectedAssign.grade}
                      </span>
                      <p className="text-[11px] text-slate-300 mt-1">
                        Professor Alex: "Stellar canvas compilation work! Your coordinates orbital velocities deceleration are calculated perfectly."
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h5 className="text-[10px] font-mono uppercase font-bold text-slate-400">
                      Upload Completed Files:
                    </h5>

                    {/* Drag-and-drop zone */}
                    {!uploadedFile ? (
                      <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onClick={triggerFileSelect}
                        className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-200 flex flex-col items-center gap-3 ${
                          isDragOver
                            ? 'border-cyan-400 bg-cyan-950/10'
                            : 'border-slate-800 hover:border-slate-700 bg-slate-950/25'
                        }`}
                      >
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileSelect}
                          className="hidden"
                          accept=".pdf,.js,.py,.html,.css,.ts"
                        />
                        <UploadCloud className={`h-10 w-10 ${isDragOver ? 'text-cyan-400 animate-bounce' : 'text-slate-500'}`} />
                        <div>
                          <p className="text-xs font-semibold text-white">
                            Drag & Drop your project file here, or{' '}
                            <span className="text-cyan-400 underline">browse computer</span>
                          </p>
                          <p className="text-[10px] text-slate-400 mt-1 font-mono">
                            Supports PDF, JS, PY, TS up to 10MB
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 bg-indigo-950 text-indigo-300 rounded-lg">
                            <FileText className="h-5 w-5" />
                          </div>
                          <div className="text-left">
                            <h6 className="font-mono text-xs font-bold text-white truncate max-w-[200px] sm:max-w-md">
                              {uploadedFile.name}
                            </h6>
                            <span className="text-[10px] text-slate-400 font-mono">
                              File Weight: {uploadedFile.size} KB
                            </span>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={clearFile}
                          className="p-2 text-slate-400 hover:text-red-400 rounded-lg shrink-0 cursor-pointer"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    )}

                    {successMessage && (
                      <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-cyan-300 font-mono flex items-center gap-2">
                        <CheckCircle className="h-4.5 w-4.5 text-cyan-400 shrink-0" />
                        <span>{successMessage}</span>
                      </div>
                    )}

                    <div className="flex justify-end pt-2">
                      <button
                        type="submit"
                        disabled={!uploadedFile}
                        className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer ${
                          uploadedFile
                            ? 'bg-gradient-to-r from-indigo-500 via-purple-600 to-fuchsia-600 text-white'
                            : 'bg-slate-950 border border-slate-800 text-slate-400 cursor-default'
                        }`}
                      >
                        Archive Homework
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          ) : (
            <p className="text-xs text-slate-400 font-mono text-center py-12">
              Select an assignment on the left to read challenges.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
