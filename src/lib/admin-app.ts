import pkg from 'firebase-admin'
import { getAuth } from 'firebase-admin/auth'
import { derived, writable, type Writable } from 'svelte/store'
const { initializeApp} = pkg

// import { app } from '$lib/app'

const useEmulator = true

if (useEmulator) {
  process.env['FIREBASE_AUTH_EMULATOR_HOST'] = '127.0.0.1:9099'
}

// this is the server-side firebase client
export const adminApp: Writable<any> = writable(undefined, () => {
  return initializeApp({ projectId: 'last-messengers' }, 'LMS Admin')
})
export const adminAuth = derived(adminApp, ($adminApp) => {
  return getAuth($adminApp)
})