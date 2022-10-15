<script lang="ts">
    import * as THREE from 'three';
	import { CANVAS, setup } from './context';

    export let position = [-10, 40, 20]
    export let intensity = 100
    export let castShadow = true
    export let lookAt = [0, 0, 0]

    const { item: spotLight } = setup(new THREE.DirectionalLight(0xff00ff))
    // add all reactive props here
$: {
    if (spotLight && $CANVAS.scene){
        spotLight.position.set(position)
        spotLight.lookAt(lookAt)
        spotLight.intensity = intensity
        spotLight.castShadow = castShadow
        //Set up shadow properties for the light
        spotLight.shadow.mapSize.width = 512; // default
        spotLight.shadow.mapSize.height = 512; // default
        spotLight.shadow.camera.near = 20; // default
        spotLight.shadow.camera.far = 250; // default
        $CANVAS.render()
    }
}
</script>

input