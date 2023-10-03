import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Talk',
  description: 'An online platform that enables you to virtually connect with friends, teammates, and communities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={open_sans.className}>{children}</body>
    </html>
  )
}
