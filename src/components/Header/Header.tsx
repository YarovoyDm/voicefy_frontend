
import styles from './Header.module.scss';
import { useAppDispatch } from '../../store';
import { logout } from 'store/slices/authSlice';
import { LOGO } from 'constants/icons';
import Icon from 'components/UI/Icon/Icon';
import { Link } from 'react-router-dom';

const Header = () => {
    // const auth = getAuth();
    const dispatch = useAppDispatch();

    const onLogoutHandle = () => {
        dispatch(logout());
        window.localStorage.removeItem('token');
    };

    return (
        <header className={styles.header}>
            <Link to='/'><Icon name={LOGO} width='120px' height='65px'/></Link>
            
            <div><button onClick={onLogoutHandle} className={styles.logoutButton}>Logout</button></div>
            
        </header>
    );
};

export default Header;
