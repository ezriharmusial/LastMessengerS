import { createNoise2D, createNoise3D } from 'simplex-noise'
import alea from 'alea'
import { get } from 'svelte/store'
import { audio } from '$lib/mediaplayer'
import * as THREE from 'three'

let dataArray
let analyser

// Noise Seed
const seed = "LastMessengerS"

// Generate Noise
const noise = {
    noise2D: createNoise2D(alea(seed)),
    noise3D: createNoise3D(alea(seed)),
    // noise4D: createNoise4D(alea(seed)),
};

export function setAudio() {
    let $audio = get(audio)
    let context = new AudioContext();
    var src = context.createMediaElementSource($audio);
    analyser = context.createAnalyser();
    src.connect(analyser);
    analyser.connect(context.destination);
    analyser.fftSize = 512;
    var bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);
}

export function renderScene(root) {
    if (!root || !analyser)
        return
    analyser.getByteFrequencyData(dataArray);

    var lowerHalfArray = dataArray.slice(0, (dataArray.length/2) - 1);
    var upperHalfArray = dataArray.slice((dataArray.length/2) - 1, dataArray.length - 1);

    var overallAvg = avg(dataArray);
    var lowerMax = max(lowerHalfArray);
    var lowerAvg = avg(lowerHalfArray);
    var upperMax = max(upperHalfArray);
    var upperAvg = avg(upperHalfArray);

    var lowerMaxFr = lowerMax / lowerHalfArray.length;
    var lowerAvgFr = lowerAvg / lowerHalfArray.length;
    var upperMaxFr = upperMax / upperHalfArray.length;
    var upperAvgFr = upperAvg / upperHalfArray.length;

    makeRoughGround(root.scene.children[2].children[0], modulate(upperAvgFr, 0, 1, 0.5, 4));
    makeRoughGround(root.scene.children[2].children[1], modulate(lowerMaxFr, 0, 1, 0.5, 4));

    makeRoughBall(root.scene.children[3].children[0], modulate(Math.pow(lowerMaxFr, 0.8), 0, 1, 0, 8), modulate(upperAvgFr, 0, 1, 0, 4));

    root.scene.children[2].rotation.y += 0.0005;

    root.render()
}

function makeRoughBall(mesh, bassFr, treFr) {
    let vertices

    if (!mesh.geometry.vertices){
        vertices = []
        const position = mesh.geometry.attributes.position;
        const vector = new THREE.Vector3();

        for ( let i = 0, l = position.count; i < l; i ++ ){

            vector.fromBufferAttribute( position, i );
            vector.applyMatrix4( mesh.matrixWorld );
            vertices = [...vertices, vector];

        }
    } else {
        vertices = mesh.geometry.vertices
    }

    vertices.forEach(function (vertex, i) {
        var offset = mesh.geometry.parameters.radius;
        var amp = 7;
        var time = performance.now();
        vertex.normalize();
        var rf = 0.00001;
        var distance = (offset + bassFr ) + noise.noise3D(vertex.x + time *rf*7, vertex.y +  time*rf*8, vertex.z + time*rf*9) * amp * treFr;
        vertex.multiplyScalar(distance);
    });
    mesh.geometry.verticesNeedUpdate = true;
    mesh.geometry.normalsNeedUpdate = true;
    mesh.geometry.computeVertexNormals();
    // mesh.geometry.computeFaceNormals();
}

function makeRoughGround(mesh, distortionFr) {
    let vertices

    if (!mesh.geometry.vertices){
        vertices = []
        const position = mesh.geometry.attributes.position;
        const vector = new THREE.Vector3();

        for ( let i = 0, l = position.count; i < l; i ++ ){

            vector.fromBufferAttribute( position, i );
            vector.applyMatrix4( mesh.matrixWorld );
            vertices = [...vertices, vector];

        }
    } else {
        vertices = mesh.geometry.vertices
    }

    vertices.forEach(function (vertex, i) {
        var amp = 2;
        var time = Date.now();
        var distance = (noise.noise2D(vertex.x + time * 0.0003, vertex.y + time * 0.0001) + 0) * distortionFr * amp;
        vertex.z = distance;
    });
    mesh.geometry.verticesNeedUpdate = true;
    mesh.geometry.normalsNeedUpdate = true;
    mesh.geometry.computeVertexNormals();
    // mesh.geometry.computeFaceNormals();
}

//some helper functions here
function fractionate(val, minVal, maxVal) {
    return (val - minVal)/(maxVal - minVal);
}

function modulate(val, minVal, maxVal, outMin, outMax) {
    var fr = fractionate(val, minVal, maxVal);
    var delta = outMax - outMin;
    return outMin + (fr * delta);
}

function avg(arr){
    var total = arr.reduce(function(sum, b) { return sum + b; });
    return (total / arr.length);
}

function max(arr){
    return arr.reduce(function(a, b){ return Math.max(a, b); })
}