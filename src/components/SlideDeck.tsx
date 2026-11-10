import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  ExternalLink, 
  CheckCircle, 
  AlertTriangle, 
  Sparkles, 
  ArrowUpRight, 
  Flame, 
  Compass, 
  ShieldAlert, 
  GraduationCap, 
  Layers,
  HelpCircle,
  Zap,
  TrendingUp,
  Award,
  BookOpen
} from 'lucide-react';
import { SLIDES, CASE_STUDIES, REGIONAL_NEWSROOMS, RECOMMENDED_AI_TOOLS } from '../data/presentationData';
import { CaseStudy } from '../types/presentation';
import { WorkflowComparator } from './WorkflowComparator';

interface SlideDeckProps {
  currentSlideIndex: number;
  onSlideChange: (index: number) => void;
  onOpenCaseStudy: (caseStudy: CaseStudy) => void;
  onOpenQuiz: () => void;
  onToggleNotes: () => void;
}

export const SlideDeck: React.FC<SlideDeckProps> = ({
  currentSlideIndex,
  onSlideChange,
  onOpenCaseStudy,
  onOpenQuiz,
  onToggleNotes,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timerDuration, setTimerDuration] = useState(12); // seconds per slide
  const [timerProgress, setTimerProgress] = useState(0);

  const slide = SLIDES[currentSlideIndex];
  const totalSlides = SLIDES.length;

  // Auto-play timer effect
  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setTimerProgress((prev) => {
          if (prev >= 100) {
            onSlideChange((currentSlideIndex + 1) % totalSlides);
            return 0;
          }
          return prev + (100 / (timerDuration * 10));
        });
      }, 100);
    } else {
      setTimerProgress(0);
    }

    return () => clearInterval(interval);
  }, [isPlaying, currentSlideIndex, timerDuration, totalSlides, onSlideChange]);

  const handlePrev = () => {
    setTimerProgress(0);
    if (currentSlideIndex > 0) {
      onSlideChange(currentSlideIndex - 1);
    } else {
      onSlideChange(totalSlides - 1);
    }
  };

  const handleNext = () => {
    setTimerProgress(0);
    if (currentSlideIndex < totalSlides - 1) {
      onSlideChange(currentSlideIndex + 1);
    } else {
      onSlideChange(0);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key.toLowerCase() === 'n') {
        onToggleNotes();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex]);

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-stone-950 text-stone-100 select-none overflow-hidden">
      {/* Top Slide Meta Bar */}
      <div className="border-b border-stone-800 bg-stone-900/90 px-3 sm:px-6 py-2 flex items-center justify-between text-xs shrink-0 z-10">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="font-mono text-amber-400 font-bold tracking-wider uppercase text-[11px]">
            {slide.chapter}
          </span>
          <span className="text-stone-600">/</span>
          <span className="text-stone-300 font-medium truncate max-w-[200px] sm:max-w-md text-xs">
            {slide.badge}
          </span>
          <span className="hidden xl:inline text-stone-500 font-mono text-[10px] pl-2 border-l border-stone-800">
            Khung hình 16:9
          </span>
        </div>

        {/* Playback & slide jumper */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs transition-colors"
            title={isPlaying ? 'Dừng tự động chuyển slide' : 'Tự động phát trình chiếu'}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Dừng</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Phát ({timerDuration}s)</span>
              </>
            )}
          </button>

          <div className="hidden md:flex items-center gap-1">
            {SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => { setTimerProgress(0); onSlideChange(idx); }}
                className={`w-6 h-6 rounded text-[11px] font-mono transition-colors ${
                  idx === currentSlideIndex
                    ? 'bg-amber-500 text-stone-950 font-bold'
                    : 'text-stone-400 hover:bg-stone-800 hover:text-stone-200'
                }`}
                title={`Slide ${idx + 1}: ${s.title}`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Auto-play progress bar */}
      {isPlaying && (
        <div className="w-full h-0.5 bg-stone-800 shrink-0">
          <div 
            className="h-full bg-amber-500 transition-all duration-100 ease-linear"
            style={{ width: `${timerProgress}%` }}
          />
        </div>
      )}

      {/* Main Slide Presentation Stage: Responsive 16:9 Frame with graceful overflow handling */}
      <main className="flex-1 w-full flex items-center justify-center p-2 sm:p-4 lg:p-5 overflow-hidden">
        <div className="w-full max-w-[1360px] h-full max-h-[calc(100vh-8.5rem)] lg:aspect-[16/9] bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl flex flex-col justify-between overflow-y-auto p-4 sm:p-6 lg:p-7 relative scrollbar-thin">
          
          {/* SLIDE 1: HERO */}
          {slide.contentVariant === 'hero' && (
            <div className="h-full flex flex-col justify-between relative">
              {/* Background Image Scrim */}
              <div className="absolute inset-0 -m-7 z-0 pointer-events-none overflow-hidden rounded-2xl">
                <img 
                  src="/assets/aistudio/hero_ai_modern_newsroom_1794318546174.jpg" 
                  alt="Modern newsroom"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-20 filter brightness-70 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/30" />
              </div>

              {/* Content Foreground */}
              <div className="relative z-10 space-y-3 sm:space-y-4 max-w-3xl pt-1">
                <div className="flex items-center gap-2 text-[11px] sm:text-xs text-amber-300 font-mono tracking-wider uppercase">
                  <span>📰 BÁO CHÍ HIỆN ĐẠI</span>
                  <span>·</span>
                  <span>✨ AI & VIBE CODING</span>
                  <span>·</span>
                  <span>📈 DATA JOURNALISM</span>
                  <span>·</span>
                  <span>📱 ĐA NỀN TẢNG</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-[1.15] text-balance">
                  AI Định Hình Lại Tòa Soạn Báo Chí
                </h1>

                <div className="w-16 h-0.5 bg-amber-500" />

                <p className="text-xs sm:text-sm lg:text-base text-stone-200 leading-relaxed font-light">
                  {slide.subtitle}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-2.5 pt-2">
                  <button
                    onClick={handleNext}
                    className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 group"
                  >
                    <span>Khám phá Nội dung Chuyên đề</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    onClick={onOpenQuiz}
                    className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-lg bg-stone-800/90 hover:bg-stone-800 text-stone-200 border border-stone-700 text-xs sm:text-sm font-medium transition-colors flex items-center gap-2"
                  >
                    <HelpCircle className="w-4 h-4 text-amber-400" />
                    <span>Trắc nghiệm Tự đánh giá Năng lực AI</span>
                  </button>
                </div>
              </div>

              {/* Bottom Key Metric Strip */}
              <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-3 border-t border-stone-800/80 mt-auto">
                <div className="space-y-0.5">
                  <span className="text-[10px] sm:text-[11px] text-stone-400 font-mono">Tốc độ xuất bản tin</span>
                  <div className="text-base sm:text-xl lg:text-2xl font-bold font-mono text-amber-400 tabular-nums">Nhanh gấp 3 - 5 lần</div>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] sm:text-[11px] text-stone-400 font-mono">Chi phí bóc băng & sơ chế</span>
                  <div className="text-base sm:text-xl lg:text-2xl font-bold font-mono text-emerald-400 tabular-nums">Tiết kiệm 90%</div>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] sm:text-[11px] text-stone-400 font-mono">Làm trang tương tác</span>
                  <div className="text-base sm:text-xl lg:text-2xl font-bold font-mono text-amber-400 tabular-nums">Vài giờ (Vibe Coding)</div>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] sm:text-[11px] text-stone-400 font-mono">Rủi ro tinh giản</span>
                  <div className="text-base sm:text-xl lg:text-2xl font-bold font-mono text-rose-400 tabular-nums">Nhóm không dùng AI</div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 2: INMA GLOBAL TRENDS */}
          {slide.contentVariant === 'inma' && (
            <div className="h-full flex flex-col justify-between space-y-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                  <Compass className="w-4 h-4" />
                  <span>BÁO CÁO HIỆP HỘI TRUYỀN THÔNG TIN TỨC QUỐC TẾ (INMA)</span>
                </div>
                <h2 className="text-lg sm:text-2xl lg:text-3xl font-serif font-bold text-white leading-tight">
                  Tòa Soạn Tìm Kiếm "Tư Duy Sản Phẩm" Khi AI Tái Định Hình Tuyển Dụng
                </h2>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-4xl">
                  Theo phân tích từ INMA (International News Media Association), AI đang làm rung chuyển cấu trúc nhân sự: Tòa soạn không còn đơn thuần tìm kiếm "người viết lách" mà ưu tiên các <strong>"Product Thinkers"</strong> có tư duy thiết kế sản phẩm số toàn diện.
                </p>
              </div>

              {/* 3 Pillar Transformations from INMA */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-auto">
                <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 space-y-1.5">
                  <div className="w-6 h-6 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-mono font-bold text-xs">
                    01
                  </div>
                  <h3 className="font-serif font-bold text-white text-xs sm:text-sm">
                    Từ "Người Viết" Sang "Nhà Phát Triển Sản Phẩm"
                  </h3>
                  <p className="text-[11px] text-stone-300 leading-relaxed">
                    Nhà báo hiện đại nhìn nhận đề tài như một sản phẩm tương tác: Từ dữ liệu thô, infographic, audio podcast đến luồng tương tác trên mobile.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 space-y-1.5">
                  <div className="w-6 h-6 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-bold text-xs">
                    02
                  </div>
                  <h3 className="font-serif font-bold text-white text-xs sm:text-sm">
                    Các Vị Trí Công Việc Mới Xuất Hiện
                  </h3>
                  <p className="text-[11px] text-stone-300 leading-relaxed">
                    Xuất hiện các chức danh mới: <em>AI Prompt Specialist, Newsroom Automation Architect, Data & Algorithm Editor, Interactive Experience Designer</em>.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 space-y-1.5">
                  <div className="w-6 h-6 rounded bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-mono font-bold text-xs">
                    03
                  </div>
                  <h3 className="font-serif font-bold text-white text-xs sm:text-sm">
                    Tự Động Hóa Tác Vụ Lặp Lại
                  </h3>
                  <p className="text-[11px] text-stone-300 leading-relaxed">
                    AI gánh vác dịch thuật, kiểm tra ngữ pháp, tạo tóm tắt, gắn nhãn SEO; phóng viên dành 80% thời lượng cho điều tra độc quyền tại hiện trường.
                  </p>
                </div>
              </div>

              {/* INMA Reference Citation Box */}
              <div className="p-2.5 sm:p-3 rounded-xl bg-stone-950/80 border border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
                <div className="space-y-0.5">
                  <div className="text-[10px] font-mono text-stone-400">Nguồn trích dẫn chính thức:</div>
                  <div className="text-xs font-medium text-stone-200">
                    INMA Newsroom Initiative: "Newsrooms look to product thinkers as AI reshapes hiring"
                  </div>
                </div>
                <a
                  href="https://www.inma.org/blogs/newsroom-initiative/post.cfm/newsrooms-look-to-product-thinkers-as-ai-reshapes-hiring?utm_source=chatgpt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-300 text-xs font-medium border border-stone-700 transition-colors shrink-0"
                >
                  <span>Xem Báo Cáo Gốc INMA</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* SLIDE 3: RESTRUCTURING NEWSROOM (DMITRY SHISHKIN NEWSGEIST / INMA SILOS) */}
          {slide.contentVariant === 'silos' && (
            <div className="h-full flex flex-col justify-between space-y-2.5">
              <div className="space-y-0.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                    <Compass className="w-4 h-4" />
                    <span>MÔ HÌNH TỔ CHỨC TÒA SOẠN MỚI · INMA & NEWSGEIST</span>
                  </div>
                  <span className="hidden sm:inline text-[10px] font-mono text-stone-400">
                    Slide presented by Dmitry Shishkin at Newsgeist
                  </span>
                </div>
                <h2 className="text-lg sm:text-2xl lg:text-3xl font-serif font-bold text-white leading-tight">
                  Từ "Ốc Đảo Riêng Rẽ" Đến Mô Hình Tích Hợp Đa Năng Quanh Bàn Tròn
                </h2>
              </div>

              {/* Center Content: Image on Left + Strategic Analysis on Right */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 my-auto items-center">
                {/* Image Container (Widescreen Presentation) */}
                <div className="lg:col-span-7 bg-white rounded-xl p-2 border border-stone-700 shadow-xl overflow-hidden flex flex-col justify-center">
                  <div className="relative aspect-[16/9] w-full max-h-[280px] overflow-hidden rounded bg-stone-100 flex items-center justify-center">
                    <img 
                      src="/assets/aistudio/Newsroom_NOV26_Sonali_Future_newsrooms_760_2_e5abe36c.jpg" 
                      alt="Newsroom restructuring model: Before separate silos vs After integrated in editorial by Dmitry Shishkin"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="pt-1.5 px-1 flex items-center justify-between text-[10px] text-stone-600 font-mono">
                    <span className="font-semibold text-stone-800">Before: separate silos ➔ After: integrated in editorial</span>
                    <span className="text-stone-500 italic hidden sm:inline">Dmitry Shishkin @ Newsgeist</span>
                  </div>
                </div>

                {/* Analysis Points */}
                <div className="lg:col-span-5 space-y-2">
                  <div className="p-3 rounded-lg bg-stone-950 border border-stone-800 space-y-1">
                    <div className="text-[10px] font-mono text-rose-400 font-bold uppercase">
                      Mô hình cũ: "Ốc đảo riêng biệt" (Separate Silos)
                    </div>
                    <p className="text-[11px] text-stone-300 leading-relaxed">
                      Biên tập, Sản phẩm, Dữ liệu và Cộng đồng hoạt động độc lập dưới sự điều hành của CEO. Phóng viên chỉ lo nộp chữ thô, không nắm được dữ liệu độc giả và kỹ thuật số.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-stone-950 border border-emerald-500/50 space-y-1">
                    <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase">
                      Mô hình mới: "Tích hợp đa năng" (Integrated in Editorial)
                    </div>
                    <p className="text-[11px] text-stone-200 leading-relaxed">
                      <strong>Editor, Product, Data và Community ngồi chung một bàn tròn</strong>. Ban biên tập trở thành hạt nhân tích hợp, phóng viên kết hợp trực tiếp với kỹ sư dữ liệu và AI để tạo sản phẩm số toàn diện.
                    </p>
                  </div>

                  <div className="p-2.5 rounded bg-amber-500/10 border border-amber-500/30 text-[10px] text-amber-200 font-mono">
                    Tác động: Phá bỏ độ trễ tổ chức, cho phép áp dụng ngay Vibe Coding & AI Agents vào từng đề tài thời sự.
                  </div>
                </div>
              </div>

              {/* Bottom footer ribbon */}
              <div className="p-2 rounded bg-stone-950 border border-stone-800 flex items-center justify-between text-[11px] text-stone-400">
                <span>Tư duy sản phẩm (Product Thinking) biến tòa soạn thành một cỗ máy công nghệ linh hoạt.</span>
                <button
                  onClick={handleNext}
                  className="text-amber-400 hover:underline font-mono flex items-center gap-1"
                >
                  <span>Xem Định luật cốt lõi (Slide 4)</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* SLIDE 4: QUOTE & WORKFLOW COMPARISON */}
          {slide.contentVariant === 'quote' && (
            <div className="h-full flex flex-col justify-between space-y-3">
              {/* Grand Headline Quote */}
              <div className="bg-stone-950 border border-amber-500/30 rounded-xl p-4 sm:p-5 text-center space-y-1.5 relative overflow-hidden">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
                  ĐỊNH LUẬT BÁO CHÍ KỶ NGUYÊN SỐ
                </span>
                <blockquote className="text-base sm:text-xl lg:text-2xl font-serif font-bold text-white max-w-4xl mx-auto leading-snug">
                  "AI sẽ không thay thế nhà báo, nhưng nhà báo biết sử dụng AI sẽ thay thế nhà báo không biết sử dụng AI."
                </blockquote>
                <p className="text-[11px] sm:text-xs text-stone-300 max-w-2xl mx-auto">
                  Sự chênh lệch năng suất lên tới 300% giữa phương pháp tác nghiệp thủ công cũ và phong cách AI-Augmented Journalism.
                </p>
              </div>

              {/* Embedded Workflow Comparator */}
              <div className="flex-1 min-h-0 flex flex-col justify-center">
                <WorkflowComparator />
              </div>
            </div>
          )}

          {/* SLIDE 5: VIETNAM NEWSROOM ADVANCES (3 WORKS IN 16:9) */}
          {slide.contentVariant === 'vietnam' && (
            <div className="h-full flex flex-col justify-between space-y-2.5">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                  <Flame className="w-4 h-4" />
                  <span>BƯỚC CHUYỂN NỔI BẬT TẠI VIỆT NAM</span>
                </div>
                <h2 className="text-lg sm:text-2xl lg:text-3xl font-serif font-bold text-white leading-tight">
                  Tòa Soạn Việt Tận Dụng AI Agent & Vibe Coding Để Tăng Tốc
                </h2>
                <p className="text-stone-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
                  Báo Nhân Dân, Znews, VnExpress tiên phong áp dụng AI Agent và Vibe Coding tạo nên các tác phẩm số hóa, phóng sự thị giác và chuyên đề dữ liệu thời gian thực.
                </p>
              </div>

              {/* 3 Prominent 16:9 Showcase Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-auto">
                {CASE_STUDIES.map((cs) => (
                  <div
                    key={cs.id}
                    onClick={() => onOpenCaseStudy(cs)}
                    className="group bg-stone-950 border border-stone-800 hover:border-amber-500/60 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Preview: Widescreen 16:9 Desktop Frame */}
                      <div className="relative aspect-video overflow-hidden bg-stone-950">
                        <img 
                          src={cs.image} 
                          alt={cs.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-2 left-2 bg-stone-950/90 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-amber-300 border border-stone-700">
                          {cs.newspaper}
                        </div>
                      </div>

                      <div className="p-3 space-y-1">
                        <div className="text-[10px] text-stone-400 font-mono">{cs.badge}</div>
                        <h3 className="font-serif font-bold text-white text-xs sm:text-sm line-clamp-2 group-hover:text-amber-300 transition-colors">
                          {cs.title}
                        </h3>
                        <p className="text-[11px] text-stone-300 line-clamp-2 leading-relaxed">
                          {cs.summary}
                        </p>
                      </div>
                    </div>

                    <div className="p-3 pt-0 border-t border-stone-800/80 flex items-center justify-between text-[11px] mt-1">
                      <span className="text-amber-400 font-mono font-medium flex items-center gap-1">
                        <span>Chi tiết tác phẩm</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                      <a
                        href={cs.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-stone-400 hover:text-stone-200 transition-colors p-1"
                        title="Mở link bài gốc"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Regional Newsrooms Ticker */}
              <div className="p-2 rounded-lg bg-stone-950/80 border border-stone-800 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                <div className="flex items-center gap-2 text-amber-400 font-mono">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Báo Tuổi Trẻ (Audio AI)</span>
                  <span>·</span>
                  <span>Báo Nghệ An (AI Agent cơ sở)</span>
                  <span>·</span>
                  <span>Báo Lâm Đồng (Vibe Coding Festival Hoa)</span>
                </div>
                <button
                  onClick={handleNext}
                  className="text-stone-300 hover:text-white underline font-mono"
                >
                  Xem Slide 6: Nghịch lý phân hóa →
                </button>
              </div>
            </div>
          )}

          {/* SLIDE 6: THE GREAT NEWSROOM DIVIDE */}
          {slide.contentVariant === 'divide' && (
            <div className="h-full flex flex-col justify-between space-y-3">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 text-xs font-mono text-rose-400">
                  <AlertTriangle className="w-4 h-4" />
                  <span>NGHỊCH LÝ & THÁCH THỨC TẠI TÒA SOẠN HIỆN NAY</span>
                </div>
                <h2 className="text-lg sm:text-2xl lg:text-3xl font-serif font-bold text-white leading-tight">
                  Tình Trạng Phân Hóa Năng Lực AI: Kẻ Nắm Lợi Thế, Người Tụt Lại Sau
                </h2>
                <p className="text-stone-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
                  Ngay trong cùng một cơ quan báo chí, sự chênh lệch về khả năng tiếp cận và ứng dụng AI đang chia tách phóng viên và biên tập viên thành hai cực rõ rệt.
                </p>
              </div>

              {/* The Great Divide Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-auto">
                {/* Power Users Group */}
                <div className="p-4 rounded-xl bg-stone-950/90 border border-emerald-500/40 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500 text-stone-950">
                      NHÓM BIẾT SỬ DỤNG AI (POWER USERS)
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 font-semibold">Nắm Lợi Thế Lớn</span>
                  </div>

                  <ul className="space-y-2 text-xs text-stone-200">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Năng suất vượt trội:</strong> Hoàn thành bài viết, bóc băng và đồ họa nhanh hơn gấp 3 - 5 lần.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Làm chủ Vibe Coding:</strong> Tự tay dựng các biểu đồ tương tác, phụ trang chuyên đề không phụ thuộc IT.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Trở thành "Product Thinkers":</strong> Được tin tưởng giao các đề tài trọng điểm và giải báo chí quốc gia.</span>
                    </li>
                  </ul>

                  <div className="p-2 rounded bg-emerald-950/40 border border-emerald-900/40 text-[10px] text-emerald-300 font-mono">
                    Định vị: Nhân tố cốt lõi, được quy hoạch vị trí chủ chốt trong tòa soạn số.
                  </div>
                </div>

                {/* Lagging Group */}
                <div className="p-4 rounded-xl bg-stone-950/90 border border-rose-500/40 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-rose-500 text-white">
                      NHÓM KHÔNG BIẾT DÙNG AI (LAGGING)
                    </span>
                    <span className="text-[11px] font-mono text-rose-400 font-semibold">Tụt Lại Phía Sau</span>
                  </div>

                  <ul className="space-y-2 text-xs text-stone-300">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                      <span><strong>Mắc kẹt việc sự vụ:</strong> Tốn nửa ngày bóc băng thủ công hoặc tìm kiếm tư liệu thông thường.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                      <span><strong>Nội dung nghèo nàn hình thức:</strong> Chỉ nộp văn bản thô, thiếu tính thị giác và tương tác độc giả.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                      <span><strong>Hoang mang & Ngại học:</strong> Cảm giác quá tải, lo sợ bị thay thế nhưng chưa chủ động bứt phá.</span>
                    </li>
                  </ul>

                  <div className="p-2 rounded bg-rose-950/40 border border-rose-900/40 text-[10px] text-rose-300 font-mono">
                    Cảnh báo: Chi phí nhân sự cao so với năng suất, đối mặt rủi ro tinh giản.
                  </div>
                </div>
              </div>

              <div className="p-2 rounded-lg bg-stone-950 border border-stone-800 flex items-center justify-between text-[11px] text-stone-400">
                <span>Giải pháp duy nhất thu hẹp khoảng cách: Đào tạo nâng cao năng lực số định kỳ.</span>
                <button 
                  onClick={handleNext}
                  className="text-amber-400 hover:underline font-mono"
                >
                  Xem Slide 7: Rủi ro vị trí việc làm →
                </button>
              </div>
            </div>
          )}

          {/* SLIDE 7: DOWNSIZING & RESTRUCTURING RISKS */}
          {slide.contentVariant === 'risk' && (
            <div className="h-full flex flex-col justify-between space-y-3">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 text-xs font-mono text-rose-400">
                  <ShieldAlert className="w-4 h-4" />
                  <span>QUY LUẬT TÁI CƠ CẤU & BẢO ĐẢM VIỆC LÀM</span>
                </div>
                <h2 className="text-lg sm:text-2xl lg:text-3xl font-serif font-bold text-white leading-tight">
                  Sắp Xếp Vị Trí Việc Làm: Nhóm Không Dùng AI Sẽ Gặp Nguy Hiểm
                </h2>
                <p className="text-stone-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
                  Khi các cơ quan báo chí thực hiện sắp xếp lại bộ máy theo Đề án Vị trí Việc làm mới, những nhân sự có chi phí cao nhưng hiệu suất thấp sẽ là đối tượng đầu tiên đối mặt nguy cơ tinh giản.
                </p>
              </div>

              {/* 4 Vulnerable Job Functions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 my-auto">
                <div className="p-3 rounded-xl bg-stone-950 border border-stone-800 space-y-1">
                  <div className="text-[10px] font-mono text-rose-400 font-bold">VỊ TRÍ 01</div>
                  <h3 className="font-serif font-bold text-white text-xs sm:text-sm">Biên Dịch Tin Thô</h3>
                  <p className="text-[11px] text-stone-300 leading-relaxed">
                    AI dịch thuật và tóm tắt theo thời gian thực từ hàng trăm hãng thông tấn thế giới với chi phí gần như bằng không.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-stone-950 border border-stone-800 space-y-1">
                  <div className="text-[10px] font-mono text-rose-400 font-bold">VỊ TRÍ 02</div>
                  <h3 className="font-serif font-bold text-white text-xs sm:text-sm">Bóc Băng & Thư Ký</h3>
                  <p className="text-[11px] text-stone-300 leading-relaxed">
                    Voice-to-Text AI xử lý băng ghi âm 90 phút trong vài phút khiến vai trò bóc băng thuần túy không còn lý do duy trì.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-stone-950 border border-stone-800 space-y-1">
                  <div className="text-[10px] font-mono text-rose-400 font-bold">VỊ TRÍ 03</div>
                  <h3 className="font-serif font-bold text-white text-xs sm:text-sm">Tin Sự Kiện Nông</h3>
                  <p className="text-[11px] text-stone-300 leading-relaxed">
                    Tin họp báo, thông cáo báo chí đơn thuần được AI Agent chuyển thể thành bài viết hoàn chỉnh chỉ trong 30 giây.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-stone-950 border border-stone-800 space-y-1">
                  <div className="text-[10px] font-mono text-rose-400 font-bold">VỊ TRÍ 04</div>
                  <h3 className="font-serif font-bold text-white text-xs sm:text-sm">Định Dạng Thủ Công</h3>
                  <p className="text-[11px] text-stone-300 leading-relaxed">
                    Khâu rà morasse, chuẩn SEO, gán thẻ metadata đã được tích hợp tự động vào CMS tòa soạn thế hệ mới.
                  </p>
                </div>
              </div>

              {/* Assessment CTA Callout */}
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div className="space-y-0.5">
                  <h4 className="text-xs sm:text-sm font-serif font-bold text-amber-200">
                    Bạn đang ở mức độ an toàn nghề nghiệp nào trước làn sóng AI?
                  </h4>
                  <p className="text-[11px] text-stone-300">
                    Thực hiện trắc nghiệm 4 câu hỏi để kiểm tra "Chỉ số an toàn AI" và nhận khuyến nghị thích ứng.
                  </p>
                </div>
                <button
                  onClick={onOpenQuiz}
                  className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs transition-colors shrink-0 flex items-center gap-1.5"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Trắc Nghiệm Tự Đánh Giá</span>
                </button>
              </div>
            </div>
          )}

          {/* SLIDE 8: STRATEGIC SOLUTIONS (CONTINUOUS TRAINING) */}
          {slide.contentVariant === 'solution' && (
            <div className="h-full flex flex-col justify-between space-y-3">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <GraduationCap className="w-4 h-4" />
                  <span>GIẢI PHÁP CHIẾN LƯỢC TOÀN DIỆN</span>
                </div>
                <h2 className="text-lg sm:text-2xl lg:text-3xl font-serif font-bold text-white leading-tight">
                  Coi Đào Tạo & Nâng Cao Năng Lực Số Là Công Tác Thường Xuyên
                </h2>
                <p className="text-stone-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
                  Để duy trì tính cạnh tranh và chất lượng nội dung trong môi trường báo chí số, các cơ quan báo chí phải coi đào tạo AI là việc làm thường kỳ của mỗi tháng, mỗi quý.
                </p>
              </div>

              {/* 4 Pillars of Continuous Digital Upskilling */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-auto">
                <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center font-bold text-[10px]">1</span>
                    <span className="font-semibold uppercase text-[10px]">Đào Tạo Prompting & Vibe Coding Thực Chiến</span>
                  </div>
                  <h3 className="font-serif font-bold text-white text-xs sm:text-sm">
                    Dạy Phóng Viên Tự Làm Tác Phẩm Tương Tác
                  </h3>
                  <p className="text-[11px] text-stone-300 leading-relaxed">
                    Hướng dẫn thực tế: Trích xuất bảng số liệu từ báo cáo PDF 200 trang, dùng Vibe Coding dựng bảng biểu và bản đồ tương tác nhúng thẳng vào bài viết.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center font-bold text-[10px]">2</span>
                    <span className="font-semibold uppercase text-[10px]">Quy Chuẩn Đạo Đức AI & Kiểm Chứng Nguồn</span>
                  </div>
                  <h3 className="font-serif font-bold text-white text-xs sm:text-sm">
                    Nguyên Tắc "Human-in-the-Loop" Bất Biến
                  </h3>
                  <p className="text-[11px] text-stone-300 leading-relaxed">
                    AI chỉ đóng vai trò trợ lý. Mọi số liệu, trích dẫn do AI sinh ra bắt buộc phải được nhà báo kiểm chứng chéo với nguồn gốc; minh bạch với độc giả.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center font-bold text-[10px]">3</span>
                    <span className="font-semibold uppercase text-[10px]">Thành Lập "AI Innovation Lab / Sandbox"</span>
                  </div>
                  <h3 className="font-serif font-bold text-white text-xs sm:text-sm">
                    Cấp Công Cụ & Không Gian Thử Nghiệm
                  </h3>
                  <p className="text-[11px] text-stone-300 leading-relaxed">
                    Trang bị tài khoản AI trả phí cho phóng viên nòng cốt. Khuyến khích thử nghiệm các format mới (tin đồ họa, podcast tự động) mà không sợ lỗi ban đầu.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
                    <span className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center font-bold text-[10px]">4</span>
                    <span className="font-semibold uppercase text-[10px]">Đổi Mới Cơ Chế Đánh Giá KPI Báo Chí Số</span>
                  </div>
                  <h3 className="font-serif font-bold text-white text-xs sm:text-sm">
                    Đánh Giá Theo Giá Trị Tương Tác & Chiều Sâu
                  </h3>
                  <p className="text-[11px] text-stone-300 leading-relaxed">
                    Bỏ đếm số chữ cơ học. Tưởng thưởng xứng đáng cho các bài viết có hàm lượng công nghệ, đồ họa tương tác giữ chân độc giả và có sức ảnh hưởng xã hội.
                  </p>
                </div>
              </div>

              <div className="p-2 rounded bg-stone-950 border border-stone-800 flex items-center justify-between text-[11px] text-stone-400">
                <span>Mục tiêu cuối cùng: Biến mỗi phóng viên thành một "Product Thinker" tự chủ.</span>
                <button
                  onClick={handleNext}
                  className="text-amber-400 hover:underline font-mono"
                >
                  Xem Slide 9: Ưu tiên đào tạo (WAN-IFRA) →
                </button>
              </div>
            </div>
          )}

          {/* SLIDE 9: NEW - TRAINING AS TOP PRIORITY (WAN-IFRA AI FORUM & LÊ QUỐC MINH) */}
          {slide.contentVariant === 'priority' && (
            <div className="h-full flex flex-col justify-between space-y-3">
              {/* Header */}
              <div className="space-y-0.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                    <GraduationCap className="w-4 h-4" />
                    <span>DIỄN ĐÀN BÁO CHÍ & AI QUỐC TẾ WAN-IFRA 2026 HÀ NỘI</span>
                  </div>
                  <span className="hidden sm:inline text-[10px] font-mono text-stone-400">
                    Chiến lược đào tạo & thích ứng công nghệ
                  </span>
                </div>
                <h2 className="text-lg sm:text-2xl lg:text-3xl font-serif font-bold text-white leading-tight">
                  Đào Tạo & Cập Nhật Kiến Thức Phải Là Ưu Tiên Hàng Đầu
                </h2>
              </div>

              {/* Main Content: Photo of WAN-IFRA on Left + Quote and Imperatives on Right */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 my-auto items-center">
                {/* Photo container */}
                <div className="lg:col-span-7 bg-stone-950 rounded-xl p-2 border border-stone-700 shadow-xl overflow-hidden flex flex-col justify-center">
                  <div className="relative aspect-[16/9] w-full max-h-[300px] overflow-hidden rounded-lg bg-stone-900 flex items-center justify-center">
                    <img 
                      src="/assets/aistudio/image_1c908209.png" 
                      alt="Nhà báo Lê Quốc Minh, Tổng Biên tập Báo Nhân Dân, Chủ tịch Hội Nhà báo Việt Nam phát biểu khai mạc tại Diễn đàn AI WAN-IFRA 2026"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-stone-950/90 text-amber-300 border border-stone-700 px-2 py-0.5 rounded text-[10px] font-mono font-bold">
                      WAN-IFRA AI FORUM 2026
                    </div>
                  </div>
                  <div className="pt-2 px-1 flex items-center justify-between text-[10px] text-stone-400 font-mono">
                    <span className="text-stone-300 font-medium">Nhà báo Lê Quốc Minh phát biểu khai mạc Diễn đàn AI WAN-IFRA</span>
                    <span className="text-stone-500 italic hidden sm:inline">Vietnam+ / Thông tấn xã Việt Nam</span>
                  </div>
                </div>

                {/* Right Column: Grand Quote & Action Imperatives */}
                <div className="lg:col-span-5 space-y-2.5">
                  <div className="p-3.5 rounded-xl bg-stone-950/90 border border-amber-500/40 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold block">
                      THÔNG ĐIỆP CHỈ ĐẠO THEN CHỐT:
                    </span>
                    <blockquote className="font-serif italic text-xs sm:text-sm text-amber-100 leading-snug">
                      "Các tòa soạn cần coi đào tạo, cập nhật kiến thức là ưu tiên hàng đầu, bởi công nghệ thay đổi từng ngày, dừng lại đồng nghĩa với tụt hậu."
                    </blockquote>
                    <div className="text-[10px] text-stone-400 font-mono pt-1 border-t border-stone-800">
                      — Nhà báo <strong>Lê Quốc Minh</strong>, Tổng Biên tập Báo Nhân Dân, Chủ tịch Hội Nhà báo Việt Nam
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-stone-200">
                    <div className="p-2 rounded bg-stone-950 border border-stone-800 flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-[11px]"><strong>Tốc độ thay đổi theo tuần:</strong> Không có công nghệ nào là vĩnh cửu. Nếu không cập nhật kỹ năng AI định kỳ, kiến thức sẽ lỗi thời sau 6 tháng.</span>
                    </div>

                    <div className="p-2 rounded bg-stone-950 border border-stone-800 flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-[11px]"><strong>Đào tạo là tấm khiên bảo vệ việc làm:</strong> Trang bị cho phóng viên khả năng làm chủ công cụ số để tự tin trước mọi đợt sắp xếp lại vị trí việc làm.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom footer ribbon */}
              <div className="p-2 rounded bg-stone-950 border border-stone-800 flex items-center justify-between text-[11px] text-stone-400">
                <span>Dừng lại đồng nghĩa với tụt hậu — Đào tạo số là điều kiện sống còn của báo chí hiện đại.</span>
                <button
                  onClick={handleNext}
                  className="text-amber-400 hover:underline font-mono flex items-center gap-1"
                >
                  <span>Xem Tuyên ngôn Kỷ nguyên Mới (Slide 10)</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* SLIDE 10: THE AI ECOSYSTEM CONDUCTOR (GRAND FINALE) */}
          {slide.contentVariant === 'conductor' && (
            <div className="h-full flex flex-col justify-between space-y-3">
              {/* Grand Proclamation Header */}
              <div className="text-center space-y-1 pt-0.5">
                <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[10px] font-mono uppercase tracking-widest">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>TUYÊN NGÔN BÁO CHÍ KỶ NGUYÊN MỚI · TẦM NHÌN 2026 - 2030</span>
                </div>

                <h2 className="text-lg sm:text-2xl lg:text-3xl font-serif font-bold text-white max-w-4xl mx-auto leading-snug text-balance">
                  "Nhà báo hiện đại sẽ không chỉ là người sáng tạo nội dung, mà còn là người chỉ huy hệ sinh thái AI."
                </h2>

                <p className="text-[11px] sm:text-xs text-stone-300 max-w-2xl mx-auto">
                  Bước chuyển dịch mang tính lịch sử: Từ người viết đơn độc trước trang giấy trắng sang "Nhạc trưởng" điều phối toàn bộ mạng lưới công nghệ thông minh.
                </p>
              </div>

              {/* Orchestration Ecosystem Grid (Center Conductor + 4 Surrounding Pillars) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 my-auto">
                <div className="p-3.5 rounded-xl bg-stone-950/90 border border-amber-500/30 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">CÁNH TAY 01</span>
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <h3 className="font-serif font-bold text-white text-xs sm:text-sm">Chỉ Huy AI Agents</h3>
                  <p className="text-[11px] text-stone-300 leading-relaxed">
                    Điều phối mạng lưới agent bóc băng tự động, rà quét hàng nghìn văn bản chính sách, cảnh báo đề tài dân sinh nóng theo thời gian thực.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-950/90 border border-blue-500/30 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-blue-400 font-bold uppercase">CÁNH TAY 02</span>
                    <Layers className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <h3 className="font-serif font-bold text-white text-xs sm:text-sm">Làm Chủ Vibe Coding</h3>
                  <p className="text-[11px] text-stone-300 leading-relaxed">
                    Tự tay biến ý tưởng phóng sự thành trang tương tác, biểu đồ dữ liệu radar khí hậu, bản đồ hành lang kinh tế mà không phụ thuộc kỹ thuật.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-950/90 border border-purple-500/30 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-purple-400 font-bold uppercase">CÁNH TAY 03</span>
                    <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
                  </div>
                  <h3 className="font-serif font-bold text-white text-xs sm:text-sm">Phân Phối Đa Nền Tảng</h3>
                  <p className="text-[11px] text-stone-300 leading-relaxed">
                    Chỉ đạo chuyển thể một bài báo dài thành Podcast âm thanh đa giọng đọc, video ngắn dạng đứng (Shorts) và infographic mạng xã hội tức thì.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-950/90 border border-emerald-500/40 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">LINH HỒN CỐT LÕI</span>
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <h3 className="font-serif font-bold text-white text-xs sm:text-sm">Bản Lĩnh & Đạo Đức Nhà Báo</h3>
                  <p className="text-[11px] text-stone-300 leading-relaxed">
                    Kiểm chứng độc lập tại hiện trường, bảo vệ sự thật, trách nhiệm xã hội và lương tâm nghề nghiệp — điều mà AI vĩnh viễn không thể thay thế!
                  </p>
                </div>
              </div>

              {/* Bottom Concluding Actions Strip */}
              <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 border border-amber-500/40 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-mono font-bold text-xs sm:text-sm">✓ BÁO CHÍ 2026+:</span>
                  <span className="text-stone-300 text-[11px] sm:text-xs">Công nghệ là đòn bẩy · Con người là trung tâm định hướng</span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => onSlideChange(0)}
                    className="px-3 py-1.5 rounded-md bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors font-mono text-[11px]"
                  >
                    Xem lại từ đầu
                  </button>
                  <button
                    onClick={onOpenQuiz}
                    className="px-3.5 py-1.5 rounded-md bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold transition-colors font-mono text-[11px] flex items-center gap-1.5"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>Làm Trắc Nghiệm Đánh Giá</span>
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Slide Navigation Bottom Bar */}
      <footer className="border-t border-stone-800 bg-stone-900/90 px-3 sm:px-6 py-2.5 flex items-center justify-between text-xs text-stone-400 shrink-0 z-10">
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Slide trước (←)</span>
          </button>
          <button
            onClick={handleNext}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold transition-colors"
          >
            <span className="hidden sm:inline">Slide tiếp (→)</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="text-center font-mono">
          <span className="text-amber-400 font-bold">{currentSlideIndex + 1}</span>
          <span className="text-stone-600"> / </span>
          <span>{totalSlides}</span>
          <span className="hidden md:inline text-stone-400 ml-2">· {slide.chapter}</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleNotes}
            className="hover:text-stone-200 transition-colors hidden sm:inline"
          >
            [N] Mở Ghi chú
          </button>
          <button
            onClick={onOpenQuiz}
            className="hover:text-amber-300 text-amber-400/90 transition-colors font-medium font-mono text-[11px]"
          >
            Trắc nghiệm An toàn AI
          </button>
        </div>
      </footer>
    </div>
  );
};
