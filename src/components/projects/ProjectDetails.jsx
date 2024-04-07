import {useParams} from "react-router-dom";

export default function ProjectDetails () {
    const {id} = useParams();
    return (
        <div>
            <div>
                <div>
                    <span>Project Title - {id}</span>
                    <p>Bla bla bla bla bla bla bla bla</p>
                </div>
                <div>
                    <div>Posted by Bob</div>
                    <div>02-02-2024</div>
                </div>
            </div>
        </div>
    );
}