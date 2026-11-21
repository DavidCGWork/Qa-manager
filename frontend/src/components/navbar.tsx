import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="navbar">
            <Link to="/" className="navbar-logo">
                QA<span>Manager</span>
            </Link>

            <nav className="navbar-links">
                <a href="#inicio">Inicio</a>
                <a href="#funcionalidades">Funcionalidades</a>
                <a href="#nosotros">Nosotros</a>
            </nav>

            <Link to="/login" className="navbar-login">
                Iniciar sesión →
            </Link>
        </header>
    );
}

export default Navbar;