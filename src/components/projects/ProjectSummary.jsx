export default function ProjectSummary({project}) {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by Bob</p>
                <p className="grey-text">05-04-2024</p>
            </div>
        </div>
    );
}