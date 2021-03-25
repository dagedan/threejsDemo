import * as THREE from 'three'

const positions = [];
const colors = [];
const r = 10;

for ( let i = 0; i < 4; i ++ ) {
  const x = Math.random() * r - r / 2;
  const y = Math.random() * r - r / 2;
  const z = Math.random() * r - r / 2;
  positions.push( x, y, z );
  colors.push( ( x / r ) + 0.5 );
  colors.push( ( y / r ) + 0.5 );
  colors.push( ( z / r ) + 0.5 );
}
const geometry = new THREE.BufferGeometry()
    .setAttribute( 'position', new THREE.Float32BufferAttribute( positions, 3 ) )
    .setAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) );
const material = new THREE.LineBasicMaterial({ vertexColors: true, morphTargets: true } )

const lineMesh = new THREE.LineLoop( geometry, material)
export default lineMesh
