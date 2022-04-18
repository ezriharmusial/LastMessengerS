<script>
  import Icon from 'svelte-awesome/components/Icon.svelte'
  import { weixin } from 'svelte-awesome/icons';
</script>

<style lang="scss">
  .is-secondary {
    color: yellow;

    &:hover {
      color: darkslategray;
    }
  }
</style>

<footer>
  <div class="hero is-warning has-text-light">
    <div class="hero-body">
      <div class="container">
        <div class="columns content">

          <section class="widget content column text-3 widget_text">
            <h3 class="subtitle has-text-secondary is-italic">Got Questions?</h3>
            <div class="textwidget">
              <p>If you have any questions or Remarks concerning ArtKids or ArtKids related Projects and Businesses.
                Please feel free to contact us anytime.</p>
              <p>
                <a class="button is-secondary" title="Contact us!" href="https://www.artkidsfoundation.org/contact-us/" target="_blank">
                  <span class="icon">
                    <Icon data={weixin} />
                  </span>
                  <span>Contact us</span>
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <div class="container is-size-7 has-text-grey">
      <div class="content">
        <div class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading has-text-primary">Telefoon / Telephone (NL)</p>
              <p>+31(0)6 843 405 90</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading has-text-primary">Telefoon / Telephone (Africa)</p>
              <p>+234 903 465 00 87</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading has-text-primary">IBAN / Bank nr.</p>
              <p>NL92INGB0006639081</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading has-text-primary">Kvk / Chamber of Commerce nr.</p>
              <p>55762441</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading has-text-primary">BTW / TAX nr.</p>
              <p>NL808854707B01</p>
            </div>
          </div>
        </div>
        <hr />
        <div class="level">
          <div class="level-left">
            <p>
              <span>Copyright © 2020-2022 | All rights reserved to Stichting ArtKidsFoundation</span>
            </p>
          </div>
          <div class="level">
            <p class="logo level-right">
              <a class="brand has-text-weight-bold is-italic has-text-shadow" href="/"
                title="visit ArtKids Foundation Website?">
                <img src="favicon-32.png" alt="Stichting ArtKids Foundation: Funding Happiness" width="24" height="24">
                <span class="artkids has-text-danger is-size-5">ArtKids</span><span
                  class="foundation has-text-secondary is-size-6">Foundation.org</span></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
