import React from 'react';

import styles from './Header.module.scss';
// import { getAuth, signOut } from 'firebase/auth';
// import { removeUser } from '../../store/slices/useSlice';
import { useAppDispatch } from '../../store';

const Header = () => {
    // const auth = getAuth();
    const dispatch = useAppDispatch();

    const logout = () => {};

    return (
        <header className={styles.header}>
            <button>Login</button>
            <button>SingUp</button>
            <button onClick={logout}>Logout</button>
        </header>
    );
};

export default Header;
