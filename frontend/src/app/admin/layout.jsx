'use client'
// import "./globals.css";
import Footer1 from "./footer1";
import { Toaster } from "react-hot-toast";
// import { AppProvider } from "@/context/appContext";
// import Navbar1 from "./navbar1";
import Sidebar from "./sidebar";

// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// } 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <AppProvider> */}
          {/* <Navbar1  /> */}
          {/* <Toaster position="top-right" /> */}
          <Sidebar />
          {children}
          <Footer1 />
        {/* </AppProvider> */}
      </body>
    </html>
  )
}
