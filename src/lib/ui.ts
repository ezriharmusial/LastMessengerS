import { get, writable } from "svelte/store";

interface UserInterfaceState {
    visibleOnMouseMove: boolean
    visibleOnMouseMoveTimer: number
}

export const UI = writable({
    visibleOnMouseMove: true,
    visibleOnMouseMoveTimer: -1
})


export const visibleOnMouseMove = () => {
    const $UI = get(UI)
    // If timer exists clear it
    if ($UI.visibleOnMouseMoveTimer) {
        clearTimeout($UI.visibleOnMouseMoveTimer);
        $UI.visibleOnMouseMoveTimer = -1;
        UI.set($UI)
    }

    // Put visible to true
    $UI.visibleOnMouseMove = true
    UI.set($UI)

    $UI.visibleOnMouseMoveTimer = setTimeout(function () {
        $UI.visibleOnMouseMove = false
    }, 1500)
};
