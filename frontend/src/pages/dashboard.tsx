
import Sidebar from "../components/dashboard/sidebar";
import DashboardHeader from "../components/dashboard/dashboardHeader";
import StatCard from "../components/dashboard/statCard";
import "../styles/dashboard.css";

function Dashboard() {
    return (
        <main className="dashboard-layout">

            <Sidebar />

            <section className="dashboard-main">

                <DashboardHeader />

                <div className="dashboard-content">

                    <div className="dashboard-intro">
                        <h2>Resumen general</h2>
                        <p>
                            Aquí puedes consultar el estado actual de tu
                            gestión de calidad.
                        </p>
                    </div>

                    <div className="dashboard-stats">

                        <StatCard
                            title="Proyectos activos"
                            value={12}
                            description="Proyectos en seguimiento"
                            icon="▦"
                            color="#60a5fa"
                        />

                        <StatCard
                            title="Casos de prueba"
                            value={525}
                            description="Casos registrados"
                            icon="☷"
                            color="#a78bfa"
                        />

                        <StatCard
                            title="Ejecuciones exitosas"
                            value={400}
                            description="Pruebas superadas"
                            icon="✓"
                            color="#34d399"
                        />

                        <StatCard
                            title="Defectos registrados"
                            value={45}
                            description="Incidencias identificadas"
                            icon="⚑"
                            color="#f87171"
                        />

                    </div>

                    <section className="dashboard-activity">

                        <div className="activity-header">
                            <h2>Actividad reciente</h2>
                            <span>Últimos movimientos</span>
                        </div>

                        <div className="activity-empty">
                            <span>◷</span>
                            <p>
                                Aquí aparecerá la actividad reciente
                                de tus proyectos.
                            </p>
                        </div>

                    </section>

                </div>

            </section>

        </main>
    );
}

export default Dashboard;
