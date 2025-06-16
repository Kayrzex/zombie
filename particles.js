// Gelişmiş partikel sistemi
class ParticleSystem {
    constructor() {
        this.particles = [];
        this.bloodParticles = [];
        this.explosions = [];
    }

    // Kan efekti
    createBloodSplash(x, y, color = '#ff0000') {
        for (let i = 0; i < 15; i++) {
            this.bloodParticles.push({
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 8,
                vy: (Math.random() - 0.5) * 8 - 2,
                size: Math.random() * 4 + 2,
                life: 60 + Math.random() * 30,
                maxLife: 60 + Math.random() * 30,
                color: color,
                gravity: 0.2
            });
        }
    }

    // Patlama efekti
    createExplosion(x, y, size = 50, color = '#ff6600') {
        this.explosions.push({
            x: x,
            y: y,
            radius: 0,
            maxRadius: size,
            life: 30,
            color: color
        });

        // Patlama partikülleri
        for (let i = 0; i < 20; i++) {
            const angle = (Math.PI * 2 / 20) * i;
            this.particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * (3 + Math.random() * 4),
                vy: Math.sin(angle) * (3 + Math.random() * 4),
                size: Math.random() * 3 + 2,
                life: 40 + Math.random() * 20,
                color: color,
                alpha: 1
            });
        }
    }

    // Muzzle flash (namlu alevi)
    createMuzzleFlash(x, y, direction = 1) {
        for (let i = 0; i < 8; i++) {
            this.particles.push({
                x: x,
                y: y,
                vx: (Math.random() * 6 + 2) * direction + (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 4,
                size: Math.random() * 3 + 1,
                life: 10 + Math.random() * 5,
                color: Math.random() > 0.5 ? '#ffff00' : '#ff8800',
                alpha: 1
            });
        }
    }

    // Işık efekti (level up, power-up vb.)
    createLightBurst(x, y, color = '#ffff00') {
        for (let i = 0; i < 30; i++) {
            const angle = (Math.PI * 2 / 30) * i;
            this.particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * (2 + Math.random() * 3),
                vy: Math.sin(angle) * (2 + Math.random() * 3),
                size: Math.random() * 4 + 2,
                life: 50 + Math.random() * 30,
                color: color,
                alpha: 1,
                glow: true
            });
        }
    }

    update() {
        // Normal partikülleri güncelle
        this.particles = this.particles.filter(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.life--;
            p.alpha = p.life / 60;
            return p.life > 0;
        });

        // Kan partikülleri güncelle
        this.bloodParticles = this.bloodParticles.filter(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += p.gravity;
            p.vx *= 0.98;
            p.life--;
            return p.life > 0;
        });

        // Patlamaları güncelle
        this.explosions = this.explosions.filter(e => {
            e.radius += e.maxRadius / 30;
            e.life--;
            return e.life > 0;
        });
    }

    draw(ctx) {
        // Normal partikülleri çiz
        this.particles.forEach(p => {
            ctx.save();
            ctx.globalAlpha = p.alpha;
            if (p.glow) {
                ctx.shadowColor = p.color;
                ctx.shadowBlur = 10;
            }
            ctx.fillStyle = p.color;
            ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
            ctx.restore();
        });

        // Kan partikülleri çiz
        this.bloodParticles.forEach(p => {
            ctx.save();
            ctx.globalAlpha = p.life / p.maxLife;
            ctx.fillStyle = p.color;
            ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
            ctx.restore();
        });

        // Patlamaları çiz
        this.explosions.forEach(e => {
            ctx.save();
            ctx.globalAlpha = e.life / 30;
            ctx.strokeStyle = e.color;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(e.x, e.y, e.radius, 0, Math.PI * 2);
            ctx.stroke();

            // İç daire
            ctx.globalAlpha = (e.life / 30) * 0.3;
            ctx.fillStyle = e.color;
            ctx.fill();
            ctx.restore();
        });
    }

    clear() {
        this.particles = [];
        this.bloodParticles = [];
        this.explosions = [];
    }
}

// Ekran efektleri
class ScreenEffects {
    constructor() {
        this.shakeIntensity = 0;
        this.shakeTime = 0;
        this.flashColor = null;
        this.flashTime = 0;
    }

    // Ekran sarsıntısı
    addScreenShake(intensity, duration) {
        this.shakeIntensity = Math.max(this.shakeIntensity, intensity);
        this.shakeTime = Math.max(this.shakeTime, duration);
    }

    // Ekran yanıp sönmesi
    addFlash(color, duration) {
        this.flashColor = color;
        this.flashTime = duration;
    }

    update() {
        if (this.shakeTime > 0) {
            this.shakeTime--;
            this.shakeIntensity *= 0.9;
        }

        if (this.flashTime > 0) {
            this.flashTime--;
        }
    }

    applyEffects(canvas, ctx) {
        // Ekran sarsıntısı uygula
        if (this.shakeTime > 0) {
            const shakeX = (Math.random() - 0.5) * this.shakeIntensity;
            const shakeY = (Math.random() - 0.5) * this.shakeIntensity;
            canvas.style.transform = `translate(${shakeX}px, ${shakeY}px)`;
        } else {
            canvas.style.transform = 'translate(0px, 0px)';
        }

        // Flash efekti
        if (this.flashTime > 0) {
            ctx.save();
            ctx.globalAlpha = this.flashTime / 20;
            ctx.fillStyle = this.flashColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.restore();
        }
    }
}
