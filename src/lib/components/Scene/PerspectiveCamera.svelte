<script lang="ts">
    import * as THREE from 'three';
	import { CANVAS } from './context';

    export let angle = 45
    export let width
    export let height
    export let near  = 0.1
    export let far = 1000
    export let position = [0, 0, 0]
    export let rotation = [0, 0, 0]

    let innerWidth:number = 0, innerHeight: number = 0


    const camera = new THREE.PerspectiveCamera(angle, width / height, near, far)
    camera.position.set(position[0],position[1],position[2]);
    camera.rotation.set(rotation[0],rotation[1],rotation[2]);

    if ($CANVAS) {
        camera.lookAt($CANVAS.scene.position)
        $CANVAS.camera = camera
        $CANVAS.camera.width = width || innerWidth
        $CANVAS.camera.height = height || innerHeight
        // console.log('camera connected', root)
    }

</script>

<svelte:window bind:innerWidth bind:innerHeight />