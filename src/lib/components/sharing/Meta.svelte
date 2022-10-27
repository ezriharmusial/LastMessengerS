<script>
  export let data = {};
</script>

<svelte:head>
  {#if data.title}
    <title>{data.title}</title>
    <meta name="title" content={data.title} />
    <meta property="og:title" content={data.title} />
    <meta property="twitter:title" content={data.title} />
  {/if}

  {#if data.description || data.hook}
    <meta name="description" content="{data.description || data.hook}" />
    <meta property="og:description" content="{data.description || data.hook}" />
    <meta property="twitter:description" content="{data.description || data.hook}" />
  {/if}

  {#if data.image}
    <meta property="og:image" content="{data.image}" />
    <meta
      property="twitter:image"
      content="{data.image}"
    />
  {/if}

  {#if data.imageAlt}
    <meta property="og:image:alt" content={data.imageAlt} />
    <meta property="twitter:image:alt" content={data.imageAlt} />
  {/if}

  {#if data.url}
    <meta property="og:url" content={data.url} />
    <meta property="twitter:url" content={data.url} />
  {/if}

  <meta property="og:type" content={data.type || "article"} />

  <meta property="twitter:card" content={data.twitterCard || "summary_large_image"} />
</svelte:head>
