
import { useState, type FormEvent } from "react";
import Sidebar from "../components/dashboard/sidebar";
import DashboardHeader from "../components/dashboard/dashboardHeader";
import "../styles/projetcs.css";

type ProjectStatus = "active" | "paused" | "completed";

interface Project {
    id: number;
    name: string;
    responsible: string;
    testCases: number;
    status: ProjectStatus;
}

const initialProject = {
    name: "",
    responsible: "",
    testCases: 0,
    status: "active" as ProjectStatus,
};

function Projects() {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");

    const [projects, setProjects] = useState<Project[]>([
        {
            id: 1,
            name: "Portal de clientes",
            responsible: "David Correa",
            testCases: 120,
            status: "active",
        },
        {
            id: 2,
            name: "Aplicación móvil",
            responsible: "David Correa",
            testCases: 85,
            status: "paused",
        },
        {
            id: 3,
            name: "Plataforma de pagos",
            responsible: "David Correa",
            testCases: 64,
            status: "completed",
        },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [deletingId, setDeletingId] = useState<number | null>(null);
    const [message, setMessage] = useState("");

    const [newProject, setNewProject] = useState(initialProject);

    // Filtrar proyectos
    const filteredProjects = projects.filter((project) => {
        const matchesSearch =
            project.name.toLowerCase().includes(search.toLowerCase()) ||
            project.responsible.toLowerCase().includes(search.toLowerCase());

        const matchesStatus =
            statusFilter === "all" || project.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    const statusLabels: Record<ProjectStatus, string> = {
        active: "Activo",
        paused: "Pausado",
        completed: "Completado",
    };

    // Abrir modal para crear
    const handleOpenCreate = () => {
        setNewProject(initialProject);
        setEditingId(null);
        setMessage("");
        setShowModal(true);
    };

    // Abrir modal para editar
    const handleOpenEdit = (project: Project) => {
        setNewProject({
            name: project.name,
            responsible: project.responsible,
            testCases: project.testCases,
            status: project.status,
        });

        setEditingId(project.id);
        setMessage("");
        setShowModal(true);
    };

    // Cerrar modal
    const handleCloseModal = () => {
        setShowModal(false);
        setEditingId(null);
        setNewProject(initialProject);
    };

    // Crear o actualizar proyecto
    const handleSaveProject = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!newProject.name.trim() || !newProject.responsible.trim()) {
            return;
        }

        if (editingId !== null) {
            setProjects((currentProjects) =>
                currentProjects.map((project) =>
                    project.id === editingId
                        ? { ...project, ...newProject }
                        : project
                )
            );

            setMessage("Proyecto actualizado correctamente.");
        } else {
            const project: Project = {
                id: Date.now(),
                ...newProject,
            };

            setProjects((currentProjects) => [...currentProjects, project]);

            setSearch("");
            setStatusFilter("all");
            setMessage("Proyecto creado correctamente.");
        }

        handleCloseModal();
    };

    // Eliminar proyecto
    const handleDeleteProject = () => {
        if (deletingId === null) return;

        setProjects((currentProjects) =>
            currentProjects.filter((project) => project.id !== deletingId)
        );

        setDeletingId(null);
        setMessage("Proyecto eliminado correctamente.");
    };

    return (
        <main className="dashboard-layout">
            <Sidebar />

            <section className="dashboard-main">
                <DashboardHeader />

                <div className="dashboard-content">
                    <div className="projects-intro">
                        <div>
                            <h2>Proyectos</h2>
                            <p>
                                Administra y organiza tus proyectos de calidad.
                            </p>
                        </div>

                        <button
                            className="project-create-button"
                            onClick={handleOpenCreate}
                        >
                            + Nuevo proyecto
                        </button>
                    </div>

                    {message && (
                        <p className="project-success-message" role="status">
                            {message}
                        </p>
                    )}

                    <section className="projects-panel">
                        <div className="projects-panel-header">
                            <h3>Mis proyectos</h3>
                            <span>
                                {filteredProjects.length} proyectos encontrados
                            </span>
                        </div>

                        <div className="projects-toolbar">
                            <input
                                type="search"
                                placeholder="Buscar proyecto o responsable..."
                                value={search}
                                onChange={(event) => setSearch(event.target.value)}
                            />

                            <select
                                value={statusFilter}
                                onChange={(event) =>
                                    setStatusFilter(event.target.value)
                                }
                            >
                                <option value="all">Todos los estados</option>
                                <option value="active">Activo</option>
                                <option value="paused">Pausado</option>
                                <option value="completed">Completado</option>
                            </select>
                        </div>

                        <div className="projects-table-container">
                            <table className="projects-table">
                                <thead>
                                    <tr>
                                        <th>Proyecto</th>
                                        <th>Responsable</th>
                                        <th>Casos de prueba</th>
                                        <th>Estado</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {filteredProjects.length > 0 ? (
                                        filteredProjects.map((project) => (
                                            <tr key={project.id}>
                                                <td>{project.name}</td>
                                                <td>{project.responsible}</td>
                                                <td>{project.testCases}</td>
                                                <td>
                                                    <span
                                                        className={`project-status ${project.status}`}
                                                    >
                                                        {statusLabels[project.status]}
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="project-actions">
                                                        <button
                                                            type="button"
                                                            className="project-edit-button"
                                                            onClick={() =>
                                                                handleOpenEdit(project)
                                                            }
                                                        >
                                                            Editar
                                                        </button>

                                                        <button
                                                            type="button"
                                                            className="project-delete-button"
                                                            onClick={() =>
                                                                setDeletingId(project.id)
                                                            }
                                                        >
                                                            Eliminar
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan={5}
                                                className="projects-empty"
                                            >
                                                No se encontraron proyectos.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </section>

            {/* Modal de creación y edición */}
            {showModal && (
                <div
                    className="project-modal-overlay"
                    onClick={handleCloseModal}
                >
                    <section
                        className="project-modal"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="project-modal-header">
                            <div>
                                <h2>
                                    {editingId !== null
                                        ? "Editar proyecto"
                                        : "Nuevo proyecto"}
                                </h2>

                                <p>
                                    {editingId !== null
                                        ? "Modifica la información del proyecto."
                                        : "Registra un nuevo proyecto en QA Manager."}
                                </p>
                            </div>

                            <button
                                type="button"
                                className="project-modal-close"
                                onClick={handleCloseModal}
                                aria-label="Cerrar ventana"
                            >
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleSaveProject}>
                            <div className="project-form-group">
                                <label htmlFor="project-name">
                                    Nombre del proyecto
                                </label>

                                <input
                                    id="project-name"
                                    type="text"
                                    placeholder="Ej. Portal web"
                                    value={newProject.name}
                                    onChange={(event) =>
                                        setNewProject({
                                            ...newProject,
                                            name: event.target.value,
                                        })
                                    }
                                    maxLength={80}
                                    required
                                />
                            </div>

                            <div className="project-form-group">
                                <label htmlFor="project-responsible">
                                    Responsable
                                </label>

                                <input
                                    id="project-responsible"
                                    type="text"
                                    placeholder="Nombre del responsable"
                                    value={newProject.responsible}
                                    onChange={(event) =>
                                        setNewProject({
                                            ...newProject,
                                            responsible: event.target.value,
                                        })
                                    }
                                    maxLength={80}
                                    required
                                />
                            </div>

                            <div className="project-form-group">
                                <label htmlFor="project-cases">
                                    Casos de prueba
                                </label>

                                <input
                                    id="project-cases"
                                    type="number"
                                    min="0"
                                    value={newProject.testCases}
                                    onChange={(event) =>
                                        setNewProject({
                                            ...newProject,
                                            testCases: Math.max(
                                                0,
                                                Number(event.target.value)
                                            ),
                                        })
                                    }
                                    required
                                />
                            </div>

                            <div className="project-form-group">
                                <label htmlFor="project-status">
                                    Estado
                                </label>

                                <select
                                    id="project-status"
                                    value={newProject.status}
                                    onChange={(event) =>
                                        setNewProject({
                                            ...newProject,
                                            status: event.target.value as ProjectStatus,
                                        })
                                    }
                                >
                                    <option value="active">Activo</option>
                                    <option value="paused">Pausado</option>
                                    <option value="completed">Completado</option>
                                </select>
                            </div>

                            <div className="project-modal-actions">
                                <button
                                    type="button"
                                    className="project-cancel-button"
                                    onClick={handleCloseModal}
                                >
                                    Cancelar
                                </button>

                                <button
                                    type="submit"
                                    className="project-save-button"
                                >
                                    {editingId !== null
                                        ? "Guardar cambios"
                                        : "Crear proyecto"}
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            )}

            {/* Confirmación de eliminación */}
            {deletingId !== null && (
                <div
                    className="project-modal-overlay"
                    onClick={() => setDeletingId(null)}
                >
                    <section
                        className="project-modal project-delete-modal"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="project-modal-header">
                            <div>
                                <h2>Eliminar proyecto</h2>
                                <p>
                                    ¿Estás seguro de que deseas eliminar este
                                    proyecto? Esta acción no se puede deshacer.
                                </p>
                            </div>
                        </div>

                        <div className="project-modal-actions">
                            <button
                                type="button"
                                className="project-cancel-button"
                                onClick={() => setDeletingId(null)}
                            >
                                Cancelar
                            </button>

                            <button
                                type="button"
                                className="project-delete-button"
                                onClick={handleDeleteProject}
                            >
                                Sí, eliminar
                            </button>
                        </div>
                    </section>
                </div>
            )}
        </main>
    );
}

export default Projects;
