import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VO Leerstrategieën - Slimmer Leren per Vak',
  description: 'Ontdek effectieve leerstrategieën, tips en tools voor elk vak in het voortgezet onderwijs. Van wiskunde tot geschiedenis - leer slimmer, niet harder!',
  keywords: ['leerstrategieën', 'voortgezet onderwijs', 'studeren', 'tips', 'middelbare school'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 min-h-screen" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}