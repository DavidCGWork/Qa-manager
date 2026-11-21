
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h2>
                        QA<span>Manager</span>
                    </h2>
                    <p>
                        Gestionando calidad, construyendo confianza.
                    </p>
                </div>

                <div className="footer-contact">
                    <h3>Desarrollado por</h3>
                    <p>David Correa</p>
                    <a href="mailto:Davidcorreagaleano@gmail.com">
                        Davidcorreagaleano@gmail.com
                    </a>
                </div>

                <div className="footer-social">
                    <h3>Conectemos</h3>
                    <a
                        href="https://github.com/DavidCGWork"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 QA Manager. Todos los derechos reservados.</p>
                <span>Diseñado y desarrollado por David Correa.</span>
            </div>
        </footer>
    );
}

export default Footer;
