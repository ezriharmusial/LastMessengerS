<script lang="ts">
    import * as THREE from 'three';
	import { CANVAS, setup } from './context';

    export let position = [-10, 40, 20]
    export let intensity = 0.9
    export let castShadow = true
    export let lookAt = [0, 0, 0]

    const { item: spotLight } = setup(new THREE.SpotLight(0xffffff))
    // add all reactive props here
$: {
    if (spotLight && $CANVAS.scene){
        spotLight.position.set(position)
        spotLight.lookAt(lookAt)
        spotLight.intensity = intensity
        spotLight.castShadow = castShadow
        $CANVAS.render()
    }
}
</script>