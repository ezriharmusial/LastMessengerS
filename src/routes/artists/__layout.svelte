<script context="module">

    const allArtists = import.meta.glob("./artists/*.md")

    let body = []
    for(let path in allArtists) {
        body.push(
            allArtists[path]().then(({ metadata }) => {
                return {path: path.slice(2, -3), metadata}
            })
        )
    }

    export const load = async (url) => {
        const artist = await Promise.all(body)
        console.log('url', url.routeId)
        // const ref = url.searchParams.get('ref');
        // console.log('REF:', ref)
        return {
            props: {
                artist
            }
        }
    }
</script>

<script>
    // export let title
    // export let image
</script>
<!--
<header>
    <figure class="image">
        <img src="/{image}" alt="">
        <figcaption>{title}</figcaption>
    </figure>
</header> -->

<slot></slot>