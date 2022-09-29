import { onMount } from "svelte"

export function onFrame(callback) {
    onMount(() => {
        function frameCallback() {
            callback()
            frame = requestAnimationFrame(frameCallback)
        }

        let frame = requestAnimationFrame(frameCallback)

        return () => {
            cancelAnimationFrame(frame)
        }
    })
}