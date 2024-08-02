import { Navigate, Route, Routes } from "react-router-dom"
import { RegisterPage, FormikBasicPage, FormikYupPage, FormikComponents, FormikAbstractation } from "../forms/pages";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string,
    path: string,
    Component: JSXComponent,
    name: string
}

export const routes: Route[] = [
    {
        to: '/basic-form',
        path: 'basic-form',
        Component: () => <RegisterPage/>,
        name: 'Basic Form'
    },
    {
        to: '/formik-basic',
        path: 'formik-basic',
        Component: () => <FormikBasicPage />,
        name: 'Formik Form'
    },
    {
        to: '/formik-yup',
        path: 'formik-yup',
        Component: () => <FormikYupPage />,
        name: 'Formik Yup Form'
    },
    {
        to: '/formik-components',
        path: 'formik-components',
        Component: () => <FormikComponents />,
        name: 'Formik Components Form'
    },
    {
        to: '/formik-abstractation',
        path: 'formik-abstractation',
        Component: () => <FormikAbstractation />,
        name: 'Formik Abstractation Form'
    },
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
