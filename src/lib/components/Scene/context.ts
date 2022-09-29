import { getContext, setContext } from "svelte"

export const CANVAS = {}
const PARENT = {}

export function setup(item) {
    const root = getContext(CANVAS)
    const parent = getContext(PARENT) || root.scene
    setContext(PARENT, item)
    parent.add(item)
    root.render()
    return { item, root }
}