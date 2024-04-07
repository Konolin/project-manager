import {NavLink} from 'react-router-dom'

export default function SignedOutLinks() {
    return (
        <ul className="right">
            <li><NavLink to="/signup">Sign Up</NavLink></li>
            <li><NavLink to="/signin">Sign In</NavLink></li>
        </ul>
    );
}