import PrivateRoute from '@components/routes/PrivateRoute';
import PublicRoute from '@components/routes/PublicRoute';
import HomePage from '@pages/HomePage';
import LoginPage from '@pages/LoginPage';
import SignUpPage from '@pages/SignUpPage';
import ExplorePage from '@pages/ExplorePage';
import LikePage from '@pages/LikePage';

export const routeConfig = [
    {
        path: '/login',
        element: LoginPage,
        guard: PublicRoute,
    },
    {
        path: '/signup',
        element: SignUpPage,
        guard: PublicRoute,
    },
    {
        path: '/',
        element: HomePage,
        guard: PrivateRoute,
    },
    {
        path: '/explore',
        element: ExplorePage,
        guard: PrivateRoute,
    },
    {
        path: 'likes',
        element: LikePage,
        guard: PrivateRoute
    }
];
