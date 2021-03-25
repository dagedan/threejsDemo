import * as THREE from "three";

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 )
// const camera = new THREE.OrthographicCamera(-window.innerWidth/4, window.innerWidth/4, -window.innerHeight/4, window.innerHeight/4,1,1000)
export default camera