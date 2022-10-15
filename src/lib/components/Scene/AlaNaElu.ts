import * as THREE from 'three';

// Color Variables
export const colors = {
    ocean: 0x005EB8,
    sun: 0xffd400,
    white: 0xffffff,
    black: 0x000000,
    light: 0xfefefe,
    dark: 0x030303
}

export let planeGeometry = new THREE.PlaneGeometry(800, 800, 20, 20);
export let oceanMaterial = new THREE.MeshLambertMaterial({
    color: colors.white,
    side: THREE.DoubleSide,
    wireframe: true,
    wireframeLinecap: "square",
    wireframeLinewidth: 2
});

export let sunMaterial = new THREE.MeshLambertMaterial({
    color: colors.white,
    side: THREE.DoubleSide,
    wireframe: true,
    wireframeLinecap: "square",
    wireframeLinewidth: 2
});

export let icosahedronGeometry = new THREE.IcosahedronGeometry(5, 4);
export let pyramid = new THREE.ConeGeometry(9, 9, 4, 1);
export let pyramidFemale = new THREE.MeshLambertMaterial({
    color: colors.dark
});
export let pyramidMale = new THREE.MeshLambertMaterial({
    color: colors.light
});
