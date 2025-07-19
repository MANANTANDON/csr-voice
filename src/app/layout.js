import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: 'CSR Voice - Corporate Social Responsibility News',
  description: 'Latest news and insights on Corporate Social Responsibility in India',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}