<script lang="ts">
    import * as THREE from 'three';
	import { setup } from './context';

    export let castShadow = true

    const { item: ambientLight } = setup(new THREE.AmbientLight(0xffffff, 0.9))
    // ambientLight.castShadow = castShadow
</script>