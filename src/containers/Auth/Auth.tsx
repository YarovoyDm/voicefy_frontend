import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import { getAuth, signOut } from 'firebase/auth';

import styles from './Auth.module.scss';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { useAppDispatch } from '../../store';
// import { removeUser } from '../../store/slices/useSlice';

const Auth = () => {
    const [isLogin, setSetIsLogin] = useState(true);

    const onChangeAuthMethod = () => {
        setSetIsLogin((prev) => !prev);
    };

    return (
        <div className={styles.auth}>
            <section className={styles.sideBlock}>
                <div>Your content goes here!</div>
            </section>
            <div className={styles.authForm}>
                {true ? (
                    <LoginForm changeAuthMethod={onChangeAuthMethod} />
                ) : (
                    <SignUpForm changeAuthMethod={onChangeAuthMethod} />
                )}
            </div>
        </div>
    );
};

export default Auth;
