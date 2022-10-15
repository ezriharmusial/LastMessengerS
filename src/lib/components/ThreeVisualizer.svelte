<script lang="ts">
    import { onFrame } from "./Scene/frame";
    import { planeGeometry, pyramid, sunMaterial, oceanMaterial, pyramidFemale, pyramidMale} from './Scene/AlaNaElu'
    import { renderScene } from './Scene/animation';
    import { mediaPlayer } from '$lib/mediaplayer';

    import Canvas from "./Scene/Canvas.svelte";
    import Mesh from "./Scene/Mesh.svelte";
    import PerspectiveCamera from "./Scene/PerspectiveCamera.svelte";
    import AmbientLight from "./Scene/AmbientLight.svelte";
    import DirectionalLight from "./Scene/DirectionalLight.svelte";
    import Group from "./Scene/Group.svelte";

    onFrame(() => {
        if ($mediaPlayer?.player?.src && $mediaPlayer?.context) {
            console.log('rendering')
            rotation += 0.0003
            renderScene()
        } else {
            // console.error('not Playing')
            rotation += 0.0003
        }
    })

    let innerHeight:number, innerWidth:number
    let rotation = 0
    let range = 0
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

<!-- <input type="range" min="0" max="33" step="0.1" bind:value={range}> -->
