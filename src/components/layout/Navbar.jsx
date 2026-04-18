import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import "./index.css";

export default function Navbar() {
    const navigate = useNavigate();

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
                    <button className="btn-login" onClick={() => navigate('/login')}>
                        🏴‍☠️ ĐĂNG NHẬP
                    </button>
                </div>
            </div>
        </nav>
    );
}