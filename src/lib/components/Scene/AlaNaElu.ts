    import * as THREE from 'three';

    export let planeGeometry = new THREE.PlaneGeometry(800, 800, 20, 20);
    export let oceanMaterial = new THREE.MeshLambertMaterial({
        color: 0x005EB8,
        side: THREE.DoubleSide,
        wireframe: true,
        wireframeLinewidth: 2
    });

    export let sunMaterial = new THREE.MeshLambertMaterial({
        color: 0xffd400,
        side: THREE.DoubleSide,
        wireframe: true,
        wireframeLinewidth: 2
    });

    export let icosahedronGeometry = new THREE.IcosahedronGeometry(5, 4);
    export let pyramid = new THREE.ConeGeometry(9, 9, 4, 1);
    export let pyramidFemale = new THREE.MeshLambertMaterial({
        color: 0x1f1f1f,
    });
    export let pyramidMale = new THREE.MeshLambertMaterial({
        color: 0xffffff,
    });
