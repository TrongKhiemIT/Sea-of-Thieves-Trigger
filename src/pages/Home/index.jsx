import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
    const navigate = useNavigate();
    // ---- THÊM BỘ THEO DÕI BÁNH XE CHUỘT ----
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        // Ngắt theo dõi khi chuyển trang
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className="home-page-container">
            {/* THÙNG SỐ 1: CHỨA CỤM HERO VÀ VIDEO NỀN (Có lệnh khóa chặt 100vh) */}
            <div className="home-hero">
                <video className="hero-video" autoPlay loop muted playsInline>
                    <source src="/sot-bg.mp4" type="video/mp4" />
                </video>

                <div className="hero-overlay"></div>

                <div className="hero-content">
                    <div className="title-box">
                        <h1 className="hero-title white-text">SEA OF</h1>
                        <h1 className="hero-title green-text">THIEVES</h1>
                    </div>
                    <p className="hero-subtitle">Vượt sóng dữ. Viết huyền thoại.</p>
                </div>
            </div>
            {/* 🔴 MẤU CHỐT Ở ĐÂY: Phải chốt đóng thùng home-hero tại đoạn này !! */}


            {/* THÙNG SỐ 2: KHỐI BANNER CỦA IGN */}
            <div className="review-banner">
                <div className="review-logo">
                    <img src="/logoIGN.png" alt="IGN Logo" />
                </div>
                <div className="review-text">
                    <h3 className="review-score">IGN - 8/10 Xuất sắc</h3>
                    <p className="review-quote">"Những chuyến ra khơi là những cuộc gặp gỡ thú vị hãy viết nên câu chuyện của bạn"</p>
                </div>
            </div>


            {/* THÙNG SỐ 3: VÙNG ĐẤT BÊN DƯỚI CHO TIN TỨC SOT */}
            {/* THÙNG SỐ 3: VÙNG ĐẤT KHÁM PHÁ (LEGENDARY ADVENTURES) */}
            <div className="home-content">
                <div className="adventure-container">

                    {/* CỘT TRÁI: Dành cho Chữ */}
                    <div className="adventure-text">
                        <div className="title-box">
                            <h2 className="title-green">NHỮNG CHUYẾN</h2>
                            <h2 className="title-green">PHIÊU LƯU</h2>
                        </div>
                        <p className="adventure-desc">
                            Khám phá một thế giới mở rộng lớn với những hòn đảo hoang sơ, những con tàu đắm và những hiện vật bí ẩn. Tìm kiếm kho báu bị thất lạc, đối đầu với những thuyền trưởng cướp biển bị nguyền rủa và bảo vệ Biển Cướp Biển khỏi những mối đe dọa mới nổi.
                        </p>
                    </div>

                    {/* CỘT PHẢI: Dành cho chùm Ảnh Xếp Chéo */}
                    <div className="adventure-images">

                        {/* Ảnh 1: Xa nhất, trượt chậm nhất (nhân 0.05) */}
                        <div
                            className="img-wrapper img-1"
                            style={{ transform: `translateY(${scrollY * 0.02}px) rotate(5deg)` }}
                        >
                            <img src="./Homeface/anh8.jpg" alt="anh8" />
                        </div>
                        {/* Ảnh 2: Nằm giữa, trượt tốc độ vừa (nhân 0.1) */}
                        <div
                            className="img-wrapper img-2"
                            style={{ transform: `translateY(${scrollY * 0.05}px) rotate(-4deg)` }}
                        >
                            <img src="./Homeface/anh2.jpg" alt="anh2" />
                        </div>
                        {/* Ảnh 3: Cận cảnh nhất, trượt lướt nhanh nhất (đẩy số âm lõi -0.1) */}
                        <div
                            className="img-wrapper img-3"
                            style={{ transform: `translateY(${-scrollY * 0.08}px) rotate(8deg)` }}
                        >
                            <img src="./Homeface/anh3.jpg" alt="anh3" />
                        </div>
                    </div>
                </div>
                <div className="adventure-container reverse">

                    {/* CỘT TRÁI: Dành cho Chữ */}
                    <div className="adventure-text">
                        <div className="title-box">
                            <h2 className="title-green">NHỮNG TRANG</h2>
                            <h2 className="title-green">SỬ THI</h2>
                        </div>
                        <p className="adventure-desc">
                            Hãy tham gia vào chế độ Tall Tales để trải nghiệm cách tiếp cận độc đáo của Sea of ​​Thieves đối với một chiến dịch dựa trên cốt truyện. Với 11 câu chuyện để trải nghiệm trong hai cốt truyện hoành tráng, những nhiệm vụ hấp dẫn và đậm chất điện ảnh này sẽ mang đến khoảng 30 giờ chơi đầy thú vị trong thế giới cướp biển.
                        </p>
                    </div>

                    {/* CỘT PHẢI: Dành cho chùm Ảnh Xếp Chéo */}
                    <div className="adventure-images">

                        {/* Ảnh 1: Xa nhất, trượt chậm nhất (nhân 0.05) */}
                        <div
                            className="img-wrapper img-1"
                            style={{ transform: `translateY(${scrollY * 0.02}px) rotate(-5deg)` }}
                        >
                            <img src="./Homeface/anh4.jpg" alt="anh4" />
                        </div>
                        {/* Ảnh 2: Nằm giữa, trượt tốc độ vừa (nhân 0.1) */}
                        <div
                            className="img-wrapper img-2"
                            style={{ transform: `translateY(${scrollY * 0.05}px) rotate(4deg)` }}
                        >
                            <img src="./Homeface/anh5.jpg" alt="anh5" />
                        </div>
                        {/* Ảnh 3: Cận cảnh nhất, trượt lướt nhanh nhất (đẩy số âm lõi -0.1) */}
                        <div
                            className="img-wrapper img-3"
                            style={{ transform: `translateY(${-scrollY * 0.08}px) rotate(-8deg)` }}
                        >
                            <img src="./Homeface/anh6.jpg" alt="anh6" />
                        </div>
                    </div>
                </div>
                {/* ... trên này là thẻ đóng </div> của cục Khối Phiêu Lưu số 2 (Những trang sử thi)... */}

                {/* ---------- KHỐI SỐ 4: BẢNG TRUYỀN TIN (LATEST NEWS) ---------- */}
                <div className="news-section">
                    <div className="news-header">
                        <h2 className="title-green" style={{ fontSize: '80px', textAlign: 'center', marginBottom: '60px' }}>BẢNG TRUYỀN TIN</h2>
                    </div>

                    {/* KHUNG LƯỚI TỰ ĐỘNG CHỨA CÁC THẺ BÀI */}
                    <div className="news-grid">

                        {/* Thẻ Tin Tức 1 */}
                        <div className="news-card" onClick={() => navigate('/wiki')}>
                            <div className="news-image">
                                {/* Bạn nhớ tải 3 bức ảnh mới quăng vào mục public rồi sửa tên ở đây nhé */}
                                <img src="./Homeface/Update14.1.jpg" alt="News 1" />
                            </div>
                            <div className="news-info">
                                <span className="news-date">17 Tháng 4, 2026</span>
                                <h3>CẬP NHẬT MÙA 14 ĐÃ RA MẮT</h3>
                                <p>Khám phá những cơ chế vũ khí độc lạ, ngắm nhìn biển khơi từ trên cao bằng Súng Lao Móc và hàng tá mỹ phẩm lộng lẫy...</p>
                                <span className="news-readmore">ĐỌC TIẾP ➔</span>
                            </div>
                        </div>

                        {/* Thẻ Tin Tức 2 */}
                        <div className="news-card" onClick={() => navigate('/trigger')}>
                            <div className="news-image">
                                <img src="./Homeface/Hatauma.jpg" alt="News 2" />
                            </div>
                            <div className="news-info">
                                <span className="news-date">10 Tháng 4, 2026</span>
                                <h3>CẨM NANG HẠ GỤC TÀU MA</h3>
                                <p>Toàn tập bí kíp Sinh Tồn từ các Huyền thoại Cướp biển giúp bạn vơ vét toàn bộ rương sọ quỷ mà không tiêu tốn một giọt mồ hôi...</p>
                                <span className="news-readmore">ĐỌC TIẾP ➔</span>
                            </div>
                        </div>

                        {/* Thẻ Tin Tức 3 */}
                        <div className="news-card" onClick={() => navigate('/community')}>
                            <div className="news-image">
                                <img src="./Homeface/sukiencongdong.jpg" alt="News 3" />
                            </div>
                            <div className="news-info">
                                <span className="news-date">5 Tháng 4, 2026</span>
                                <h3>SỰ KIỆN CỘNG ĐỒNG SỐ 12</h3>
                                <p>Đăng nhập cuối tuần này để x2 Vàng, Thăng Hạng mọi Phân khu và giật luôn miễn phí bộ buồm cánh dơi độc quyền bằng cách xem stream...</p>
                                <span className="news-readmore">ĐỌC TIẾP ➔</span>
                            </div>
                        </div>

                    </div>

                </div>

            </div> {/* (ĐÂY LÀ THẺ ĐÓNG CỦA HOME-CONTENT TỪ TRƯỚC ĐÓ NHÉ) */}

        </div>
    );
}
