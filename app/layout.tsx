import { Toaster } from 'react-hot-toast'

import type { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'

import Aside from '@/components/Layout/Aside'
import Header from '@/components/Layout/Header'
import Providers from '@/components/Provider'

import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={twMerge('h-screen font-sans antialiased', inter.variable)}>
        <Providers>
          <Aside />
          <main className="flex min-h-screen flex-col pl-[255px]">
            <Header />
            <section className="mt-16 flex flex-1 p-4">{children}</section>
          </main>
        </Providers>
        <Toaster />
      </body>
    </html>
  )
}
