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

    export const load = async () => {
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

<section class="section">
    <div class="content">
        <slot></slot>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="content has-text-light">
        <p class="title has-text-light">LMS Artists</p>
            {#each artists as artist}
            {#if artist.metadata}
            <div class="box">
                <a href="/artists/{artist.path}">
                <figure class="image">
                    <img src="/images/artists/{artist.metadata?.image}" alt={artist.metadata?.title}>
                    <figcaption>{artist.metadata?.title}</figcaption>
                </figure>
                </a>
            </div>
            {/if}
            {/each}
        </div>
    </div>
</section>