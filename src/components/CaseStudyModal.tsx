import React from 'react';
import { X, ExternalLink, Sparkles, CheckCircle2, TrendingUp, Layers } from 'lucide-react';
import { CaseStudy } from '../types/presentation';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  if (!caseStudy) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-stone-900 border border-stone-700 rounded-xl text-stone-100 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-950/60 sticky top-0 z-10 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-mono font-medium">
              {caseStudy.newspaper}
            </span>
            <span className="text-stone-500">·</span>
            <span className="text-xs text-stone-400">{caseStudy.badge}</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Main Title & Action */}
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight">
              {caseStudy.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a 
                href={caseStudy.sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-medium text-xs transition-colors shadow-sm"
              >
                <span>Xem Tác Phẩm Gốc Trực Tuyến</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-xs text-stone-400 font-mono truncate max-w-md">
                {caseStudy.sourceUrl}
              </span>
            </div>
          </div>

          {/* High-Resolution Showcase Image (16:9 Format) */}
          <div className="relative aspect-video rounded-lg overflow-hidden border border-stone-800 bg-stone-950 group">
            <img 
              src={caseStudy.image} 
              alt={caseStudy.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-transparent p-4 flex items-center justify-between text-xs text-stone-300">
              <span className="font-serif italic">Hình ảnh tư liệu gốc xuất bản (Tỷ lệ 16:9)</span>
              <span className="font-mono text-amber-300/80">{caseStudy.aspect}</span>
            </div>
          </div>

          {/* Quote callout */}
          <div className="p-4 rounded-lg bg-stone-800/70 border border-stone-700/80">
            <p className="font-serif italic text-base md:text-lg text-amber-200">
              "{caseStudy.highlightQuote}"
            </p>
          </div>

          {/* Description & Impact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-sm font-semibold text-stone-300 uppercase tracking-wider font-mono flex items-center gap-2">
                <Layers className="w-4 h-4 text-amber-400" />
                <span>Phân Tích Mô Hình Báo Chí Số</span>
              </h3>
              <p className="text-stone-300 leading-relaxed text-sm">
                {caseStudy.summary}
              </p>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400 font-mono">
                  Công Nghệ & Quy Trình Ứng Dụng:
                </h4>
                <div className="space-y-1.5">
                  {caseStudy.aiTechUsed.map((tech, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-stone-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="bg-stone-950/80 border border-stone-800 rounded-lg p-5 space-y-4">
              <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider font-mono flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>Hiệu Quả Đo Lường</span>
              </h3>
              <div className="space-y-3">
                {caseStudy.metrics.map((metric, idx) => (
                  <div key={idx} className="border-b border-stone-800 pb-2 last:border-none last:pb-0">
                    <div className="text-xs text-stone-400">{metric.label}</div>
                    <div className="text-xl font-bold font-mono text-emerald-400 tabular-nums">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-stone-800 bg-stone-950/70 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-stone-300 bg-stone-800 hover:bg-stone-700 rounded-md transition-colors"
          >
            Đóng cửa sổ
          </button>
        </div>
      </div>
    </div>
  );
};
