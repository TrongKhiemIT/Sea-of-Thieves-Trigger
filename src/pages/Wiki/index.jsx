import React, { useState } from 'react';
import './wiki.css';

export default function Wiki() {
    // 1. CÁC BIẾN NHỚ (STATE) ĐỂ LƯU TRỮ TRẠNG THÁI
    const [searchTerm, setSearchTerm] = useState("Kraken"); // Chữ hiển thị mặc định
    const [result, setResult] = useState(null);             // Gói hàng kết quả
    const [isLoading, setIsLoading] = useState(false);      // Hiệu ứng Đang chờ...
    const [errorMsg, setErrorMsg] = useState("");           // Thông báo thất bại

    // 2. HÀM THỰC HIỆN KHI BẠN BẤM BIỂN NÚT "TÌM KIẾM"
    const searchWiki = async (e) => {
        e.preventDefault(); // Phanh web lại không cho nó Tải Lại Trang (Đặc sản của React)

        setIsLoading(true);  // Bật đèn hiệu Đang chờ...
        setErrorMsg("");     // Reset lại bảng Lỗi
        setResult(null);     // Dọn dẹp Khung kết quả cũ đi

        // Đặc sản tra từ khóa của Wiki: "Chest of Legends" -> "Chest_of_Legends"
        const formattedSearch = searchTerm.trim().replace(/ /g, '_');

        /* ĐƯỜNG DẪN THẦN THÁNH CHỌC THẲNG VÀO DATA CỦA HẢI TẶC:
           origin=*  : Thẻ lệnh gián điệp, giúp kết nối tự do vượt màng lọc bảo vệ CORS của Wiki
           exintro=1 : Gửi lệnh yêu cầu "Chỉ trích xuất mô tả đoạn Mở Bài"
           piprop=original: Yêu cầu Wiki gửi kèm cái Ảnh chất lượng Cực Xịn
        */
        const url = `https://seaofthieves.wiki.gg/api.php?action=query&format=json&prop=extracts|pageimages&explaintext=1&piprop=original&titles=${formattedSearch}&origin=*`;

        try {
            // Đợi gọi thư sang Máy chủ...
            const response = await fetch(url);
            // Đợi bóc gói hàng gửi về ra phiên dịch (Json)...
            const data = await response.json();

            // Vào sâu trong đống hỗn độn để lấy Tờ Giấy duy nhất (Pages)
            const pages = data.query.pages;
            const pageId = Object.keys(pages)[0]; // Trích xuất con số Định Danh

            if (pageId === "-1") {
                // Nếu Wiki ném lại biển báo số [-1], nghĩa là 100% không tồn tại món đó!
                setErrorMsg(`Bản đồ thất truyền! Hoàn toàn không tìm thấy Quái vật hoặc Vật phẩm mang tên "${searchTerm}" trên vùng biển Sea Of Thieves.`);
            } else {
                // Nhét cuộn trục kho báu cuối cùng vào bụng của React!
                setResult(pages[pageId]);
            }
        } catch (error) {
            setErrorMsg("Hạm đội rớt mạng! Vô phương kết nối đến máy chủ vệ tinh Sea of Thieves...");
        } finally {
            setIsLoading(false); // Dừng nhấp nháy đèn Đang chờ...
        }
    };

    // 3. VẼ GIAO DIỆN LÊN MÀN HÌNH BẰNG ĐỐNG TÀI SẢN PHÍA TRÊN
    return (
        <div className="wiki-page-container">
            {/* THÙNG XẾP LOẠI 1: KHUNG TÌM KIẾM THEO ĐƠN */}
            <div className="wiki-search-box">
                <h1 className="wiki-title">SEA OF THIEVES WIKI</h1>
                <p className="wiki-subtitle">Biết tất cả mọi thứ trong Sea Of Thieves</p>

                <form className="search-form" onSubmit={searchWiki}>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Nhập tên quái thú, vũ khí (Tiếng Anh)..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit" className="btn-submit-search">TÌM KIẾM</button>
                </form>
            </div>

            {/* THÙNG XẾP LOẠI 2: KHUNG ĐÓN NHẬN KẾT QUẢ HIỂN THỊ */}
            <div className="wiki-result-board">
                {isLoading && <p className="loading-text">Đang tìm kiếm trong vùng biển...</p>}

                {errorMsg && <p className="error-text">❌ {errorMsg}</p>}

                {/* Nếu máy dấy `result` báo TỒN TẠI dữ liệu, nó mới In ra khung bên dưới */}
                {result && (
                    <div className="result-card">
                        <h2>{result.title}</h2>

                        {/* Kiểm tra xem trong Gói Hàng trả về của Wiki có Đính Kèm Ảnh không */}
                        {result.original && result.original.source && (
                            <img src={result.original.source} alt={result.title} className="result-image" />
                        )}

                        <div className="result-extract">
                            <p>{result.extract}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
