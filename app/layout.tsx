import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cription - AI Speech Recognition App',
  description: 'Transform voice to text with AI-powered transcription. Real-time streaming, 99 language support, local processing. Professional accuracy.',
  keywords: 'speech recognition, transcription, AI, voice to text, real-time, multilingual, privacy, local processing, Whisper, accessibility, meeting notes, interview, podcast, content creation, professional, accuracy, offline, secure',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
