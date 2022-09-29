<script lang=ts>
	import * as THREE from "three";
	import { setup } from './context';

    export let rotation = [0, 0, 0]
    export let position = [0, 0, 0]

    const { root, item:group } = setup(new THREE.Group())

$: {
    group.position.set(position[0], position[1], position[2])
    group.rotation.set(rotation[0], rotation[1], rotation[2]);
    root.render()
}
</script>

<slot />