import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Routers from '../routes/Routers'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Layout = () => {
  return (
    <>
    <Header/>
    <ToastContainer theme='dark' position='top-center' autoClose={3000} closeOnClick pauseOnHover={false}/>
    <main>
      <Routers/>
    </main>
      <Footer/>
    </>
  )
}

export default Layout
