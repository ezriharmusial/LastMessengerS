<script lang="ts">
    import * as THREE from 'three';
	import { CANVAS } from './context';

    export let angle = 45
    export let width = 612
    export let height = 622
    export let near  = 0.1
    export let far = 1000
    export let position = [0, 0, 0]
    export let rotation = [0, 0, 0]




    const camera = new THREE.PerspectiveCamera(angle, width / height, near, far)
    camera.position.set(position[0],position[1],position[2]);
    camera.rotation.set(rotation[0],rotation[1],rotation[2]);

    if ($CANVAS) {
        camera.lookAt($CANVAS.scene.position)
        $CANVAS.camera = camera
        // console.log('camera connected', root)
    }

</script>