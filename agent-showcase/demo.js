const samples = {
  deadline: {
    source: '<b>Nhóm dự án · tin nhắn mẫu</b>“Mọi người nhớ gửi bản slide cuối trước 15:00 ngày 15/11/2026 để nhóm trưởng tổng hợp nhé.”',
    title: 'Chốt và gửi slide cuối', tag: '[Thông báo deadline]', time: '06/11/2026 · 09:20 (UTC+7)',
    body: '<ul><li><b>Task:</b> Hoàn thiện và gửi bản slide cuối.</li><li><b>Thời hạn:</b> 15/11/2026 · 15:00 (UTC+7).</li><li><b>Đầu ra:</b> File slide.</li><li><b>Phụ trách:</b> [Chưa rõ - Cần xác minh].</li></ul>',
    action: '📅 Đề xuất tạo sự kiện lịch · Chờ người dùng xác nhận trước khi thêm.', sourceUrl: 'Nguồn mẫu: tin nhắn giả lập · không phải dữ liệu nhóm thật',
    zh: {source:'<b>项目群 · 示例消息</b>“请大家在 2026/11/15 15:00 前发送最终版幻灯片，方便组长汇总。”',title:'定稿并提交最终版幻灯片',tag:'[截止日期通知]',time:'2026/11/06 · 09:20 (UTC+7)',body:'<ul><li><b>任务：</b> 完成并发送最终版幻灯片。</li><li><b>截止时间：</b> 2026/11/15 · 15:00 (UTC+7)。</li><li><b>交付物：</b> 幻灯片文件。</li><li><b>负责人：</b> [尚不明确 - 需要确认]。</li></ul>',action:'📅 建议添加日历事件 · 等待用户确认后再添加。',sourceUrl:'示例来源：模拟群消息 · 并非真实项目数据'}
  },
  english: {
    source: '<b>Video học tập · kịch bản mẫu</b>Video ngắn có phụ đề tiếng Anh về cách diễn đạt nguyên nhân và kết quả trong bài nói.',
    title: 'Diễn đạt nguyên nhân và kết quả', tag: '[Tiếng Anh]', time: '06/11/2026 · 09:20 (UTC+7)',
    body: '<ul><li><b>Chủ đề:</b> Nêu nguyên nhân và kết quả khi trình bày quan điểm.</li><li><b>Từ/cụm từ mẫu:</b> lead to (verb phrase) · dẫn đến.</li></ul>',
    vocab: 'FLASHCARD MẪU · lead to → dẫn đến · [AI ví dụ] Lack of sleep can lead to poor concentration.',
    action: '🧠 Có từ vựng mẫu đạt điều kiện · Flashcard ở trạng thái đề xuất, chưa gửi dịch vụ nào.', sourceUrl: 'Nguồn mẫu: kịch bản video giả lập · không phải URL thật',
    zh: {source:'<b>英语学习视频 · 示例脚本</b>短视频配有英文字幕，讲解如何在口语中表达原因和结果。',title:'表达原因与结果',tag:'[英语]',time:'2026/11/06 · 09:20 (UTC+7)',body:'<ul><li><b>主题：</b>表达观点时说明原因和结果。</li><li><b>重点词组：</b> lead to (动词短语) · 导致。</li></ul>',vocab:'示例闪卡 · lead to → 导致 · [AI 示例] Lack of sleep can lead to poor concentration.',action:'🧠 发现符合条件的示例词汇 · 闪卡仅为建议，未发送到任何服务。',sourceUrl:'示例来源：模拟视频脚本 · 并非真实链接'}
  },
  failed: {
    source: '<b>Video mẫu · kết quả trích xuất</b>Không đọc được văn bản và không nhận diện được giọng nói trong tệp thử nghiệm.',
    title: 'Không đủ dữ kiện để phân tích', tag: '[Khác]', time: '06/11/2026 · 09:20 (UTC+7)',
    body: '<ul><li><b>Nội dung cốt lõi:</b> Không thể xác định từ dữ liệu trích xuất.</li><li><b>Lý do:</b> Văn bản rỗng hoặc âm thanh không nhận diện được.</li></ul>',
    alert: '🚨 CẦN XEM THỦ CÔNG · Giữ nguồn gốc và dừng phân tích; không tự đoán nội dung.', action: 'Đề xuất hành động khác đang chờ kiểm tra dữ liệu nguồn.', sourceUrl: 'Nguồn mẫu: đường dẫn giả lập · không mở kết nối',
    zh: {source:'<b>示例视频 · 提取结果</b>无法读取视频文本，也无法识别音频中的语音。',title:'信息不足，无法分析',tag:'[其他]',time:'2026/11/06 · 09:20 (UTC+7)',body:'<ul><li><b>核心内容：</b>无法根据提取结果确定。</li><li><b>原因：</b>文本为空或无法识别语音。</li></ul>',alert:'🚨 需要人工检查 · 保留原始来源并停止分析；不猜测内容。',action:'其他建议需等待人工核查来源数据。',sourceUrl:'示例来源：模拟链接 · 未建立连接'}
  }
};

const select = document.querySelector('#sample-select');
const source = document.querySelector('#sample-source');
const runButton = document.querySelector('#run-demo');
const result = document.querySelector('#result-entry');
const placeholder = document.querySelector('#output-placeholder');
let currentLanguage = 'vi';

function showSampleInput() { const item = samples[select.value]; source.innerHTML = currentLanguage === 'zh' && item.zh ? item.zh.source : item.source; }
function runDemo() {
  const baseItem = samples[select.value];
  const item = currentLanguage === 'zh' && baseItem.zh ? baseItem.zh : baseItem;
  result.innerHTML = `
    <div class="result-title"><div><h3>${item.title}</h3><span class="result-meta">${item.time}</span></div><span class="result-tag">${item.tag}</span></div>
    <div class="result-body">${item.body}</div>
    ${item.vocab ? `<div class="result-vocab">${item.vocab}</div>` : ''}
    ${item.alert ? `<div class="result-alert">${item.alert}</div>` : ''}
    <div class="result-action">${item.action}</div>
    <div class="result-source">${item.sourceUrl}</div>`;
  placeholder.classList.add('hidden');
  result.classList.remove('hidden');
}

select.addEventListener('change', showSampleInput);
runButton.addEventListener('click', runDemo);
showSampleInput();

const chineseText = {
  'Năng lực':'能力', 'Quy trình':'流程', 'Demo':'演示', 'Ranh giới':'能力边界',
  'MỘT AGENT · NHIỀU NGUỒN':'一个智能体 · 多种来源',
  'ĐA NGÔN NGỮ':'多语言', 'Một nơi để gom':'把重要信息', 'những điều đáng nhớ.':'汇集在一处。',
  'Từ bài viết, voice note đến video học tập — Agent chắt lọc phần quan trọng, giữ lại nguồn và giúp bạn nhìn rõ việc cần làm tiếp theo.':'从文章、语音到学习视频——智能体提炼重点、保留来源，并帮你看清下一步要做什么。',
  'Khám phá bản demo':'查看互动演示', 'Gặp Agent':'认识智能体', 'Không gian trưng bày:':'展示模式：', ' dữ liệu mẫu, không gửi dữ liệu đi đâu':'使用示例数据，不会发送任何内容',
  'ít nhiễu hơn,':'少一些信息噪音，', 'nhiều khoảng thở hơn':'多一点思考空间',
  'GÓC BÀN CỦA AGENT':'智能体工作台', '● BẢN MẪU':'● 示例', 'Nghe · nhận diện lời nói':'聆听 · 识别语音', 'Nhìn · đọc chữ trên màn hình':'观看 · 识别屏幕文字', 'Đọc · giữ đường dẫn gốc':'阅读 · 保留原始链接',
  '✳  Gạn nhiễu, giữ điều quan trọng':'✳ 过滤噪音，留下重点', 'MÔ PHỎNG':'模拟', 'Kiểm tra nguồn':'检查来源', 'Phán đoán':'判断', 'Gom ý':'归纳重点',
  'MỘT MỤC RÕ RÀNG':'清晰的记录', 'Ý chính · Nguồn · Việc tiếp theo':'核心内容 · 来源 · 下一步', 'Minh họa quy trình · Không dùng nội dung thật':'流程示意 · 不含真实内容',
  'nhãn để mọi thứ vào đúng ngăn':'个固定标签，分类更清楚', 'nơi xem lại thông tin tổng hợp':'份汇总记录，方便回看', 'hành động ngoài khi chưa duyệt':'未经确认的外部操作', 'demo dùng dữ liệu dựng sẵn':'演示使用预设示例数据',
  '“Tự động hóa tốt không lấy mất quyền quyết định — nó trả lại thời gian để mình quyết định điều đáng làm.”':'“好的自动化不会替你做决定，而是把时间还给你，让你决定什么值得去做。”', 'NGUYÊN TẮC THIẾT KẾ CỦA AGENT':'智能体的设计原则',
  '01 / NĂNG LỰC':'01 / 能力', 'Đọc nhiều định dạng,':'读取多种格式，', 'giữ đúng điều cốt lõi.':'抓住真正重点。', 'Một trợ lý cho những ngày có quá nhiều tab, tin nhắn, tài liệu và deadline cần nhớ.':'当标签页、消息、资料和截止日期多到记不过来时，它就是你的整理助手。',
  'Nghe, đọc, quan sát':'聆听、阅读、识别', 'Nhận URL, MP3, MP4 và tài liệu. Với video, Agent có thể kết hợp lời nói với chữ xuất hiện trên màn hình.':'接收 URL、MP3、MP4 和文档。处理视频时，可结合语音与屏幕文字。',
  'Chắt lọc có căn cứ':'有依据地提炼', 'Tóm tắt theo mục đích, giữ URL gốc, so nguồn mới với ghi nhận cũ và nêu rõ phần nào chưa chắc.':'根据用途总结、保留原始链接、对比新旧来源，并明确标出不确定的信息。',
  'Soạn sẵn, chờ bạn duyệt':'准备好内容，等你确认', 'Chuẩn bị báo cáo, flashcard và đề xuất lịch hoặc thông báo nhóm. Bạn vẫn giữ quyền xác nhận trước hành động thật.':'准备报告、单词卡，以及日历或群通知建议。真正执行前仍由你确认。',
  'BẢN GHI MẪU':'示例记录', '• Ý chính':'• 核心内容', '• Thời hạn':'• 截止时间', '• Nguồn gốc':'• 来源', '[Thông báo deadline]':'[截止日期通知]',
  '5 TAG CỐ ĐỊNH · KHÔNG ĐOÁN KHI THIẾU':'5 个固定标签 · 信息不足时不猜测', 'HUMAN-IN-THE-LOOP':'人工确认环节',
  'Tiếng Anh':'英语', 'Tiếng Trung':'中文', 'Deadline':'截止日期', 'Dự án':'项目', 'Khác':'其他',
  '02 / QUY TRÌNH':'02 / 流程', 'Từ một mớ nguồn':'从零散来源', 'đến một đầu việc sáng rõ.':'到清晰可做的任务。', 'Agent giữ dấu vết nguồn và biết dừng khi chưa đủ dữ kiện.':'智能体保留来源记录，并会在信息不足时暂停判断。',
  'Tiếp nhận':'接收', 'Nhận URL hoặc tệp cùng thông tin nguồn.':'接收 URL 或文件及其来源信息。', 'Đối chiếu':'对照', 'Kiểm tra trùng, bản cập nhật và mâu thuẫn.':'检查重复、更新和信息冲突。', 'Trích xuất':'提取', 'Đọc chữ, nhận diện lời nói và chữ trong video.':'读取文本、识别语音和视频中的文字。', 'Phân tích':'分析', 'Gắn tag, tóm tắt, lấy dữ kiện và từ vựng.':'分类、总结、提取关键信息和词汇。', 'Đề xuất':'提出建议', 'Soạn hành động, chờ người dùng xác nhận.':'准备操作建议，等待用户确认。', 'Tổng hợp':'汇总', 'Chuẩn bị mục báo cáo có thể rà soát.':'整理成便于核对的报告条目。',
  '03 / CÁCH AGENT PHÁN ĐOÁN':'03 / 判断原则', 'Không chỉ làm nhanh.':'不只追求速度，', 'Còn phải biết lúc nào dừng.':'也要知道何时暂停。', 'Những nguyên tắc giúp thông tin hữu ích mà không biến suy đoán thành sự thật.':'这些原则让信息更实用，同时避免把推测当成事实。',
  'Nguồn rõ trước, kết luận sau':'先确认来源，再下结论', 'Giữ đường dẫn gốc. Nếu nội dung lỗi, quá ngắn hoặc bị chặn, báo lỗi và chờ người xem lại.':'保留原始链接。如果内容出错、过短或无法访问，就说明问题并等待人工检查。', 'KHÔNG BỊA PHẦN BỊ THIẾU':'不编造缺失内容',
  'Deadline phải có căn cứ':'截止时间必须有依据', 'Quy đổi thời gian về UTC+7 khi có timestamp. Thiếu dữ kiện thì ghi cần xác minh, không tự đoán.':'有时间戳时换算为 UTC+7。缺少依据时标记待确认，不自行猜测。', 'THỜI GIAN TUYỆT ĐỐI':'明确的日期与时间',
  'Trùng nguồn không có nghĩa trùng mục':'来源相同不代表记录重复', 'Đối chiếu URL cùng tag. Phân biệt bản cập nhật, nội dung mâu thuẫn và nghi vấn trùng lặp.':'根据 URL 和标签对照，区分内容更新、信息冲突与疑似重复。', 'ĐỐI CHIẾU TRƯỚC KHI GHI':'写入前先核对',
  'Cờ lỗi khóa đúng phần việc':'错误只冻结相关任务', 'Lỗi đọc toàn bộ thì dừng chuỗi phụ thuộc. Thiếu giờ hay nhóm nhận thì chỉ giữ lại hành động liên quan.':'无法读取内容时停止依赖该内容的任务。缺少时间或目标群组时，只暂停相关操作。', 'CÔ LẬP LỖI · GIỮ VIỆC ĐỘC LẬP':'隔离错误 · 保留独立任务',
  'AGENT HỮU ÍCH KHI NÀO?':'什么时候适合使用？', 'Mỗi ngày một kiểu rối.':'每天都有不同的杂乱信息，', 'Một chỗ để gỡ.':'用一个地方理清。', 'Agent gom những luồng thông tin thường bị trôi giữa chat, mạng xã hội và tài liệu học tập.':'把聊天、社交平台和学习资料中容易遗漏的信息整理起来。',
  '✦ / HỌC NGOẠI NGỮ':'✦ / 外语学习', 'Giữ lại từ đáng học':'留下值得学的词', 'Lọc nội dung theo trình độ, lấy cụm từ có ích và đóng gói flashcard có nghĩa, phiên âm và ví dụ.':'按水平筛选内容，提取实用词组，并制作包含释义、发音和例句的单词卡。', '✦ / VIỆC NHÓM':'✦ / 小组任务', 'Nhìn ra việc và hạn':'看清任务与期限', 'Tách task, thời hạn, đầu ra và người liên quan. Nếu thiếu hoặc mâu thuẫn, nêu rõ để bạn xác minh.':'提取任务、截止时间、交付物和相关人员。缺失或冲突的信息会明确提示你核实。', '✦ / ĐỌC NHIỀU NGUỒN':'✦ / 多来源阅读', 'Đỡ phải gom bằng tay':'减少手动整理', 'Giữ nguồn gốc, so trùng lặp và cập nhật mục cũ khi nội dung đổi, để báo cáo dễ tra cứu.':'保留来源、检查重复，并在内容变化时更新旧记录，让报告更容易查找。',
  '04 / TRẢI NGHIỆM MÔ PHỎNG':'04 / 模拟体验', 'Thử một lượt xử lý.':'试运行一次。', 'Chọn tình huống mẫu. Kết quả bên dưới là dữ liệu dựng sẵn, chạy ngay trong trình duyệt.':'选择一个示例场景。下方结果是预设数据，仅在浏览器中展示。', 'ĐẦU VÀO MẪU':'示例输入', 'Chọn tình huống':'选择场景', 'Thông báo deadline trong nhóm':'群聊中的截止日期通知', 'Video luyện tiếng Anh':'英语学习视频', 'Nguồn không trích xuất được':'无法提取内容的来源', 'Chạy demo':'运行演示', '▣ Không thể tải tệp lên · Không gửi yêu cầu ra mạng':'▣ 不支持上传文件 · 不会发送网络请求', 'KẾT QUẢ MÔ PHỎNG':'模拟结果', 'DỮ LIỆU MẪU':'示例数据', 'Chọn một tình huống để xem đầu ra':'选择一个场景查看结果', 'Kết quả sẽ xuất hiện tại đây.':'结果将显示在这里。', 'Đây là minh họa quy tắc, không phải kết quả của một lần chạy Hermes thực tế.':'这是规则演示，并非 Hermes 实际运行结果。',
  'MỘT BẢN GHI TRÔNG NHƯ THẾ NÀO?':'记录示例', 'Gọn để đọc lướt.':'简洁，便于快速浏览。', 'Đủ để kiểm tra lại.':'信息完整，方便核对。', '“Việc quan trọng không nên bị chìm trong những thứ ồn ào.”':'“重要的事，不该淹没在喧闹的信息里。”', '06 NOV 2026 · 09:20 UTC+7':'2026年11月06日 · 09:20 UTC+7', 'Chốt và gửi slide cuối':'定稿并发送最终版幻灯片', 'Việc cần làm':'待办事项', 'Hoàn thiện và gửi bản slide cuối.':'完成并发送最终版幻灯片。', 'File slide · người phụ trách cần xác minh':'幻灯片文件 · 负责人待确认', '↗ Nguồn gốc được giữ kèm mỗi mục báo cáo':'↗ 每条记录均保留原始来源', '📅 Đề xuất tạo sự kiện lịch ':'📅 建议创建日历事件 ', 'Chờ bạn xác nhận':'等待你确认',
  '05 / HƯỚNG DẪN SỬ DỤNG':'05 / 使用指南', 'Bắt đầu bằng':'从一条消息', 'một tin nhắn.':'开始。', 'Bot Lark hiện tại đã được định tuyến qua Hermes tới profile chuyên biệt. Website và bot chat là hai trải nghiệm riêng.':'当前 Lark 机器人已通过 Hermes 路由至专用配置。展示网站与聊天机器人是两个独立体验。', 'Chuẩn bị đầu vào':'准备输入内容', 'Gửi link công khai hoặc tệp MP3/MP4. Thêm một câu về môn học, nhóm hay mục đích nếu ngữ cảnh chưa rõ.':'发送公开链接或 MP3/MP4 文件。如果背景不清楚，可补充课程、小组或用途。', 'Nhắn bot Lark hiện tại':'给现有 Lark 机器人发消息', 'Nhắn riêng cho bot. Trong nhóm, gọi bot theo cách nhóm đang cấu hình. Hermes chuyển yêu cầu sang profile chuyên trách.':'私聊机器人；在群聊中按群组设置的方式呼叫它。Hermes 会把请求转给专用配置。', '✓ ĐÃ CẤU HÌNH ĐỊNH TUYẾN':'✓ 路由已配置', 'Rà soát trước khi làm':'执行前先检查', 'Kiểm tra tag, tóm tắt, URL và cảnh báo. Gửi nhóm hay thêm lịch luôn chờ bạn xác nhận.':'检查标签、摘要、URL 和警告。发送群消息或添加日历事件前都需你确认。', '⏳ CHỜ BẠN DUYỆT':'⏳ 等待你确认', 'Website không nhìn thấy nội dung chat của bạn':'网站无法查看你的聊天内容', 'Luật định tuyến đã được thêm vào Hermes và gateway hiện đang chạy. Bản web này chỉ để trưng bày; nút demo dùng dữ liệu mẫu, không gọi bot, không nhận tệp và không kết nối API.':'Hermes 已添加路由规则，gateway 正在运行。本网页仅用于展示；演示按钮使用示例数据，不调用机器人、不接收文件，也不连接 API。', 'HERMES GATEWAY ':'HERMES 网关 ', 'ĐANG CHẠY':'运行中', 'LARK → PROFILE ':'LARK → 配置 ', 'ĐÃ ĐỊNH TUYẾN':'已路由', 'WEB DEMO ':'网页演示 ',
  '06 / BÊN TRONG HỆ THỐNG':'06 / 系统组成', 'Mỗi công cụ, một vai trò.':'每个工具，各司其职。', 'CÔNG CỤ':'工具', 'VAI TRÒ':'职责', 'TRẠNG THÁI':'状态', 'Soạn Profile, tổng hợp quy tắc và dựng trang trưng bày.':'编写配置、整理规则并构建展示页面。', 'Đang dùng để xây dựng':'用于构建展示页', 'Chạy profile, nhận tin từ bot Lark hiện tại và định tuyến hội thoại.':'运行配置、接收现有 Lark 机器人的消息并路由对话。', 'Gateway đang chạy · route đã cấu hình':'网关运行中 · 路由已配置', 'Chưa được dùng trong cấu hình hiện tại.':'当前配置尚未使用。', 'Chưa sử dụng':'未使用',
  '07 / RANH GIỚI NĂNG LỰC':'07 / 能力边界', 'Rõ điều làm được.':'明确能做什么，', 'Rõ điều cần bạn quyết.':'也明确哪些需要你决定。', 'Agent được thiết kế để':'智能体可以', 'Trích xuất nội dung có thể truy cập từ nguồn được gửi.':'提取所提供来源中可访问的内容。', 'Tóm tắt, phân loại và giữ URL gốc.':'总结、分类并保留原始 URL。', 'Đánh dấu dữ liệu thiếu, lỗi đọc và trường hợp cần kiểm tra.':'标记缺失数据、读取错误和待核查情况。', 'Chuẩn bị đề xuất để người dùng rà soát.':'准备建议供用户检查。', 'Không tự ý':'不会擅自', 'Vượt đăng nhập, paywall hoặc kiểm soát truy cập.':'绕过登录、付费墙或访问控制。', 'Bịa nội dung khi OCR/ASR thất bại hoặc nguồn thiếu dữ kiện.':'在 OCR/语音识别失败或来源信息不足时编造内容。', 'Gửi tin nhắn hay thêm sự kiện vào lịch khi chưa được duyệt.':'未经确认发送消息或添加日历事件。', 'Chia sẻ dữ liệu thật qua trang trưng bày này.':'通过展示页面分享真实数据。', 'Trạng thái kết nối gần nhất':'最近连接状态', 'Hermes gateway đã khởi động lại; cấu hình định tuyến `feishu` sang `lark-academic-coordinator` đã lưu. Một tin nhắn thử trên Lark sẽ xác nhận phản hồi sau khi đổi route.':'Hermes 网关已重启；已保存从 `feishu` 到 `lark-academic-coordinator` 的路由配置。在 Lark 上发送一条测试消息，即可确认路由后的回复。', 'ROUTE SET':'路由已设置', 'TEST PENDING':'等待测试',
  '“Giữ lại điều quan trọng.':'“留下重要的内容。', 'Để dành chỗ cho điều tiếp theo.”':'为下一步留出空间。”', 'MỘT LÝ DO ĐỂ AGENT TỒN TẠI':'智能体存在的一个理由', 'Trưng bày tĩnh · Không chia sẻ dữ liệu':'静态展示 · 不共享数据'
};

const languageToggle = document.querySelector('#language-toggle');
const staticTextNodes = [];
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
let textNode;
while ((textNode = textWalker.nextNode())) {
  if (textNode.parentElement.closest('#sample-source, #result-entry, #language-toggle, script, style')) continue;
  const original = textNode.nodeValue;
  const translated = chineseText[original.trim()];
  if (translated) staticTextNodes.push({ node: textNode, original, translated });
}
function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'vi';
  document.title = language === 'zh' ? '内容整理助手' : 'Agent Tổng hợp Nội dung';
  staticTextNodes.forEach(({ node, original, translated }) => {
    const lead = original.match(/^\s*/)?.[0] || '';
    const tail = original.match(/\s*$/)?.[0] || '';
    node.nodeValue = language === 'zh' ? `${lead}${translated}${tail}` : original;
  });
  languageToggle.innerHTML = language === 'zh' ? '中文 <span>/</span> VI' : 'VI <span>/</span> 中文';
  languageToggle.setAttribute('aria-label', language === 'zh' ? '切换到越南语' : 'Switch to Chinese');
  showSampleInput();
  if (!result.classList.contains('hidden')) runDemo();
}
languageToggle.addEventListener('click', () => setLanguage(currentLanguage === 'vi' ? 'zh' : 'vi'));
