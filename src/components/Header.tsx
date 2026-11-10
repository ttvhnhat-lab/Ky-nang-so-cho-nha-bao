import React from 'react';
import { 
  Tv, 
  BookOpen, 
  Maximize2, 
  Minimize2, 
  StickyNote, 
  HelpCircle,
  ExternalLink 
} from 'lucide-react';

interface HeaderProps {
  mode: 'slides' | 'longform';
  onToggleMode: (mode: 'slides' | 'longform') => void;
  currentSlide: number;
  totalSlides: number;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  showNotes: boolean;
  onToggleNotes: () => void;
  onOpenQuiz: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  mode,
  onToggleMode,
  currentSlide,
  totalSlides,
  isFullscreen,
  onToggleFullscreen,
  showNotes,
  onToggleNotes,
  onOpenQuiz,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 text-stone-100 backdrop-blur-md border-b border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text wordmark in display face */}
        <div className="flex items-center gap-3 shrink-0">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); onToggleMode('slides'); }}
            className="text-lg md:text-xl font-serif font-bold tracking-tight text-white hover:text-amber-300 transition-colors whitespace-nowrap"
          >
            TÒA SOẠN AI · BÁO CHÍ SỐ
          </a>
          <span className="hidden lg:inline text-xs font-mono text-stone-400 pl-2 border-l border-stone-700">
            KỶ NGUYÊN VIBE CODING & AGENTS
          </span>
        </div>

        {/* Zone 2: Clean single-line navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-300">
          <button
            onClick={() => onToggleMode('slides')}
            className={`flex items-center gap-2 hover:text-white transition-colors whitespace-nowrap ${
              mode === 'slides' ? 'text-amber-400 font-semibold' : ''
            }`}
          >
            <Tv className="w-4 h-4" />
            <span>Trình chiếu Slide</span>
          </button>

          <button
            onClick={() => onToggleMode('longform')}
            className={`flex items-center gap-2 hover:text-white transition-colors whitespace-nowrap ${
              mode === 'longform' ? 'text-amber-400 font-semibold' : ''
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Đọc Chuyên sâu</span>
          </button>

          <button
            onClick={onOpenQuiz}
            className="flex items-center gap-1.5 text-stone-300 hover:text-amber-300 transition-colors whitespace-nowrap"
          >
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>Trắc nghiệm An toàn AI</span>
          </button>

          <a
            href="https://www.inma.org/blogs/newsroom-initiative/post.cfm/newsrooms-look-to-product-thinkers-as-ai-reshapes-hiring?utm_source=chatgpt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:flex items-center gap-1 text-xs text-stone-400 hover:text-stone-200 transition-colors whitespace-nowrap"
          >
            <span>Báo cáo INMA</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action & Utilities */}
        <div className="flex items-center gap-3 shrink-0">
          {mode === 'slides' && (
            <div className="flex items-center gap-1.5 font-mono text-xs text-stone-300 bg-stone-800/80 px-2.5 py-1.5 rounded-md border border-stone-700">
              <span className="text-amber-400 font-bold">{currentSlide}</span>
              <span className="text-stone-500">/</span>
              <span>{totalSlides}</span>
            </div>
          )}

          {mode === 'slides' && (
            <button
              onClick={onToggleNotes}
              title="Mở ghi chú diễn giả (Phím N)"
              className={`p-2 rounded-md transition-colors text-xs font-medium flex items-center gap-1.5 ${
                showNotes 
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' 
                  : 'bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700'
              }`}
            >
              <StickyNote className="w-4 h-4" />
              <span className="hidden sm:inline">Ghi chú</span>
            </button>
          )}

          <button
            onClick={onToggleFullscreen}
            title={isFullscreen ? 'Thoát toàn màn hình (Phím Esc/F)' : 'Toàn màn hình (Phím F)'}
            className="p-2 rounded-md bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 transition-colors"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <button
            onClick={() => onToggleMode(mode === 'slides' ? 'longform' : 'slides')}
            className="px-3.5 py-1.5 text-xs font-semibold rounded-md bg-amber-500 hover:bg-amber-400 text-stone-950 transition-colors shadow-sm whitespace-nowrap"
          >
            {mode === 'slides' ? 'Chuyển sang Bản Đọc' : 'Chuyển sang Slide'}
          </button>
        </div>
      </div>
    </header>
  );
};
