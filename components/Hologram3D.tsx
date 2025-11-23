import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Hologram3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Get initial dimensions with safety check
    let width = mountRef.current.clientWidth || 300; // Fallback to prevent 0
    let height = mountRef.current.clientHeight || 300;

    // --- SETUP SCENE ---
    const scene = new THREE.Scene();
    // No background color, transparency handled by renderer
    
    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Safety check before appending
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // --- OBJECTS ---
    const group = new THREE.Group();
    scene.add(group);

    // 1. Central Core (Icosahedron) - The "Brain"
    const geometryCore = new THREE.IcosahedronGeometry(1.5, 0);
    const materialCore = new THREE.MeshBasicMaterial({ 
      color: 0x4db5ff, 
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const core = new THREE.Mesh(geometryCore, materialCore);
    group.add(core);

    // 2. Inner Nodes (Points)
    const geometryPoints = new THREE.IcosahedronGeometry(1.5, 1);
    const materialPoints = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.05,
      transparent: true,
      opacity: 0.8
    });
    const points = new THREE.Points(geometryPoints, materialPoints);
    group.add(points);

    // 3. Outer Ring (Torus) - Kinetic Shield
    const geometryRing = new THREE.TorusGeometry(2.2, 0.02, 16, 100);
    const materialRing = new THREE.MeshBasicMaterial({ color: 0x4db5ff, transparent: true, opacity: 0.5 });
    const ring = new THREE.Mesh(geometryRing, materialRing);
    ring.rotation.x = Math.PI / 2;
    group.add(ring);

    // 4. Second Off-Axis Ring
    const ring2 = ring.clone();
    ring2.rotation.x = Math.PI / 3;
    ring2.scale.set(1.2, 1.2, 1.2);
    group.add(ring2);

    // --- INTERACTION ---
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    // --- RESIZE HANDLING ---
    const handleResize = () => {
      if (!mountRef.current) return;
      
      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;
      
      // Only update if dimensions changed and are valid
      if (newWidth > 0 && newHeight > 0 && (width !== newWidth || height !== newHeight)) {
        width = newWidth;
        height = newHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // --- ANIMATION ---
    let reqId: number;
    const animate = () => {
      reqId = requestAnimationFrame(animate);

      // Rotations
      core.rotation.y += 0.005;
      core.rotation.x += 0.002;
      
      points.rotation.y += 0.005;
      points.rotation.x += 0.002;

      ring.rotation.z += 0.01;
      ring.rotation.x += 0.005;

      ring2.rotation.z -= 0.005;
      ring2.rotation.y += 0.005;

      // Pulse Effect
      const time = Date.now() * 0.001;
      const scale = 1 + Math.sin(time * 2) * 0.05;
      core.scale.set(scale, scale, scale);

      // Mouse Parallax
      group.rotation.y += (mouseX * 0.5 - group.rotation.y) * 0.05;
      group.rotation.x += (mouseY * 0.5 - group.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // --- CLEANUP ---
    return () => {
      if (reqId) cancelAnimationFrame(reqId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (mountRef.current && renderer.domElement && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      geometryCore.dispose();
      materialCore.dispose();
      geometryPoints.dispose();
      materialPoints.dispose();
      geometryRing.dispose();
      materialRing.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center animate-float pointer-events-none"
    />
  );
};

export default Hologram3D;