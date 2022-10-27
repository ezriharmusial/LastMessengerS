<script lang=ts>
	import * as THREE from "three";
	import { CANVAS, setup } from './context';

    export let rotation = [0, 0, 0]
    export let position = [0, 0, 0]

    const { item:group } = setup(new THREE.Group())

$: {
    group.position.set(position[0], position[1], position[2])
    group.rotation.set(rotation[0], rotation[1], rotation[2]);
    $CANVAS.render()
}
</script>

<slot />