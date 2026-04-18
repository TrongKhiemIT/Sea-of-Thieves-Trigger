import React from 'react';
import './about.css';

export default function About() {
    return (
        <div className="about-page-container">
            <div className="about-content-box">
                <h1 className="about-title">SOT TRIGGER</h1>
                <h2 className="about-subtitle">Trạm Lưu Trữ Của Những Huyền Thoại</h2>
                
                <p className="about-desc">
                    Chào mừng bạn bước chân vào <b>SOT Trigger</b> - Trang web cộng đồng do những người đam mê Sea of Thieves dốc lòng xây dựng. Giữa vùng biển mênh mông rình rập đầy rẫy hiểm nguy từ con quái vật Kraken cướp hồn, bóng ma rùng rợn và những tên cướp biển khát máu khác, SOT Trigger sẽ là bến đỗ an toàn để bạn neo đậu, nạp lại đạn dược kiến thức và kết giao với vô số những đồng đội mới.
                </p>
                <p className="about-desc">
                    Trang web này ra đời không chỉ với mục đích cung cấp cẩm nang tân thủ, mà còn hướng tới việc tạo ra một không gian sinh hoạt uy tín, nơi mọi thuyền trưởng có thể tìm thấy thông tin mình cần: từ sổ tay mẹo sinh tồn (Trigger), thư viện bách khoa toàn thư (Wiki), cho đến những bản tin nóng bỏng nhất từ tổ chế tác Rare.
                </p>

                <div className="about-features">
                    <div className="feature-item">
                        <h3>⚓ Bách Khoa Toàn Thư</h3>
                        <p>Tra cứu nhanh chóng mọi chi tiết về các loại vũ khí, tàu chiến hạng nặng, kho báu ma thuật và cách đánh bại từng loài quái vật ngáng đường bạn.</p>
                    </div>
                    <div className="feature-item">
                        <h3>⚔️ Cẩm Nang Sinh Tồn</h3>
                        <p>Những mẹo vặt và chiến thuật bí truyền từ các Huyền Thoại Hải Tặc giúp bạn dễ dàng tẩu thoát hoặc đánh chìm những băng đảng đáng gờm nhất.</p>
                    </div>
                    <div className="feature-item">
                        <h3>🍻 Bến Đỗ Cộng Đồng</h3>
                        <p>Nơi tụ tập giao lưu, tìm kiếm thủy thủ đoàn phù hợp để rong ruổi khắp các hòn đảo nhiệt đới và tự tay viết nên cuộc phiêu lưu của chính mình.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}