import Notifications from "./Notifications.jsx";
import ProjectList from "../projects/ProjectList.jsx";

export default function Dashboard() {
    return (
        <div>
            <div>
                <div className="project-list">
                    <ProjectList/>
                </div>
                <div className="notifications">
                    <Notifications/>
                </div>
            </div>
        </div>
    );
}