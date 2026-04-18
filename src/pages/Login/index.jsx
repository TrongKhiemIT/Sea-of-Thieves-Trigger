import React, { useState } from 'react';
import './login.css';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Giả lập Đăng nhập (Chưa gọi API)
        alert(`Đang căng buồm với thuyền trưởng: ${username}`);
    };

    return (
        <div className="login-page-container">
            {/* Thêm 1 thẻ div bọc ngoài cùng có position relative */}
            <div className="login-wrapper" style={{ position: "relative" }}>
                <div className="login-box">
                    <h1 className="login-title">ĐĂNG NHẬP</h1>
                    <p className="login-subtitle">Căng buồm ra khơi</p>
                    <form className="login-form" onSubmit={handleLogin}>
                        <div className="input-group">
                            <label>Tên Đăng Nhập</label>
                            <input
                                type="text"
                                className="sot-input"
                                placeholder="Nhập tên đăng nhập..."
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label>Mật Khẩu</label>
                            <input
                                type="password"
                                className="sot-input"
                                placeholder="Nhập mật khẩu..."
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="btn-submit-login">
                            ĐĂNG NHẬP
                        </button>
                    </form>

                    <div className="login-footer">
                        <a href="#" className="login-link">Quên mật khẩu?</a>
                        <a href="#" className="login-link">Chưa có tài khoản? (Đăng ký)</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
