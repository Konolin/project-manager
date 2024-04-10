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
            <ProjectList projects={projects}/>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        projects: state.project.projects
    };
}

export default connect(mapStateToProps)(Dashboard);