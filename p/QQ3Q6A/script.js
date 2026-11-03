const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('game') });
renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new THREE.PointerLockControls(camera, document.body);
document.body.addEventListener('click', () => controls.lock());

const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
dirLight.position.set(10, 20, 10);
scene.add(dirLight);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshLambertMaterial({ color: 0x55aa55 });

for (let x = -5; x <= 5; x++) {
    for (let z = -5; z <= 5; z++) {
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(x, 0, z);
        scene.add(cube);
    }
}

camera.position.set(0, 2, 5);

let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;

const onKeyDown = function (event) {
    switch (event.code) {
        case 'KeyW': moveForward = true; break;
        case 'KeyS': moveBackward = true; break;
        case 'KeyA': moveLeft = true; break;
        case 'KeyD': moveRight = true; break;
    }
};

const onKeyUp = function (event) {
    switch (event.code) {
        case 'KeyW': moveForward = false; break;
        case 'KeyS': moveBackward = false; break;
        case 'KeyA': moveLeft = false; break;
        case 'KeyD': moveRight = false; break;
    }
};

document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);

let prevTime = performance.now();

function animate() {
    requestAnimationFrame(animate);

    const time = performance.now();
    if (controls.isLocked === true) {
        const delta = (time - prevTime) / 1000;

        const velocityX = (moveRight - moveLeft) * 5.0 * delta;
        const velocityZ = (moveForward - moveBackward) * 5.0 * delta;

        controls.moveRight(velocityX);
        controls.moveForward(velocityZ);
    }

    prevTime = time;
    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
