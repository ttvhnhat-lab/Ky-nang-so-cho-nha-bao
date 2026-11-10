import React, { useState } from 'react';
import { X, Award, AlertTriangle, ShieldCheck, RefreshCw, ArrowRight } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/presentationData';

interface AiReadinessQuizProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiReadinessQuiz: React.FC<AiReadinessQuizProps> = ({ isOpen, onClose }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, { score: number; feedback: string }>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const currentQ = QUIZ_QUESTIONS[currentIdx];
  const maxScore = QUIZ_QUESTIONS.length * 4;
  const currentTotalScore = Object.values(answers).reduce((acc, curr) => acc + curr.score, 0);

  const handleSelectOption = (score: number, feedback: string) => {
    const updated = {
      ...answers,
      [currentQ.id]: { score, feedback },
    };
    setAnswers(updated);

    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setAnswers({});
    setIsCompleted(false);
  };

  const getResultAssessment = () => {
    const pct = (currentTotalScore / maxScore) * 100;
    if (pct >= 80) {
      return {
        level: 'Nhóm Tiên Phong (AI Leader / Product Thinker)',
        color: 'text-emerald-400 border-emerald-500/40 bg-emerald-950/40',
        badgeColor: 'bg-emerald-500 text-stone-950',
        icon: ShieldCheck,
        description: 'Vị thế của bạn vô cùng vững vàng! Bạn biết làm chủ AI để gia tăng gấp nhiều lần giá trị tác phẩm. Bạn là hình mẫu "Product Thinker" mà các tòa soạn đang khao khát tìm kiếm.',
        recommendation: 'Hãy chủ động đề xuất sáng kiến Vibe Coding, đào tạo lại cho các đồng nghiệp trẻ và nghiên cứu sâu hơn về AI Agent tự động hóa chuyên đề.'
      };
    }
    if (pct >= 50) {
      return {
        level: 'Nhóm Thích Ứng Cầm Chừng (Moderate Risk)',
        color: 'text-amber-400 border-amber-500/40 bg-amber-950/40',
        badgeColor: 'bg-amber-500 text-stone-950',
        icon: AlertTriangle,
        description: 'Bạn đã có ý thức về công nghệ nhưng còn e dè hoặc dùng ở mức cơ bản (như hỏi đáp đơn giản). Khi tòa soạn tái cơ cấu định biên, bạn có nguy cơ bị vượt mặt bởi những đồng nghiệp linh hoạt hơn.',
        recommendation: 'Cần tham gia ngay các khóa thực chiến về bóc băng AI, học cách vẽ biểu đồ tương tác (Flourish) và thử nghiệm viết prompt cấu trúc đề tài chuyên sâu.'
      };
    }
    return {
      level: 'Nhóm Nguy Cơ Cao (High Vulnerability / Cần Tinh Giản)',
      color: 'text-rose-400 border-rose-500/40 bg-rose-950/40',
      badgeColor: 'bg-rose-500 text-white',
      icon: AlertTriangle,
      description: 'Báo động đỏ! Bạn đang phụ thuộc 100% vào các phương pháp thủ công cũ và giao phó toàn bộ khâu kỹ thuật cho người khác. Khi cơ quan báo chí sắp xếp vị trí việc làm theo hiệu suất, nhóm này chịu áp lực đào thải lớn nhất.',
      recommendation: 'Thay đổi tư duy ngay từ hôm nay: Hãy bắt đầu từ việc dùng công cụ AI bóc băng phỏng vấn, nhờ AI phản biện đề tài trước khi viết. Đào tạo số là cứu cánh duy nhất!'
    };
  };

  const result = getResultAssessment();
  const IconComponent = result.icon;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-stone-900 border border-stone-700 rounded-xl text-stone-100 shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-950">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <h3 className="font-serif font-bold text-lg text-white">
              Trắc Nghiệm Năng Lực AI & Đánh Giá Vị Trí Việc Làm
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6">
          {!isCompleted ? (
            <>
              {/* Progress bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-stone-400 font-mono">
                  <span>Câu hỏi {currentIdx + 1} / {QUIZ_QUESTIONS.length}</span>
                  <span>Điểm tạm tính: {currentTotalScore}đ</span>
                </div>
                <div className="w-full h-1.5 bg-stone-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-amber-500 transition-all duration-300"
                    style={{ width: `${((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="space-y-4">
                <h4 className="text-lg md:text-xl font-serif font-semibold text-white leading-snug">
                  {currentQ.question}
                </h4>

                <div className="space-y-3 pt-2">
                  {currentQ.options.map((opt, oIdx) => (
                    <button
                      key={oIdx}
                      onClick={() => handleSelectOption(opt.score, opt.feedback)}
                      className="w-full text-left p-4 rounded-lg bg-stone-950/70 hover:bg-stone-800 border border-stone-800 hover:border-amber-500/60 transition-all text-sm text-stone-200 flex items-start gap-3 group"
                    >
                      <span className="w-6 h-6 rounded-full bg-stone-800 group-hover:bg-amber-500 group-hover:text-stone-950 flex items-center justify-center font-mono text-xs shrink-0 transition-colors font-bold">
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <span className="leading-relaxed pt-0.5">{opt.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            /* Results Screen */
            <div className="space-y-6 animate-in fade-in">
              <div className={`p-6 rounded-xl border ${result.color} space-y-4`}>
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-bold px-3 py-1 rounded ${result.badgeColor}`}>
                    KẾT QUẢ ĐÁNH GIÁ
                  </span>
                  <span className="font-mono text-xs text-stone-400">
                    Điểm số: <strong className="text-white text-base">{currentTotalScore}</strong> / {maxScore}
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <IconComponent className="w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-serif font-bold text-white">
                      {result.level}
                    </h4>
                    <p className="text-sm text-stone-300 mt-2 leading-relaxed">
                      {result.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-800/80">
                  <div className="text-xs uppercase tracking-wider font-mono font-semibold text-amber-300 mb-1">
                    Khuyến nghị hành động khẩn cấp:
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {result.recommendation}
                  </p>
                </div>
              </div>

              {/* Review of choices */}
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                <div className="text-xs font-mono text-stone-400 uppercase tracking-wider">
                  Tổng hợp nhận xét từng câu:
                </div>
                {QUIZ_QUESTIONS.map((q) => {
                  const ans = answers[q.id];
                  if (!ans) return null;
                  return (
                    <div key={q.id} className="p-2.5 rounded bg-stone-950/80 border border-stone-800 text-xs text-stone-300">
                      <div className="font-medium text-stone-200">{q.question}</div>
                      <div className="text-amber-400/90 mt-1 flex items-start gap-1">
                        <ArrowRight className="w-3 h-3 shrink-0 mt-0.5" />
                        <span>{ans.feedback}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-stone-300 bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Làm lại bài kiểm tra</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2 text-xs font-semibold text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors"
                >
                  Hoàn tất & Quay lại
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
