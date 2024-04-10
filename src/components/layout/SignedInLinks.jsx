import {useEffect, useState} from 'react';
import { query, where, getDocs, collection } from "firebase/firestore";
import {NavLink} from 'react-router-dom';
import {signOut} from 'firebase/auth';
import {auth, db} from '../../config/firebaseConfig.js';
import {useNavigate} from "react-router-dom";

export default function SignedInLinks() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const navigate = useNavigate();

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

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('User signed out');
            })
            .catch((error) => {
                console.error('Error signing out: ', error);
            });
        navigate("/signin");
    };

    return (
        <ul className="right">
            <li><NavLink to="/create-project">New Project</NavLink></li>
            <li><NavLink to="/" onClick={handleSignOut}>Sign Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">{firstName[0]}{lastName[0]}</NavLink></li>
        </ul>
    );
}