"use client"
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div id="main-wrapper">
        
        {children}
        
       
      </div>
        <script src="/assets/vendor/global/global.min.js" defer></script>
        <script src="/assets/vendor/jquery-nice-select/js/jquery.nice-select.min.js" defer></script>
        <script src="/assets/vendor/chart.js/Chart.bundle.min.js" defer></script>
        <script src="/assets/vendor/peity/jquery.peity.min.js" defer></script>
        <script src="/assets/vendor/apexchart/apexchart.js" defer></script>
        <script src="/assets/vendor/bootstrap-datetimepicker/js/moment.js" defer></script>
        <script src="/assets/vendor/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js" defer></script>
        <script src="/assets/js/dashboard/dashboard-1.js" defer></script>
        <script src="/assets/js/custom.min.js" defer></script>
        <script src="/assets/js/deznav-init.js" defer></script>
        <script src="/assets/vendor/jquery-nice-select/js/jquery.nice-select.min.js" defer></script>
        <script src="/assets/js/demo.js" defer></script>
        {/* <script src="/assets/js/styleSwitcher.js" defer></script> */}
        </body>
    </html>
  )
}
