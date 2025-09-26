import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Scribe - AI音声認識アプリ',
  description: 'AIを活用した文字起こしで、音声をテキストに変換。リアルタイムストリーミング、99言語対応、ローカル処理。プロフェッショナルな精度。',
  keywords: '音声認識, 転写, AI, 音声テキスト変換, リアルタイム, 多言語, プライバシー, ローカル処理, Whisper, アクセシビリティ, 会議メモ, インタビュー, ポッドキャスト, コンテンツ作成, プロフェッショナル, 精度, オフライン, セキュア',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
