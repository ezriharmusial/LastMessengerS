import admin from 'firebase-admin'
import { getAuth } from 'firebase-admin/auth'

const useEmulator = true

if (useEmulator) {
  process.env['FIREBASE_AUTH_EMULATOR_HOST'] = '127.0.0.1:9099'
}

function initializeFirebase() {
	if (!admin.apps.length) {
		return admin.initializeApp({ projectId: 'last-messengers' });
	} else {
    return admin.apps[0]
  }
}


// this is the server-side firebase client
export const app = initializeFirebase()
export const auth = getAuth(app)