<script lang="ts">
	import { getContext, onMount } from 'svelte';
    import * as THREE from 'three';
	import { CANVAS } from './context';

    const root = getContext(CANVAS)

    let container: HTMLDivElement
    let scene
    let renderer

    export let background = new THREE.Color('black')
    export let width = 612
    export let height = 622

    onMount(() => {
        scene = new THREE.Scene()
        scene.background = background

        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.autoUpdate = true;
        renderer.shadowMap.type = THREE.PCFShadowMap; // default THREE.PCFShadowMap
        container.appendChild(renderer.domElement)

        root.scene = scene
        root.renderer = renderer
    })

    $: {
        if (root.renderer) {
            root.renderer.setSize(width, height)
        }
    }
</script>

<div bind:this={container}></div>

{#if root.scene}
<slot />
{/if}

<style>
    div {
        position:fixed;
        top:0;
        right:0;
        width: 100vw;
        height: 100vh;
        z-index: -1;
    }
</style>