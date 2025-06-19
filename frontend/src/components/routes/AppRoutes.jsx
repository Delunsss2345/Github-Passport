import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '@configs/routeConfig'
import MainLayout from '@/layouts/MainLayout';
import { useAuthContext } from '@providers/AuthProvider';
const AppRoutes = () => {
    const { authUser } = useAuthContext();
    return (
        <MainLayout>
            <Routes>
                {routeConfig.map(({ path, element: Component, guard: Guard }) => (
                    <Route key={path} path={path} element={
                        <Guard>
                            <Component />
                        </Guard>
                    }>
                    </Route>
                ))}
            </Routes>
        </MainLayout>
    )
}

export default AppRoutes; 