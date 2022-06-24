<script>
    import Footer from '../components/Footer.svelte';

    import Nav from '../components/Nav.svelte'
</script>

<Nav />

<main class="main has-background-dark has-text-light">
    <slot></slot>
</main>

<Footer />

<style global lang="scss">
    @charset "utf-8";

    $primary: #13376b;
    $warning: #fffd7f;
    // Primary Shapes
    $radius: 0.75rem;

    @import "../../node_modules/bulma/sass/utilities/_all.sass";
    @import "../../node_modules/bulma/sass/base/_all.sass";
    @import "../../node_modules/bulma/sass/helpers/_all.sass";
    @import "../../node_modules/bulma/sass/elements/_all.sass";
    @import "../../node_modules/bulma/sass/form/shared.sass";
    @import "../../node_modules/bulma/sass/form/input-textarea.sass";
    @import "../../node_modules/bulma/sass/form/select.sass";
    @import "../../node_modules/bulma/sass/form/tools.sass";
    @import "../../node_modules/bulma/sass/components/dropdown.sass";
    @import "../../node_modules/bulma/sass/components/level.sass";
    @import "../../node_modules/bulma/sass/components/media.sass";
    @import "../../node_modules/bulma/sass/components/menu.sass";
    @import "../../node_modules/bulma/sass/components/modal.sass";
    @import "../../node_modules/bulma/sass/components/navbar.sass";
    @import "../../node_modules/bulma/sass/components/tabs.sass";
    @import "../../node_modules/bulma/sass/grid/columns.sass";
    @import "../../node_modules/bulma/sass/layout/_all.sass";

    @media screen and (min-width: 320px) {
        html {
            font-size: calc(0.75rem + 6 * ((100vw - 320px) / 680));
        }
    }
    @media screen and (min-width: 1000px) {
        html {
            font-size: 1.5rem;
        }
    }

    @media screen and (min-width: 1280px) {
        html {
            font-size: 2rem;
        }
    }

    .content h1, .content h2, .content h3, .content h4, .content h5, .content h6 {
        color: white;
        font-family: "Greywall" !important;
    }

    header figure.image {
        max-height: 75vh;
        overflow: hidden;
    }
</style>