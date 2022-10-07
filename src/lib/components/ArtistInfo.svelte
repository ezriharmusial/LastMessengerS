<script>
    export let artist
</script>

<article class="flex flex-direction-column align-items-center">
    <div class="flex-shrink-0 m-6">
        <figure class="image 128x128">
            <img src="{artist.image}" alt="Userpic for {artist.stage_name}" class="rounded-full">
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