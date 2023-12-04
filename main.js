// Include Three.js and OrbitControls
import * as THREE from 'three';
import "./style.css";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"

// Set up your scene, camera, and renderer

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Set up OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);

// Set initial camera position
camera.position.z = 5;

// Animation loop
const animate = function () {
  requestAnimationFrame(animate);

  // Update controls
  controls.update();

  renderer.render(scene, camera);
};

// Handle window resize
window.addEventListener('resize', function () {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;

  camera.aspect = newWidth / newHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(newWidth, newHeight);
});

animate();
