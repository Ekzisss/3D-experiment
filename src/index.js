import * as THREE from 'three';
import $ from 'jquery';

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer({ alpha: true, canvas: $('.my_canvas').get(0) });
renderer.setSize($('.canvas_palce').width(), $('.canvas_palce').height());
$('.canvas_palce').get(0).appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

function animate() {
  requestAnimationFrame(animate);

  let height = $('.canvas_palce').width();
  let width = $('.canvas_palce').height();

  renderer.setSize(height, width);
  let camera = new THREE.PerspectiveCamera(40, height / width, 0.1, 1000);
  camera.position.z = 5;

  renderer.render(scene, camera);

  cube.rotation.x += 0.02;
  cube.rotation.y += 0.01;
}

animate();
