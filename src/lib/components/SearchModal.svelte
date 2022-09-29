<script>
    export let searchToggled = false

    // Toggle the menu button
	const toggleSearch = () => {
		searchToggled = !searchToggled
	}
</script>

<section id="search-modal" class="modal" class:is-active={searchToggled}>
  <div class="modal-background close-modal" data-modalid="#search-modal" on:click={toggleSearch}></div>
  <div class="modal-content">
    <div class="title is-uppercase">
      Search LinkCasts
    </div>
    <div class="subtitle is-uppercase">
      <form role="search" method="get" class="subtitle search-form" action="https://biafranunity.tv/">
        <span class="screen-reader-text">Search for:</span>
        <div class="field has-addons">
          <p class="control has-icons-left">
            <input type="search" class="input is-large search-field" placeholder="Search …" value="" name="s">
            <span class="icon is-medium is-left">
              <svg fill="currentColor" version="1.1" xmlns="https://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path></svg>
            </span>
          </p>
          <p class="control">
            <input type="submit" class="search-submit button is-large is-primary" value="Search">
          </p>
        </div>
      </form>
    </div>
  </div>
  <button class="modal-close is-large close-modal" data-modalid="#search-modal" aria-label="close" on:click={toggleSearch}></button>
</section>
