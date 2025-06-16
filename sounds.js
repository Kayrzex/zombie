// Ses sistemi için yardımcı fonksiyonlar
class SoundManager {
    constructor() {
        this.sounds = {};
        this.musicVolume = 0.5;
        this.effectsVolume = 0.7;
        this.currentMusic = null;
    }

    // Ses dosyası yükle
    loadSound(name, src) {
        this.sounds[name] = new Audio(src);
        this.sounds[name].volume = this.effectsVolume;
    }

    // Ses efekti çal
    playEffect(name) {
        if (this.sounds[name]) {
            this.sounds[name].currentTime = 0;
            this.sounds[name].play().catch(e => console.log('Ses çalınamadı:', e));
        }
    }

    // Müzik çal
    playMusic(name, loop = true) {
        if (this.currentMusic) {
            this.currentMusic.pause();
        }
        if (this.sounds[name]) {
            this.currentMusic = this.sounds[name];
            this.currentMusic.volume = this.musicVolume;
            this.currentMusic.loop = loop;
            this.currentMusic.play().catch(e => console.log('Müzik çalınamadı:', e));
        }
    }

    // Müziği durdur
    stopMusic() {
        if (this.currentMusic) {
            this.currentMusic.pause();
            this.currentMusic.currentTime = 0;
        }
    }
}

// Web Audio API ile basit ses efektleri oluştur
class SynthSounds {
    constructor() {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    // Ateş sesi
    shootSound() {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(200, this.audioContext.currentTime + 0.1);

        gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);

        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + 0.1);
    }

    // Zombi ölüm sesi
    zombieDeathSound() {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        oscillator.frequency.setValueAtTime(150, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(50, this.audioContext.currentTime + 0.3);

        gainNode.gain.setValueAtTime(0.2, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);

        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + 0.3);
    }

    // Power-up sesi
    powerUpSound() {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();

                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);

                oscillator.frequency.setValueAtTime(400 + i * 200, this.audioContext.currentTime);

                gainNode.gain.setValueAtTime(0.2, this.audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2);

                oscillator.start();
                oscillator.stop(this.audioContext.currentTime + 0.2);
            }, i * 100);
        }
    }
}
