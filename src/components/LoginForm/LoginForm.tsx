import styles from './loginForm.module.scss';
import Input from '../../components/UI/Input/Input';
import { useState } from 'react';
import { useAppDispatch } from '../../store';
import { fetchAuth } from '../../store/slices/authSlice';

interface ILogin {
    changeAuthMethod: () => void;
}

const LoginForm: React.FC<ILogin> = ({ changeAuthMethod }) => {
    const dispatch = useAppDispatch();
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });
    const onLoginFormChange = (event: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = event.target as HTMLInputElement;

        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const onSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();
        dispatch(
            fetchAuth({ email: loginData.email, password: loginData.password }),
        ).then((res) =>
            window.localStorage.setItem('token', res.payload.token),
        );
    };

    return (
        <form onSubmit={onSubmit} className={styles.loginForm}>
            <div className={styles.loginTitle}>Log in to Your Account</div>
            <div className={styles.loginSubTitle}>
                Log in to your account, so you can continue keep spreading your
                thoughts
            </div>
            <Input
                name="email"
                onChange={onLoginFormChange}
                value={loginData.email}
                placeholder="Enter your email address"
            />
            <Input
                name="password"
                onChange={onLoginFormChange}
                value={loginData.password}
                placeholder="Enter your password"
                hiddenValue
            />
            <div className={styles.loginFooter}>
                <div>
                    <input type="checkbox" />
                    <div>Remember Me</div>
                </div>
                <div>Forgot password</div>
            </div>
            {/* <div>
                <div onClick={changeAuthMethod}>change</div>
                <div></div>
            </div> */}
            <button className={styles.loginButton}>LOG IN</button>
        </form>
    );
};

export default LoginForm;
