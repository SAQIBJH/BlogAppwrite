import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import { AuthLayout } from './components/index.js'
import Login from './components/pages/Login.jsx'
import SignUp from './components/pages/SignUp.jsx'
import EditPost from './components/pages/EditPost.jsx'
import Post from './components/pages/Post.jsx'
import Allpost from './components/pages/Allpost.jsx'
import Addpost from './components/pages/Addpost.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      }, 
      {
        path: '/login',
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>

        ),
      },
      {
        path: '/signup',
        element: (
          <AuthLayout authentication={false}>
            <SignUp />
          </AuthLayout>
        )
      },
      {
        path: '/all-posts',
        element: (
          
            <Allpost />
        )
      },
      {
        path: '/add-posts',
        element: (
          <AuthLayout authentication>
            {" "}
            <Addpost />
          </AuthLayout>

        )
      },
      {
        path: 'edit-post/:slug',
        element: (
          <AuthLayout>
            {" "}
            <EditPost />
          </AuthLayout>
        )
      },
      {
        path: '/post/:slug',
        element: (
          <AuthLayout>
            {" "}
            <Post />
          </AuthLayout>
        )
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
