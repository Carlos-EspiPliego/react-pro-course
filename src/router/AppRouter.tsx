import { Navigate, Route, Routes } from "react-router-dom"
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages"
import { lazy, LazyExoticComponent } from "react"

type JSXComponent = () => JSX.Element;

interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string
}


const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1'))
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'))
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'))

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: Lazy1,
        name: 'Lazy-1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'Lazy-2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazy3,
        name: 'Lazy-3'
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
