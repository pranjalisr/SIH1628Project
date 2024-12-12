"use client"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '../../component/NavBar'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <NavBar user="Registerd Users
     " />
      <body className={`${inter.className} bg-gray-100`}>{children}</body>
    </html>
  )
}

