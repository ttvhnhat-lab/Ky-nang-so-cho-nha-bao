import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { SlideDeck } from './components/SlideDeck';
import { LongformReader } from './components/LongformReader';
import { CaseStudyModal } from './components/CaseStudyModal';
import { AiReadinessQuiz } from './components/AiReadinessQuiz';
import { PresenterNotesModal } from './components/PresenterNotesModal';
import { SLIDES } from './data/presentationData';
import { CaseStudy } from './types/presentation';

export default function App() {
  const [mode, setMode] = useState<'slides' | 'longform'>('slides');
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [showPresenterNotes, setShowPresenterNotes] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Monitor fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        }
      }
    } catch (err) {
      console.warn('Fullscreen request could not be completed:', err);
    }
  };

  // Keyboard shortcut for Fullscreen
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'f' && !['input', 'textarea'].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) {
        toggleFullscreen();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-stone-950 font-sans text-stone-100">
      {/* Top Header Bar */}
      <Header
        mode={mode}
        onToggleMode={(newMode) => setMode(newMode)}
        currentSlide={currentSlideIndex + 1}
        totalSlides={SLIDES.length}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        showNotes={showPresenterNotes}
        onToggleNotes={() => setShowPresenterNotes((prev) => !prev)}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Main Viewport */}
      {mode === 'slides' ? (
        <SlideDeck
          currentSlideIndex={currentSlideIndex}
          onSlideChange={(index) => setCurrentSlideIndex(index)}
          onOpenCaseStudy={(cs) => setSelectedCaseStudy(cs)}
          onOpenQuiz={() => setIsQuizOpen(true)}
          onToggleNotes={() => setShowPresenterNotes((prev) => !prev)}
        />
      ) : (
        <LongformReader
          onOpenCaseStudy={(cs) => setSelectedCaseStudy(cs)}
          onOpenQuiz={() => setIsQuizOpen(true)}
          onSwitchToSlides={() => setMode('slides')}
        />
      )}

      {/* Deep-Dive Case Study Modal (Báo Nhân Dân, Znews, VnExpress) */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* Interactive AI Readiness Quiz Modal */}
      <AiReadinessQuiz
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
      />

      {/* Presenter Speaker Notes Floating Panel */}
      <PresenterNotesModal
        isOpen={showPresenterNotes && mode === 'slides'}
        onClose={() => setShowPresenterNotes(false)}
        slide={SLIDES[currentSlideIndex]}
        currentIndex={currentSlideIndex}
        totalSlides={SLIDES.length}
        onPrev={() => setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : SLIDES.length - 1))}
        onNext={() => setCurrentSlideIndex((prev) => (prev < SLIDES.length - 1 ? prev + 1 : 0))}
      />
    </div>
  );
}
