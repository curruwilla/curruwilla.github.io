document.addEventListener('DOMContentLoaded', function() {
    const linkItems = document.querySelectorAll('.link-item');
    const card = document.querySelector('.card');
    const backgroundShapes = document.querySelectorAll('.shape');
    
    // Adiciona efeito de hover com cursor personalizado
    linkItems.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
            
            // Efeito de part�culas no hover
            createHoverEffect(this);
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        // Efeito de click com ondula��o
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const rect = this.getBoundingClientRect();
            const ripple = document.createElement('span');
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(0, 212, 255, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                left: ${x}px;
                top: ${y}px;
                width: ${size}px;
                height: ${size}px;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
                handleLinkClick(this);
            }, 300);
        });
    });
    
    // Fun��o para criar efeito de part�culas no hover
    function createHoverEffect(element) {
        const rect = element.getBoundingClientRect();
        
        for (let i = 0; i < 3; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: var(--accent);
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
                left: ${rect.left + Math.random() * rect.width}px;
                top: ${rect.top + Math.random() * rect.height}px;
                animation: particleFloat 1s ease-out forwards;
            `;
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
    }
    
    // Fun��o para lidar com cliques nos links
    function handleLinkClick(element) {
        const service = element.getAttribute('data-service');
        
        switch(service) {
            case 'whatsapp':
                window.open('https://wa.me/5517981476950?text=Ol�! Gostaria de saber mais sobre desenvolvimento de sites.', '_blank');
                break;
            case 'email':
                window.location.href = 'mailto:curruwilla@gmail.com?subject=Interesse em desenvolvimento de sites';
                break;
            case 'linkedin':
                window.open('https://www.linkedin.com/in/william-alvares/', '_blank');
                break;
            case 'github':
                window.open('https://github.com/curruwilla', '_blank');
                break;
        }
        
        // Adiciona feedback visual
        element.style.transform = 'scale(0.95)';
        setTimeout(() => {
            element.style.transform = 'translateY(-2px)';
        }, 150);
    }
    
    // Efeito parallax sutil no movimento do mouse
    document.addEventListener('mousemove', function(e) {
        const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        const mouseY = (e.clientY / window.innerHeight) * 2 - 1;
        
        card.style.transform = `
            translateY(-10px) 
            rotateX(${mouseY * 2}deg) 
            rotateY(${mouseX * 2}deg)
        `;
        
        // Move as formas de fundo baseado no mouse
        backgroundShapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.5;
            shape.style.transform = `
                translateX(${mouseX * speed * 10}px) 
                translateY(${mouseY * speed * 10}px)
            `;
        });
    });
    
    // Remove o efeito parallax quando o mouse sai da tela
    document.addEventListener('mouseleave', function() {
        card.style.transform = 'translateY(-10px) rotateX(0deg) rotateY(0deg)';
        
        backgroundShapes.forEach(shape => {
            shape.style.transform = 'translateX(0) translateY(0)';
        });
    });
    
    // Anima��o de entrada da p�gina
    function initPageAnimation() {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) scale(0.9)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
        }, 100);
        
        // Anima os links individualmente
        linkItems.forEach((link, index) => {
            link.style.opacity = '0';
            link.style.transform = 'translateX(-30px)';
            
            setTimeout(() => {
                link.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                link.style.opacity = '1';
                link.style.transform = 'translateX(0)';
            }, 300 + (index * 100));
        });
    }
    
    // Adiciona estilos de anima��o via CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        @keyframes particleFloat {
            0% {
                transform: translateY(0) scale(1);
                opacity: 1;
            }
            100% {
                transform: translateY(-20px) scale(0);
                opacity: 0;
            }
        }
        
        .link-item {
            transform-style: preserve-3d;
        }
        
        .card {
            transform-style: preserve-3d;
            transition: transform 0.1s ease-out;
        }
    `;
    document.head.appendChild(style);
    
    // Inicia a anima��o da p�gina
    initPageAnimation();
    
    // Easter egg: efeito especial ao clicar v�rias vezes no avatar
    const avatar = document.querySelector('.avatar');
    let clickCount = 0;
    
    avatar.addEventListener('click', function() {
        clickCount++;
        
        if (clickCount >= 5) {
            this.style.animation = 'none';
            this.style.transform = 'scale(1.2) rotate(360deg)';
            this.style.background = 'linear-gradient(45deg, #ff0080, #ff8c00, #40e0d0, #ff0080)';
            this.style.backgroundSize = '300% 300%';
            this.style.animation = 'avatarPulse 3s ease-in-out infinite, gradientShift 2s ease-in-out infinite';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                clickCount = 0;
            }, 2000);
        }
    });
    
    // Adiciona anima��o de gradiente especial
    const gradientStyle = document.createElement('style');
    gradientStyle.textContent = `
        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
    `;
    document.head.appendChild(gradientStyle);
});