"use client"
import { useState, createContext } from 'react'
import Header from '@/app/components/Header/Page'
import Sidebar from '@/app/components/Sidebar/Admin'
import Footer from '@/app/components/Footer/Page'

export const AdminContext = createContext()


export default function AdminLayout({ children }) {

  return (
    
      
      // <AdminContext.Provider>

        <>
        <Header />
        <Sidebar />
          {children}
        <Footer />
        </>

      // </AdminContext.Provider>
       
      
       
  )
}
