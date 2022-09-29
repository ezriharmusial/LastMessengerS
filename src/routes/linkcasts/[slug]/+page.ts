
import { error } from '@sveltejs/kit';

const apiRoot = 'https://lastmessengers.artkidsfoundation.org'

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    try {
        if (params.slug) {

            const response = await fetch( apiRoot + `/wp-json/wp/v2/portfolios?slug=${params.slug}`, {
                method: 'GET',
                headers: {}
            });

            if (response.ok) {
                const result = await response.json();

                // console.log(result);
                return { data: result[0]};
            }
        }

    } catch (err) {
        console.error('error',err);
        throw error(404, 'Not found');
    }

}