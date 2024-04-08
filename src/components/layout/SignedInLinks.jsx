import {NavLink} from 'react-router-dom';
import {signOut} from 'firebase/auth';
import {auth} from '../../config/firebaseConfig.js';

export default function SignedInLinks() {
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('User signed out');
            })
            .catch((error) => {
                console.error('Error signing out: ', error);
            });
    };

    return (
        <ul className="right">
            <li><NavLink to="/create-project">New Project</NavLink></li>
            <li><NavLink to="/" onClick={handleSignOut}>Sign Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">XX</NavLink></li>
        </ul>
    );
}