import './App.css';

import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import { useEffect, useMemo, useState } from 'react';
import Auth from './containers/Auth/Auth';
import Settings from './containers/Settings/Settings';
import { PrivateRoute } from './routes/PrivateRoute';
// import { updateUser } from './store/slices/useSlice';
import { useAppDispatch } from './store';

import axios from './axios';

function App() {
    const dispatch = useAppDispatch();
    const [userId, setUserId] = useState<any>(null);

    const id = useMemo(() => userId, [userId]);

    useEffect(() => {
        // axios
        //     .post('/auth/register', {
        //         email: 'fronteand@gmail.com',
        //         password: 'asdasddasd',
        //         nickname: 'olodlosha',
        //     })
        //     .then((res) => console.log(res));
    }, []);

    return (
        <div>
            <Header />
            <Routes>
                <Route path="/auth" element={<Auth />} />

                <Route path="/settings" element={<Settings />} />
            </Routes>
        </div>
    );
}

export default App;
