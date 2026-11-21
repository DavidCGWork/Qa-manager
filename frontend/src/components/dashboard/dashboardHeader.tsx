
import { Link } from "react-router-dom";
import "../../styles/dashboardHeader.css";

function DashboardHeader() {
    return (
        <header className="dashboard-header">

            <div className="header-welcome">
                <h1>Dashboard</h1>
                <p>Bienvenido a tu centro de gestión QA.</p>
            </div>

            <div className="header-actions">

                <button
                    type="button"
                    className="header-notifications"
                    aria-label="Notificaciones"
                    title="Notificaciones"
                >
                    ♧
                </button>

                <div className="header-user">
                    <div className="user-avatar">
                        DC
                    </div>

                    <div className="user-info">
                        <span className="user-name">
                            David Correa
                        </span>

                        <span className="user-role">
                            Administrador
                        </span>
                    </div>
                </div>

                <Link to="/" className="header-logout">
                    Salir
                </Link>

            </div>

        </header>
    );
}

export default DashboardHeader;
