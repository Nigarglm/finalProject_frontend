import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//User
import Users from './admin/components/Users/Users.jsx'
import AddUser from './admin/components/Users/AddUser.jsx'
import EditUser from './admin/components/Users/EditUser.jsx'

//Movie
import Movies from './admin/components/Movies/Movies.jsx'
import AddMovie from './admin/components/Movies/AddMovie.jsx'
import EditMovie from './admin/components/Movies/EditMovie.jsx'


const router = createBrowserRouter([
  {
    path: "/", element: <App/>,
    children:[
    {
      path: "/admin/users", element: <Users/>
    },
    {
      path: "/admin/users/:_id", element: <EditUser/>,
    },
    {
      path: "/admin/users/addUser", element: <AddUser/>,
    },
    {
      path: "/admin/movies", element: <Movies/>,
    },
    {
      path: "/admin/movies/:id", element: <EditMovie/>,
    },
    {
      path: "/admin/movies/addMovie", element: <AddMovie/>,
    },
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
