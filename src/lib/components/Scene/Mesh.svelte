<script lang="ts">
    import * as THREE from 'three';
	import { setup } from './context';

    export let geometry
    export let material
    export let position = [0, 0, 0]
    export let rotation = [0, 0, 0]
    export let receiveShadow = false
    export let castShadow = false

    const { root, item:mesh } = setup(new THREE.Mesh(geometry, material))
    mesh.receiveShadow = receiveShadow
    mesh.castShadow = castShadow

$: {
    if(root){
        // console.log('hi mesh', mesh)
        mesh.rotation.set(rotation[0], rotation[1], rotation[2])
        mesh.position.set(position[0], position[1], position[2]);
        root.render()
    }
}
</script>