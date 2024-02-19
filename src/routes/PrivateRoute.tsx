import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../store';
// import { selectUserInfo } from '../store/slices/useSlice';

interface Route {
    redirectPath: string;
    children: any;
}

export const PrivateRoute = ({ redirectPath = '/auth', children }: Route) => {
    // const user = useAppSelector(selectUserInfo);
    // console.log('user', user);
    // if (!user.nickname) {
    //     return <Navigate to={redirectPath} replace />;
    // }

    return children;
};
