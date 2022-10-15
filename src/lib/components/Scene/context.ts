import { getContext, setContext } from "svelte"
import { get, writable } from "svelte/store"



export const CANVAS = writable({
    scene: undefined,
    camera: undefined,
    renderer: undefined,
    composer: undefined,
    render() {
        this.composer?.render(this.scene, this.camera)
    }
})

    const PARENT = {}

export function setup(item) {
    const $CANVAS = get(CANVAS)
    const parent = getContext(PARENT) || $CANVAS.scene
    setContext(PARENT, item)
    parent?.add(item)
    $CANVAS.render()
    CANVAS.set($CANVAS)
    return { item }
}
