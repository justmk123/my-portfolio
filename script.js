// --- INITIALIZE ICONS ---
lucide.createIcons();

// --- DATA ---
const MARQUEE_TEXT = "PENETRATION TESTING • NETWORK SECURITY • CRYPTOGRAPHY • INCIDENT RESPONSE • ETHICAL HACKING • MALWARE ANALYSIS • OSINT • ";

const SKILLS_DATA = [
    { category: "OFFENSIVE SEC", icon: "terminal", items: ["Burp Suite", "Metasploit", "Nmap", "Kali Linux", "SQLMap", "Hydra"] },
    { category: "DEFENSIVE OPS", icon: "database", items: ["SIEM (Wazuh)", "Wireshark", "Snort IDS", "Firewalls", "Incident Response", "Splunk"] },
    { category: "SCRIPTING", icon: "code", items: ["Python", "Bash", "PowerShell", "C++", "Assembly", "Go"] },
    { category: "INFRASTRUCTURE", icon: "brain", items: ["Linux Hardening", "Active Directory", "Docker", "AWS Security", "TCP/IP Analysis", "VPNs"] }
];

const PROJECTS_DATA = [
    { title: "PACKET SENTINEL", description: "A Python-based network traffic analyzer and intrusion detection system capable of flagging suspicious TCP/UDP signatures in real-time.", tags: ["Python", "Scapy", "Wireshark", "Socket Programming"], image: "https://images.unsplash.com/photo-1558494949-ef253b29427b?q=80&w=800&auto=format&fit=crop", links: { demo: "#", code: "#" } },
    { title: "SECURE VAULT", description: "End-to-end encrypted file sharing platform implementing AES-256 and RSA encryption standards for secure data exchange.", tags: ["Cryptography", "Node.js", "OpenSSL", "React"], image: "https://images.unsplash.com/photo-1614064641938-3bcee52942c9?q=80&w=800&auto=format&fit=crop", links: { demo: "#", code: "#" } },
    { title: "VULN SCANNER", description: "Automated vulnerability scanner that checks web applications for OWASP Top 10 flaws like SQL Injection and XSS.", tags: ["Bash", "Python", "OWASP", "Automation"], image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop", links: { demo: "#", code: "#" } },
    { title: "KEYLOGGER HUNTER", description: "A memory forensics tool designed to detect and isolate hook-based keyloggers in Windows environments.", tags: ["C++", "WinAPI", "Malware Analysis", "Forensics"], image: "https://images.unsplash.com/photo-1563206767-5b1d972eefab?q=80&w=800&auto=format&fit=crop", links: { demo: "#", code: "#" } }
];

// --- POPULATE MARQUEE ---
const marqueeContainer = document.getElementById('marquee-content');
if (marqueeContainer) {
    for (let i = 0; i < 4; i++) {
        const span = document.createElement('span');
        span.className = "text-4xl md:text-6xl font-futuristic font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-brand-blue/20 to-gray-800 mx-4 select-none opacity-50";
        span.innerText = MARQUEE_TEXT;
        marqueeContainer.appendChild(span);
    }
}

// --- POPULATE SKILLS ---
const skillsGrid = document.getElementById('skills-grid');
if (skillsGrid) {
    SKILLS_DATA.forEach(group => {
        const div = document.createElement('div');
        div.className = "group relative p-6 bg-gray-900/40 backdrop-blur-sm border border-gray-800 hover:border-brand-blue/50 transition-all duration-500 hover:-translate-y-2 rounded-xl overflow-hidden";
        div.innerHTML = `
            <div class="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute top-0 right-0 w-2 h-2 border-t border-r border-gray-600 group-hover:border-brand-blue transition-colors duration-300"></div>
            <div class="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gray-600 group-hover:border-brand-blue transition-colors duration-300"></div>
            <div class="relative z-10 flex flex-col items-center text-center">
                <div class="mb-6 p-4 rounded-full bg-gray-800/50 text-brand-blue group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(77,181,255,0.3)] transition-all duration-300">
                    <i data-lucide="${group.icon}" class="w-8 h-8"></i>
                </div>
                <h4 class="font-futuristic font-bold text-xl shiny-text mb-6 tracking-wide group-hover:text-brand-blue transition-colors" data-shuffle>${group.category}</h4>
                <div class="flex flex-wrap justify-center gap-2">
                    ${group.items.map(item => `<span class="px-3 py-1 text-sm font-rajdhani font-semibold text-gray-300 bg-black/50 border border-gray-700 rounded hover:border-brand-blue hover:text-white transition-colors cursor-default">${item}</span>`).join('')}
                </div>
            </div>
        `;
        skillsGrid.appendChild(div);
    });
    lucide.createIcons(); // Refresh icons for new elements
}

// --- POPULATE PROJECTS ---
const projectsGrid = document.getElementById('projects-grid');
if (projectsGrid) {
    PROJECTS_DATA.forEach((project, index) => {
        const div = document.createElement('div');
        div.className = "group relative bg-gray-900/20 border border-gray-800 hover:border-brand-blue/60 transition-colors duration-500 overflow-hidden";
        div.innerHTML = `
            <div class="relative h-64 overflow-hidden">
                <div class="absolute inset-0 bg-brand-blue/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-500"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0">
                <div class="absolute top-4 right-4 z-20 bg-black/70 backdrop-blur border border-brand-blue/30 px-3 py-1">
                    <span class="font-futuristic text-xs text-brand-blue">SYS_ID_0${index + 1}</span>
                </div>
            </div>
            <div class="p-8 relative">
                <div class="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 class="text-2xl font-futuristic font-bold mb-3 shiny-text group-hover:text-brand-blue transition-colors" data-shuffle>${project.title}</h3>
                <p class="font-rajdhani text-gray-400 mb-6 leading-relaxed text-lg">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-8">
                    ${project.tags.map(tag => `<span class="px-2 py-1 text-xs font-futuristic text-brand-blue border border-brand-blue/20 bg-brand-blue/5">${tag}</span>`).join('')}
                </div>
                <div class="flex items-center gap-6 pt-6 border-t border-gray-800 group-hover:border-brand-blue/30 transition-colors">
                    <a href="${project.links.code}" class="flex items-center gap-2 text-sm font-rajdhani font-bold text-gray-400 hover:text-white transition-colors">
                        <i data-lucide="github" class="w-4 h-4"></i> SOURCE_CODE
                    </a>
                    <a href="${project.links.demo}" class="flex items-center gap-2 text-sm font-rajdhani font-bold text-brand-blue hover:text-white transition-colors">
                        <i data-lucide="external-link" class="w-4 h-4"></i> LIVE_DEMO
                    </a>
                </div>
            </div>
            <div class="absolute bottom-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-gray-800 group-hover:border-b-brand-blue transition-colors duration-300"></div>
        `;
        projectsGrid.appendChild(div);
    });
    lucide.createIcons();
}

// --- SHUFFLE TEXT ---
const CYBER_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*<>[]{}';

class ShuffleText {
    constructor(element) {
        this.element = element;
        this.originalText = element.innerText;
        this.delay = parseInt(element.getAttribute('data-delay') || '0');
        this.interval = null;
        this.animated = false;
        
        element.addEventListener('mouseenter', () => this.start());
        
        // Use Intersection Observer
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animated) {
                    this.animated = true;
                    setTimeout(() => this.start(), this.delay);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        
        observer.observe(element);
    }

    start() {
        let iteration = 0;
        clearInterval(this.interval);

        this.interval = setInterval(() => {
            this.element.innerText = this.originalText
                .split('')
                .map((letter, index) => {
                    if (index < iteration) return this.originalText[index];
                    return CYBER_CHARS[Math.floor(Math.random() * CYBER_CHARS.length)];
                })
                .join('');

            if (iteration >= this.originalText.length) {
                clearInterval(this.interval);
                this.element.innerText = this.originalText;
            }

            iteration += 1 / 3;
        }, 30);
    }
}

document.querySelectorAll('[data-shuffle]').forEach(el => new ShuffleText(el));

// --- 3D HOLOGRAM (Abstract Icosahedron) ---
const hologramContainer = document.getElementById('hologram-container');
if (hologramContainer) {
    const width = hologramContainer.clientWidth || 500;
    const height = hologramContainer.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    hologramContainer.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Core
    const geometryCore = new THREE.IcosahedronGeometry(1.5, 0);
    const materialCore = new THREE.MeshBasicMaterial({ color: 0x4db5ff, wireframe: true, transparent: true, opacity: 0.3 });
    const core = new THREE.Mesh(geometryCore, materialCore);
    group.add(core);

    // Points
    const geometryPoints = new THREE.IcosahedronGeometry(1.5, 1);
    const materialPoints = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05, transparent: true, opacity: 0.8 });
    const points = new THREE.Points(geometryPoints, materialPoints);
    group.add(points);

    // Rings
    const geometryRing = new THREE.TorusGeometry(2.2, 0.02, 16, 100);
    const materialRing = new THREE.MeshBasicMaterial({ color: 0x4db5ff, transparent: true, opacity: 0.5 });
    const ring = new THREE.Mesh(geometryRing, materialRing);
    ring.rotation.x = Math.PI / 2;
    group.add(ring);

    const ring2 = ring.clone();
    ring2.rotation.x = Math.PI / 3;
    ring2.scale.set(1.2, 1.2, 1.2);
    group.add(ring2);

    let mouseX = 0, mouseY = 0;
    window.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    window.addEventListener('resize', () => {
        const newWidth = hologramContainer.clientWidth;
        const newHeight = hologramContainer.clientHeight;
        renderer.setSize(newWidth, newHeight);
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
    });

    function animateHologram() {
        requestAnimationFrame(animateHologram);
        core.rotation.y += 0.005;
        core.rotation.x += 0.002;
        points.rotation.y += 0.005;
        points.rotation.x += 0.002;
        ring.rotation.z += 0.01;
        ring.rotation.x += 0.005;
        ring2.rotation.z -= 0.005;
        ring2.rotation.y += 0.005;
        
        const time = Date.now() * 0.001;
        const scale = 1 + Math.sin(time * 2) * 0.05;
        core.scale.set(scale, scale, scale);

        group.rotation.y += (mouseX * 0.5 - group.rotation.y) * 0.05;
        group.rotation.x += (mouseY * 0.5 - group.rotation.x) * 0.05;
        
        renderer.render(scene, camera);
    }
    animateHologram();
}

// --- COSMOS BACKGROUND ---
const canvas = document.getElementById('cosmos-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const PARTICLE_COUNT = Math.min(100, Math.floor(window.innerWidth / 15));
    const CONNECTION_DISTANCE = 150;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.3;
            this.vy = (Math.random() - 0.5) * 0.3;
            this.size = Math.random() * 2 + 1;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(77, 181, 255, 0.5)';
            ctx.fill();
        }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

    function animateCosmos() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p, index) => {
            p.update();
            p.draw();
            for (let j = index + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                if (dist < CONNECTION_DISTANCE) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(77, 181, 255, ${0.15 * (1 - dist/CONNECTION_DISTANCE)})`;
                    ctx.lineWidth = 1 - dist/CONNECTION_DISTANCE;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        });
        requestAnimationFrame(animateCosmos);
    }
    animateCosmos();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// --- CUSTOM CURSOR ---
const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
if (dot && ring) {
    let mouse = { x: -100, y: -100 };
    let ringPos = { x: -100, y: -100 };
    let isHovering = false;

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        dot.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
        
        // Hover Detection
        const target = e.target;
        if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
            isHovering = true;
            dot.classList.add('bg-white');
            dot.classList.remove('bg-brand-blue');
            dot.style.width = '4px';
            dot.style.height = '4px';
            ring.classList.add('w-12', 'h-12', 'bg-brand-blue/10', 'border-brand-blue/50');
            ring.classList.remove('w-8', 'h-8', 'opacity-50');
        } else {
            isHovering = false;
            dot.classList.remove('bg-white');
            dot.classList.add('bg-brand-blue');
            dot.style.width = '8px';
            dot.style.height = '8px';
            ring.classList.remove('w-12', 'h-12', 'bg-brand-blue/10', 'border-brand-blue/50');
            ring.classList.add('w-8', 'h-8', 'opacity-50');
        }
    });

    window.addEventListener('mousedown', () => ring.classList.add('scale-75'));
    window.addEventListener('mouseup', () => ring.classList.remove('scale-75'));

    function animateCursor() {
        ringPos.x += (mouse.x - ringPos.x) * 0.15;
        ringPos.y += (mouse.y - ringPos.y) * 0.15;
        ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
}