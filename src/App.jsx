
import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components';
import {Outlet} from 'react-router-dom'
import Spinner from './components/Spinner';
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  // when our app loads check user status
  useEffect(() => {
    authService.getCurrentUser()
      .then(userData => {
        if (userData) dispatch(login({ userData }))
        else {
      dispatch(logout());
    }
      }).finally(() => setLoading(false));
  },[])

  return !loading ? (
    <div className='flex border justify-center items-center w-screen'>
      <div className='flex flex-col'>

      <Header />
      <main>
      <Outlet/>
      </main>
      <Footer/>
      </div>
  </div>
  
  ) : (<div className='w-full max-h-screen bg-black-400'>
    
      <div className='flex items-center justify-center h-screen max-w-full'>
        < Spinner />
      </div>
      
  </div>)
}

export default App



