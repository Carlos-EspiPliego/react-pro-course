import { Navigate, Route, Routes } from "react-router-dom"

type JSXComponent = () => JSX.Element;

interface Route {
    to: string,
    path: string,
    Component: JSXComponent,
    name: string
}

export const routes: Route[] = [
    {
        to: '/',
        path: '',
        Component: () => <>Home</>,
        name: 'Home'
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
]


export const AppRouter = () => {
    return (
        <Routes>
            {
                routes.map((route) => (
                    <Route key={route.path} path={route.path} element={<route.Component />} />
                ))
            }
            <Route path="/*" element={<Navigate to={routes[0].to}/>} />
        </Routes>
    )
}
