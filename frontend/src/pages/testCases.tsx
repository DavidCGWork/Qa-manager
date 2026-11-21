
import { useState, type FormEvent } from "react";
import Sidebar from "../components/dashboard/sidebar";
import DashboardHeader from "../components/dashboard/dashboardHeader";
import "../styles/testCases.css";

type Priority = "Alta" | "Media" | "Baja";
type Status = "Aprobado" | "Pendiente" | "Fallido";

interface TestCase {
    id: string;
    name: string;
    project: string;
    priority: Priority;
    status: Status;
    description: string | null;
}

const initialCases: TestCase[] = [
    {
        id: "CP001",
        name: "Validar inicio de sesión",
        project: "Portal de clientes",
        priority: "Alta",
        status: "Aprobado",
        description: "Verificar que un usuario pueda iniciar sesión correctamente utilizando credenciales válidas.",
    },
    {
        id: "CP002",
        name: "Validar recuperación de contraseña",
        project: "Portal de clientes",
        priority: "Media",
        status: "Pendiente",
        description: "Comprobar que el usuario pueda recuperar su contraseña mediante el correo electrónico registrado.",
    },
    {
        id: "CP003",
        name: "Registrar nuevo usuario",
        project: "Aplicación móvil",
        priority: "Alta",
        status: "Fallido",
        description: null,
    },
    {
        id: "CP004",
        name: "Validar proceso de pago",
        project: "Plataforma de pagos",
        priority: "Alta",
        status: "Aprobado",
        description: "Verificar que el usuario pueda completar correctamente una transacción de pago.",
    },
    {
        id: "CP005",
        name: "Actualizar información del perfil",
        project: "Aplicación móvil",
        priority: "Baja",
        status: "Pendiente",
        description: "Comprobar que el usuario pueda modificar y guardar correctamente sus datos personales.",
    },
];

const emptyCase = {
    name: "",
    project: "",
    priority: "Media" as Priority,
    status: "Pendiente" as Status,
};

function TestCases() {
    const [testCases, setTestCases] = useState<TestCase[]>(initialCases);
    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [viewingCase, setViewingCase] = useState<TestCase | null>(null);
    const [deletingId, setDeletingId] = useState<string | null>(null);
    const [formData, setFormData] = useState(emptyCase);
    const [message, setMessage] = useState("");

    const filteredCases = testCases.filter((testCase) =>
        `${testCase.id} ${testCase.name} ${testCase.project}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    function openCreateModal() {
        setMessage("");
        setEditingId(null);
        setFormData({ ...emptyCase });
        setShowModal(true);
    }

    function openEditModal(testCase: TestCase) {
        setMessage("");
        setEditingId(testCase.id);
        setFormData({
            name: testCase.name,
            project: testCase.project,
            priority: testCase.priority,
            status: testCase.status,
        });
        setShowModal(true);
    }

    function closeModal() {
        setShowModal(false);
        setEditingId(null);
        setFormData({ ...emptyCase });
    }

    function handleSave(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (editingId) {
            setTestCases((current) =>
                current.map((testCase) =>
                    testCase.id === editingId
                        ? { ...testCase, ...formData }
                        : testCase
                )
            );

            setMessage("Caso de prueba actualizado correctamente.");
        } else {
            const nextNumber =
                Math.max(
                    0,
                    ...testCases.map((testCase) =>
                        Number(testCase.id.replace("CP", ""))
                    )
                ) + 1;

            const newCase: TestCase = {
                id: `CP${String(nextNumber).padStart(3, "0")}`,
                ...formData,
                description: null,
            };

            setTestCases((current) => [...current, newCase]);
            setMessage("Caso de prueba creado correctamente.");
        }

        closeModal();
    }

    function handleDelete() {
        if (!deletingId) return;

        setTestCases((current) =>
            current.filter((testCase) => testCase.id !== deletingId)
        );

        setDeletingId(null);
        setMessage("Caso de prueba eliminado correctamente.");
    }

    return (
        <div className="dashboard-layout">
            <Sidebar />

            <main className="dashboard-main">
                <DashboardHeader />

                <section className="test-cases-content">
                    <div className="test-cases-intro">
                        <div>
                            <h1>Casos de prueba</h1>
                            <p>
                                Gestiona, organiza y consulta los casos de prueba
                                de tus proyectos.
                            </p>
                        </div>

                        <button
                            className="test-case-create-button"
                            onClick={openCreateModal}
                        >
                            + Nuevo caso
                        </button>
                    </div>

                    {message && (
                        <p className="project-success-message" role="status">
                            {message}
                        </p>
                    )}

                    <div className="test-cases-panel">
                        <div className="test-cases-panel-header">
                            <div>
                                <h2>Listado de casos</h2>
                                <p>{testCases.length} casos registrados</p>
                            </div>

                            <input
                                className="test-case-search"
                                type="text"
                                placeholder="Buscar caso..."
                                value={search}
                                onChange={(event) => setSearch(event.target.value)}
                            />
                        </div>

                        <div className="test-cases-table-container">
                            <table className="test-cases-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nombre del caso</th>
                                        <th>Proyecto</th>
                                        <th>Prioridad</th>
                                        <th>Estado</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {filteredCases.map((testCase) => (
                                        <tr key={testCase.id}>
                                            <td className="test-case-id">
                                                {testCase.id}
                                            </td>

                                            <td>{testCase.name}</td>
                                            <td>{testCase.project}</td>

                                            <td>
                                                <span
                                                    className={`test-case-priority priority-${testCase.priority.toLowerCase()}`}
                                                >
                                                    {testCase.priority}
                                                </span>
                                            </td>

                                            <td>
                                                <span
                                                    className={`test-case-status status-${testCase.status.toLowerCase()}`}
                                                >
                                                    {testCase.status}
                                                </span>
                                            </td>

                                            <td>
                                                <div className="test-case-actions">
                                                    <button
                                                        onClick={() => {
                                                            setMessage("");
                                                            setViewingCase(testCase);
                                                        }}
                                                    >
                                                        Ver
                                                    </button>

                                                    <button
                                                        onClick={() =>
                                                            openEditModal(testCase)
                                                        }
                                                    >
                                                        Editar
                                                    </button>

                                                    <button
                                                        className="test-case-delete-button"
                                                        onClick={() => {
                                                            setMessage("");
                                                            setDeletingId(testCase.id);
                                                        }}
                                                    >
                                                        Eliminar
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}

                                    {filteredCases.length === 0 && (
                                        <tr>
                                            <td colSpan={6} className="test-case-empty">
                                                No se encontraron casos de prueba.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </main>

            {/* Modal de creación y edición */}

            {showModal && (
                <div className="test-case-modal-overlay">
                    <div className="test-case-modal">
                        <div className="test-case-modal-header">
                            <h2>
                                {editingId
                                    ? "Editar caso de prueba"
                                    : "Nuevo caso de prueba"}
                            </h2>

                            <button type="button" onClick={closeModal}>
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSave}>
                            <div className="test-case-form-group">
                                <label>Nombre del caso</label>
                                <input
                                    required
                                    value={formData.name}
                                    onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            name: event.target.value,
                                        })
                                    }
                                    placeholder="Ej. Validar inicio de sesión"
                                />
                            </div>

                            <div className="test-case-form-group">
                                <label>Proyecto</label>
                                <input
                                    required
                                    value={formData.project}
                                    onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            project: event.target.value,
                                        })
                                    }
                                    placeholder="Nombre del proyecto"
                                />
                            </div>

                            <div className="test-case-form-row">
                                <div className="test-case-form-group">
                                    <label>Prioridad</label>
                                    <select
                                        value={formData.priority}
                                        onChange={(event) =>
                                            setFormData({
                                                ...formData,
                                                priority: event.target.value as Priority,
                                            })
                                        }
                                    >
                                        <option value="Alta">Alta</option>
                                        <option value="Media">Media</option>
                                        <option value="Baja">Baja</option>
                                    </select>
                                </div>

                                <div className="test-case-form-group">
                                    <label>Estado</label>
                                    <select
                                        value={formData.status}
                                        onChange={(event) =>
                                            setFormData({
                                                ...formData,
                                                status: event.target.value as Status,
                                            })
                                        }
                                    >
                                        <option value="Pendiente">Pendiente</option>
                                        <option value="Aprobado">Aprobado</option>
                                        <option value="Fallido">Fallido</option>
                                    </select>
                                </div>
                            </div>

                            <div className="test-case-modal-actions">
                                <button
                                    type="button"
                                    className="test-case-cancel-button"
                                    onClick={closeModal}
                                >
                                    Cancelar
                                </button>

                                <button
                                    type="submit"
                                    className="test-case-save-button"
                                >
                                    {editingId ? "Guardar cambios" : "Crear caso"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal de detalles */}

            {viewingCase && (
                <div className="test-case-modal-overlay">
                    <div className="test-case-modal">
                        <div className="test-case-modal-header">
                            <h2>Detalle del caso</h2>

                            <button
                                type="button"
                                onClick={() => setViewingCase(null)}
                            >
                                ×
                            </button>
                        </div>

                        <div className="test-case-details">
                            <p>
                                <strong>Identificador:</strong> {viewingCase.id}
                            </p>

                            <p>
                                <strong>Nombre:</strong> {viewingCase.name}
                            </p>

                            <p>
                                <strong>Proyecto:</strong> {viewingCase.project}
                            </p>

                            <p>
                                <strong>Prioridad:</strong> {viewingCase.priority}
                            </p>

                            <p>
                                <strong>Estado:</strong> {viewingCase.status}
                            </p>

                            <p>
                                <strong>Descripción:</strong>{" "}
                                {viewingCase.description ?? "Sin descripción disponible."}
                            </p>
                        </div>

                        <div className="test-case-modal-actions">
                            <button
                                className="test-case-save-button"
                                onClick={() => setViewingCase(null)}
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal de confirmación de eliminación */}

            {deletingId && (
                <div className="test-case-modal-overlay">
                    <div className="test-case-modal test-case-delete-modal">
                        <div className="test-case-modal-header">
                            <h2>Eliminar caso</h2>

                            <button
                                type="button"
                                onClick={() => setDeletingId(null)}
                            >
                                ×
                            </button>
                        </div>

                        <p>
                            ¿Estás seguro de que deseas eliminar el caso {deletingId}?
                            Esta acción no se puede deshacer.
                        </p>

                        <div className="test-case-modal-actions">
                            <button
                                className="test-case-cancel-button"
                                onClick={() => setDeletingId(null)}
                            >
                                Cancelar
                            </button>

                            <button
                                className="test-case-confirm-delete-button"
                                onClick={handleDelete}
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TestCases;
