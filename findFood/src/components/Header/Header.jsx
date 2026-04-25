import logo from '../../assets/logo.png';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="header-title">
                    JET Coding Test
                </div>
                <div className="header-name">
                    Abdul Munasir Kottikulam Mohamad Kunhi
                </div>
            </div>
        </header>
    );
};

export default Header;