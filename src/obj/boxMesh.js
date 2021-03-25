import * as THREE from 'three'
import img from '../img/wenli1.jpeg'

// const texture = new THREE.TextureLoader().load(img);
// const material = new THREE.MeshBasicMaterial({ map: texture })

const geometry = new THREE.BoxGeometry( 10, 10, 10 );
const material = new THREE.MeshBasicMaterial({color:0x0000ff})
// const material = new THREE.MeshLambertMaterial({color: 0xff00ff})

console.log('material:', material);

const mesh = new THREE.Mesh( geometry, material )
mesh.position.y = 20
export default mesh