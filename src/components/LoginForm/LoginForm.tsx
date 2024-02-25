import styles from './loginForm.module.scss';

import { useFormik } from 'formik';

import { TOKEN_KEY } from 'constants/localStorage';
import { useAppDispatch } from 'store/index';
import { fetchAuth } from 'store/slices/authSlice';
import * as yup from 'yup';
import Input from '../UI/Input/Input';

interface IValues {
    email: string;
    password: string;
}

const loginValidationSchema = yup.object({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Password is required'),
});

const LoginForm: React.FC = () => {
    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginValidationSchema,
        onSubmit: (values: IValues) => {
            dispatch(fetchAuth(values)).then((res) =>
                window.localStorage.setItem(TOKEN_KEY, res.payload?.token),
            );
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
            <div className={styles.loginTitle}>Log in to Your Account</div>
            <div className={styles.loginSubTitle}>
                Your Voice, Your Space: Sign in and Immerse Yourself in the
                Power of Sonic Communication
            </div>
            <Input
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                placeholder="Enter your email address"
                error={formik.touched.email && Boolean(formik.errors.email)}
                errorText={formik.touched.email && formik.errors.email}
            />
            <Input
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                placeholder="Enter your password"
                hiddenValue
                error={
                    formik.touched.password && Boolean(formik.errors.password)
                }
                errorText={formik.touched.password && formik.errors.password}
            />
            <div className={styles.loginFooter}>
                <div className={styles.remember}>
                    <input type="checkbox" />
                    <div>Remember Me</div>
                </div>
                <div className={styles.forgotText}>Forgot password</div>
            </div>
            <button type="submit" className={styles.loginButton}>
                LOG IN
            </button>
        </form>
    );
};

export default LoginForm;
