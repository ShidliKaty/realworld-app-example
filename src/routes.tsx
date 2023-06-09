import { createBrowserRouter } from 'react-router-dom'
import Layout from './Pages/Layout'
import HomePage from './Pages/HomePage'
import SignInPage from './Pages/SignInPage'
import SignUpPage from './Pages/SignUpPage'
import ErrorPage from './Pages/ErrorPage'
import NewArticlePage from './Pages/NewArticlePage'
import SettingsPage from './Pages/SettingsPage'
import ProfilePage from './Pages/ProfilePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'login', element: <SignInPage /> },
      { path: 'register', element: <SignUpPage /> },
      { path: 'editor', element: <NewArticlePage /> },
      { path: 'settings', element: <SettingsPage /> },
      { path: 'user', element: <ProfilePage /> },
    ],
  },
])
