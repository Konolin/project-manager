import {useEffect, useState} from "react";
import {createProject} from "../../store/actions/projectActions.js";
import {connect} from "react-redux";
import {auth, db} from "../../config/firebaseConfig.js";
import {collection, getDocs, query, where} from "firebase/firestore";

function CreateProject(props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleChange = (e) => {
        if (e.target.id === "title") {
            setTitle(e.target.value);
        } else {
            setContent(e.target.value);
        }
    }

    useEffect(() => {
        const fetchUserData = async () => {
            const q = query(collection(db, "users"), where("uid", "==", auth.currentUser.uid));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setFirstName(doc.data().firstName);
                setLastName(doc.data().lastName);
            });
        };
        fetchUserData();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            firstName: firstName,
            lastName: lastName,
            uid: auth.currentUser.uid
        }
        props.createProject(title, content, user);
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
        createProject: (title, content, user) => dispatch(createProject({title: title, content: content, user: user}))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject);