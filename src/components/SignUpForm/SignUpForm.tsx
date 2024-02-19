import styles from './SignUpForm.module.scss';
import Input from '../../components/UI/Input/Input';
import { useState } from 'react';
import { useAppDispatch } from '../../store';
// import { updateUser } from '../../store/slices/useSlice';

interface ISignUp {
    changeAuthMethod: () => void;
}

const SignUpForm: React.FC<ISignUp> = ({ changeAuthMethod }) => {
    const dispatch = useAppDispatch();
    const [loginData, setLoginData] = useState({
        nickname: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const onSignUpFormChange = (event: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = event.target as HTMLInputElement;

        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <div>Welcome back!</div>
            <Input
                name="nickname"
                onChange={onSignUpFormChange}
                value={loginData.nickname}
                placeholder="@nickname"
            />
            <Input
                name="email"
                onChange={onSignUpFormChange}
                value={loginData.email}
                placeholder="E-mail"
            />
            <Input
                name="password"
                onChange={onSignUpFormChange}
                value={loginData.password}
                placeholder="Password"
                hiddenValue
            />
            <Input
                name="confirmPassword"
                onChange={onSignUpFormChange}
                value={loginData.confirmPassword}
                placeholder="Confirm password"
                hiddenValue
            />
            <div className={styles.loginWrapper}>
                <div>Already have an account?</div>
                <div className={styles.loginLink} onClick={changeAuthMethod}>
                    Login
                </div>
            </div>
            <button>Sign up</button>
        </form>
    );
};

export default SignUpForm;
