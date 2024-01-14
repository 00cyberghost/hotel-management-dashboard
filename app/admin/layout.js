"use client"

import Header from '../components/Header/Page'
import Sidebar from '../components/Sidebar/Admin'
import Footer from '../components/Footer/Page'


export default function AdminLayout({ children }) {
  return (
    
      <>
        <Header />
        <Sidebar />
          {children}
        <Footer />
       
      </>
       
  )
}
