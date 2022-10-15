<script lang="ts">
	import { onMount } from 'svelte';
    import * as THREE from 'three';
	import { CANVAS } from './context';
    import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
    import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
    import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

    export let background = new THREE.Color('black')
    export let width: number
    export let height: number

    let container: HTMLDivElement
    let scene
    let renderer
    let innerHeight:number, innerWidth:number

    const params = {
				exposure: 1.25,
				bloomStrength: 0.5,
				bloomThreshold: 0.2,
				bloomRadius: 0.5
			};


    onMount(() => {
        scene = new THREE.Scene()
        scene.background = background
        scene.fog = new THREE.Fog(0x010101, 30, 250)

        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.autoUpdate = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
        renderer.toneMapping = THREE.ReinhardToneMapping;
        container.appendChild(renderer.domElement)

        $CANVAS.scene = scene
        $CANVAS.renderer = renderer
        $CANVAS.renderer.toneMappingExposure = Math.pow( params.exposure, 4.0 );

        $CANVAS.bloomPass = new UnrealBloomPass( new THREE.Vector2( innerWidth, innerHeight ), 0.5, 0.4, 1 );
        $CANVAS.bloomPass.threshold = params.bloomThreshold;
        $CANVAS.bloomPass.strength = params.bloomStrength;
        $CANVAS.bloomPass.radius = params.bloomRadius;

        $CANVAS.composer = new EffectComposer( $CANVAS.renderer );
        console.log('pass 1')

    })

    $: {
        if ($CANVAS.renderer && $CANVAS.composer) {
            $CANVAS.renderer.setSize(innerWidth, innerHeight)
            $CANVAS.composer.setSize(innerWidth, innerHeight)
        }

        if ($CANVAS.camera) {
            console.log('pass 2')

            $CANVAS.renderScene = new RenderPass( $CANVAS.scene, $CANVAS.camera );
            $CANVAS.composer.addPass( $CANVAS.renderScene );
            $CANVAS.composer.addPass( $CANVAS.bloomPass );

        }
    }

    $: console.log('$CANVAS', $CANVAS)
    $: console.log('scene', scene)
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div bind:this={container}></div>

{#if $CANVAS.scene}
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