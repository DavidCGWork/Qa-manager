
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/home.css";

const features = [
    {
        icon: "📁",
        title: "Gestión de proyectos",
        description: "Organiza tus proyectos, equipos y módulos en un solo lugar."
    },
    {
        icon: "📋",
        title: "Casos de prueba",
        description: "Diseña, clasifica y administra tus casos de prueba."
    },
    {
        icon: "▶️",
        title: "Ejecuciones",
        description: "Registra resultados, evidencias y avances de tus pruebas."
    },
    {
        icon: "🐛",
        title: "Gestión de defectos",
        description: "Documenta errores y realiza seguimiento a su resolución."
    },
    {
        icon: "📊",
        title: "Reportes",
        description: "Consulta indicadores y mide la calidad de tus proyectos."
    },
    {
        icon: "👥",
        title: "Trabajo en equipo",
        description: "Coordina analistas, líderes QA y administradores."
    }
];

function Home() {
    return (
        <div className="home-page">
            <Navbar />

            <main>
                <section className="hero" id="inicio">
                    <div className="hero-content">
                        <span className="hero-label">
                            QUALITY ASSURANCE PLATFORM
                        </span>

                        <h1>
                            Gestiona tus pruebas.
                            <span> Eleva la calidad.</span>
                        </h1>

                        <p>
                            Centraliza tus proyectos, casos de prueba,
                            ejecuciones y defectos en una sola plataforma.
                            Lleva el control de la calidad de tu software.
                        </p>

                        <div className="hero-actions">
                            <Link to="/login" className="btn-primary">
                                Comenzar ahora →
                            </Link>

                            <a href="#funcionalidades" className="btn-secondary">
                                Conocer más
                            </a>
                        </div>

                        <div className="hero-trust">
                            <span>✓ Gestión centralizada</span>
                            <span>✓ Control de calidad</span>
                            <span>✓ Trabajo colaborativo</span>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="dashboard-card">
                            <div className="dashboard-header">
                                <div>
                                    <span className="dashboard-subtitle">
                                        QA MANAGER
                                    </span>
                                    <h3>Resumen de calidad</h3>
                                </div>

                                <span className="status-online">
                                    ● En línea
                                </span>
                            </div>

                            <div className="dashboard-stats">
                                <div className="stat">
                                    <span>Casos totales</span>
                                    <strong>525</strong>
                                </div>

                                <div className="stat">
                                    <span>Exitosos</span>
                                    <strong className="green">400</strong>
                                </div>

                                <div className="stat">
                                    <span>Fallidos</span>
                                    <strong className="red">45</strong>
                                </div>
                            </div>

                            <div className="progress-section">
                                <div className="progress-label">
                                    <span>Progreso de ejecución</span>
                                    <strong>76.2%</strong>
                                </div>

                                <div className="progress-track">
                                    <div className="progress-value"></div>
                                </div>
                            </div>

                            <div className="dashboard-bottom">
                                <span>✓ Casos ejecutados: 445</span>
                                <span>◷ Pendientes: 80</span>
                            </div>
                        </div>

                        <div className="glow-circle"></div>
                    </div>
                </section>

                <section className="features" id="funcionalidades">
                    <div className="section-heading">
                        <span>FUNCIONALIDADES</span>
                        <h2>Todo lo que necesitas para gestionar QA</h2>
                        <p>
                            Herramientas diseñadas para organizar y
                            controlar el ciclo de pruebas de software.
                        </p>
                    </div>

                    <div className="features-grid">
                        {features.map((feature) => (
                            <article className="feature-card" key={feature.title}>
                                <div className="feature-icon">
                                    {feature.icon}
                                </div>

                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </article>
                        ))}
                    </div>
                </section>
                <section className="about-section" id="nosotros">
                    <div className="section-heading">
                        <span>NOSOTROS</span>
                        <h2>Más que probar software, construimos calidad.</h2>

                        <p>
                            QA Manager nace con una idea clara: hacer que la gestión
                            de calidad sea más organizada, eficiente y estratégica.

                            Creemos que detrás de cada producto de software confiable
                            existe un proceso de pruebas bien estructurado, un equipo
                            comprometido y una gestión que permite tomar mejores decisiones.

                            Por eso, desarrollamos una plataforma que centraliza proyectos,
                            casos de prueba, ejecuciones y defectos en un solo lugar,
                            facilitando el trabajo colaborativo y brindando visibilidad
                            sobre cada etapa del proceso de QA.
                        </p>

                        <p>
                            <strong>
                                Nuestro propósito es transformar la manera de gestionar
                                las pruebas de software, convirtiendo la calidad en parte
                                fundamental de cada proyecto.
                            </strong>
                        </p>
                    </div>
                </section>

                <section className="cta-section">
                    <h2>La calidad comienza con una buena gestión.</h2>
                    <p>
                        Organiza tus pruebas y lleva tus proyectos
                        al siguiente nivel.
                    </p>

                    <Link to="/login" className="btn-primary">
                        Acceder a QA Manager →
                    </Link>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Home;
