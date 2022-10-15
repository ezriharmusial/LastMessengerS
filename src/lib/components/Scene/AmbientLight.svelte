<script lang="ts">
    import * as THREE from 'three';
	import { setup } from './context';

    export let castShadow = false

    const { item: ambientLight } = setup(new THREE.AmbientLight(0xffffff, 1))
    ambientLight.castShadow = castShadow
</script>