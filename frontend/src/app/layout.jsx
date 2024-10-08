'use client'
import Navbar from "./navbar"
import "./globals.css";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// } 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Toaster position="top-right"/>
        {children}
        <Footer />
        </body>
    </html>
  )
}
