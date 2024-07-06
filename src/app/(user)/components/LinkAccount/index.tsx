'use client'

import { Button, Flex, Heading, useAuthenticator, useTheme, View } from "@aws-amplify/ui-react"

import { generateLinkAccountUrl } from "./utilities"

export default function LinkAccount () {
  const theme = useTheme()
  const { user } = useAuthenticator()

  const linkGoogleAccount = async () => {
    const url = await generateLinkAccountUrl(user.userId, 'Google')
    window.location.href = url
  }

  return (
    <View
      maxWidth={theme.breakpoints.values.xl}
      paddingInline={theme.tokens.space.xl}>
      <Heading
        level={3}
        marginBlockEnd={theme.tokens.space.large}>
        Link Account
      </Heading>
      <View>
        <Heading level={4}>Google</Heading>
        <Flex justifyContent="flex-end">
          <Button variation="primary" onClick={linkGoogleAccount}>
            Link
          </Button>
        </Flex>
      </View>
    </View>
  )
}
