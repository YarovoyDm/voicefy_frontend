import { useState } from 'react';

import styles from './Auth.module.scss';
import SignUpForm from 'components/SignUpForm/SignUpForm';

import LoginForm from 'components/LoginForm/LoginForm';

const Auth = () => {
    const [isLogin, setIsLogin] = useState<boolean>(true);

    const onChangeAuthMethod = (): void => {
        setIsLogin((prev) => !prev);
    };

    const authProposals = {
        login: {
            title: `Don't Have an Account Yet?`,
            subTitle:
                'Celebrate Connection: Elevate Your Social Experience with Seamless Sign Up and Vibrant Voice Messaging',
            buttonText: 'SIGN UP',
        },
        signup: {
            title: 'Already Signed up?',
            subtitle:
                'Your Voice, Your Space: Sign in and Immerse Yourself in the Power of Sonic Communication',
            buttonText: 'LOG IN',
        },
    };

    return (
        <div className={styles.auth}>
            <section className={styles.sideBlock}>
                <div className={styles.proposals}>
                    <div className={styles.authMethodProposalsTitle}>
                        {isLogin
                            ? authProposals.login.title
                            : authProposals.signup.title}
                    </div>
                    <div className={styles.authMethodProposalsSubTitle}>
                        {isLogin
                            ? authProposals.login.subTitle
                            : authProposals.signup.subtitle}
                    </div>
                    <button
                        className={styles.authMethodProposalsButton}
                        onClick={onChangeAuthMethod}
                    >
                        {isLogin
                            ? authProposals.login.buttonText
                            : authProposals.signup.buttonText}
                    </button>
                </div>
            </section>
            <section className={styles.authForm}>
                {isLogin ? <LoginForm /> : <SignUpForm />}
            </section>
        </div>
    );
};

export default Auth;
