<script context="module">
    const allArtists = import.meta.glob("./*.md")

    let body = []
    for(let path in allArtists) {
        body.push(
        allArtists[path]().then(({ metadata }) => {
            return {path: path.slice(2, -3), metadata}
        })
        )
    }

    /**
    * @type {import('@sveltejs/kit').Load}
    */
    export const load = async ({fetch}) => {
        const artists = await Promise.all(body)

        return {
            props: {
                artists
            }
        }
    }
</script>

<script>
    export let artists
</script>

<div class="container is-fluid">
    <div class="content has-text-light">
        <p class="title is-greywall has-text-light">Our Artists</p>
        <div class="columns is-multiline">
            {#each artists as artist}
            {#if artist.metadata}
            <div class="column is-half">
                <a href="/artists/{artist.path}" class="">
                    <figure class="image">
                        <img src="/images/artists/{artist.metadata?.image}" alt={artist.metadata?.title}>
                        <figcaption class="p-2 mb-5 title is-greywall has-background-black has-text-warning is-size-4">{artist.metadata?.title}</figcaption>
                    </figure>
                </a>
            </div>
            {/if}
            {/each}
        </div>
    </div>
</div>

<style lang="scss">
    a {
        margin: 0 !important;
        padding: 0 !important;


        figure {
            position: relative;

            img {
                border-radius: 0.5rem;
                overflow: hidden;
            }

            figcaption {
                position: absolute;
                bottom: 0;
            }
        }
    }
</style>