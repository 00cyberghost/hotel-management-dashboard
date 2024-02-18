"use client"
import { useState, createContext } from 'react'
import Header from '@/components/Header/Page'
import Sidebar from '@/components/Sidebar/Admin'
import Footer from '@/components/Footer/Page'
import { useAuth } from "@/hooks/auth"


export const AdminContext = createContext()


export default function AdminLayout({ children }) {

  const { user,logout } = useAuth({ middleware: 'auth'})

  return (
    
      
      // <AdminContext.Provider>

        <>
        <Header user={user} logout={logout} />
        <Sidebar logout={logout} />
          {children}
        <Footer />
        </>

      // </AdminContext.Provider>
       
      
       
  )
}
