import config from '@/amplifyconfiguration.json'

const OAUTH_DOMAIN = config.oauth.domain
const OAUTH_RESPONSE_TYPE = config.oauth.responseType
const COGNITO_CLIENT_ID = config.aws_user_pools_web_client_id
const SCOPES = config.oauth.scope

function generateRandomString(length: number = 32) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  const cryptoObj = window.crypto
  const array = new Uint8Array(length)
  cryptoObj.getRandomValues(array)
  for (let i = 0; i < length; i++) {
    result += charset[array[i] % charset.length]
  }
  return result
}

function generateCodeVerifier(length = 128) {
  let array = new Uint8Array(length)
  window.crypto.getRandomValues(array)
  return Array.from(array, dec => ('0' + dec.toString(16)).slice(-2)).join('')
}

async function generateCodeChallenge(verifier: string) {

  const buffer = await window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(verifier))
  const hash = Array.from(new Uint8Array(buffer))
  return btoa(String.fromCharCode.apply(null, hash))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
}

export async function generateLinkAccountUrl(userId: string, provider: string) {
  const clientId = COGNITO_CLIENT_ID
  const responseType = OAUTH_RESPONSE_TYPE
  const domain = OAUTH_DOMAIN
  const origin =window.location.origin
  const redirectUri = `${origin}/link`
  const scope = SCOPES.join(' ')

  const state = generateRandomString()
  sessionStorage.setItem('oauth_state', state)

  const codeVerifier = generateCodeVerifier()
  const codeChallenge = await generateCodeChallenge(codeVerifier)
  sessionStorage.setItem('code_verifier', codeVerifier)

  const url = new URL(`https://${domain}/oauth2/authorize`)
  url.searchParams.append('identity_provider', provider)
  url.searchParams.append('redirect_uri', redirectUri)
  url.searchParams.append('response_type', responseType)
  url.searchParams.append('client_id', clientId)
  url.searchParams.append('scope', scope)

  url.searchParams.append('state', state)
  url.searchParams.append('code_challenge', codeChallenge)
  url.searchParams.append('code_challenge_method', 'S256')

  return url.toString()
}
