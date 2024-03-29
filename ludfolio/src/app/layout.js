import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({
  subsets: ['latin'],
  variable:'--font-inter',
})

export const metadata = {
  title: 'ludfolio',
  description: 'Ludvig Dambergs portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter scrollbar-hide`}>{children}</body>
    </html>
  )
}
