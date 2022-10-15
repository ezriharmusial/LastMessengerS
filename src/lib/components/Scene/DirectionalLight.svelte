<script lang="ts">
    import * as THREE from 'three';
	import { CANVAS, setup } from './context';

    export let position = [-18, 9, -9]
    export let intensity = 1
    export let castShadow = true
    export let lookAt = [0, 1, 0]

    //new THREE.DirectionalLightHelper(spotLight, 5)
     const { item: spotLight } = setup(new THREE.DirectionalLight(0xffffff, intensity))
    // add all reactive props here
$: {
    if (spotLight && $CANVAS.scene){
       //Set up shadow properties for the light
        spotLight.position.set(position[0], position[1], position[2])
        spotLight.lookAt(lookAt[0], lookAt[1], lookAt[2])
        spotLight.intensity = intensity
        spotLight.castShadow = castShadow
        spotLight.shadow.mapSize.width = 512; // default
        spotLight.shadow.mapSize.height = 512; // default
        spotLight.shadow.camera.near = 20; // default
        spotLight.shadow.camera.far = 250; // default
        $CANVAS.render()
    }
}
</script>