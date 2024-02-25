import './App.css';

import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store';
import Layout from './components/Layout/Layout';
import { fetchAuthMe, selectIsAuth } from './store/slices/authSlice';
import { PrivateRoute } from './routes/PrivateRoute';
import Settings from './containers/Settings/Settings';
import Auth from './containers/Auth/Auth';
import HomePage from 'containers/HomePage/HomePage';

const App = () => {
    const dispatch = useAppDispatch();
    const isAuth = useAppSelector(selectIsAuth);

    useEffect(() => {
        dispatch(fetchAuthMe());
    }, []);

    return (
        <Routes>
            <Route element={<Layout hideHeaderPaths={['/auth']} />}>
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/settings" element={<Settings />} />
                </Route>

                <Route
                    path="/auth"
                    element={!isAuth ? <Auth /> : <Navigate to="/" />}
                />
            </Route>
        </Routes>
    );
};

export default App;
