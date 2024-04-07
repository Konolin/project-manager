import {NavLink} from 'react-router-dom'

export default function SignedInLinks() {
    return (
        <ul className="right">
            <li><NavLink to="/create-project">New Project</NavLink></li>
            <li><NavLink to="/">Sign Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">XX</NavLink></li>
        </ul>
    );
}