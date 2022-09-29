<script>
	let selections = [
		{id: "MNwpdqD_I8Y", artist : 'K3', title : 'OjaLele'},
		{id: "w1FD_P7tcHw", artist : 'Dj Vadim', title : 'Vaporize'},
	];
	let playList = [];
	$: trackNumber = 1;
	let tracks;

	$: console.log('Track(s):',tracks );
  $: console.log(playList.length,'Track(s) in PlayList:', playList);
	$: console.log(selections.length, 'Track(s) selected:', selections);

	function add() {
    tracks = +selections.length;

		console.log('Adding', tracks, 'Track(s) to Playlist of', playList.length);

		if (playList.length === 0) {
				console.log(tracks, 'Track(s) Copied');
				playList = selections;
		} else {
			console.log('Move Track:', tracks);
			playList = [...playList, ...selections];
			tracks = 0;
		}
		console.log('playList:', playList.length)
	}

	function remove() {
		playList = playList.slice(this.value);
    console.log('Removed Track', this.value, 'from Playlist');
	}
</script>

<div class="hero is-dark is-fullheight">
  <section class="section">
    <h1 class="title is-7">
      Playlist <button on:click={add}>Add tracks</button>
    </h1>

    <table class="table is-hoverable is-striped is-dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Artist</th>
          <th>Track</th>
          <th><span class="is-hidden">Option</span></th>
        </tr>
      </thead>
      <tbody>
      {#if playList.length > 0}
        {#each playList as track, trackNumber (track.id)}
        <tr>
          <td>{@html trackNumber++ || '<i class="fas fa-play-circle"></i>'}</td>
          <td>{track.artist}</td>
          <td>{track.title}</td>
          <td>
						<button on:release={remove} value="trackNumber">
							<i class="fas fa-trash"></i>
						</button>
					</td>
        </tr>
        {/each}
      {:else}
        <tr>
          <td colspan="3">Add Tracks to Playlist</td>
        </tr>
      {/if}
      </tbody>
    </table>
  </section>
</div>