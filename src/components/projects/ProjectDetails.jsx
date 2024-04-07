import {useParams} from "react-router-dom";

export default function ProjectDetails () {
    const {id} = useParams();
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Bla bla bla bla bla bla bla bla</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Bob</div>
                    <div>02-02-2024</div>
                </div>
            </div>
        </div>
    );
}