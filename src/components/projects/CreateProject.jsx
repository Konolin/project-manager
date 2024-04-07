import {useState} from "react";
import {createProject} from "../../store/actions/projectActions.js";
import {connect} from "react-redux";

function CreateProject(props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleChange = (e) => {
        if (e.target.id === "title") {
            setTitle(e.target.value);
        } else {
            setContent(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.createProject(title, content);
    }

    return (
        <div className="container">
            <form className="white" onSubmit={handleSubmit}>
                <h1 className="grey-text text-darken-3">Create Project</h1>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="content">Content</label>
                    <textarea id="content" className="materialize-textarea" onChange={handleChange}></textarea>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (title, content) => dispatch(createProject({title: title, content: content}))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject);