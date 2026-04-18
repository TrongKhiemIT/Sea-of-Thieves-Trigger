import { Link } from "react-router-dom";
import "./Navbar.css";
import "./index.css";

export default function Navbar() {
    return (
        <nav className="sot-navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src="/Logo dài.png" alt="SOT Trigger" />
                </Link>
                <div className="navbar-links">
                    <Link to="/">Trang chủ</Link>
                    <Link to="/wiki">Từ điển</Link>
                    <Link to="/trigger">Mẹo hay</Link>
                    <Link to="/community">Cộng đồng</Link>
                    <Link to="/about">Giới thiệu</Link>
                </div>
                <div className="navbar-actions">
                    <button className="btn-play">CHƠI NGAY</button>
                    <button className="btn-login">
                        {/* Bạn có thể tải icon hình đầu lâu nhỏ xíu bỏ vào public nếu muốn y hệt ảnh */}
                        🏴‍☠️ ĐĂNG NHẬP
                    </button>
                </div>
            </div>
        </nav>
    );
}