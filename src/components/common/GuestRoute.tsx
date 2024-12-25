import checkSession from '@/utils/check_session';
import { Navigate, Outlet } from 'react-router-dom';

export default function GuestRoute({ children }) {
    const isLoggedIn = checkSession();

    if (isLoggedIn) {
        return <Navigate to="/" replace />;
    }

    return children ? children : <Outlet />;
}