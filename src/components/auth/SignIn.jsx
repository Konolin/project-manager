import {useState} from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../config/firebaseConfig.js";
import {useNavigate} from "react-router-dom";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        if (e.target.id === "password") {
            setPassword(e.target.value);
        } else {
            setEmail(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
        navigate("/");
    }

    return (
        <div className="container">
            <form className="white" onSubmit={handleSubmit}>
                <h1 className="grey-text text-darken-3">Sign in</h1>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Sign in</button>
                </div>
            </form>
        </div>
    );
}