import ProjectSummary from "./ProjectSummary.jsx";
import {Link} from "react-router-dom";

export default function ProjectList({projects}) {
    return (
        <div className="project-list section">
            {projects && projects.map(project => (
                <Link to={'/project/' + project.id} key={project.id}>
                    <ProjectSummary project={project} key={project.id}/>
                </Link>
            ))}
        </div>
    );
}