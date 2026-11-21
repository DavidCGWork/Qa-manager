
import "../../styles/statCard.css";

interface StatCardProps {
    title: string;
    value: number;
    description: string;
    icon: string;
    color: string;
}

function StatCard({
    title,
    value,
    description,
    icon,
    color
}: StatCardProps) {
    return (
        <article className="stat-card">

            <div className="stat-card-top">
                <span className="stat-card-title">
                    {title}
                </span>

                <div
                    className="stat-card-icon"
                    style={{ color: color }}
                >
                    {icon}
                </div>
            </div>

            <h2 className="stat-card-value">
                {value.toLocaleString("es-CO")}
            </h2>

            <p className="stat-card-description">
                {description}
            </p>

        </article>
    );
}

export default StatCard;
