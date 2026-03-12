document.addEventListener('DOMContentLoaded', () => {
    const experience = document.getElementById('experience');
    const openBtn = document.getElementById('open-btn');
    const container = document.getElementById('bg-canvas-container');
    const iconsLayer = document.getElementById('icons-layer');

    // Create Particles
    const createParticles = () => {
        for (let i = 0; i < 40; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const size = Math.random() * 2 + 1;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const duration = Math.random() * 10 + 10;
            const delay = Math.random() * 5;

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.animation = `drift ${duration}s infinite linear ${delay}s`;
            
            container.appendChild(particle);
        }
    };

    // SVG Content for icons
    const iconData = [
        { name: 'lightning', svg: `<svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>` },
        { name: 'tower', svg: `<svg viewBox="0 0 24 24"><path d="M7 22l2-6.5M17 22l-2-6.5M12 2v20M9 8h6M8 12h8M10 4l2-2 2 2"/></svg>` },
        { name: 'nodes', svg: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M7 7l10 10M7 17l10-10M5 7v10M7 5h10"/></svg>` },
        { name: 'helmet', svg: `<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-10 10v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a10 10 0 0 0-10-10zM12 12V6M9 13v-1M15 13v-1"/></svg>` }
    ];

    const createIcons = () => {
        for (let i = 0; i < 10; i++) {
            const data = iconData[i % iconData.length];
            const icon = document.createElement('div');
            icon.className = 'floating-icon';
            icon.innerHTML = data.svg;
            
            const posX = Math.random() * 90;
            const posY = Math.random() * 90;
            const delay = Math.random() * -20;
            const duration = 15 + Math.random() * 10;
            const size = 30 + Math.random() * 30;

            icon.style.left = `${posX}%`;
            icon.style.top = `${posY}%`;
            icon.style.width = `${size}px`;
            icon.style.height = `${size}px`;
            icon.style.animationDelay = `${delay}s`;
            icon.style.animationDuration = `${duration}s`;
            
            iconsLayer.appendChild(icon);
        }
    };

    // Inject drift animation dynamically
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        @keyframes drift {
            0% { transform: translate(0, 0); opacity: 0; }
            20% { opacity: 0.5; }
            80% { opacity: 0.5; }
            100% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); opacity: 0; }
        }
    `;
    document.head.appendChild(styleSheet);

    const triggerReveal = () => {
        if (!experience.classList.contains('revealed')) {
            experience.classList.add('revealed');
            triggerLightning();
            
            if (window.navigator.vibrate) {
                window.navigator.vibrate([50, 20, 50]);
            }
        }
    };

    const triggerLightning = () => {
        const flash = document.createElement('div');
        flash.classList.add('lightning-flash');
        document.body.appendChild(flash);
        setTimeout(() => flash.remove(), 600);
    };

    openBtn.addEventListener('click', triggerReveal);
    
    // Initialize
    createParticles();
    createIcons();
});
