import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Admin from './admin/src/Admin.jsx'
import App from './admin/src/App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from "react-dom/client";
import "./i18n";
import("videojs-youtube/dist/Youtube.min.js");
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "./assets/scss/streamit.scss";
import "./assets/scss/custom.scss";
import "./assets/scss/rtl.scss";
import "animate.css/animate.css";
import "./assets/custom/css/custom.scss"

import "choices.js/public/assets/styles/choices.min.css";

// store
import { store } from "./store/index";
import { Provider } from "react-redux";

// index router
import { IndexRouters } from "./router/index";

//User
import Users from './admin/src/admin/components/Users/Users.jsx'
import AddUser from './admin/src/admin/components/Users/AddUser.jsx'
import EditUser from './admin/src/admin/components/Users/EditUser.jsx'

//Movie
import Movies from './admin/src/admin/components/Movies/Movies.jsx'
import AddMovie from './admin/src/admin/components/Movies/AddMovie.jsx'
import EditMovie from './admin/src/admin/components/Movies/EditMovie.jsx'

//FAQ
import Faq from './admin/src/admin/components/FAQ/faq.jsx'
import AddFaq from './admin/src/admin/components/FAQ/AddFaq.jsx'
import EditFaq from './admin/src/admin/components/FAQ/EditFaq.jsx'

//Contact
import Contact from './admin/src/admin/components/Contacts/Contact.jsx'
import AddContact from './admin/src/admin/components/Contacts/AddContact.jsx'
import EditContact from './admin/src/admin/components/Contacts/EditContact.jsx'

//Hero Section
import HeroSec from './admin/src/admin/components/HeroSec/HeroSec.jsx'
import AddHero from './admin/src/admin/components/HeroSec/AddHero.jsx'
import EditHero from './admin/src/admin/components/HeroSec/EditHero.jsx'

//Logo
import Logo from './admin/src/admin/components/Logo/Logo.jsx'
import AddLogo from './admin/src/admin/components/Logo/AddLogo.jsx'
import EditLogo from './admin/src/admin/components/Logo/EditLogo.jsx'

//Comments
import Comments from './admin/src/admin/components/Comments/Comments.jsx'
import AddComment from './admin/src/admin/components/Comments/AddComment.jsx'
import EditComment from './admin/src/admin/components/Comments/EditComment.jsx'

//Categories
import Category from './admin/src/admin/components/Categories/Category.jsx'
import AddCategory from './admin/src/admin/components/Categories/AddCategory.jsx'
import EditCategory from './admin/src/admin/components/Categories/EditCategory.jsx'

//Subscribtions
import Subscribtion from './admin/src/admin/components/Subscribtions/Subscribtion.jsx'
import AddSubscribtion from './admin/src/admin/components/Subscribtions/AddSubscribtion.jsx'
import EditSubscribtion from './admin/src/admin/components/Subscribtions/EditSubscribtion.jsx'


const router = createBrowserRouter([...IndexRouters], {
  basename: import.meta.env.VITE_URL,
},
[{
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
},]
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App>
        <RouterProvider router={router}></RouterProvider>
      </App>
    </Provider>
  </React.StrictMode>
);