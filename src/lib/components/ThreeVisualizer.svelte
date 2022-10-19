<script lang="ts">
    import { onFrame } from "./Scene/frame";
    import { planeGeometry, pyramid, sunMaterial, oceanMaterial, pyramidFemale, pyramidMale} from './Scene/AlaNaElu'
    import { renderScene } from './Scene/animation';
    import { player } from '$lib/mediaplayer';

    import Canvas from "./Scene/Canvas.svelte";
    import Mesh from "./Scene/Mesh.svelte";
    import PerspectiveCamera from "./Scene/PerspectiveCamera.svelte";
    import AmbientLight from "./Scene/AmbientLight.svelte";
    import DirectionalLight from "./Scene/DirectionalLight.svelte";
    import Group from "./Scene/Group.svelte";

    onFrame(() => {
        if ($player) {
            rotation += 0.0003
            renderScene()
        } else {
            rotation += 0.0003
        }
    })

    let innerHeight:number, innerWidth:number
    let rotation = 0

    // Make the Pyramids Connect trough progress
    $: range = 33 - 33 * ($player.seeking ? $player.progressProposition / 100 : $player.progress / 100)
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<Canvas bind:width={innerWidth} bind:height={innerHeight}>
    <PerspectiveCamera position={[0,0,100]} bind:width={innerWidth} bind:height={innerHeight}/>
    <AmbientLight />
    <DirectionalLight />
    <Group rotation={[0, rotation, 0]}>
        <Mesh castShadow={true} receiveShadow={true} geometry={planeGeometry} material={sunMaterial} rotation={[-0.5 * Math.PI, 0, 0]} position={[0, 20, 0]}/>
        <Mesh castShadow={true} receiveShadow={true} geometry={planeGeometry} material={oceanMaterial} rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -20, 0]}/>
    </Group>
    <Group>
        <Mesh castShadow={true} receiveShadow={true} geometry={pyramid} position={[-range, -1.7, 0]} rotation={[3.2, 7 * rotation, 0]} material={pyramidFemale} />
        <Mesh castShadow={true} receiveShadow={true} geometry={pyramid} position={[range, 1.7, 0]} rotation={[0, -7 * rotation, 0]} material={pyramidMale} />
    </Group>
</Canvas>