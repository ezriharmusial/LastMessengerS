<script lang="ts">
    import * as THREE from 'three';
	import { setup } from './context';

    export let castShadow = false

    const { root, item: ambientLight } = setup(new THREE.AmbientLight(0xaaaaaa))
    ambientLight.castShadow = castShadow
$: {
    if (ambientLight) {
        // console.log('hi ambientLight', ambientLight)
    }
}
</script>