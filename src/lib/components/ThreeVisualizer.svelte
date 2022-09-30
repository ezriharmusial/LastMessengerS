<script lang="ts">
    import * as THREE from 'three';

    import { onFrame } from "./Scene/frame";

    import { setContext } from "svelte";
    import { CANVAS } from "./Scene/context";

    import Canvas from "./Scene/Canvas.svelte";
    import Mesh from "./Scene/Mesh.svelte";
    import PerspectiveCamera from "./Scene/PerspectiveCamera.svelte";
    import AmbientLight from "./Scene/AmbientLight.svelte";
    import SpotLight from "./Scene/SpotLight.svelte";
    import Group from "./Scene/Group.svelte";
    import { setAudio, renderScene } from './Scene/animation';
	import { audio } from '$lib/mediaplayer';

    // Root Scene object
    const root = {
        scene: undefined,
        camera: undefined,
        renderer: undefined,
        render() {
            root?.renderer?.render(root.scene, root.camera)
        }
    }

    setContext(CANVAS, root)

    onFrame(() => {
        rotation += 0.0003
        if ($audio?.src) {
            renderScene(root)
        }
    })

    let innerHeight:number, innerWidth:number
    let file: HTMLInputElement
    let fileLabel: HTMLLabelElement

    let rotation = 0

    let planeGeometry = new THREE.PlaneGeometry(800, 800, 20, 20);
    let oceanMaterial = new THREE.MeshLambertMaterial({
        color: 0x005EB8,
        side: THREE.DoubleSide,
        wireframe: true,
        wireframeLinewidth: 2
    });

    let sunMaterial = new THREE.MeshLambertMaterial({
        color: 0xffd400,
        side: THREE.DoubleSide,
        wireframe: true,
        wireframeLinewidth: 2
    });

    var icosahedronGeometry = new THREE.IcosahedronGeometry(5, 4);
    var pyramid = new THREE.ConeGeometry(9, 9, 4, 1);
    var pyramidFemale = new THREE.MeshLambertMaterial({
        color: 0x1f1f1f,
    });
    var pyramidMale = new THREE.MeshLambertMaterial({
        color: 0xffffff,
    });

let range = 0
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<Canvas bind:width={innerWidth} bind:height={innerHeight}>
    <PerspectiveCamera position={[0,0,100]} width={innerWidth} height={innerHeight}/>
    <AmbientLight />
    <SpotLight />
    <Group rotation={[0, rotation, 0]}>
        <Mesh castShadow={true} receiveShadow={true} geometry={planeGeometry} material={sunMaterial} rotation={[-0.5 * Math.PI, 0, 0]} position={[0, 20, 0]}/>
        <Mesh castShadow={true} receiveShadow={true} geometry={planeGeometry} material={oceanMaterial} rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -20, 0]}/>
    </Group>
    <Group>
        <Mesh castShadow={true} receiveShadow={true} geometry={pyramid} position={[-range, -1.7, 0]} rotation={[3.2, 7 * rotation, 0]} material={pyramidFemale} />
        <Mesh castShadow={true} receiveShadow={true} geometry={pyramid} position={[range, 1.7, 0]} rotation={[0, -7 * rotation, 0]} material={pyramidMale} />
    </Group>
</Canvas>

<input type="range" min="0" max="33" step="0.1" bind:value={range}>