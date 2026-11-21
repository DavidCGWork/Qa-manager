
import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import "../styles/forgotPassword.css";

function ForgotPassword() {
    const [message, setMessage] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setMessage(
            "Si el correo está registrado, recibirás instrucciones para recuperar tu contraseña."
        );
    };

    return (
        <main className="forgot-password-page">

            <Link to="/" className="forgot-password-logo">
                QA<span>Manager</span>
            </Link>

            <section className="forgot-password-card">

                <div className="forgot-password-icon">
                    🔐
                </div>

                <h1>¿Olvidaste tu contraseña?</h1>

                <p className="forgot-password-subtitle">
                    Ingresa tu correo electrónico y te ayudaremos a recuperar
                    el acceso a tu cuenta.
                </p>

                <form
                    className="forgot-password-form"
                    onSubmit={handleSubmit}
                >
                    <div className="form-group">
                        <label htmlFor="recovery-email">
                            Correo electrónico
                        </label>

                        <input
                            type="text"
                            id="email"
                            placeholder="nombre@empresa.com"
                            required
                            maxLength={254}
                            pattern="^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$"
                            title="Correo no válido. ejemplo: correo@gmail.com"
                            autoComplete="email"
                        />
                    </div>

                    <button type="submit" className="recovery-button">
                        Enviar instrucciones →
                    </button>

                    {message && (
                        <p className="recovery-message" role="status">
                            {message}
                        </p>
                    )}
                </form>

                <Link to="/login" className="back-to-login">
                    ← Volver al inicio de sesión
                </Link>

            </section>

        </main>
    );
}

export default ForgotPassword;
