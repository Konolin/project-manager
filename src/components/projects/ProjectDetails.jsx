import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProjectDetails} from "../../store/actions/projectActions.js";
import moment from "moment";

export default function ProjectDetails() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const project = useSelector(state => state.project.project);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(fetchProjectDetails(id)).then(() => setIsLoading(false));
    }, [dispatch, id]);

    if (isLoading) {
        return null;
    }

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{project.title}</span>
                    <p>{project.content}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Created by: {project.authorLastName} {project.authorFirstName}</div>
                    <div>{moment(project.createdAt).calendar()}</div>
                </div>
            </div>
        </div>
    );
}