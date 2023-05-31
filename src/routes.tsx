import { createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'login', element: <SignInPage /> },
            { path: 'register', element: <SignUpPage /> }
        ]
    }
])