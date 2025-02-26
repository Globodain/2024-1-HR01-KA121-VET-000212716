import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SoftCamp',
  description: 'Software de gestión para campings',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
