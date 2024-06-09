import '@aws-amplify/ui-react/styles.css'
import { Metadata } from 'next'

import '@/services/amplify/setup'

import Provider from '@/app/components/Provider'

import Navigation from '../components/Navigation'

export const metadata: Metadata = {
  title: "Cognito ソーシャルログイン",
  description: "Cognito のソーシャルログインの検証",
}

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider>
      <Navigation />
      {children}
    </Provider>
  )
}
