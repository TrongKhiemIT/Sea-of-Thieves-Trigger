import React, { useState } from 'react'; // Bắt buộc phải móc thêm useState ra
import './trigger.css';
import { triggerList } from './triggerData';

export default function Trigger() {
    // 1. CHÌA KHÓA: Biến lưu trữ "Nút nào đang được bấm" (Mặc định khi vào web sẽ hiện Tall Tales)
    const [activeTab, setActiveTab] = useState("Tall Tales");

    // 2. MÁY LỌC: Cỗ máy này tự động chắt lọc file Data, Cứ activeTab đổi tên gì, nó lôi bài của loại đó ra
    const filteredList = triggerList.filter((monDo) => monDo.phanLoai === activeTab);

    return (
        <div className="trigger-page-container">
            <div className="trigger-header">
                <h1>CẨM NANG HẢI TẶC ĐỘC QUYỀN</h1>
                <p className="trigger-subtitle">Lựa chọn quyển bách khoa bạn muốn mở</p>
            </div>

            {/* 3. THANH ĐIỀU HƯỚNG TABS (BẤM VÀO SẼ CHUYỂN TRẠNG THÁI) */}
            <div className="trigger-tabs">
                <button
                    className={`tab-btn ${activeTab === "Tall Tales" ? "active" : ""}`}
                    onClick={() => setActiveTab("Tall Tales")}
                >
                    🏴‍☠️ TALL TALES
                </button>
                <button
                    className={`tab-btn ${activeTab === "Sự Kiện Thế Giới" ? "active" : ""}`}
                    onClick={() => setActiveTab("Sự Kiện Thế Giới")}
                >
                    🌋 SỰ KIỆN THẾ GIỚI
                </button>
                <button
                    className={`tab-btn ${activeTab === "Giải Đố" ? "active" : ""}`}
                    onClick={() => setActiveTab("Giải Đố")}
                >
                    🗺️ GIẢI ĐỐ
                </button>
            </div>

            {/* 4. KHU VỰC IN KẾT QUẢ ĐÃ LỌC */}
            <div className="trigger-content-area">
                <div className="trigger-grid">
                    {filteredList.map((monDo) => (
                        <div
                            className="trigger-card"
                            key={monDo.id}
                            style={{ cursor: "pointer" }}
                            onClick={() => window.open(monDo.nguonGoc, '_blank')}
                        >
                            <div className="trigger-img">
                                <img src={monDo.hinhAnh} alt={monDo.tieuDe} />
                            </div>
                            <div className="trigger-info">
                                <span className="trigger-tag">{monDo.phanLoai}</span>
                                <h2>{monDo.tieuDe}</h2>
                                <p>{monDo.tomTat}</p>
                                <a href={monDo.nguonGoc} target="_blank" rel="noreferrer" className="btn-read-trigger">
                                    MỞ BẢN ĐỒ CHI TIẾT
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

