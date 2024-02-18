"use client"
import { useState, createContext } from 'react'
import Header from '@/components/Header/Page'
import Sidebar from '@/components/Sidebar/Receptionist'
import Footer from '@/components/Footer/Page'
import '@/app/reception/InputDate.css'


export const ReceptionContext = createContext()


export default function ReceptionLayout({ children }) {

  const [bookingData,setBookingData] = useState([])

  
  return (
    
    <ReceptionContext.Provider value={{bookingData,setBookingData}}>
      
        <Header />
        <Sidebar />
          {children}
        <Footer />
       
       
    </ReceptionContext.Provider>
       
  )
}
