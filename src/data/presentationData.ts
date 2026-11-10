import { CaseStudy, WorkflowStep, SlideData, QuizQuestion } from '../types/presentation';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'nhan-dan',
    newspaper: 'Báo Nhân Dân',
    badge: 'Special Mega-Story & Dữ liệu Lịch sử',
    title: 'Nghị quyết 27 - Phát triển Vùng: Kiến tạo không gian phát triển mới',
    sourceUrl: 'https://nhandan.vn/special/bai-1-phat-trien-vung-theo-nghi-quyet-27/index.html#source=zone%2Fzone-timeline-460585',
    image: '/assets/aistudio/bao_nhan_dan_9c6e27be.png',
    aspect: 'Khung hình 16:9 · Đồ họa Nghị quyết 27',
    summary: 'Sử dụng cấu trúc Mega-story số hóa hiện đại, tích hợp bản đồ các hành lang kinh tế, biểu đồ tăng trưởng GRDP thời gian thực và dòng thời gian tương tác. Báo Nhân Dân là ngọn cờ đầu trong việc kết hợp kho tư liệu báo chí truyền thống với công cụ AI để tái cấu trúc nội dung chính luận sinh động.',
    aiTechUsed: [
      'AI Agent rà soát & bóc tách dữ liệu văn kiện',
      'Vibe Coding xây dựng giao diện tương tác đặc san',
      'Đồ họa trực quan hóa hành lang kinh tế đa chiều'
    ],
    metrics: [
      { label: 'Thời gian sản xuất trang đặc biệt', value: '-60%' },
      { label: 'Tương tác đọc trung bình (Time on page)', value: '6m45s' },
      { label: 'Độ hài lòng độc giả trẻ', value: '94%' }
    ],
    highlightQuote: 'Báo chí chính luận không hề khô khan nếu được trao đôi cánh của công nghệ đồ họa dữ liệu và công cụ AI hỗ trợ sáng tạo.'
  },
  {
    id: 'znews',
    newspaper: 'Znews (Tri thức Trực tuyến)',
    badge: 'Visual Journalism & Longform Photo-story',
    title: 'Các bước chuẩn bị trước ngày khai thác Sân bay Long Thành',
    sourceUrl: 'https://znews.vn/soi-tien-do-san-bay-long-thanh-truoc-moc-khai-thac-ngay-2412-post1694898.html',
    image: '/assets/aistudio/znews_49635e90.png',
    aspect: 'Khung hình 16:9 · Infographic Tiến độ',
    summary: 'Tác phẩm hình mẫu về báo chí thị giác đương đại: Sử dụng ảnh không ảnh (drone) phân giải siêu cao kết hợp các lớp thông tin đồ họa tiến độ mái vòm nhà ga, đường băng và hạ tầng kết nối. AI giúp tối ưu chọn lọc hàng nghìn khung hình, phân tích tiến độ xây dựng và tự động tạo phụ đề/metadata.',
    aiTechUsed: [
      'AI Vision hỗ trợ lọc & gán nhãn hàng nghìn file ảnh RAW',
      'AI tự động tạo bản tóm tắt tiến độ công trình dạng thẻ',
      'Tối ưu luồng phân phối đa kênh (Mobile/Social)'
    ],
    metrics: [
      { label: 'Lượt xem trang độc lập', value: '1.2M+' },
      { label: 'Tỷ lệ chia sẻ xã hội', value: '+180%' },
      { label: 'Tốc độ xuất bản Photo-story', value: 'Nhanh gấp 3' }
    ],
    highlightQuote: 'Báo chí thị giác kết hợp AI cho phép người đọc "chạm" vào hiện trường đại công trình với độ chân thực chưa từng có.'
  },
  {
    id: 'vnexpress',
    newspaper: 'VnExpress',
    badge: 'Interactive Data Journalism & Radar khí hậu',
    title: 'Mùa mưa dị thường của TP HCM: Phá vỡ kỷ lục 46 năm',
    sourceUrl: 'https://vnexpress.net/mua-mua-di-thuong-o-tp-hcm-5132888.html',
    image: '/assets/aistudio/vnexpress_dd90c987.png',
    aspect: 'Khung hình 16:9 · Skyline & Radar Dữ liệu',
    summary: 'Ứng dụng báo chí dữ liệu đỉnh cao: Phân tích lượng mưa 10 năm kết hợp radar thời tiết tương tác. Người đọc có thể kéo thanh trượt theo mốc thời gian để thấy đám mây di chuyển và các vùng ngập úng đô thị. Phóng viên kết hợp công cụ lập trình dữ liệu với AI để trực quan hóa tập dữ liệu khí tượng khổng lồ.',
    aiTechUsed: [
      'Mô hình xử lý ngôn ngữ tự nhiên phân tích kho dữ liệu khí tượng',
      'AI viết mã sinh biểu đồ tương tác thời gian thực',
      'Cá nhân hóa cảnh báo triều cường theo từng quận/huyện'
    ],
    metrics: [
      { label: 'Điểm tương tác độc giả (Widget clicks)', value: '3.4M' },
      { label: 'Khối lượng dữ liệu khí tượng xử lý', value: '10 năm' },
      { label: 'Độ tin cậy dữ liệu kiểm chứng', value: '100%' }
    ],
    highlightQuote: 'Dữ liệu thô biến thành câu chuyện sống động khi nhà báo biết cách sử dụng AI và mã nguồn để giao tiếp với độc giả.'
  }
];

export const REGIONAL_NEWSROOMS = [
  {
    name: 'Báo Tuổi Trẻ',
    focus: 'Hệ thống AI Audio & Podcast tự động',
    description: 'Chuyển đổi bài viết thành bản tin âm thanh giọng đọc tự nhiên đa vùng miền, hệ thống AI gợi ý bài viết cá nhân hóa cho từng nhóm độc giả.',
    impact: 'Tăng 45% thời gian nghe bản tin trên ứng dụng di động.'
  },
  {
    name: 'Báo Nghệ An',
    focus: 'Tòa soạn hội tụ & AI Agent tổng hợp tin địa bàn',
    description: 'Ứng dụng AI Agent rà soát thông tin cơ sở tại 21 huyện thị, tự động phát hiện đề tài dân sinh nóng và hỗ trợ phóng viên hiện trường.',
    impact: 'Tiết kiệm 3 giờ mỗi ngày cho khâu quét đề tài và duyệt tin sơ bộ.'
  },
  {
    name: 'Báo Lâm Đồng',
    focus: 'Báo chí đa phương tiện & Thử nghiệm Vibe Coding',
    description: 'Sử dụng AI hỗ trợ dựng bản tin video ngắn (Shorts/Reels) từ tin văn bản, áp dụng Vibe Coding dựng trang chuyên đề lễ hội Festival Hoa.',
    impact: 'Tốc độ làm trang chuyên đề rút ngắn từ 1 tuần xuống chỉ còn 4 giờ.'
  }
];

export const WORKFLOW_COMPARISON: WorkflowStep[] = [
  {
    step: 'Tìm kiếm đề tài & Thu thập tư liệu',
    traditional: {
      time: '3 - 5 giờ',
      description: 'Lướt thủ công hàng chục website, lục tìm tài liệu giấy, gõ từng từ khóa tìm kiếm trên Google.',
      painPoint: 'Dễ bỏ sót thông tin ngách, tốn quá nhiều sức lực ban đầu.'
    },
    aiAugmented: {
      time: '15 - 30 phút',
      description: 'AI Agent quét đa nguồn (Perplexity, dữ liệu mở), tổng hợp tóm tắt bối cảnh và đề xuất góc nhìn đối chiếu.',
      benefit: 'Phóng viên nắm bức tranh toàn cảnh ngay lập tức, tập trung vào phỏng vấn sâu.'
    }
  },
  {
    step: 'Bóc băng phỏng vấn & Xử lý số liệu',
    traditional: {
      time: '2 - 4 giờ / phỏng vấn',
      description: 'Nghe lại từng đoạn ghi âm, tua đi tua lại để gõ từng chữ; nhập bảng Excel thủ công.',
      painPoint: 'Mệt mỏi cơ bắp, chiếm hơn 50% thời gian tác nghiệp hàng ngày.'
    },
    aiAugmented: {
      time: '3 - 5 phút',
      description: 'Công cụ AI Audio (Whisper) chuyển audio thành text chính xác 98%, AI trích xuất bảng số liệu sạch.',
      benefit: 'Nhà báo rảnh tay phân tích logic câu chuyện và cảm xúc nhân vật.'
    }
  },
  {
    step: 'Trình bày bài viết & Đồ họa tương tác (Vibe Coding)',
    traditional: {
      time: '3 - 7 ngày chờ IT/Design',
      description: 'Phóng viên viết text thô, gửi sang phòng thiết kế và IT làm trang mega-story; qua 4-5 vòng duyệt.',
      painPoint: 'Mất tính thời sự nóng hổi, ý tưởng tác giả bị tam sao thất bản.'
    },
    aiAugmented: {
      time: '1 - 2 giờ tự thực hiện',
      description: 'Nhà báo dùng AI Agent & Vibe Coding tạo trang tương tác, bản đồ động, widget trắc nghiệm tức thì.',
      benefit: 'Tác phẩm xuất bản ngay trong ngày với trải nghiệm thị giác ấn tượng.'
    }
  },
  {
    step: 'Phát hành đa nền tảng (Social, Podcast, Newsletter)',
    traditional: {
      time: 'Thêm 2 - 3 nhân sự',
      description: 'Cần đội Social riêng để viết lại caption, cắt ảnh, dựng video dọc, thu âm đọc bài.',
      painPoint: 'Chi phí nhân sự phình to, độ trễ giữa báo điện tử và mạng xã hội.'
    },
    aiAugmented: {
      time: 'Tự động trong 5 phút',
      description: 'AI tự động sinh phiên bản tóm tắt cho Facebook/Zalo, tạo podcast giọng đọc chuẩn, tạo infographics tóm gọn.',
      benefit: 'Độ phủ rộng khắp mà không cần gia tăng bộ máy cồng kềnh.'
    }
  }
];

export const SLIDES: SlideData[] = [
  {
    id: 1,
    chapter: 'Tổng quan Chuyên đề',
    badge: 'Xu Hướng Báo Chí 2025 - 2026',
    title: 'AI Định Hình Lại Tòa Soạn Báo Chí Hiện Đại',
    subtitle: 'Từ Xu Hướng Toàn Cầu, Làn Sóng Vibe Coding & AI Agent Tại Việt Nam, Đến Thách Thức Phân Hóa & Tái Sắp Xếp Vị Trí Việc Làm',
    presenterNotes: 'Kính chào quý vị đồng nghiệp và các nhà báo. Hôm nay chúng ta cùng mổ xẻ một bước ngoặt lớn chưa từng có của nền báo chí: Trí tuệ nhân tạo không còn là câu chuyện tương lai, mà đang trực tiếp định đoạt năng suất, cơ cấu tổ chức và sự tồn vong của từng vị trí việc làm trong tòa soạn.',
    contentVariant: 'hero'
  },
  {
    id: 2,
    chapter: 'Xu hướng Toàn cầu',
    badge: 'Báo cáo Quốc tế INMA',
    title: 'Tòa Soạn Tìm Kiếm "Tư Duy Sản Phẩm" Khi AI Tái Định Hình Tuyển Dụng',
    subtitle: 'Nghiên cứu từ Hiệp hội Truyền thông Tin tức Quốc tế (INMA): Tòa soạn hiện đại chuyển dịch từ chỉ viết tin sang tư duy thiết kế sản phẩm báo chí toàn diện.',
    presenterNotes: 'Báo cáo mới nhất của INMA chỉ rõ: Các tòa soạn hàng đầu thế giới như Financial Times, The New York Times, Ringier không chỉ tuyển người biết viết tin đơn thuần, mà họ đang săn lùng "Product Thinkers" — những người biết làm chủ AI để tạo ra sản phẩm báo chí hoàn chỉnh, thấu hiểu trải nghiệm độc giả và tối ưu hóa luồng dữ liệu.',
    contentVariant: 'inma'
  },
  {
    id: 3,
    chapter: 'Tái Cấu Trúc Tòa Soạn',
    badge: 'Mô hình Newsgeist & Dmitry Shishkin',
    title: 'Từ "Ốc Đảo Riêng Rẽ" Đến Mô Hình Tích Hợp Đa Năng Trong Tòa Soạn Số',
    subtitle: 'Sơ đồ chuyển đổi tổ chức của Dmitry Shishkin tại diễn đàn Newsgeist: Tích hợp Biên tập (Editor), Sản phẩm (Product), Dữ liệu (Data) và Cộng đồng (Community) cùng làm việc quanh bàn tròn nội dung.',
    presenterNotes: 'Đây là sơ đồ kinh điển do chuyên gia Dmitry Shishkin trình bày tại hội nghị Newsgeist: Trước đây, tòa soạn hoạt động theo kiểu "ốc đảo riêng biệt" (separate silos). Nhưng trong kỷ nguyên AI, mô hình mới bắt buộc phải tích hợp: Phóng viên, chuyên viên sản phẩm, kỹ sư dữ liệu và chuyên gia cộng đồng phải ngồi chung bàn tròn, biến ban biên tập thành hạt nhân sáng tạo sản phẩm số.',
    contentVariant: 'silos'
  },
  {
    id: 4,
    chapter: 'Châm ngôn Cốt lõi',
    badge: 'Định Luật Sống Còn',
    title: '"AI sẽ không thay thế nhà báo, nhưng nhà báo biết sử dụng AI sẽ thay thế nhà báo không biết sử dụng AI"',
    subtitle: 'Sự chênh lệch năng suất lên tới 300% giữa phương pháp tác nghiệp truyền thống và phương thức AI-Augmented Journalism.',
    presenterNotes: 'Đây là câu nói đúc kết kinh điển nhất của kỷ nguyên số. AI không có cảm xúc, không thể thay thế trái tim nhà báo ở hiện trường. Nhưng nhà báo biết dùng AI làm trợ lý đắc lực sẽ làm việc nhanh hơn gấp 3 lần, bài viết đẹp hơn, giàu dữ liệu hơn và biến nhà báo không chịu học hỏi trở nên lạc hậu.',
    contentVariant: 'quote'
  },
  {
    id: 5,
    chapter: 'Thực tế Việt Nam',
    badge: 'Đột phá Công nghệ Nội địa',
    title: 'Tòa Soạn Việt Tận Dụng AI Agent & Vibe Coding Để Tăng Tốc',
    subtitle: 'Bài học thực tiễn từ Báo Nhân Dân, Znews, VnExpress, Báo Tuổi Trẻ, Báo Nghệ An, Báo Lâm Đồng... trong tối ưu quy trình và tạo tác phẩm chất lượng cao.',
    presenterNotes: 'Tại Việt Nam, cuộc cách mạng không còn trên giấy tờ. Báo Nhân Dân đã làm các đợt Mega-story dữ liệu như Nghị quyết 27; Znews gây ấn tượng với phóng sự ảnh Long Thành chuẩn bị vận hành; VnExpress làm chủ đồ họa tương tác thời tiết dị thường. Các báo địa phương như Nghệ An, Lâm Đồng cũng dùng AI MC và podcast tự động.',
    contentVariant: 'vietnam'
  },
  {
    id: 6,
    chapter: 'Nghịch lý Nội tại',
    badge: 'Thực Trạng Đáng Báo Động',
    title: 'Phân Hóa Năng Lực AI: Kẻ Vươn Lên Dẫn Đầu, Người Chậm Chân Tụt Lại',
    subtitle: 'Khoảng cách công nghệ ngày càng nới rộng ngay trong một tập thể: Khi một nửa tòa soạn tăng tốc gấp 4 lần, nửa còn lại mắc kẹt trong sự vụ thủ công.',
    presenterNotes: 'Thực tế đáng suy ngẫm trong các tòa soạn hiện nay: Có những phóng viên trẻ đã thuần thục prompt, biết Vibe Coding làm đồ họa trong 30 phút; nhưng cũng còn không ít biên tập viên vẫn bóc băng tay, viết tin theo lối mòn và ngần ngại chạm vào công nghệ mới. Sự phân hóa này đang tạo ra bất bình đẳng về năng suất.',
    contentVariant: 'divide'
  },
  {
    id: 7,
    chapter: 'Rủi ro Nghề nghiệp',
    badge: 'Tái Cơ Cấu & Tinh Giản',
    title: 'Khi Sắp Xếp Vị Trí Việc Làm: Nhóm Không Dùng AI Sẽ Gặp Nguy Hiểm',
    subtitle: 'Đề án vị trí việc làm mới và áp lực tinh giản biên chế tại các cơ quan báo chí sẽ tự nhiên đào thải những vị trí có chi phí cao nhưng hiệu suất thấp.',
    presenterNotes: 'Khi các cơ quan báo chí thực hiện sắp xếp lại vị trí việc làm theo vị trí công tác mới, lãnh đạo tòa soạn sẽ nhìn vào hiệu quả thực tế: Một người vừa viết tin, vừa biết AI phân tích dữ liệu, vừa dựng được giao diện web tương tác sẽ có giá trị gấp nhiều lần một người chỉ biết làm việc theo cách cũ. Nhóm đứng yên sẽ là đối tượng đầu tiên đối mặt nguy cơ tinh giản.',
    contentVariant: 'risk'
  },
  {
    id: 8,
    chapter: 'Giải pháp Chiến lược',
    badge: 'Hành Động Khẩn Cấp',
    title: 'Coi Đào Tạo & Nâng Cao Năng Lực Số Là Công Tác Thường Xuyên',
    subtitle: 'Chiến lược 4 trụ cột để xây dựng tòa soạn thích ứng: Đào tạo liên tục, chuẩn mực đạo đức, AI Sandbox và cơ chế tưởng thưởng đổi mới sáng tạo.',
    presenterNotes: 'Giải pháp căn cơ không phải là sa thải mà là nâng chuẩn. Tòa soạn phải coi đào tạo AI là việc làm mỗi tháng, mỗi quý. Tổ chức các workshop Vibe Coding thực chiến, xây dựng bộ quy tắc đạo đức AI để kiểm chứng thông tin, và tạo không gian cho phóng viên thử nghiệm công nghệ mới mà không sợ sai.',
    contentVariant: 'solution'
  },
  {
    id: 9,
    chapter: 'Ưu Tiên Sống Còn',
    badge: 'Diễn Đàn Báo Chí & AI Quốc Tế WAN-IFRA',
    title: 'Các Tòa Soạn Cần Coi Đào Tạo, Cập Nhật Kiến Thức Là Ưu Tiên Hàng Đầu',
    subtitle: '"Bởi công nghệ thay đổi từng ngày, dừng lại đồng nghĩa với tụt hậu." — Chủ tịch Hội Nhà báo Việt Nam Lê Quốc Minh phát biểu tại Diễn đàn AI WAN-IFRA.',
    presenterNotes: 'Thông điệp chỉ đạo then chốt từ nhà báo Lê Quốc Minh (Tổng Biên tập Báo Nhân Dân, Chủ tịch Hội Nhà báo Việt Nam) tại Diễn đàn AI WAN-IFRA: Các cơ quan báo chí không thể xem đào tạo là phong trào thời vụ. Công nghệ thay đổi theo từng ngày, nếu dừng lại hay ngần ngại thích ứng thì đồng nghĩa với việc tự đào thải khỏi dòng chảy thông tin.',
    contentVariant: 'priority'
  },
  {
    id: 10,
    chapter: 'Tuyên Ngôn Kỷ Nguyên Mới',
    badge: 'Tầm Nhìn & Sứ Mệnh Nhà Báo',
    title: 'Nhà báo hiện đại sẽ không chỉ là người sáng tạo nội dung, mà còn là người chỉ huy hệ sinh thái AI.',
    subtitle: 'Chuyển dịch vai trò mang tính lịch sử: Từ người viết tin đơn thuần sang "Nhạc trưởng" điều phối các Agent, dữ liệu lớn, kiểm chứng sự thật và bảo vệ giá trị nhân văn.',
    presenterNotes: 'Thông điệp kết luận sâu sắc nhất cho toàn bộ chuyên đề: "Nhà báo hiện đại sẽ không chỉ là người sáng tạo nội dung, mà còn là người chỉ huy hệ sinh thái AI." Bạn không còn đơn độc trước màn hình gõ chữ. Bạn là người chỉ huy: giao việc cho AI Agent bóc băng, yêu cầu AI Data phân tích số liệu, chỉ đạo Vibe Coding dựng bản đồ tương tác, và chính bạn là người cầm trịch đạo đức, phán đoán và thẩm định sự thật cuối cùng. Đó là tương lai của nghề báo chúng ta!',
    contentVariant: 'conductor'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Khi nhận được một tài liệu báo cáo dài 120 trang từ bộ ngành, bạn thường xử lý thế nào?',
    options: [
      {
        text: 'Đọc lướt thủ công từ đầu đến cuối, mất gần cả ngày làm việc.',
        score: 1,
        feedback: 'Bạn đang tốn quá nhiều thời gian cho việc đọc thô thay vì đào sâu phân tích góc nhìn độc quyền.'
      },
      {
        text: 'Dùng chức năng Ctrl+F để tìm vài từ khóa liên quan đến mảng mình phụ trách.',
        score: 2,
        feedback: 'Cách này nhanh hơn nhưng dễ bỏ lọt những điểm bất thường hoặc tương quan dữ liệu thú vị.'
      },
      {
        text: 'Nạp vào AI Agent để trích xuất số liệu cốt lõi, tìm mâu thuẫn số liệu, rồi đối chiếu kiểm chứng độc lập.',
        score: 4,
        feedback: 'Xuất sắc! Bạn kết hợp tốc độ của AI với tư duy kiểm chứng nhà báo chuẩn mực.'
      }
    ]
  },
  {
    id: 2,
    question: 'Bạn cần một trang phóng sự đa phương tiện (Mega-story) có biểu đồ và ảnh tương tác cho bài viết cuối tuần:',
    options: [
      {
        text: 'Chỉ nộp bài chữ thô, việc còn lại tùy thuộc vào phòng đồ họa và lập trình của báo.',
        score: 1,
        feedback: 'Bạn phụ thuộc hoàn toàn vào bộ phận kỹ thuật, bài viết khó nổi bật nếu phòng kỹ thuật quá tải.'
      },
      {
        text: 'Chụp màn hình vài bảng biểu chèn vào giữa bài để người đọc đỡ chán mắt.',
        score: 2,
        feedback: 'Cách này đơn giản nhưng trải nghiệm người đọc trên thiết bị di động rất nghèo nàn.'
      },
      {
        text: 'Tự dùng Vibe Coding hoặc công cụ trực quan (Flourish/Cursor) tạo widget tương tác nhúng thẳng vào bài.',
        score: 4,
        feedback: 'Tuyệt vời! Bạn chính là mẫu nhà báo "Product Thinker" mà các tòa soạn toàn cầu đang săn đón.'
      }
    ]
  },
  {
    id: 3,
    question: 'Sau một buổi phỏng vấn độc quyền dài 90 phút có ghi âm:',
    options: [
      {
        text: 'Tự đeo tai nghe bóc băng từ đầu đến cuối mất 3 - 4 tiếng.',
        score: 1,
        feedback: 'Bóc băng thủ công là "kẻ cắp thời gian" lớn nhất của nhà báo trong thời đại số.'
      },
      {
        text: 'Thuê cộng tác viên sinh viên bóc băng hộ.',
        score: 2,
        feedback: 'Tốn chi phí và có rủi ro lộ lọt nội dung nhạy cảm của buổi phỏng vấn độc quyền.'
      },
      {
        text: 'Dùng AI Voice-to-Text (Whisper/Otter) bóc băng trong 3 phút, sau đó chỉ cần rà soát lại các điểm đắt giá.',
        score: 4,
        feedback: 'Chính xác! Giúp bạn tiết kiệm 95% thời gian để tập trung vào câu chữ và chiều sâu bài viết.'
      }
    ]
  },
  {
    id: 4,
    question: 'Quan điểm của bạn về việc học kỹ năng công nghệ mới trong tòa soạn:',
    options: [
      {
        text: 'Tôi là nhà báo, nhiệm vụ của tôi là viết; công nghệ là việc của ban kỹ thuật.',
        score: 1,
        feedback: 'Cảnh báo nguy hiểm! Tư duy này khiến bạn nằm trong nhóm dễ bị ảnh hưởng khi tòa soạn sắp xếp lại vị trí việc làm.'
      },
      {
        text: 'Khi nào tòa soạn bắt buộc tập huấn hoặc trừ thi đua thì tôi mới tham gia.',
        score: 2,
        feedback: 'Học thụ động khiến bạn luôn đi sau đối thủ và đồng nghiệp cùng trang lứa.'
      },
      {
        text: 'Chủ động thử nghiệm công cụ AI mới hàng tuần, biến chúng thành trợ thủ để nâng cao chất lượng tác phẩm.',
        score: 4,
        feedback: 'Hoàn hảo! Bạn sở hữu tâm thế thích ứng liên tục, luôn là nhân tố trụ cột không thể thay thế.'
      }
    ]
  }
];

export const RECOMMENDED_AI_TOOLS = [
  {
    name: 'Perplexity & Deep Search',
    role: 'Nghiên cứu & Truy vết Nguồn tin',
    description: 'Tìm kiếm có đối chiếu nguồn chính xác, tổng hợp báo cáo chuyên sâu và trích dẫn trực tiếp.',
    icon: 'Search'
  },
  {
    name: 'Claude & ChatGPT-4o',
    role: 'Phản biện Đề tài & Biên tập',
    description: 'Đóng vai độc giả khó tính phản biện góc nhìn bài viết, gợi ý tiêu đề hấp dẫn, kiểm tra logic lập luận.',
    icon: 'MessageSquareCode'
  },
  {
    name: 'Whisper / Otter AI',
    role: 'Bóc băng phỏng vấn tự động',
    description: 'Chuyển đổi âm thanh tiếng Việt thành văn bản tức thời, phân tách giọng nói từng người phát biểu.',
    icon: 'Mic'
  },
  {
    name: 'Cursor / Claude Artifacts (Vibe Coding)',
    role: 'Làm Microsite & Mega-story tương tác',
    description: 'Nhà báo tự mô tả ý tưởng bằng ngôn ngữ tự nhiên để tạo các bảng dữ liệu, mini-game, widget tương tác.',
    icon: 'Code'
  },
  {
    name: 'Flourish & Datawrapper',
    role: 'Trực quan hóa Dữ liệu Báo chí',
    description: 'Tạo biểu đồ động, bản đồ nhiệt, biểu đồ dòng chảy dữ liệu trực tiếp từ file Excel/CSV.',
    icon: 'BarChart3'
  },
  {
    name: 'Midjourney & Imagen',
    role: 'Minh họa Ý niệm & Khái niệm trừu tượng',
    description: 'Tạo ảnh concept minh họa cho các bài viết chuyên luận trừu tượng (triết học, công nghệ, tương lai).',
    icon: 'Sparkles'
  },
  {
    name: 'ElevenLabs & Voice Cloners',
    role: 'Sản xuất Bản tin Âm thanh / Podcast',
    description: 'Tạo giọng đọc podcast ấm áp, truyền cảm từ văn bản tin tức, mở rộng tệp độc giả nghe tin.',
    icon: 'Radio'
  }
];
