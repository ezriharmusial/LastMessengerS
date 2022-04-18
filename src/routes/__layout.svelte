<script>
    import Nav from '../components/Nav.svelte'
</script>

<Nav />

<header>
    <img class="logo" src="/logo.png" alt="Land" >
    <div class="container">
        <section class="section">
            <h1 class="title has-text-link is-greywall">Welcome 2 LastMessengerS</h1>
        </section>
    </div>
</header>


<!-- <img class="mmirinaoha" src="/mmirinaoha.webp" alt="Land" > -->
<!-- <img class="ala" src="/ala.jpg" alt="Land" > -->

<!-- <section class="section ala-text content">
    <h2 class="title is-greywall has-text-warning">Welcome 2 LastMessengerS</h2>
</section> -->

<main class="main has-background-dark has-text-light">
    <slot></slot>
</main>

<style global lang="scss">
    @charset "utf-8";

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


    body {
        min-height: 100vh;
        background: url('/elunaanwu.jpg') no-repeat top;
        background-size: 100vw auto;
        position: relative;
    }

    header {
        min-height: 72vw;
    }

    .mmirinaoha {
        position: absolute;
        top: 72vw;
        margin-top: -37vw;
        z-index: 99;
    }

    .logo {
        width: 12vw;
        margin-left: 10vw;

    }

    .ala {
        position:absolute;
        top: 51vw;
        margin-top: 36vw;
    }

    .ala-text {
        position: absolute;
        top: 51vw;
        margin-top: 40vw;
    }
</style>