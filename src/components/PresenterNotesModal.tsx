import React from 'react';
import { X, Mic, Volume2, ArrowLeft, ArrowRight } from 'lucide-react';
import { SlideData } from '../types/presentation';

interface PresenterNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  slide: SlideData;
  currentIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
}

export const PresenterNotesModal: React.FC<PresenterNotesModalProps> = ({
  isOpen,
  onClose,
  slide,
  currentIndex,
  totalSlides,
  onPrev,
  onNext,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-full max-w-md bg-stone-900/95 border border-amber-500/50 rounded-xl shadow-2xl backdrop-blur-md text-stone-100 overflow-hidden animate-in slide-in-from-bottom-5">
      {/* Header */}
      <div className="px-4 py-3 bg-stone-950 flex items-center justify-between border-b border-stone-800">
        <div className="flex items-center gap-2">
          <Mic className="w-4 h-4 text-amber-400 animate-pulse" />
          <span className="text-xs font-mono font-semibold tracking-wider text-amber-300 uppercase">
            Ghi Chú Diễn Giả (Speaker Notes)
          </span>
          <span className="text-stone-600">·</span>
          <span className="text-xs font-mono text-stone-400">
            Slide {currentIndex + 1}/{totalSlides}
          </span>
        </div>
        <button
          onClick={onClose}
          className="text-stone-400 hover:text-white p-1 rounded hover:bg-stone-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Body */}
      <div className="p-4 space-y-3 max-h-[300px] overflow-y-auto">
        <div className="text-xs font-medium text-stone-400 uppercase tracking-wider font-mono">
          Chủ đề: <span className="text-white normal-case font-serif">{slide.title}</span>
        </div>

        <div className="p-3 rounded-lg bg-stone-950/70 border border-stone-800 text-stone-200 text-sm leading-relaxed">
          <div className="flex items-center gap-1.5 text-xs text-amber-400/90 font-mono mb-2">
            <Volume2 className="w-3.5 h-3.5" />
            <span>Gợi ý lời dẫn thuyết trình:</span>
          </div>
          <p className="font-serif italic text-stone-100">
            "{slide.presenterNotes}"
          </p>
        </div>

        <div className="text-[11px] text-stone-400 font-mono flex items-center justify-between pt-1">
          <span>Phím tắt: [N] Bật/tắt · [←/→] Đổi slide · [F] Fullscreen</span>
        </div>
      </div>

      {/* Quick Controls Footer */}
      <div className="px-4 py-2.5 bg-stone-950/80 border-t border-stone-800 flex items-center justify-between text-xs">
        <button
          onClick={onPrev}
          disabled={currentIndex === 0}
          className="px-2.5 py-1 rounded bg-stone-800 hover:bg-stone-700 disabled:opacity-40 transition-colors flex items-center gap-1 text-stone-200"
        >
          <ArrowLeft className="w-3 h-3" />
          <span>Trước</span>
        </button>

        <span className="text-xs text-stone-400 font-mono">
          {currentIndex + 1} of {totalSlides}
        </span>

        <button
          onClick={onNext}
          disabled={currentIndex === totalSlides - 1}
          className="px-2.5 py-1 rounded bg-amber-600 hover:bg-amber-500 disabled:opacity-40 transition-colors flex items-center gap-1 text-stone-950 font-semibold"
        >
          <span>Tiếp</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
