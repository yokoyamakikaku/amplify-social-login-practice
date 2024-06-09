'use client'

import { Button, Heading, View, useAuthenticator, useTheme } from "@aws-amplify/ui-react"

export default function Navigation() {
  const theme = useTheme()
  const { signOut } = useAuthenticator()
  return (
    <View
      display="flex"
      paddingBlock={theme.tokens.space.small}
      paddingInline={theme.tokens.space.medium}>
      <View grow={1}>
        <Heading>検証</Heading>
      </View>
      <Button size="small" variation="primary" onClick={signOut}>
        ログアウト
      </Button>
    </View>
  )
}
