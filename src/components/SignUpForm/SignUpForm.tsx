import styles from './SignUpForm.module.scss';

import { useFormik } from 'formik';

import * as yup from 'yup';
import Input from '../UI/Input/Input';
import { useAppDispatch } from 'store/index';

interface IValues {
    nickname: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const signUpValidationSchema = yup.object({
    nickname: yup.string().min(3, 'Too short').required('Nickname is required'),
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Too Short!')
        .required('Password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('You need to confirm password'),
});

const SignUpForm: React.FC = () => {
    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues: {
            nickname: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: signUpValidationSchema,
        onSubmit: (values: IValues) => {
            // dispatch(fetchAuth(values)).then((res) =>
            //     window.localStorage.setItem(TOKEN_KEY, res.payload?.token),
            // );
            console.log('val', values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className={styles.singupForm}>
            <div className={styles.signupTitle}>Sign Up for an Account</div>
            <div className={styles.signupSubTitle}>
                Celebrate Connection: Elevate Your Social Experience with
                Seamless Sign Up and Vibrant Voice Messaging
            </div>
            <Input
                name="nickname"
                onChange={formik.handleChange}
                value={formik.values.nickname}
                placeholder="Enter your nickname"
                onBlur={formik.handleBlur}
                error={
                    formik.touched.nickname && Boolean(formik.errors.nickname)
                }
                errorText={formik.touched.nickname && formik.errors.nickname}
            />
            <Input
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Enter your email"
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                errorText={formik.touched.email && formik.errors.email}
            />
            <Input
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Enter a strong password"
                hiddenValue
                onBlur={formik.handleBlur}
                error={
                    formik.touched.password && Boolean(formik.errors.password)
                }
                errorText={formik.touched.password && formik.errors.password}
            />
            <Input
                name="confirmPassword"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                placeholder="Confirm password"
                hiddenValue
                onBlur={formik.handleBlur}
                error={
                    formik.touched.confirmPassword &&
                    Boolean(formik.errors.confirmPassword)
                }
                errorText={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                }
            />
            <button type="submit" className={styles.signupButton}>
                SIGN UP
            </button>
        </form>
    );
};

export default SignUpForm;
