import './globals.css'
import { Courier_Prime,  Poppins, Rubik } from 'next/font/google'


const poppins = Poppins({
  subsets: ['latin'],
  variable:'--font-poppins',
  weight:['100','200','300','400','500','600','700','800','900']
})

const rubik = Rubik({
  subsets: ['latin'],
  variable:'--font-rubik',
})

const courier = Courier_Prime({
  subsets: ['latin'],
  variable:'--font-courier',
  weight: ["400","700"]
})



export const metadata = {
  title: 'ludfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${courier.variable}  ${rubik.variable} font-rubik scrollbar-hide`}>{children}</body>
    </html>
  )
}
