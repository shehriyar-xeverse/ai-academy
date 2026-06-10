import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { PageId } from '../types';

interface ThreeCanvasProps {
  activePage: PageId;
  currentSection: string;
}

export default function ThreeCanvas({ activePage, currentSection }: ThreeCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // References for rendering animations without React triggering re-renders
  const stateRef = useRef({
    activePage,
    currentSection,
    mouseX: 0,
    mouseY: 0,
    time: 0,
    jumpProgress: 1, // 0 to 1 for jump transition
    waveProgress: 0,
    blinkTimer: 0,
    isBlinking: false,
  });

  // Track page changes to trigger juicy cartoon jumps
  useEffect(() => {
    stateRef.current.activePage = activePage;
    stateRef.current.currentSection = currentSection;
    stateRef.current.jumpProgress = 0; // Trigger jump animation
  }, [activePage, currentSection]);

  // Track mouse coordinates
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to -1 to 1 range
      stateRef.current.mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      stateRef.current.mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // WebGL Setup and Render Loop
  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;
    const width = currentMount.clientWidth || window.innerWidth;
    const height = currentMount.clientHeight || window.innerHeight;

    // 1. Scene setup with beautiful ambient foggy dark academic depth
    const scene = new THREE.Scene();
    scene.background = null; // Let CSS grids handle parallax gradients
    scene.fog = new THREE.FogExp2(0x0a0f24, 0.045);

    // 2. Camera setup representing beautiful orbital perspectives
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    currentMount.appendChild(renderer.domElement);

    // 4. Vibrant Lighting Arrays (Dark Academy mood)
    // Ambient moon glow
    const ambientLight = new THREE.AmbientLight(0x1e1b4b, 1.5);
    scene.add(ambientLight);

    // Spotlight focusing on Alex
    const spotLight = new THREE.SpotLight(0xa5b4fc, 8);
    spotLight.position.set(5, 5, 8);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;
    scene.add(spotLight);

    // Cyan accent light
    const pointLightCyan = new THREE.PointLight(0x06b6d4, 5, 15);
    pointLightCyan.position.set(-4, -2, 2);
    scene.add(pointLightCyan);

    // Magenta highlight glow
    const pointLightMagenta = new THREE.PointLight(0xd946ef, 3, 10);
    pointLightMagenta.position.set(3, -2, 4);
    scene.add(pointLightMagenta);

    // ==========================================
    // BUILD MASCOT CHARACTER: ALEX (THE EXPLORER)
    // ==========================================
    const alexGroup = new THREE.Group();
    scene.add(alexGroup);

    // A. Material definitions
    const skinMaterial = new THREE.MeshStandardMaterial({
      color: 0xffd1b3,
      roughness: 0.4,
      metalness: 0.1,
    });
    const outfitMaterial = new THREE.MeshStandardMaterial({
      color: 0xf97316, // Adventurous bright orange hoodie
      roughness: 0.5,
      metalness: 0.1,
    });
    const sleeveMaterial = new THREE.MeshStandardMaterial({
      color: 0xe05600,
      roughness: 0.5,
    });
    const backpackMaterial = new THREE.MeshStandardMaterial({
      color: 0x334155, // Deep slate Explorer Backpack
      roughness: 0.6,
    });
    const strapMaterial = new THREE.MeshStandardMaterial({
      color: 0x991b1b, // Dark red straps
      roughness: 0.5,
    });
    const hairMaterial = new THREE.MeshStandardMaterial({
      color: 0xfacc15, // Golden playful spiky hair
      roughness: 0.6,
    });
    const glassMaterial = new THREE.MeshStandardMaterial({
      color: 0x0891b2, // Glowing tech nerd specs
      emissive: 0x0891b2,
      emissiveIntensity: 0.3,
      metalness: 0.9,
      roughness: 0.1,
    });
    const tabletMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.2,
    });
    const screenMaterial = new THREE.MeshStandardMaterial({
      color: 0x22d3ee, // Glowing study screen
      emissive: 0x22d3ee,
      emissiveIntensity: 1.2,
    });

    // B. Character parts construction
    // Head Sphere with slight oval scaling
    const headGeo = new THREE.SphereGeometry(1, 32, 32);
    const head = new THREE.Mesh(headGeo, skinMaterial);
    head.position.y = 1;
    head.castShadow = true;
    alexGroup.add(head);

    // Sweet Playful Hair: Multiple floating spiky spheres/cones
    const hairGroup = new THREE.Group();
    const locks = [
      { size: 0.35, x: 0, y: 0.95, z: 0.2 },
      { size: 0.3, x: 0.4, y: 0.85, z: 0.1 },
      { size: 0.3, x: -0.4, y: 0.85, z: 0.1 },
      { size: 0.28, x: 0.6, y: 0.5, z: -0.3 },
      { size: 0.28, x: -0.6, y: 0.5, z: -0.3 },
      { size: 0.25, x: 0.2, y: 0.9, z: -0.5 },
      { size: 0.25, x: -0.2, y: 0.9, z: -0.5 },
    ];
    locks.forEach(l => {
      const lockGeo = new THREE.SphereGeometry(l.size, 16, 16);
      const lock = new THREE.Mesh(lockGeo, hairMaterial);
      lock.position.set(l.x, l.y, l.z);
      lock.castShadow = true;
      hairGroup.add(lock);
    });
    head.add(hairGroup);

    // Adventurer Specs / Nerd Glasses representing cyber intelligence
    const specsGroup = new THREE.Group();
    const frameGeo = new THREE.TorusGeometry(0.32, 0.05, 8, 24);
    const glassesLeft = new THREE.Mesh(frameGeo, glassMaterial);
    glassesLeft.position.set(-0.35, 0.15, 0.82);
    const glassesRight = new THREE.Mesh(frameGeo, glassMaterial);
    glassesRight.position.set(0.35, 0.15, 0.82);

    // Bridge of glasses
    const bridgeGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.3, 8);
    bridgeGeo.rotateZ(Math.PI / 2);
    const bridge = new THREE.Mesh(bridgeGeo, glassMaterial);
    bridge.position.set(0, 0.15, 0.82);

    specsGroup.add(glassesLeft, glassesRight, bridge);
    head.add(specsGroup);

    // Big shiny dark expressive eyes (Blinking!)
    const eyeWhiteGeo = new THREE.SphereGeometry(0.18, 16, 16);
    const eyeWhiteLeft = new THREE.Mesh(eyeWhiteGeo, new THREE.MeshBasicMaterial({ color: 0xffffff }));
    eyeWhiteLeft.position.set(-0.35, 0.15, 0.76);
    eyeWhiteLeft.scale.set(1.1, 1.1, 0.5);
    const eyeWhiteRight = eyeWhiteLeft.clone();
    eyeWhiteRight.position.x = 0.35;

    const pupilGeo = new THREE.SphereGeometry(0.09, 16, 16);
    const pupilLeft = new THREE.Mesh(pupilGeo, new THREE.MeshBasicMaterial({ color: 0x0f172a }));
    pupilLeft.position.set(-0.35, 0.15, 0.85);
    pupilLeft.scale.set(1, 1, 0.5);
    const pupilRight = pupilLeft.clone();
    pupilRight.position.x = 0.35;

    head.add(eyeWhiteLeft, eyeWhiteRight, pupilLeft, pupilRight);

    // Friendly mouth (a cylinder curve or happy flat slice)
    const mouthGeo = new THREE.TorusGeometry(0.15, 0.04, 8, 16, Math.PI);
    const mouth = new THREE.Mesh(mouthGeo, new THREE.MeshBasicMaterial({ color: 0x475569 }));
    mouth.position.set(0, -0.25, 0.83);
    mouth.rotation.x = Math.PI; // Happy smile curve
    head.add(mouth);

    // C. Explorer Hoodie Body
    const bodyGeo = new THREE.CylinderGeometry(0.7, 0.4, 1.6, 32);
    const body = new THREE.Mesh(bodyGeo, outfitMaterial);
    body.position.y = -0.4;
    body.castShadow = true;
    body.receiveShadow = true;
    alexGroup.add(body);

    // Explorer Backpack on back
    const backpackGeo = new THREE.BoxGeometry(0.7, 1.1, 0.45);
    const backpack = new THREE.Mesh(backpackGeo, backpackMaterial);
    backpack.position.set(0, 0.1, -0.45);
    backpack.castShadow = true;
    body.add(backpack);

    // Backpack straps
    const strapLGeo = new THREE.BoxGeometry(0.1, 1.0, 0.1);
    const strapL = new THREE.Mesh(strapLGeo, strapMaterial);
    strapL.position.set(-0.35, 0.1, 0.22);
    const strapR = strapL.clone();
    strapR.position.x = 0.35;
    body.add(strapL, strapR);

    // D. Multi-Joint Arms for responsive pointing & waving gestures
    const shoulderLGroup = new THREE.Group();
    shoulderLGroup.position.set(-0.85, 0.5, 0);
    const upperArmGeo = new THREE.CylinderGeometry(0.18, 0.15, 0.8, 16);
    upperArmGeo.translate(0, -0.4, 0);
    const upperArmL = new THREE.Mesh(upperArmGeo, sleeveMaterial);
    shoulderLGroup.add(upperArmL);

    const forearmLGroup = new THREE.Group();
    forearmLGroup.position.set(0, -0.8, 0);
    const forearmGeo = new THREE.CylinderGeometry(0.15, 0.12, 0.7, 16);
    forearmGeo.translate(0, -0.35, 0);
    const forearmL = new THREE.Mesh(forearmGeo, outfitMaterial);
    const fistGeo = new THREE.SphereGeometry(0.15, 12, 12);
    const fistL = new THREE.Mesh(fistGeo, skinMaterial);
    fistL.position.y = -0.7;
    forearmLGroup.add(forearmL, fistL);
    shoulderLGroup.add(forearmLGroup);
    body.add(shoulderLGroup);

    // Right arm holding details (Glowing Study Tablet)
    const shoulderRGroup = new THREE.Group();
    shoulderRGroup.position.set(0.85, 0.5, 0);
    const upperArmR = new THREE.Mesh(upperArmGeo, sleeveMaterial);
    shoulderRGroup.add(upperArmR);

    const forearmRGroup = new THREE.Group();
    forearmRGroup.position.set(0, -0.8, 0);
    const forearmR = new THREE.Mesh(forearmGeo, outfitMaterial);
    const fistR = new THREE.Mesh(fistGeo, skinMaterial);
    fistR.position.y = -0.7;

    // Glowing tablet of knowledge
    const tabletGeo = new THREE.BoxGeometry(0.48, 0.72, 0.08);
    const tablet = new THREE.Mesh(tabletGeo, tabletMaterial);
    tablet.position.set(0, -0.9, 0.25);
    tablet.rotation.set(-Math.PI / 4, 0, Math.PI / 10);
    const screenGeo = new THREE.BoxGeometry(0.42, 0.64, 0.02);
    const screen = new THREE.Mesh(screenGeo, screenMaterial);
    screen.position.set(0, 0, 0.045);
    tablet.add(screen);

    forearmRGroup.add(forearmR, fistR, tablet);
    shoulderRGroup.add(forearmRGroup);
    body.add(shoulderRGroup);

    // Cozy Floating Thrusters (Leg substitute for modern cartoon style)
    const flameLight = new THREE.PointLight(0xf59e0b, 4, 3);
    flameLight.position.set(0, -1.5, 0);
    alexGroup.add(flameLight);

    const flameGeo = new THREE.ConeGeometry(0.3, 0.8, 16);
    flameGeo.rotateX(Math.PI);
    const flameMat = new THREE.MeshBasicMaterial({
      color: 0xf97316,
      transparent: true,
      opacity: 0.85,
    });
    const flame = new THREE.Mesh(flameGeo, flameMat);
    flame.position.set(0, -1.4, 0);
    alexGroup.add(flame);

    const flameCoreGeo = new THREE.ConeGeometry(0.15, 0.4, 16);
    flameCoreGeo.rotateX(Math.PI);
    const flameCoreMat = new THREE.MeshBasicMaterial({ color: 0xfef08a });
    const flameCore = new THREE.Mesh(flameCoreGeo, flameCoreMat);
    flameCore.position.set(0, -1.2, 0);
    alexGroup.add(flameCore);

    // Position Alex comfortably based on initials
    alexGroup.scale.set(0.9, 0.9, 0.9);
    alexGroup.position.set(2.2, 0.4, 0); // Initially floats elegantly in the default viewport side

    // ==========================================
    // FLOATING CLASSROOM ARTIFACTS
    // ==========================================
    const floatingGroup = new THREE.Group();
    scene.add(floatingGroup);

    const bookMaterialLids = [
      new THREE.MeshStandardMaterial({ color: 0x3b82f6, roughness: 0.6 }), // Blue book
      new THREE.MeshStandardMaterial({ color: 0xa855f7, roughness: 0.5 }), // Purple book
      new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.7 }), // Emerald book
    ];
    const paperMaterial = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.9 });

    const books: THREE.Group[] = [];

    // Shared geometries for books to increase rendering performance
    const covGeo = new THREE.BoxGeometry(0.5, 0.65, 0.12);
    const pagGeo = new THREE.BoxGeometry(0.44, 0.58, 0.1);

    // Construct 3 cute rotating books
    for (let i = 0; i < 3; i++) {
      const book = new THREE.Group();
      // Cover Box
      const cov = new THREE.Mesh(covGeo, bookMaterialLids[i]);
      cov.castShadow = true;
      book.add(cov);

      // Pages insert
      const pag = new THREE.Mesh(pagGeo, paperMaterial);
      pag.position.set(0.04, 0, 0);
      book.add(pag);

      // Random starting layouts orbiting
      const angle = (i / 3) * Math.PI * 2;
      book.position.set(
        Math.cos(angle) * 3.5,
        Math.sin(angle) * 2 + 0.5,
        (Math.random() - 0.5) * 1.5
      );
      book.rotation.set(Math.random(), Math.random(), Math.random());
      floatingGroup.add(book);
      books.push(book);
    }

    // Floating Pencils
    const pencils: THREE.Group[] = [];
    const shaftGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.45, 8);
    const tipGeo = new THREE.ConeGeometry(0.06, 0.14, 8);
    const pointGeo = new THREE.ConeGeometry(0.02, 0.04, 8);

    for (let i = 0; i < 2; i++) {
      const pencil = new THREE.Group();
      // Pencil body shaft
      const shaftMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.5 });
      const shaft = new THREE.Mesh(shaftGeo, shaftMat);
      pencil.add(shaft);

      // Lead conical head
      const tipMat = new THREE.MeshStandardMaterial({ color: 0xffd1b3, roughness: 0.6 });
      const tip = new THREE.Mesh(tipGeo, tipMat);
      tip.position.y = 0.295;
      pencil.add(tip);

      // Graphite point
      const pointMat = new THREE.MeshBasicMaterial({ color: 0x1e293b });
      const pt = new THREE.Mesh(pointGeo, pointMat);
      pt.position.y = 0.35;
      pencil.add(pt);

      const angle = (i / 2) * Math.PI * 2 + Math.PI / 4;
      pencil.position.set(
        Math.cos(angle) * 4,
        Math.sin(angle) * 2 - 1,
        -1
      );
      pencil.rotation.set(0.6, 0.2, 1.2 * i);
      floatingGroup.add(pencil);
      pencils.push(pencil);
    }

    // Floating graduation cap representing complete certification
    const capGroup = new THREE.Group();
    const skullCapGeo = new THREE.CylinderGeometry(0.35, 0.38, 0.18, 16);
    const skullMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.5 });
    const skull = new THREE.Mesh(skullCapGeo, skullMat);
    capGroup.add(skull);

    const plateGeo = new THREE.BoxGeometry(0.85, 0.04, 0.85);
    const plate = new THREE.Mesh(plateGeo, skullMat);
    plate.position.y = 0.11;
    capGroup.add(plate);

    // Little gold tassel
    const tasselGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.2, 8);
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, metalness: 0.8 });
    const tassel = new THREE.Mesh(tasselGeo, goldMat);
    tassel.position.set(0.32, -0.05, 0.32);
    capGroup.add(tassel);

    capGroup.position.set(-2.4, 2, -1.5);
    capGroup.scale.set(0.8, 0.8, 0.8);
    floatingGroup.add(capGroup);

    // High fidelity cosmic coordinate stars (Particles)
    const starCount = 38;
    const starGeo = new THREE.SphereGeometry(0.04, 6, 6);
    const starMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const stars: THREE.Mesh[] = [];
    const starSpeeds: number[] = [];
    const starOrbitRadii: number[] = [];

    for (let i = 0; i < starCount; i++) {
      const star = new THREE.Mesh(starGeo, starMat);
      const theta = (i / starCount) * Math.PI * 2 + Math.random();
      const radius = 2.5 + Math.random() * 3.5;
      star.position.set(
        Math.cos(theta) * radius,
        (Math.random() - 0.5) * 5,
        Math.sin(theta) * radius - 2
      );
      scene.add(star);
      stars.push(star);
      starSpeeds.push(0.007 + Math.random() * 0.012);
      starOrbitRadii.push(radius);
    }

    // ==========================================
    // RESPONSIVE RESIZE MONITOR
    // ==========================================
    const handleResize = () => {
      const w = currentMount.clientWidth || window.innerWidth;
      const h = currentMount.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);

      // Adjust scale and coordinates for smaller mobile screen heights
      if (w < 768) {
        alexGroup.scale.set(0.65, 0.65, 0.65);
      } else {
        alexGroup.scale.set(0.88, 0.88, 0.88);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Trigger instantly

    // ==========================================
    // RECTIFY COORDINATE ANIMATOR CYCLE (60 FPS)
    // ==========================================
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      stateRef.current.time = clock.getElapsedTime();
      const t = stateRef.current.time;

      // 1. Blink Cycle handler for eyes
      stateRef.current.blinkTimer += 0.016;
      if (stateRef.current.blinkTimer > 2.8) {
        stateRef.current.isBlinking = true;
        stateRef.current.blinkTimer = 0;
      }
      if (stateRef.current.isBlinking) {
        eyeWhiteLeft.scale.y -= 0.28;
        eyeWhiteRight.scale.y -= 0.28;
        if (eyeWhiteLeft.scale.y <= 0.05) {
          stateRef.current.isBlinking = false;
        }
      } else {
        if (eyeWhiteLeft.scale.y < 1.1) {
          eyeWhiteLeft.scale.y += 0.22;
          eyeWhiteRight.scale.y += 0.22;
        }
      }

      // 2. Character jump and spin transitions on changes
      if (stateRef.current.jumpProgress < 1) {
        stateRef.current.jumpProgress += 0.045; // Jump speed
        const progress = stateRef.current.jumpProgress;
        // Parabolic rise and fall
        const jumpY = Math.sin(progress * Math.PI) * 1.2;
        alexGroup.position.y = jumpY + (stateRef.current.activePage === 'home' ? 0.3 : 0.1);
        alexGroup.rotation.y = progress * Math.PI * 2; // Fun full cartoon spin!
      } else {
        // Natural soft idle floating backplate
        alexGroup.position.y = Math.sin(t * 1.8) * 0.15 + (stateRef.current.activePage === 'home' ? 0.2 : 0.0);
        alexGroup.rotation.y = THREE.MathUtils.lerp(alexGroup.rotation.y, 0, 0.1);
      }

      // 3. Waving forearm animations (Context-Aware Cartoon Behavior)
      stateRef.current.waveProgress += 0.04;
      if (stateRef.current.activePage === 'home') {
        if (stateRef.current.currentSection === 'guide') {
          // Energetic guide pointing toward content
          shoulderLGroup.rotation.set(0, 0, -Math.PI / 3);
          forearmLGroup.rotation.z = Math.sin(t * 4) * 0.15 - 0.4;
          shoulderRGroup.rotation.set(0, 0, Math.PI / 6);
        } else if (stateRef.current.currentSection === 'success') {
          // Double arm wave cheering graduates
          shoulderLGroup.rotation.set(0, 0, -Math.PI / 4 + Math.sin(t * 5) * 0.3);
          shoulderRGroup.rotation.set(0, 0, Math.PI / 4 + Math.cos(t * 5) * 0.3);
          forearmLGroup.rotation.z = -0.2;
          forearmRGroup.rotation.z = 0.2;
        } else {
          // Gentle welcome wave
          shoulderRGroup.rotation.set(0, 0, Math.PI / 3.5);
          forearmRGroup.rotation.z = Math.sin(t * 3.5) * 0.12 + 0.28;
          shoulderLGroup.rotation.set(0, 0, -Math.PI / 12);
        }
      } else if (stateRef.current.activePage === 'courses') {
        // Pointing and explaining categories
        shoulderLGroup.rotation.set(0, 0, -Math.PI / 2.5);
        forearmLGroup.rotation.z = Math.sin(t * 2.8) * 0.08 - 0.35;
        shoulderRGroup.rotation.set(0, 0, Math.PI / 12);
        forearmRGroup.rotation.z = 0.1;
      } else if (stateRef.current.activePage === 'quizzes') {
        // Thinking + reaction gestures (Left arm scratches chin / head)
        shoulderLGroup.rotation.set(-Math.PI / 4, 0, -Math.PI / 1.5);
        forearmLGroup.rotation.y = Math.sin(t * 3.5) * 0.15 + 0.4;
        shoulderRGroup.rotation.set(0, 0, Math.PI / 12);
        forearmRGroup.rotation.z = Math.sin(t * 1.5) * 0.05 + 0.1;
      } else if (stateRef.current.activePage === 'assignments') {
        // Writing / guiding gestures (imaginary pencil in hand, moving arm up/down)
        shoulderRGroup.rotation.set(0, -Math.PI / 6, Math.PI / 4);
        forearmRGroup.rotation.z = Math.sin(t * 4.5) * 0.18 + 0.3;
        shoulderLGroup.rotation.set(0, 0, -Math.PI / 12);
        forearmLGroup.rotation.z = -0.15;
      } else if (stateRef.current.activePage === 'profile') {
        // Achievement + celebration gestures (dual arm waving and energetic hopping)
        shoulderLGroup.rotation.set(0, 0, -Math.PI / 3 + Math.sin(t * 6) * 0.35);
        shoulderRGroup.rotation.set(0, 0, Math.PI / 3 + Math.cos(t * 6) * 0.35);
        forearmLGroup.rotation.z = -0.25;
        forearmRGroup.rotation.z = 0.25;
      } else {
        // Default gentle walking idle pose
        shoulderLGroup.rotation.z = -Math.PI / 12 + Math.sin(t * 1.5) * 0.05;
        forearmLGroup.rotation.z = -Math.PI / 18 + Math.cos(t * 1.5) * 0.04;
        shoulderRGroup.rotation.z = Math.PI / 12 + Math.cos(t * 1.5) * 0.05;
        forearmRGroup.rotation.z = Math.PI / 18;
      }

      // 4. Smooth coordinate transitions based on active pages and sections
      let targetX = 2.2;
      let targetZ = 0;

      const layoutWidth = currentMount.clientWidth;
      const isMobile = layoutWidth < 768;

      if (isMobile) {
        // On mobile, keep Alex at top-center offset to avoid text collision
        targetX = 0;
        targetZ = -0.5;
        alexGroup.position.y += 2.1;
      } else {
        // Distinct layouts per active page state
        switch (stateRef.current.activePage) {
          case 'home':
            if (stateRef.current.currentSection === 'hero') {
              targetX = 2.1;
            } else if (stateRef.current.currentSection === 'guide') {
              targetX = -2.2;
            } else if (stateRef.current.currentSection === 'worlds') {
              targetX = 2.3;
            } else if (stateRef.current.currentSection === 'roadmap') {
              targetX = -2.4;
            } else if (stateRef.current.currentSection === 'testimonials') {
              targetX = 2.3;
            } else if (stateRef.current.currentSection === 'success') {
              targetX = 0;
              targetZ = -0.8;
            } else {
              targetX = 2.1;
            }
            break;
          case 'courses':
            targetX = -2.3; // Sit on left so notes/archives can show nicely on right
            break;
          case 'assignments':
            targetX = -2.3; // Left placement
            break;
          case 'quizzes':
            targetX = 2.4; // Sit right side safely of the questionnaires
            break;
          case 'profile':
            targetX = 2.2; // Right of bento metrics boards
            break;
          default:
            targetX = 2.2;
            break;
        }
      }

      // Lerp character position smoothly to avoid jumpy cuts
      alexGroup.position.x = THREE.MathUtils.lerp(alexGroup.position.x, targetX, 0.08);
      alexGroup.position.z = THREE.MathUtils.lerp(alexGroup.position.z, targetZ, 0.08);

      // 5. Look toward the mouse coords dynamically (Head turning)
      if (head) {
        head.rotation.y = THREE.MathUtils.lerp(head.rotation.y, stateRef.current.mouseX * 0.45, 0.1);
        head.rotation.x = THREE.MathUtils.lerp(head.rotation.x, stateRef.current.mouseY * 0.3, 0.1);
      }

      // 6. Rotate orbit class artifacts (Books, particles)
      books.forEach((b, idx) => {
        b.position.y += Math.sin(t + idx * 2) * 0.003;
        b.rotation.x += 0.005;
        b.rotation.y += 0.008;
      });

      pencils.forEach((p, idx) => {
        p.position.y += Math.cos(t * 1.2 + idx * 3) * 0.003;
        p.rotation.z += 0.006;
      });

      capGroup.position.y = 2 + Math.sin(t * 0.8) * 0.15;
      capGroup.rotation.y += 0.004;

      // Orbit stars in space cloud
      stars.forEach((s, idx) => {
        const speed = starSpeeds[idx];
        const rad = starOrbitRadii[idx];
        s.position.x = Math.cos(t * speed * 20 + idx) * rad;
        s.position.z = Math.sin(t * speed * 20 + idx) * rad - 1;
      });

      // Render the updated scene
      renderer.render(scene, camera);
    };

    animate();

    // ==========================================
    // DISPOSALS TO AVOID MEMORY LEAKS OR DEGRADATION
    // ==========================================
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();

      // Explicitly dispose shapes
      headGeo.dispose();
      bodyGeo.dispose();
      backpackGeo.dispose();
      strapLGeo.dispose();
      upperArmGeo.dispose();
      forearmGeo.dispose();
      fistGeo.dispose();
      tabletGeo.dispose();
      screenGeo.dispose();
      flameGeo.dispose();
      flameCoreGeo.dispose();
      covGeo.dispose();
      pagGeo.dispose();
      shaftGeo.dispose();
      tipGeo.dispose();
      pointGeo.dispose();
      skullCapGeo.dispose();
      plateGeo.dispose();
      tasselGeo.dispose();
      starGeo.dispose();

      skinMaterial.dispose();
      outfitMaterial.dispose();
      sleeveMaterial.dispose();
      backpackMaterial.dispose();
      strapMaterial.dispose();
      hairMaterial.dispose();
      glassMaterial.dispose();
      tabletMaterial.dispose();
      screenMaterial.dispose();
      flameMat.dispose();
      flameCoreMat.dispose();
      paperMaterial.dispose();
      bookMaterialLids.forEach(m => m.dispose());
      skullMat.dispose();
      goldMat.dispose();
      starMat.dispose();

      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, [dimensions]);

  // Keep a container observer to accurately bind WebGL canvas aspect ratio
  useEffect(() => {
    if (!mountRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });
    observer.observe(mountRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="3d-avatar-viewport"
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
