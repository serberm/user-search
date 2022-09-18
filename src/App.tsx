import React from 'react'
import {SearchPage, HistoryPage, ErrorPage} from './pages'
import {Navigate, useRoutes} from 'react-router-dom'
import MainLayout from './layout'

const App: React.FC = (): JSX.Element => {
  const mainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
      {path: '*', element: <Navigate to="/404" />},
      {path: '/', element: <SearchPage />},
      {path: '404', element: <ErrorPage />},
      {path: 'history', element: <HistoryPage />}
    ]
  }
  const routing = useRoutes([mainRoutes])

  return <>{routing}</>
}

export default App
