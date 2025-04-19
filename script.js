// Toggle dark mode
document.getElementById('toggle-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  
  // Scroll reveal effect
  const reveals = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    const trigger = window.innerHeight * 0.9;
    reveals.forEach(el => {
      if (el.getBoundingClientRect().top < trigger) {
        el.classList.add('visible');
      }
    });
  };
  
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);


// Custom Cursor Logic
const cursorDot = document.getElementById('cursor-dot');
const cursorOutline = document.getElementById('cursor-outline');

window.addEventListener('mousemove', e => {
  cursorDot.style.top = `${e.clientY}px`;
  cursorDot.style.left = `${e.clientX}px`;
  cursorOutline.style.top = `${e.clientY}px`;
  cursorOutline.style.left = `${e.clientX}px`;
});

window.addEventListener('load', () => {
    const canvas = document.getElementById('bgCanvas');
    const ctx = canvas.getContext('2d');
  
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
  
    const particlesArray = [];
    const numberOfParticles = 90;
  
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 1;
        this.dx = Math.random() - 0.5;
        this.dy = Math.random() - 0.5;
      }
  
      update() {
        this.x += this.dx;
        this.y += this.dy;
        if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.dy *= -1;
      }
  
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 159, 28, 0.5)';
        ctx.fill();
      }
    }
  
    function initParticles() {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }
  
    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animateParticles);
    }
  
    initParticles();
    animateParticles();
  });
