
import { Link, useLocation } from "react-router-dom";
import "../../styles/sidebar.css";

function Sidebar() {
    const location = useLocation();

    const menuItems = [
        { path: "/dashboard", label: "Dashboard", icon: "▦" },
        { path: "/projects", label: "Proyectos", icon: "▣" },
        { path: "/test-cases", label: "Casos de prueba", icon: "☷" },
        { path: "/executions", label: "Ejecuciones", icon: "▶" },
        { path: "/defects", label: "Defectos", icon: "⚑" },
        { path: "/reports", label: "Reportes", icon: "▤" },
    ];

    return (
        <aside className="dashboard-sidebar">
            <Link to="/" className="sidebar-logo">
                QA<span>Manager</span>
            </Link>

            <nav className="sidebar-navigation">
                <p className="sidebar-section-title">MENÚ PRINCIPAL</p>

                {menuItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`sidebar-link ${
                            location.pathname === item.path ? "active" : ""
                        }`}
                    >
                        <span>{item.icon}</span>
                        {item.label}
                    </Link>
                ))}
            </nav>

            <div className="sidebar-bottom">
                <Link to="/" className="sidebar-link">
                    <span>↩</span>
                    Cerrar sesión
                </Link>
            </div>
        </aside>
    );
}

export default Sidebar;
