import * as THREE from 'three'
const points = [], colors = [], r = 1000, cnt = 100;
for(let i = 0; i<=cnt; i++) {
  const x = Math.random() * r - r / 2;
  const y = 0
  const z = Math.random() * r - r / 2;
  points.push(x,y,z)
  colors.push( ( x / r ) + 0.5 );
  colors.push( ( y / r ) + 0.5 );
  colors.push( ( z / r ) + 0.5 );
}
const geometry = new THREE.BufferGeometry()
.setAttribute('position',  new THREE.Float32BufferAttribute( points, 3 ))
.setAttribute('color', new THREE.Float32BufferAttribute( colors, 3 ))

const material = new THREE.LineBasicMaterial({ vertexColors: true, morphTargets: true } )
const faceMesh = new THREE.Line(geometry, material)

export default faceMesh