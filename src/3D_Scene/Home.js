
import * as THREE from 'three';


// Raycaster & Mouse Vector
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
window.addEventListener('mousemove', (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#0a0f2c');

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 2, 5);
camera.lookAt(0, 0, 0);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Plane for raycasting
const planeGeometry = new THREE.PlaneGeometry(30, 400);
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x222222, side: THREE.DoubleSide ,transparent: true,opacity: 0,});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 1; // Horizontal plane
scene.add(plane);

// Cube (object that follows mouse)
const geometry = new THREE.SphereGeometry(2, 32, 32);
const material = new THREE.ShaderMaterial(
 
);
const cube = new THREE.Mesh(geometry, material);
cube.position.y = 0.5; // Start above ground
scene.add(cube);

// Light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 2, 5);
scene.add(light);

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Update raycaster
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObject(plane);

  if (intersects.length > 0) {
    const point = intersects[0].point;
    cube.position.x = point.x;
    cube.position.y = point.y;
  }

  renderer.render(scene, camera);
}
animate();

