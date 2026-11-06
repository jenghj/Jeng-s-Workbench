# Agent Tổng hợp Nội dung

Trang trưng bày tĩnh cho Hermes profile `lark-academic-coordinator`. Trang giới thiệu vai trò, năng lực, quy trình, quy tắc phán đoán, ranh giới, cách sử dụng và trạng thái cấu hình Lark.

## Mở trang

Mở `index.html` trong trình duyệt. Nút `VI / 中文` chuyển ngôn ngữ; phần demo dùng dữ liệu giả lập trong `demo.js` và hiển thị ngay trong trình duyệt.

## Thiết kế

- Giao diện hiện đại với bảng màu xanh trời, xanh dương và điểm nhấn xanh mint.
- Minh họa quỹ đạo chuyển động được vẽ bằng HTML/CSS; không tải ảnh hay hoạt ảnh từ máy chủ ngoài.
- Font dùng Segoe UI/Arial và fallback Microsoft YaHei/Noto Sans SC, ưu tiên dấu tiếng Việt rõ và có hỗ trợ tiếng Trung.
- Bố cục co giãn cho máy tính và điện thoại; hỗ trợ giảm chuyển động theo cài đặt trợ năng của thiết bị.
- Các câu trích dẫn được biên soạn riêng cho trang, không gán cho tác giả bên ngoài.

## Trạng thái kết nối

- Hermes gateway đã được khởi động lại.
- Cấu hình định tuyến platform `feishu` tới profile `lark-academic-coordinator` đã được lưu.
- Cần một lượt nhắn thử trên Lark để xác nhận phản hồi sau khi định tuyến.

## Riêng tư và triển khai

- Website không chứa thông tin xác thực, token, dữ liệu chat thật hay thông tin nguồn riêng.
- Trang demo không gửi yêu cầu tới Hermes/Lark, không tải tệp lên và không có backend.
- Có thể triển khai như static site; không bật Functions/Worker hoặc thêm API nếu muốn giữ nguyên ranh giới riêng tư.
