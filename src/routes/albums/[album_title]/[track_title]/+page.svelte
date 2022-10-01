<!-- src/routes/[slug]/+page.svelte -->
<script>
  export let data;
</script>

<article>
  <h1>{ data.title }</h1>
  <p>Published: {data.date}</p>
  <svelte:component this={data.content} />
</article>

<section class="section">
  <tt><pre>{JSON.stringify(data, null, 4)}</pre></tt>
</section>