<script lang="ts">
    import * as THREE from 'three';
	import { setup } from './context';

    export let position = [-10, 40, 20]
    export let intensity = 0.9
    export let castShadow = true
    export let lookAt = [0, 0, 0]

    const { root, item: spotLight } = setup(new THREE.SpotLight(0xffffff))
    // add all reactive props here
$: {
    if (spotLight && root.scene){
        spotLight.position.set(position)
        spotLight.lookAt(lookAt)
        spotLight.intensity = intensity
        spotLight.castShadow = castShadow
        root.render()
    }
}
</script>