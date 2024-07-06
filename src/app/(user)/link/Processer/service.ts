import { post } from 'aws-amplify/api'
import { fetchAuthSession, getCurrentUser } from 'aws-amplify/auth'

export async function linkUser ({
  code
}: {
  code: string
}) {
  const session = await fetchAuthSession()
  const token = session.tokens?.accessToken.toString() ?? null

  const operation = post({
    apiName: 'AmpSocLogPraLinkApi',
    path: '/exec',
    options: {
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        code,
        token
      },
    },
  })

  const response = await operation.response

  console.log(response)

  return response
}
