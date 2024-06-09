'use client'

import '@/services/amplify/setup'
import {
  Authenticator,
  Heading,
  View,
  useTheme,
  Flex,
  Link
} from "@aws-amplify/ui-react"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import NextLink from 'next/link'

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
        socialProviders={[
          'google',
          'facebook'
        ]}
        components={{
          Header: () => (
            <Heading
              level={4}
              textAlign="center"
              paddingBlock={theme.tokens.space.xl}>
              ソーシャルログインの検証
            </Heading>
          ),
          Footer: () => (
            <View
              paddingBlock={theme.tokens.space.medium}>
              <Flex gap={theme.tokens.space.small}>
                <NextLink href="/terms">
                  <Link as="span">利用規約</Link>
                </NextLink>
                <NextLink href="/privacy">
                  <Link as="span">プライバシーポリシー</Link>
                </NextLink>
              </Flex>
            </View>
          )
        }}>
        {children}
      </Authenticator>
    </QueryClientProvider>
  )
}
