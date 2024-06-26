import '@aws-amplify/ui-react/styles.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/services/amplify/setup'
import './global.css'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cognito ソーシャルログイン",
  description: "Cognito のソーシャルログインの検証",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
