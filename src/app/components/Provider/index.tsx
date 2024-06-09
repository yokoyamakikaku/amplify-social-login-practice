'use client'

import '@/services/amplify/setup'
import {
  Authenticator,
  Heading,
  useTheme
} from "@aws-amplify/ui-react"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new QueryClient({})

export default function RootProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = useTheme()
  return (
    <QueryClientProvider client={client}>
      <Authenticator
        components={{
          Header: () => (
            <Heading
              level={4}
              textAlign="center"
              paddingBlock={theme.tokens.space.xl}>
              ソーシャルログインの検証
            </Heading>
          )
        }}>
        {children}
      </Authenticator>
    </QueryClientProvider>
  )
}
