import React, { useState } from 'react';
import { Clock, Zap, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { WORKFLOW_COMPARISON } from '../data/presentationData';

export const WorkflowComparator: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const current = WORKFLOW_COMPARISON[activeStep];

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-xl p-3.5 sm:p-4 space-y-3 text-stone-100">
      <div className="flex items-center justify-between gap-3 border-b border-stone-800/80 pb-2">
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400 font-bold">
            SO SÁNH QUY TRÌNH:
          </span>
          <span className="text-xs sm:text-sm font-serif font-bold text-white">
            Nhà Báo Truyền Thống vs. Nhà Báo Trang Bị AI
          </span>
        </div>
        <div className="text-[10px] font-mono text-stone-400 bg-stone-950 px-2 py-0.5 rounded border border-stone-800 shrink-0">
          Bước {activeStep + 1}/{WORKFLOW_COMPARISON.length}
        </div>
      </div>

      {/* Step selector tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5">
        {WORKFLOW_COMPARISON.map((step, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`p-2 rounded-lg text-left transition-all border ${
              activeStep === idx
                ? 'bg-amber-500/15 border-amber-500/60 text-white shadow-sm'
                : 'bg-stone-950/60 border-stone-800 text-stone-400 hover:text-stone-200'
            }`}
          >
            <div className="font-mono text-[9px] text-amber-400/90 leading-none mb-1">BƯỚC 0{idx + 1}</div>
            <div className="font-medium text-[11px] truncate">{step.step}</div>
          </button>
        ))}
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
        {/* Traditional Column */}
        <div className="p-3 rounded-lg bg-stone-950/80 border border-red-900/30 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-red-400 font-semibold">
              Cách Làm Truyền Thống (Cũ)
            </span>
            <div className="flex items-center gap-1 text-[10px] font-mono text-red-300 bg-red-950/60 px-2 py-0.5 rounded border border-red-900/40">
              <Clock className="w-3 h-3" />
              <span>{current.traditional.time}</span>
            </div>
          </div>

          <p className="text-xs text-stone-300 leading-relaxed">
            {current.traditional.description}
          </p>

          <div className="p-2 rounded bg-red-950/30 border border-red-900/40 flex items-start gap-1.5 text-[11px] text-red-200">
            <AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-red-300">Điểm nghẽn: </span>
              <span>{current.traditional.painPoint}</span>
            </div>
          </div>
        </div>

        {/* AI Augmented Column */}
        <div className="p-3 rounded-lg bg-stone-950/80 border border-emerald-900/40 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">
              Nhà Báo Ứng Dụng AI & Vibe Coding
            </span>
            <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-900/40 font-bold">
              <Zap className="w-3 h-3 text-amber-400" />
              <span>{current.aiAugmented.time}</span>
            </div>
          </div>

          <p className="text-xs text-stone-200 leading-relaxed">
            {current.aiAugmented.description}
          </p>

          <div className="p-2 rounded bg-emerald-950/30 border border-emerald-900/40 flex items-start gap-1.5 text-[11px] text-emerald-200">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-emerald-300">Đột phá: </span>
              <span>{current.aiAugmented.benefit}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex items-center justify-between pt-1 text-[11px]">
        <button
          onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : WORKFLOW_COMPARISON.length - 1))}
          className="text-stone-400 hover:text-white px-2.5 py-1 rounded bg-stone-800 transition-colors"
        >
          ← Bước trước
        </button>
        <span className="text-stone-500 font-mono hidden sm:inline text-[10px]">
          Chuyển đổi từng bước để so sánh sự chênh lệch năng suất
        </span>
        <button
          onClick={() => setActiveStep((prev) => (prev < WORKFLOW_COMPARISON.length - 1 ? prev + 1 : 0))}
          className="text-stone-200 hover:text-white px-2.5 py-1 rounded bg-amber-600/80 hover:bg-amber-600 transition-colors flex items-center gap-1 font-medium"
        >
          <span>Bước tiếp</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
