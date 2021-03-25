import * as THREE from 'three';
import * as dat from 'dat.gui';

const cameraCtl = {
  cameraType: 'PerspectiveCamera',
  "position.x": 35,
  "position.y": 46,
  "position.z": 70,
  "up.x": 0,
  "up.y": 0,
  "up.z": 0,
  "lookAt.x": 0,
  "lookAt.y": 0,
  "lookAt.z": 0,
  fov: 75
}

const lightCtl = {
  x: -10,
  y: 40,
  z: 0,
  color: 0xe32020,
  intensity: 1
}

const gui = new dat.GUI();
const cameraFolder = gui.addFolder('camera');
cameraFolder.add(cameraCtl, "cameraType", ['PerspectiveCamera', 'OrthographicCamera']);
cameraFolder.add(cameraCtl, "position.x", -100, 100,1);
cameraFolder.add(cameraCtl, "position.y", -100, 100,1);
cameraFolder.add(cameraCtl, "position.z", -100, 100,1);
cameraFolder.add(cameraCtl, "up.x", -100, 100, 0.1);
cameraFolder.add(cameraCtl, "up.y", -100, 100, 0.1);
cameraFolder.add(cameraCtl, "up.z", -100, 100, 0.1);
cameraFolder.add(cameraCtl, "lookAt.x", -100, 100,1);
cameraFolder.add(cameraCtl, "lookAt.y", -100, 100,1);
cameraFolder.add(cameraCtl, "lookAt.z", -100, 100,1);
cameraFolder.add(cameraCtl, "fov", 1, 100,1);

const lightFolder = gui.addFolder('light');
lightFolder.add(lightCtl, "x", -10, 10,1);
lightFolder.add(lightCtl, "y", -10, 100,1);
lightFolder.add(lightCtl, "z", -10, 10,1);
lightFolder.add(lightCtl, "intensity", 0, 1, 0.1);
lightFolder.addColor(lightCtl, "color");

const GUICameraProperty = camera => {
  camera.position.x = cameraCtl['position.x']
  camera.position.y = cameraCtl['position.y']
  camera.position.z = cameraCtl['position.z']
  camera.up.x = cameraCtl['up.x']
  camera.up.y = cameraCtl['up.y']
  camera.up.z = cameraCtl['up.z']
  camera.lookAt(new THREE.Vector3(cameraCtl['lookAt.x'], cameraCtl['lookAt.y'], cameraCtl['lookAt.z']))
  camera.fov = cameraCtl.fov
  camera.updateProjectionMatrix()
}

export const GUILightProperty = light => {
  light.position.set(lightCtl.x,lightCtl.y,lightCtl.z)
  light.intensity = lightCtl.intensity
  light.color = lightCtl.color
}

export default GUICameraProperty
