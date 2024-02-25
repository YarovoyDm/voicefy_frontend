import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
    const user = window.localStorage.getItem('token');

    if (!user) {
        return <Navigate to="/auth" />;
    }

    return <Outlet />;
};
