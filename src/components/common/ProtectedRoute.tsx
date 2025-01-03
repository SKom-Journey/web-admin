import checkSession from '@/utils/check_session';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
    const isLoggedIn = checkSession();

    if (!isLoggedIn) {
        return <Navigate to="/auth/login" replace />;
    }

    return children ? children : <Outlet />;
}