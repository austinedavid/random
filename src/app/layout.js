import Nav from '@/components/Nav'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The rats',
  description: 'we are running the rat campaigns',
  openGraph: {
    title: 'checking og',
    description: 'running my og for search engine optimization.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        {children}
        </body>
    </html>
  )
}
