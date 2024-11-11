import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Admin from './Admin.jsx'
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

//FAQ
import Faq from './admin/components/FAQ/faq.jsx'
import AddFaq from './admin/components/FAQ/AddFaq.jsx'
import EditFaq from './admin/components/FAQ/EditFaq.jsx'

//Contact
import Contact from './admin/components/Contacts/Contact.jsx'
import AddContact from './admin/components/Contacts/AddContact.jsx'
import EditContact from './admin/components/Contacts/EditContact.jsx'

//Hero Section
import HeroSec from './admin/components/HeroSec/HeroSec.jsx'
import AddHero from './admin/components/HeroSec/AddHero.jsx'
import EditHero from './admin/components/HeroSec/EditHero.jsx'

//Logo
import Logo from './admin/components/Logo/Logo.jsx'
import AddLogo from './admin/components/Logo/AddLogo.jsx'
import EditLogo from './admin/components/Logo/EditLogo.jsx'

//Comments
import Comments from './admin/components/Comments/Comments.jsx'
import AddComment from './admin/components/Comments/AddComment.jsx'
import EditComment from './admin/components/Comments/EditComment.jsx'

//Categories
import Category from './admin/components/Categories/Category.jsx'
import AddCategory from './admin/components/Categories/AddCategory.jsx'
import EditCategory from './admin/components/Categories/EditCategory.jsx'

//Subscribtions
import Subscribtion from './admin/components/Subscribtions/Subscribtion.jsx'
import AddSubscribtion from './admin/components/Subscribtions/AddSubscribtion.jsx'
import EditSubscribtion from './admin/components/Subscribtions/EditSubscribtion.jsx'

const router = createBrowserRouter([
  {
    path: "/", element: <App/>
  },
  {
    path: "/admin", element: <Admin/>,
    children:[
    {
      path: "/admin/users", element: <Users/>
    },
    {
      path: "/admin/users/:_id", element: <EditUser/>
    },
    {
      path: "/admin/users/addUser", element: <AddUser/>
    },
    {
      path: "/admin/movies", element: <Movies/>
    },
    {
      path: "/admin/movies/:id", element: <EditMovie/>
    },
    {
      path: "/admin/movies/addMovie", element: <AddMovie/>
    },
    {
      path: "/admin/faq", element: <Faq/>
    },
    {
      path: "/admin/faq/:id", element: <EditFaq/>
    },
    {
      path: "/admin/faq/addFaq", element: <AddFaq/>
    },
    {
      path: "/admin/contact", element: <Contact/>
    },
    {
      path: "/admin/contact/:id", element: <EditContact/>
    },
    {
      path: "/admin/contact/addContact", element: <AddContact/>
    },
    {
      path: "/admin/hero", element: <HeroSec/>
    },
    {
      path: "/admin/hero/:id", element: <EditHero/>
    },
    {
      path: "/admin/hero/addHero", element: <AddHero/>
    },
    {
      path: "/admin/logo", element: <Logo/>
    },
    {
      path: "/admin/logo/:id", element: <EditLogo/>
    },
    {
      path: "/admin/logo/addLogo", element: <AddLogo/>
    },
    {
      path: "/admin/comments", element: <Comments/>
    },
    {
      path: "/admin/comments/:id", element: <EditComment/>
    },
    {
      path: "/admin/comments/addComment", element: <AddComment/>
    },
    {
      path: "/admin/category", element: <Category/>
    },
    {
      path: "/admin/category/:id", element: <EditCategory/>
    },
    {
      path: "/admin/category/addCategory", element: <AddCategory/>
    },
    {
      path: "/admin/subscribtion", element: <Subscribtion/>
    },
    {
      path: "/admin/subscribtion/:id", element: <EditSubscribtion/>
    },
    {
      path: "/admin/subscribtion/addSubscribtion", element: <AddSubscribtion/>
    },
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
