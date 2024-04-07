import {useState} from "react";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleChange = (e) => {
        if (e.target.id === "password") {
            setPassword(e.target.value);
        } else if (e.target.id === "email") {
            setEmail(e.target.value);
        } else if (e.target.id === "firstName") {
            setFirstName(e.target.value);
        } else {
            setLastName(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("email: " + email);
        console.log("password: " + password);
        console.log("firstName: " + firstName);
        console.log("latName: " + lastName);
    }

    return (
        <div className="container">
            <form className="white" onSubmit={handleSubmit}>
                <h1 className="grey-text text-darken-3">Sign up</h1>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Sign up</button>
                </div>
            </form>
        </div>
    );
}