<script>
	import { player } from '$lib/mediaplayer';
  import { onMount } from 'svelte';

  let lang = 'en'
  let nativeShare = false;
  let title;
  let url;

  const locale = {};
    locale['en'] = {
        "share_this": "Share This"
      }
    locale['nl'] = {
        "share_this": "Deel dit"
      }


  onMount(() => {
    if (navigator.share) {
      nativeShare = true;
    }
    title=document.title;
    url=location.href;
  });

  function shareThis() {
    navigator.share({
      title: title,
      url: url
    })
      .then(() => {
        console.info('Thanks for Sharing')
      })
      .catch(console.error);
  }
</script>


<section id="share-linkcast">
  <div class="container">
    <div class="artkids-social">
      {#if !nativeShare}
        <h4
          class="subtitle mb-4 portrait:text-3xl landscape:xs:text-xl landscape:sm:text-2xl landscape:md:text-3xl landscape:lg:text-4xl landscape:xl:text-5xl {$player.track.theme == 'light' ? 'text-slate-900' : 'text-slate-200' }  uppercase">
          { locale[lang].share_this }:</h4>
        <a class="button text-2xl is-facebook fbc-has-badge fbc-UID_1"
           href="https://www.facebook.com/sharer/sharer.php?u={encodeURIComponent(url)}"
           target="_blank" title="Share {title} on Facebook" area-label="Share {title} on Facebook">
          <span class="icon is-large">
            <i class="fa-brands fa-facebook" />
            <!-- <Icon client:only icon={faFacebook} /> -->
          </span>
        </a>
        <a class="button text-2xl is-twitter"
           href="https://twitter.com/intent/tweet?text={encodeURIComponent(title)}&amp;url={encodeURIComponent(url)}&amp;via={encodeURIComponent(url)}"
           target="_blank" title="Share {title} on Twitter" area-label="Share {title} on Twitter">
          <span class="icon is-large">
            <i class="fa-brands fa-twitter" />
            <!-- <Icon client:only icon={faTwitter} /> -->
          </span>
        </a>
        <a class="button text-2xl is-whatsapp"
           href="whatsapp://send?text={encodeURIComponent(title)} {encodeURIComponent(url)}"
           target="_blank" title="Share {title} on WhatsApp" area-label="Share {title} on WhatsApp">
          <span class="icon is-large">
            <i class="fa-brands fa-whatsapp" />
            <!-- <Icon client:only icon={faWhatsapp} /> -->
          </span>
        </a>
        <a class="button text-2xl is-googleplus"
           href="https://plus.google.com/share?url={encodeURIComponent(url)}"
           target="_blank" title="Share {title} on Google+" area-label="Share {title} on Google+">
          <span class="icon is-large">
            <i class="fa-brands fa-google" />
            <!-- <Icon client:only icon={faGooglePlus} /> -->
          </span>
        </a>
        <a class="button text-2xl is-linkedin"
        href="https://www.linkedin.com/shareArticle?mini=true&amp;url={encodeURIComponent(url)}&amp;title={encodeURIComponent(title)}"
           target="_blank" title="Share {title} on LinkedIn" area-label="Share {title} on LinkedIn">
          <span class="icon is-large">
            <i class="fa-brands fa-linkedin" />
            <!-- <Icon client:only icon={faLinkedin} /> -->
          </span>
        </a>
        <a class="button text-2xl is-pinterest"
           href="https://pinterest.com/pin/create/button/?url={encodeURIComponent(url)}&amp;description={encodeURIComponent(title)}"
           data-pin-custom="true" target="_blank" title="Share {title} on Pinterest" area-label="Share {title} on Pinterest">
          <span class="icon is-large">
            <i class="fa-brands fa-pinterest" />
            <!-- <Icon client:only icon={faPinterest} /> -->
          </span>
        </a>
      {:else}
        <button on:click={shareThis} class="button is-social is-fullwidth is-white" title="Share {title}" area-label="Share {title}">
          <span class="icon is-large">
            <i class="fa-brands fa-link" />
            <!-- <Icon client:only icon={faShareAlt} /> -->
          </span>
          <span>{ locale[lang].share_this }</span>
        </button>
      {/if}
    </div>
  </div>
</section>
