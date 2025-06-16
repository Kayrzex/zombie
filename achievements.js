// Başarım sistemi
class AchievementSystem {
    static achievements = {
        firstKill: {
            id: 'firstKill',
            name: 'İlk Kan',
            description: 'İlk zombini öldür',
            icon: '🩸',
            reward: 10,
            unlocked: false,
            condition: (stats) => stats.totalKills >= 1
        },

        killStreak: {
            id: 'killStreak',
            name: 'Katil Makine',
            description: '50 zombi öldür',
            icon: '💀',
            reward: 50,
            unlocked: false,
            condition: (stats) => stats.totalKills >= 50
        },

        bossKiller: {
            id: 'bossKiller',
            name: 'Boss Avcısı',
            description: 'İlk boss\'u öldür',
            icon: '👑',
            reward: 100,
            unlocked: false,
            condition: (stats) => stats.bossKills >= 1
        },

        survivor: {
            id: 'survivor',
            name: 'Hayatta Kalan',
            description: '5. round\'u tamamla',
            icon: '🏆',
            reward: 200,
            unlocked: false,
            condition: (stats) => stats.maxRound >= 5
        },

        sharpshooter: {
            id: 'sharpshooter',
            name: 'Keskin Nişancı',
            description: '%90 isabet oranı',
            icon: '🎯',
            reward: 75,
            unlocked: false,
            condition: (stats) => stats.shots > 50 && (stats.hits / stats.shots) >= 0.9
        },

        collector: {
            id: 'collector',
            name: 'Koleksiyoncu',
            description: '500 jeton topla',
            icon: '💰',
            reward: 100,
            unlocked: false,
            condition: (stats) => stats.totalCoins >= 500
        },

        speedKiller: {
            id: 'speedKiller',
            name: 'Hızlı Katil',
            description: '10 saniyede 10 zombi öldür',
            icon: '⚡',
            reward: 80,
            unlocked: false,
            condition: (stats) => stats.fastestKillStreak >= 10
        },

        weaponMaster: {
            id: 'weaponMaster',
            name: 'Silah Ustası',
            description: 'Tüm silahları aç',
            icon: '🔫',
            reward: 300,
            unlocked: false,
            condition: (stats) => stats.unlockedWeapons >= 10
        }
    };

    static stats = {
        totalKills: 0,
        bossKills: 0,
        maxRound: 0,
        shots: 0,
        hits: 0,
        totalCoins: 0,
        fastestKillStreak: 0,
        unlockedWeapons: 4,
        currentKillStreak: 0,
        killStreakStartTime: 0
    };

    static loadStats() {
        Object.keys(this.stats).forEach(key => {
            const saved = localStorage.getItem(`stat_${key}`);
            if (saved) this.stats[key] = parseInt(saved) || 0;
        });

        Object.keys(this.achievements).forEach(key => {
            const unlocked = localStorage.getItem(`achievement_${key}`);
            if (unlocked === 'true') this.achievements[key].unlocked = true;
        });
    }

    static saveStats() {
        Object.keys(this.stats).forEach(key => {
            localStorage.setItem(`stat_${key}`, this.stats[key]);
        });
    }

    static updateStat(statName, value) {
        this.stats[statName] = value;
        this.checkAchievements();
        this.saveStats();
    }

    static incrementStat(statName, amount = 1) {
        this.stats[statName] += amount;
        this.checkAchievements();
        this.saveStats();
    }

    static checkAchievements() {
        Object.values(this.achievements).forEach(achievement => {
            if (!achievement.unlocked && achievement.condition(this.stats)) {
                this.unlockAchievement(achievement);
            }
        });
    }

    static unlockAchievement(achievement) {
        achievement.unlocked = true;
        localStorage.setItem(`achievement_${achievement.id}`, 'true');

        // Jeton ödülü ver
        let coins = parseInt(localStorage.getItem('coins') || '0');
        coins += achievement.reward;
        localStorage.setItem('coins', coins);

        // Başarım bildirimi göster
        this.showAchievementNotification(achievement);
    }

    static showAchievementNotification(achievement) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(45deg, #FFD700, #FFA500);
            color: black;
            padding: 15px 20px;
            border-radius: 10px;
            font-size: 16px;
            font-weight: bold;
            z-index: 10000;
            box-shadow: 0 4px 15px rgba(255, 215, 0, 0.5);
            border: 2px solid #FFD700;
            transform: translateX(400px);
            transition: transform 0.5s ease;
        `;

        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 24px;">${achievement.icon}</span>
                <div>
                    <div style="font-size: 18px;">BAŞARIM AÇILDI!</div>
                    <div style="font-size: 14px; margin-top: 2px;">${achievement.name}</div>
                    <div style="font-size: 12px; color: #444; margin-top: 2px;">+${achievement.reward} Jeton</div>
                </div>
            </div>
        `;

        document.body.appendChild(notification);

        // Animasyon
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentNode) notification.parentNode.removeChild(notification);
            }, 500);
        }, 4000);
    }

    static getUnlockedAchievements() {
        return Object.values(this.achievements).filter(a => a.unlocked);
    }

    static getLockedAchievements() {
        return Object.values(this.achievements).filter(a => !a.unlocked);
    }

    static getProgress() {
        const total = Object.keys(this.achievements).length;
        const unlocked = this.getUnlockedAchievements().length;
        return { unlocked, total, percentage: Math.round((unlocked / total) * 100) };
    }
}
