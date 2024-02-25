import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';

interface LayoutProps {
    hideHeaderPaths?: string[];
}

const Layout: React.FC<LayoutProps> = ({ hideHeaderPaths = [] }) => {
    const { pathname }: { pathname: string } = useLocation();

    return (
        <>
            {!hideHeaderPaths.includes(pathname) && <Header />}
            <Outlet />
        </>
    );
};

export default Layout;
