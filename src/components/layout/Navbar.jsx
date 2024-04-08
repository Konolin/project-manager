import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/firebaseConfig.js';
import SignedInLinks from './SignedInLinks.jsx';
import SignedOutLinks from './SignedOutLinks.jsx';

export default function NavBar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">Project Manager</Link>
        {user ? <SignedInLinks /> : <SignedOutLinks />}
      </div>
    </nav>
  );
}