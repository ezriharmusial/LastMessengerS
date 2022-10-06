import { get, writable } from "svelte/store";

interface UserInterfaceState {
    visible: boolean
    visibilityTimer: number
}

export const UI = writable({
    menu: {
        visible: false
    },
    login: {
        visible: false
    },
    search: {
        visible: false
    },
    controls: {
        visible: true,
        visibilityTimer: -1
    }
})


export const autoHideControls = () => {
    const $UI = get(UI)
    // If visibilityTimer exists clear it
    if ($UI.controls.visibilityTimer) {
        clearTimeout($UI.controls.visibilityTimer);
        $UI.controls.visibilityTimer = -1;
        UI.set($UI)
    }

    // Show Control
    $UI.controls.visible = true
    UI.set($UI)

    // Hide Controls after timer finished
    $UI.controls.visibilityTimer = setTimeout(function () {
        $UI.controls.visible = false
    }, 1500)
};

// Close the menu button
export const closeMenu = () => {
    const $UI = get(UI)
    $UI.menu.visible = false
    UI.set($UI)
}

// Toggle Menu
export const toggleMenu = () => {
    const $UI = get(UI)
    $UI.menu.visible = !$UI.menu.visible
    UI.set($UI)
}

// Toggle the Search button
export const toggleSearch = () => {
    const $UI = get(UI)
    closeMenu()
    $UI.search.visible = !$UI.search.visible
    UI.set($UI)
}

// Toggle the Login button
export const toggleLogin = () => {
    const $UI = get(UI)
    closeMenu()
    $UI.login.visible = !$UI.login.visible
    UI.set($UI)
}