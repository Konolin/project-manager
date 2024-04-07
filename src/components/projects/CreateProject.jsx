import {useState} from "react";

export default function CreateProject() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleChange = (e) => {
        if (e.target.id === "password") {
            setTitle(e.target.value);
        } else {
            setContent(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("title: " + title);
        console.log("content: " + content);
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