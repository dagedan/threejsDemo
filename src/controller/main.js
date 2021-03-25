import * as THREE from 'three';
import Stats from 'stats.js'
import '../style.css'
import scene from './scene'
import camera from './camera'
import renderer from './renderer'
import directionalLight from './light'

import mesh from '../obj/boxMesh'
import lineMesh from '../obj/lineMesh'
import faceMesh from '../obj/faceMesh'
import GUICameraProperty, { GUILightProperty } from './gui'

var stats = new Stats();
stats.showPanel( 0 )
document.body.appendChild( stats.dom );

scene.add( mesh );
scene.add( lineMesh );
// scene.add( faceMesh );
directionalLight.position.set(-10, 10 , 1)
scene.add( directionalLight );

// const obj = new THREE.Object3D()
const helperLight = new THREE.DirectionalLightHelper( directionalLight, 10 );
scene.add( helperLight );

const helper = new THREE.CameraHelper( camera );
scene.add( helper );
const axesHelper = new THREE.AxesHelper( 60 );
scene.add( axesHelper );

renderer.setAnimationLoop( time => {
  stats.begin();
  GUICameraProperty(camera)
  GUILightProperty(directionalLight)
  mesh.rotation.x = time / 200;
  mesh.rotation.y = time / 1000;
  stats.end();
  renderer.render( scene, camera );
})
document.body.appendChild( renderer.domElement )

