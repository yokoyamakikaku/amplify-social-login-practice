'use client'

import { useEffect } from "react"

import { Alert, Heading, useTheme, View } from "@aws-amplify/ui-react"
import { useMutation } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation"

import { linkUser } from "./service"

export default function Processer () {
  const theme = useTheme()
  const searchParams = useSearchParams()

  const code = searchParams.get('code')
  const state = searchParams.get('state')

  const mutation = useMutation({
    async onMutate (input: {
      code: string | null
      state: string | null
    }) {

      if (!input.code || !input.state) {
        throw new Error('Missing code or state')
      }

      const response = await linkUser({
        code: input.code
      })

      return response
    }
  })

  useEffect(() => {
    console.log({ code, state })
    mutation.mutate({ code, state })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code, state])

  return (
    <View
      padding={theme.tokens.space.xl}>
      <Heading>Processer</Heading>
      {mutation.isError && (
        <Alert variation="error">
          {mutation.error?.message}
        </Alert>
      )}
    </View>
  )
}
