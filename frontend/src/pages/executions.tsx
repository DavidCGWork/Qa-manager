
import Sidebar from "../components/dashboard/sidebar";
import DashboardHeader from "../components/dashboard/dashboardHeader";
import "../styles/executions.css";

function Executions() {
    return (
        <div className="dashboard-layout">
            <Sidebar />

            <main className="dashboard-main">
                <DashboardHeader />

                <section className="executions-content">
                    <div className="executions-intro">
                        <div>
                            <h1>Ejecuciones</h1>
                            <p>
                                Gestiona y consulta las ejecuciones de tus casos
                                de prueba.
                            </p>
                        </div>

                        <button className="execution-create-button">
                            + Nueva ejecución
                        </button>
                    </div>

                    <div className="executions-panel">
                        <div className="executions-panel-header">
                            <div>
                                <h2>Historial de ejecuciones</h2>
                                <p>Consulta los resultados de las pruebas ejecutadas.</p>
                            </div>

                            <input
                                className="execution-search"
                                type="text"
                                placeholder="Buscar ejecución..."
                            />
                        </div>

                        <div className="executions-table-container">
                            <table className="executions-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Proyecto</th>
                                        <th>Caso de prueba</th>
                                        <th>Ejecutado por</th>
                                        <th>Fecha</th>
                                        <th>Resultado</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td colSpan={7} className="execution-empty">
                                            No hay ejecuciones registradas.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Executions;
