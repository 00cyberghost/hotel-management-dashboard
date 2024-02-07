"use client"

import Header from '@/app/components/Header/Page'
import Sidebar from '@/app/components/Sidebar/HouseKeeping'
import Footer from '@/app/components/Footer/Page'


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
