import Notifications from "./Notifications.jsx";
import ProjectList from "../projects/ProjectList.jsx";
import {connect, useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchProjects} from "../../store/actions/projectActions.js";

function Dashboard({projects}) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProjects());
    }, [dispatch]);

    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <ProjectList projects={projects}/>
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications/>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        projects: state.project.projects
    };
}

export default connect(mapStateToProps)(Dashboard);