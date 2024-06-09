'use client'

import { Alert, Heading, Table, View, TableBody, TableRow, TableCell, useTheme } from "@aws-amplify/ui-react"
import { useQuery } from "@tanstack/react-query"
import { getCurrentUser, fetchAuthSession, decodeJWT, fetchUserAttributes } from "aws-amplify/auth"

export default function ViewUser() {
  const theme = useTheme()

  const query = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const user = await getCurrentUser()
      const attribtues = await fetchUserAttributes()

      return {
        userId: user.userId,
        username: user.username,
        email: attribtues.email,
      }
    }
  })

  return (
    <View padding={theme.tokens.space.xl}>
      <Heading
        level={3}
        marginBlockEnd={theme.tokens.space.medium}>
        User
      </Heading>
      {query.isLoading && <Alert variation="info">Loading</Alert>}
      {query.isError && <Alert variation="error">Error</Alert>}
      {query.isSuccess && (
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                username
              </TableCell>
              <TableCell>
                {query.data.username}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                email
              </TableCell>
              <TableCell>
                {query.data.email}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )}
    </View>
  )
}
