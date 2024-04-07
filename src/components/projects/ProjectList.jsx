import ProjectSummary from "./ProjectSummary.jsx";

export default function ProjectList({projects}) {
    return (
        <div className="project-list section">
            {projects && projects.map(project => (
                <ProjectSummary project={project} key={project.id}/>
            ))}
        </div>
    );
}