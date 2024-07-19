import { Navigate, Route, Routes } from "react-router-dom"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/*" element={<Navigate to={'home'}/>} />
            <Route path="/" element={<>Home</>} />
            <Route path="about" element={<>About</>} />
            <Route path="users" element={<>Users</>} />
            {/* <Route path="/about" element={<About />} /> */}
        </Routes>
    )
}
