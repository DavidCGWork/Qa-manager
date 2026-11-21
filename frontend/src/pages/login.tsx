


import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setMessage("El inicio de sesión estará disponible próximamente.");
    };

    return (
        <main className="login-page">

            <Link to="/" className="login-logo">
                QA<span>Manager</span>
            </Link>

            <section className="login-card">

                <div className="login-icon">
                    🛡️
                </div>

                <h1>Bienvenido de nuevo</h1>

                <p className="login-subtitle">
                    Accede a tu espacio de gestión QA
                </p>

                <form className="login-form" onSubmit={handleSubmit}>

                    {/* Correo electrónico */}
                    <div className="form-group">
                        <label htmlFor="email">
                            Correo electrónico
                        </label>

                        <input
                            type="email"
                            id="email"
                            placeholder="nombre@empresa.com"
                            required
                            maxLength={254}
                            pattern="^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$"
                            title="Correo no válido. ejemplo: correo@gmail.com"
                            autoComplete="email"
                        />
                    </div>

                    {/* Contraseña */}
                    <div className="form-group">
                        <label htmlFor="password">
                            Contraseña
                        </label>

                        <div className="password-input-wrapper">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                placeholder="Ingresa tu contraseña"
                                required
                                minLength={8}
                                maxLength={20}
                                autoComplete="current-password"
                            />

                            <button
                                type="button"
                                className="toggle-password"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={
                                    showPassword
                                        ? "Ocultar contraseña"
                                        : "Mostrar contraseña"
                                }
                            >
                                {showPassword ? "Ocultar" : "Mostrar"}
                            </button>
                        </div>
                    </div>

                    {/* Recuperar contraseña */}
                    <Link to="/forgot-password" className="forgot-password">
                        ¿Olvidaste tu contraseña?
                    </Link>

                    {/* Acceso */}
                    <button
                        type="submit"
                        className="login-button"
                    >
                        Ingresar a QA Manager →
                    </button>

                    {/* Mensaje de respuesta */}
                    {message && (
                        <p className="login-message" role="status">
                            {message}
                        </p>
                    )}

                </form>

                <p className="login-footer">
                    © 2026 QA Manager. Todos los derechos reservados.
                </p>

            </section>

        </main>
    );
}

export default Login;
