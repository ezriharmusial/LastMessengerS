<script lang="ts">
    import * as THREE from 'three';
	import { CANVAS, setup } from './context';

    export let geometry
    export let material
    export let position = [0, 0, 0]
    export let rotation = [0, 0, 0]
    export let receiveShadow = true
    export let castShadow = true

    const { item:mesh } = setup(new THREE.Mesh(geometry, material))
    mesh.receiveShadow = receiveShadow
    mesh.castShadow = castShadow

$: {
    if($CANVAS){
        // console.log('hi mesh', mesh)
        mesh.rotation.set(rotation[0], rotation[1], rotation[2])
        mesh.position.set(position[0], position[1], position[2]);
        $CANVAS.render()
    }
}
</script>