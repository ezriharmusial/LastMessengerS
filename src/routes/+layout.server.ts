import type { LayoutServerLoad } from './$types'
import { getSession } from './session/+server'
import { fetchAlbumsMD } from '$lib/md-collections/fetchAlbums'
import { fetchArtistsMD } from '$lib/md-collections/fetchArtists'
import { fetchMediaMD } from '$lib/md-collections/fetchMedia'

export const load: LayoutServerLoad = async ({ locals }) => {
	// session consists of just the user object, but could contain other preferences
	const { user } = locals
	const session = getSession(user)

	return {
		session,
		albums: fetchAlbumsMD,
		media: {media: fetchMediaMD},
		artists: fetchArtistsMD,
	}
}
