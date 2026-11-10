import React from 'react';
import { 
  ExternalLink, 
  ArrowUpRight, 
  Sparkles, 
  Award, 
  Compass, 
  Flame, 
  AlertTriangle, 
  ShieldAlert, 
  GraduationCap, 
  CheckCircle,
  Clock,
  Layers,
  HelpCircle
} from 'lucide-react';
import { CASE_STUDIES, REGIONAL_NEWSROOMS, RECOMMENDED_AI_TOOLS } from '../data/presentationData';
import { CaseStudy } from '../types/presentation';
import { WorkflowComparator } from './WorkflowComparator';

interface LongformReaderProps {
  onOpenCaseStudy: (caseStudy: CaseStudy) => void;
  onOpenQuiz: () => void;
  onSwitchToSlides: () => void;
}

export const LongformReader: React.FC<LongformReaderProps> = ({
  onOpenCaseStudy,
  onOpenQuiz,
  onSwitchToSlides,
}) => {
  return (
    <div className="bg-stone-100 text-stone-900 min-h-screen py-10 px-4 sm:px-6 lg:px-8 selection:bg-amber-200">
      <div className="max-w-4xl mx-auto space-y-14">
        {/* Editorial Masthead */}
        <header className="border-b-2 border-stone-900 pb-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between text-xs uppercase font-mono tracking-widest text-stone-600 gap-2">
            <span>CHUYÊN ĐỀ ĐẶC BIỆT · BÁO CHÍ VÀ CÔNG NGHỆ</span>
            <span>XUẤT BẢN THÁNG 11 / 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-950 leading-[1.15] text-balance">
            AI Định Hình Lại Tòa Soạn Báo Chí: Từ Xu Hướng Toàn Cầu Đến Bước Chuyển Tại Việt Nam
          </h1>

          <p className="text-lg sm:text-xl font-serif text-stone-700 leading-relaxed italic">
            Làn sóng AI Agent và Vibe Coding đang viết lại quy trình làm báo, phân hóa mạnh mẽ đội ngũ phóng viên và đặt ra yêu cầu sống còn về tái cấu trúc vị trí việc làm.
          </p>

          <div className="flex items-center justify-between text-xs text-stone-500 pt-2 border-t border-stone-300 font-mono">
            <div>Ban Nghiên cứu Phát triển Tòa soạn Số</div>
            <button
              onClick={onSwitchToSlides}
              className="text-amber-800 hover:text-amber-950 font-semibold underline underline-offset-4"
            >
              Chuyển sang chế độ Trình chiếu Slide →
            </button>
          </div>
        </header>

        {/* Hero Feature Image */}
        <figure className="space-y-2">
          <div className="relative rounded-xl overflow-hidden border border-stone-300 bg-stone-900 shadow-md">
            <img 
              src="/assets/aistudio/hero_ai_modern_newsroom_1794318546174.jpg" 
              alt="Hiện đại hóa tòa soạn báo chí"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </div>
          <figcaption className="text-xs font-serif text-stone-500 italic text-center">
            Hình 1: Không gian tòa soạn số hiện đại — nơi nhà báo phối hợp nhịp nhàng cùng các AI Agent và hệ thống phân tích dữ liệu thời gian thực.
          </figcaption>
        </figure>

        {/* Section 1: Xu hướng Thế giới & INMA */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
            <Compass className="w-4 h-4" />
            <span>01. Xu Hướng Trên Thế Giới — AI Định Hình Lại Tòa Soạn</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            Tòa Soạn Toàn Cầu Săn Tìm "Tư Duy Sản Phẩm" (Product Thinkers)
          </h2>

          <div className="prose prose-stone max-w-none text-stone-800 leading-relaxed space-y-4 text-base">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-amber-800">
              Trong báo cáo nghiên cứu chuyên sâu mang tên <em>"Newsrooms look to product thinkers as AI reshapes hiring"</em> từ Hiệp hội Truyền thông Tin tức Quốc tế (INMA), một thực tế rõ nét đang diễn ra trên toàn cầu: Cấu trúc tuyển dụng và phân bổ nhân sự trong các cơ quan báo chí đang bị AI đảo lộn hoàn toàn.
            </p>

            <p>
              Trước đây, tiêu chuẩn tuyển dụng hàng đầu của một phóng viên là khả năng viết lách thuần thục và mạng lưới quan hệ nguồn tin. Tuy nhiên, khi các mô hình ngôn ngữ lớn (LLM) có thể tự động hóa việc tóm tắt thông cáo báo chí, dịch thuật tin nước ngoài và tạo các bản tin sự vụ trong vài giây, giá trị thặng dư của nhà báo đã dịch chuyển.
            </p>

            <p>
              Các tòa soạn hàng đầu thế giới (như The New York Times, Financial Times, The Guardian) hiện ưu tiên tuyển dụng những nhà báo có <strong>"Product Thinking"</strong> — khả năng nhìn nhận một đề tài báo chí như một sản phẩm số tích hợp: Có dữ liệu điều tra độc quyền, có giao diện đồ họa trực quan hóa, có bản tin âm thanh (Podcast) và tương tác trực tiếp với người đọc trên màn hình điện thoại thông minh.
            </p>
          </div>

          {/* INMA Citation Callout */}
          <div className="p-4 rounded-lg bg-stone-200/80 border border-stone-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="space-y-0.5">
              <span className="font-mono text-stone-500 uppercase font-semibold">Tài liệu tham khảo chính thức:</span>
              <p className="font-medium text-stone-800">
                INMA Blog: Newsrooms look to product thinkers as AI reshapes hiring
              </p>
            </div>
            <a
              href="https://www.inma.org/blogs/newsroom-initiative/post.cfm/newsrooms-look-to-product-thinkers-as-ai-reshapes-hiring?utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-stone-900 text-stone-100 hover:bg-stone-800 font-medium shrink-0"
            >
              <span>Đọc bài phân tích INMA</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Dmitry Shishkin's Newsgeist Model Figure */}
          <figure className="space-y-3 pt-3">
            <div className="bg-white rounded-xl p-3 border border-stone-300 shadow-sm overflow-hidden flex flex-col items-center">
              <img 
                src="/assets/aistudio/Newsroom_NOV26_Sonali_Future_newsrooms_760_2_e5abe36c.jpg" 
                alt="Sơ đồ chuyển đổi cấu trúc tòa soạn: Before separate silos vs After integrated in editorial của Dmitry Shishkin"
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[460px] object-contain rounded"
              />
            </div>
            <figcaption className="text-xs font-serif text-stone-600 text-center italic">
              Hình 2: Sơ đồ mô hình tổ chức tòa soạn tương lai do Dmitry Shishkin trình bày tại hội nghị Newsgeist — Chuyển từ "ốc đảo riêng rẽ" (separate silos) sang tích hợp Biên tập, Sản phẩm, Dữ liệu và Cộng đồng cùng ngồi quanh bàn tròn.
            </figcaption>
          </figure>
        </section>

        {/* Section 2: Châm ngôn Cốt Lõi */}
        <section className="space-y-6 pt-4 border-t border-stone-300">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
            <Sparkles className="w-4 h-4" />
            <span>02. Định Luật Sống Còn Trong Nghề Báo</span>
          </div>

          <div className="py-8 px-6 sm:px-10 rounded-xl bg-stone-900 text-stone-100 shadow-xl text-center space-y-4">
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-amber-200 leading-snug">
              "AI sẽ không thay thế nhà báo, nhưng nhà báo biết sử dụng AI sẽ thay thế nhà báo không biết sử dụng AI."
            </blockquote>
            <p className="text-xs text-stone-400 font-mono uppercase tracking-wider">
              — Nguyên tắc cạnh tranh cốt lõi trong kỷ nguyên truyền thông số
            </p>
          </div>

          <p className="text-stone-800 leading-relaxed text-base">
            Sự thay thế này không diễn ra qua một quyết định sa thải đột ngột, mà đến từ sự chênh lệch năng suất quá lớn giữa hai cách làm việc. Dưới đây là bảng đối chiếu thực tế từng công đoạn tác nghiệp:
          </p>

          <WorkflowComparator />
        </section>

        {/* Section 3: Thực Tế Việt Nam & 3 Điển Hình */}
        <section className="space-y-8 pt-4 border-t border-stone-300">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
            <Flame className="w-4 h-4" />
            <span>03. Tình Hình Việt Nam — Tiên Phong AI Agent & Vibe Coding</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            Tòa Soạn Việt Nam Đã Thực Sự Tăng Tốc Như Thế Nào?
          </h2>

          <p className="text-stone-800 leading-relaxed text-base">
            Không dừng lại ở việc dùng chatbot hỏi đáp cơ bản, các cơ quan báo chí tại Việt Nam đã chủ động áp dụng <strong>AI Agent</strong> để tự động hóa luồng kiểm duyệt dữ liệu và <strong>Vibe Coding</strong> (phương thức lập trình bằng ngôn ngữ tự nhiên thông qua AI) để sản xuất các tác phẩm chuyên trang, đặc san trực tuyến chất lượng cao trong thời gian kỷ lục.
          </p>

          {/* 3 Prominent Case Studies in Detail */}
          <div className="space-y-10">
            {CASE_STUDIES.map((cs, idx) => (
              <article 
                key={cs.id}
                className="bg-white border border-stone-300 rounded-xl p-6 sm:p-8 shadow-sm space-y-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-stone-900 text-stone-100 flex items-center justify-center font-mono text-xs font-bold">
                      0{idx + 1}
                    </span>
                    <span className="font-serif font-bold text-stone-900 text-lg">
                      {cs.newspaper}
                    </span>
                    <span className="text-stone-400">·</span>
                    <span className="text-xs font-mono text-amber-800 font-semibold">{cs.badge}</span>
                  </div>

                  <a 
                    href={cs.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-700 hover:text-amber-900 underline underline-offset-4"
                  >
                    <span>Truy cập bài gốc</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-950">
                    {cs.title}
                  </h3>
                  <p className="text-stone-700 text-sm leading-relaxed">
                    {cs.summary}
                  </p>
                </div>

                {/* Image showcase (16:9 Format) */}
                <div className="relative aspect-video rounded-lg overflow-hidden border border-stone-200 bg-stone-950 group">
                  <img 
                    src={cs.image} 
                    alt={cs.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-300"
                  />
                  <div className="p-3 bg-stone-900 text-stone-300 text-xs flex justify-between">
                    <span>Định dạng hiển thị: {cs.aspect}</span>
                    <button
                      onClick={() => onOpenCaseStudy(cs)}
                      className="text-amber-400 hover:text-amber-300 font-mono font-medium flex items-center gap-1"
                    >
                      <span>Xem phóng to & dữ liệu</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Technology list & metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-stone-600 font-semibold">
                      Ứng dụng công nghệ:
                    </div>
                    <ul className="space-y-1.5 text-xs text-stone-700">
                      {cs.aiTechUsed.map((t, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-stone-600 font-semibold">
                      Hiệu quả thực tế:
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {cs.metrics.map((m, i) => (
                        <div key={i} className="text-center">
                          <div className="text-xs text-stone-500 font-sans">{m.label}</div>
                          <div className="text-base font-bold font-mono text-emerald-800 tabular-nums">{m.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Regional Newsrooms Highlights */}
          <div className="p-6 bg-stone-200/80 rounded-xl border border-stone-300 space-y-4">
            <h4 className="font-serif font-bold text-stone-900 text-base flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-800" />
              <span>Sự Chuyển Động Tại Báo Tuổi Trẻ, Báo Nghệ An, Báo Lâm Đồng...</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {REGIONAL_NEWSROOMS.map((r, idx) => (
                <div key={idx} className="p-3.5 bg-white rounded-lg border border-stone-300 space-y-1 text-xs">
                  <div className="font-bold text-stone-900 font-serif text-sm">{r.name}</div>
                  <div className="text-amber-800 font-mono text-[11px] font-medium">{r.focus}</div>
                  <p className="text-stone-600">{r.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Phân Hóa Tòa Soạn & Nguy Cơ Tinh Giản */}
        <section className="space-y-6 pt-4 border-t border-stone-300">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-rose-800 font-bold">
            <ShieldAlert className="w-4 h-4" />
            <span>04. Thách Thức — Phân Hóa Năng Lực & Tái Sắp Xếp Vị Trí Việc Làm</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            Khi Sắp Xếp Vị Trí Việc Làm: Nhóm Không Dùng AI Sẽ Gặp Nguy Hiểm
          </h2>

          <div className="prose prose-stone max-w-none text-stone-800 leading-relaxed space-y-4 text-base">
            <p>
              Một nghịch lý đau xót nhưng có thật đang diễn ra: Trong khi nhóm phóng viên, biên tập viên biết sử dụng AI ngày càng tự tin, hoàn thành khối lượng công việc gấp 3 - 5 lần và tạo ra các tác phẩm đa phương tiện xuất sắc, thì nhóm không chịu tiếp cận AI đang rơi vào vòng xoáy tụt hậu.
            </p>

            <p>
              Thời gian tới, khi các cơ quan báo chí đẩy mạnh thực hiện <strong>Đề án Vị trí Việc làm</strong> theo hướng tinh gọn, chuyên nghiệp và hiệu quả, ban lãnh đạo tòa soạn buộc phải rà soát định biên. Những vị trí mà chi phí trả lương cao nhưng năng suất thấp, công việc mang tính sự vụ lặp đi lặp lại (như biên dịch cơ bản, bóc băng phỏng vấn, kiểm tra morasse thủ công) sẽ đối mặt trực tiếp với nguy cơ tinh giản biên chế.
            </p>
          </div>

          {/* Interactive Quiz Trigger Box */}
          <div className="p-6 rounded-xl bg-amber-900 text-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg">
            <div className="space-y-1">
              <h4 className="text-lg font-serif font-bold text-amber-200">
                Đánh giá mức độ an toàn nghề nghiệp của bạn trước làn sóng AI
              </h4>
              <p className="text-xs text-stone-300">
                Làm bài trắc nghiệm 4 câu hỏi tình huống thực tế để nhận chẩn đoán và khuyến nghị đào tạo.
              </p>
            </div>
            <button
              onClick={onOpenQuiz}
              className="px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-xs transition-colors shrink-0 flex items-center gap-2 shadow"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Bắt Đầu Kiểm Tra</span>
            </button>
          </div>
        </section>

        {/* Section 5: Giải Pháp Chiến Lược */}
        <section className="space-y-6 pt-4 border-t border-stone-300">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
            <GraduationCap className="w-4 h-4" />
            <span>05. Giải Pháp Chiến Lược — Đào Tạo Là Công Tác Thường Xuyên</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            Nâng Cao Năng Lực Số: Không Phải Phong Trào Mà Là Yêu Cầu Sống Còn
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-white rounded-xl border border-stone-300 space-y-2">
              <h3 className="font-serif font-bold text-stone-900 text-base">
                1. Đào Tạo Thực Chiến Hàng Tuần
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Tổ chức các buổi lab nội bộ: Phóng viên mang chính dữ liệu đề tài của mình vào lớp học để thực hành bóc tách bằng AI và dựng trang tương tác (Vibe Coding).
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-stone-300 space-y-2">
              <h3 className="font-serif font-bold text-stone-900 text-base">
                2. Quy Chuẩn Đạo Đức AI Tòa Soạn
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Ban hành hướng dẫn rõ ràng: Phóng viên phải chịu trách nhiệm 100% về tính xác thực của thông tin; không để AI tạo ra các ảo giác số liệu (hallucinations).
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-stone-300 space-y-2">
              <h3 className="font-serif font-bold text-stone-900 text-base">
                3. Quỹ Thử Nghiệm Sáng Tạo (AI Sandbox)
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Trang bị bản quyền công cụ AI hàng đầu cho nhân sự nòng cốt. Khích lệ tinh thần dám làm format mới mà không sợ rủi ro thử nghiệm ban đầu.
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-stone-300 space-y-2">
              <h3 className="font-serif font-bold text-stone-900 text-base">
                4. Đổi Mới Cơ Chế Nhuận Bút
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Đánh giá cao các tác phẩm có hàm lượng công nghệ, đồ họa dữ liệu tương tác giữ chân người đọc, thay vì chỉ đếm số chữ như cách làm truyền thống.
              </p>
            </div>
          </div>

          {/* WAN-IFRA AI Forum & Le Quoc Minh Quote */}
          <figure className="space-y-3 pt-3">
            <div className="bg-white rounded-xl p-3 border border-stone-300 shadow-sm overflow-hidden flex flex-col items-center">
              <img 
                src="/assets/aistudio/image_1c908209.png" 
                alt="Nhà báo Lê Quốc Minh, Tổng Biên tập Báo Nhân Dân, Chủ tịch Hội Nhà báo Việt Nam phát biểu tại Diễn đàn AI WAN-IFRA 2026"
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[460px] object-cover rounded"
              />
            </div>
            <figcaption className="text-xs font-serif text-stone-600 text-center italic">
              Hình 3: Nhà báo Lê Quốc Minh, Tổng Biên tập Báo Nhân Dân, Chủ tịch Hội Nhà báo Việt Nam phát biểu khai mạc Diễn đàn AI WAN-IFRA 2026 Hà Nội.
            </figcaption>
          </figure>

          {/* Core Callout */}
          <div className="p-5 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-amber-900 block">
              THÔNG ĐIỆP CHỈ ĐẠO CỐT LÕI:
            </span>
            <blockquote className="font-serif italic text-base sm:text-lg text-amber-950 font-medium leading-snug">
              "Các tòa soạn cần coi đào tạo, cập nhật kiến thức là ưu tiên hàng đầu, bởi công nghệ thay đổi từng ngày, dừng lại đồng nghĩa với tụt hậu."
            </blockquote>
            <p className="text-xs text-amber-900/80 font-mono">
              — Nhà báo Lê Quốc Minh, Tổng Biên tập Báo Nhân Dân, Chủ tịch Hội Nhà báo Việt Nam
            </p>
          </div>
        </section>

        {/* Section 6: Bộ Công Cụ Thực Chiến */}
        <section className="space-y-6 pt-4 border-t border-stone-300">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
            <Sparkles className="w-4 h-4" />
            <span>06. Túi Đồ Nghề AI Cho Nhà Báo Hiện Đại</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RECOMMENDED_AI_TOOLS.map((tool, idx) => (
              <div key={idx} className="p-4 bg-white border border-stone-300 rounded-lg space-y-1.5 text-xs">
                <div className="font-mono font-bold text-amber-800">{tool.name}</div>
                <div className="font-medium text-stone-900">{tool.role}</div>
                <p className="text-stone-600 text-[11px] leading-relaxed">{tool.description}</p>
              </div>
            ))}
          </div>

          {/* Grand Finale Proclamation */}
          <div className="p-8 sm:p-10 bg-gradient-to-br from-stone-900 via-stone-950 to-stone-900 text-stone-100 rounded-2xl shadow-xl border border-amber-500/40 text-center space-y-4 mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>TUYÊN NGÔN BÁO CHÍ KỶ NGUYÊN MỚI</span>
            </div>
            
            <blockquote className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-white max-w-3xl mx-auto leading-snug">
              "Nhà báo hiện đại sẽ không chỉ là người sáng tạo nội dung, mà còn là người chỉ huy hệ sinh thái AI."
            </blockquote>

            <p className="font-serif italic text-base text-stone-300 max-w-2xl mx-auto">
              Công nghệ thay đổi từng ngày, nhưng sứ mệnh của nhà báo phụng sự sự thật và lợi ích cộng đồng là bất biến. Hãy biến AI thành dàn nhạc cụ thông minh, và bạn chính là người nhạc trưởng cầm trịch linh hồn tác phẩm.
            </p>
          </div>
        </section>

        {/* Longform Footer */}
        <footer className="pt-8 border-t-2 border-stone-900 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4 font-mono">
          <div>© 2026 Chuyên đề Báo chí & Trí tuệ Nhân tạo</div>
          <button
            onClick={onSwitchToSlides}
            className="px-4 py-2 bg-stone-900 text-stone-100 hover:bg-stone-800 rounded font-sans transition-colors"
          >
            Quay lại Trình chiếu Slide
          </button>
        </footer>
      </div>
    </div>
  );
};
