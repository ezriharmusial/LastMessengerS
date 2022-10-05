<script>
    export let artist
</script>

<article class="is-flex is-flex-direction-column is-align-items-center">
    <div class="is-flex-shrink-0 m-6">
        <figure class="image is-128x128">
            <img src="{artist.image}" alt="Userpic for {artist.stage_name}" class="is-rounded">
        </figure>
    </div>
    <div class="media-content flex-grow-1">
        <div class="content">
            <p>
                <strong>{artist.stage_name}</strong><br />
                <strong>Name:</strong> {artist.name}<br />
            </p>
        </div>
    </div>
</article>