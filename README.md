<div align="center">
  <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Dark.svg" alt="React Logo" width="80"/>
  <h1>🏴‍☠️ SOT Trigger - Sea of Thieves Community</h1>
  <p><i>Trạm hải đăng của mọi tên cướp biển trên biển khơi.</i></p>

  <!-- Badges -->
  <a href="#"><img src="https://img.shields.io/badge/react-18.0.0-blue.svg?logo=react" alt="React" /></a>
  <a href="#"><img src="https://img.shields.io/badge/vite-latest-646CFF.svg?logo=vite" alt="Vite" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Status-In%20Development-success" alt="Status" /></a>
</div>

---

## 📖 Bối Cảnh (Giới Thiệu)

**SOT Trigger** được xây dựng nhằm tạo ra một bến cảng an toàn và sôi động cho cộng đồng người chơi **Sea of Thieves** tại Việt Nam. Nơi đây hội tụ đầy đủ những công cụ và kiến thức tối thượng nhất giúp bạn làm chủ vùng đại dương khắc nghiệt, từ những tên ma túy xương xẩu cho đến siêu quái vật Kraken.

---

## 🌟 Tính Năng Nổi Bật

- 🗺️ **Bách Khoa Toàn Thư (Wiki):** Tra cứu thông tin mọi kho báu, vị trí làm nhiệm vụ, thông số tàu thuyền và quái vật biển.
- ⚔️ **Cẩm Nang Sinh Tồn (Trigger):** Học hỏi trực tiếp các kỹ năng chiến đấu trên tàu, cách né bão, và mẹo vơ vét vàng nhanh nhất từ Đảo Mắt Lâu.
- 🍻 **Bến Đỗ Cộng Đồng (Community):** Hỗ trợ tìm kiếm, kết nối và chiêu mộ thành viên cho hạm đội của bạn với các bộ lọc rõ ràng.
- 📰 **Bảng Truyền Tin:** Liên tục cập nhật mọi bản vá Update, Season mới và sự kiện săn thưởng (Twitch Drops) mới nhất.
- 🎨 **Giao diện Đắm chìm:** UI/UX thiết kế mang đậm phong vị hải tặc với tông Đen huyền bí xen kẽ Xanh lục nguyên bản (Dark Theme), hiệu ứng cuộn ảnh đa tầng lớp, và font chữ cướp biển đặc quyền.

---

## 🚀 Hướng Dẫn Cài Đặt (Installation)

Để tải dự án này về và chạy thử nghiệm website trên máy tính của bạn, hãy làm theo các bước sau:

1. **Sao chép (Clone) kho lưu trữ vào máy:**
   ```bash
   git clone https://github.com/TrongKhiemIT/Sea-of-Thieves-Trigger.git
   ```

2. **Truy cập vào lòng dự án:**
   ```bash
   cd sot-website
   ```

3. **Cài đặt các gói thành phần (Dependencies):**
   ```bash
   npm install
   ```

4. **Khởi chạy con tàu (Dev Server):**
   ```bash
   npm run dev
   ```

*(Ghi chú: Lệnh trên sẽ giương buồm server tại một bến cảng có mã số `http://localhost:5173`. Bạn chỉ việc `Ctrl + Click` vào link đó ở Terminal là trang web sẽ hiện lên.)*

---

## 📸 Hình Ảnh Giao Diện Demo

*(Note cho chủ Repo: Đừng quên chụp màn hình trang web thực tế của bạn rồi thả file ảnh vào đây nhé!)*

![Trang Chủ SOT Trigger](https://via.placeholder.com/800x400/12161b/1cd0a2?text=Trang+Chủ+SOT+Trigger)
*▲ Giao diện Trang Chủ đậm chất phiêu lưu với phong nền sống động tĩnh tại lột tả chiều sâu không gian biển cả.*

---

## 💻 Cấu Trúc Khung Xương Trang Web

```text
📦 sot-website
 ┣ 📂 public/        # Chứa tài sản: Logo hãng tàu, Background đen, Video nền mp4
 ┣ 📂 src/
 ┃ ┣ 📂 components/  # Chứa Mỏ neo điều hướng (Navbar) dùng lặp lại ở mọi trang
 ┃ ┣ 📂 pages/       # Các hòn đảo nội dung chính: Home, Wiki, About, Community
 ┃ ┣ 📜 App.jsx      # Thiết lập bộ định tuyến đường biển (Routing) 
 ┃ ┣ 📜 index.css    # Cấu hình màu nước gốc và luật lệ font chữ chung
 ┃ ┗ ...
 ┣ 📜 README.md      # Chính là quyển hải đồ bạn đang đọc
 ┗ 📜 package.json   # Bản đồ chỉ dẫn kho tàng thư viện phụ trợ (NPM)
```

---

## 🤝 Đóng Góp Thêm (Contributing)

Đại dương rất rộng lớn và chúng tôi luôn luôn chào đón những nhân tài! Nếu bạn muốn đóng góp khắc phục lỗi giao diện hay thêm trang bách khoa mới, hãy:

1. **Fork** dự án này về tay.
2. Tạo một nhánh nhỏ riêng của bạn (`git checkout -b feature/tinh-nang-la-doi`).
3. Đóng đinh sự thay đổi (`git commit -m 'Thêm hiệu ứng trượt mượt mà'`).
4. Đẩy lại lên nhánh (`git push origin feature/tinh-nang-la-doi`).
5. Cuối cùng, bật tín hiệu **Pull Request** cho chúng tôi xác minh.

---

<div align="center">
  <b>Hẹn gặp lại bạn trên vùng biển Sea of Thieves! 🦜🏴‍☠️</b>
</div>
