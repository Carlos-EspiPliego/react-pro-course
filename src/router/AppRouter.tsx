import { Navigate, Route, Routes } from "react-router-dom";
import { ShoppingPage } from "../02-components-patterns/pages/ShoppingPage";

type JSXComponent = () => JSX.Element;

interface AppRoute {
    to: string;
    path: string;
    Component: JSXComponent;
    name: string;
}

export const routes: AppRoute[] = [
    {
        to: '/',
        path: '',
        Component: ShoppingPage,
        name: 'Shopping'
    },
    {
        to: '/about',
        path: 'about',
        Component: () => <>About</>,
        name: 'About'
    },
    {
        to: '/users',
        path: 'users',
        Component: () => <>Users</>,
        name: 'Users'
    }
];

export const AppRouter = () => {
    return (
        <Routes>
            {
                routes.map((route) => (
                    <Route key={route.path} path={route.path} element={<route.Component />} />
                ))
            }
            <Route path="/*" element={<Navigate to={routes[0].to} />} />
        </Routes>
    );
};
