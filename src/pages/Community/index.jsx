import React from 'react';
import './community.css';

export default function Community() {
    return (
        <div className="community-page-container">
            <div className="community-content-wrapper">
                
                {/* Cột trái: Giới thiệu & Lời mời */}
                <div className="community-info">
                    <div className="community-badge">🔥 CỘNG ĐỒNG LỚN NHẤT VIỆT NAM</div>
                    <h1 className="community-title">
                        GIA NHẬP HẠM ĐỘI <br />
                        <span className="text-highlight">SEA OF THIEVES</span> VIỆT NAM
                    </h1>
                    <p className="community-desc">
                        Biển cả quá rộng lớn để có thể ra khơi một mình. Hãy tìm cho bản thân những đồng đội tuyệt vời nhất, cùng nhau rẽ sóng, săn lùng kho báu và trở thành một Huyền Thoại Hải Tặc thực sự!
                    </p>
                    
                    <a href="https://discord.gg/GKqnmfmnk" target="_blank" rel="noreferrer" className="btn-discord-premium">
                        <span className="btn-icon">🌊</span> GIA NHẬP DISCORD NGAY
                        <div className="btn-glow"></div>
                    </a>
                </div>

                {/* Cột phải: Các tính năng nổi bật của Discord */}
                <div className="community-features">
                    <div className="feature-card">
                        <div className="feature-icon">🤝</div>
                        <div className="feature-content">
                            <h3>Tìm Đội Dễ Dàng</h3>
                            <p>Hàng ngàn hải tặc online mỗi ngày, hệ thống voice chat chia phòng tiện lợi giúp bạn ghép đội lên tàu trong tích tắc.</p>
                        </div>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">⚔️</div>
                        <div className="feature-content">
                            <h3>Chia Sẻ Cẩm Nang</h3>
                            <p>Học hỏi kinh nghiệm PVP, mẹo giải đố và đường đi nước bước từ các cựu binh dạn dày sương gió trên khắp thế giới.</p>
                        </div>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🎁</div>
                        <div className="feature-content">
                            <h3>Sự Kiện Độc Quyền</h3>
                            <p>Thường xuyên tổ chức các giải đấu, minigame và sự kiện giveaway đặc biệt với những phần quà giới hạn từ nhà phát hành.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}