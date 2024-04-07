import {Link} from 'react-router-dom'
import SignedInLinks from "./SignedInLinks.jsx";
import SignedOutLinks from "./SignedOutLinks.jsx";

export default function NavBar() {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Project Manager</Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>
    );
}