
import { dev } from '$app/environment'
import type { RequestHandler } from './$types'
import { adminAuth } from '$lib/admin-app'
import { json } from '@sveltejs/kit'
import type { DecodedIdToken } from 'firebase-admin/auth'
import type { Session } from '$lib/types'

const WEEK_IN_SECONDS = 60 * 60 * 24 * 7
const WEEK_IN_MILLISECONDS = WEEK_IN_SECONDS * 1000

// POST receives the client-side auth token, validates it and sets a cookie for future server-requests
export const POST: RequestHandler = async ({ request, cookies }) => {
  const token = await request.text()

  console.log(await adminAuth.listUsers())
  const user = await adminAuth.verifyIdToken(token)
  const sessionCookie = await adminAuth.createSessionCookie(token, { expiresIn: WEEK_IN_MILLISECONDS })
  const options = { maxAge: WEEK_IN_SECONDS, httpOnly: true, secure: !dev }
  cookies.set('session', sessionCookie, options)

  return json(getSession(user))
}

// DELETE clears the session cookie
export const DELETE: RequestHandler = async ({ cookies }) => {
  cookies.delete('session')

  return json(getSession(null))
}

export function getSession(user: DecodedIdToken | null): Session {
  if (user) {
    // const { name, email, email_verified, uid, picture } = user
    // console.log('user',user)
    return { user: user }
  }
  return { user }
}