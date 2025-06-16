// Görev sistemi
class MissionSystem {
    static missions = {
        daily: [
            {
                id: 'kill_zombies_25',
                name: 'Zombi Avcısı',
                description: '25 zombi öldür',
                target: 25,
                reward: { tokens: 50, type: 'daily' },
                progress: 0,
                completed: false
            },
            {
                id: 'survive_5_rounds',
                name: 'Hayatta Kalma',
                description: '5 round hayatta kal',
                target: 5,
                reward: { tokens: 75, type: 'daily' },
                progress: 0,
                completed: false
            },
            {
                id: 'use_special_abilities_10',
                name: 'Özel Güç',
                description: '10 kez özel yetenek kullan',
                target: 10,
                reward: { tokens: 60, type: 'daily' },
                progress: 0,
                completed: false
            }
        ],
        weekly: [
            {
                id: 'kill_zombies_500',
                name: 'Zombi Katliamı',
                description: '500 zombi öldür',
                target: 500,
                reward: { tokens: 300, type: 'weekly' },
                progress: 0,
                completed: false
            },
            {
                id: 'survive_25_rounds',
                name: 'Efsane Savaşçı',
                description: '25 round hayatta kal',
                target: 25,
                reward: { tokens: 400, type: 'weekly' },
                progress: 0,
                completed: false
            },
            {
                id: 'buy_5_items',
                name: 'Alışveriş Tutkunu',
                description: '5 eşya satın al',
                target: 5,
                reward: { tokens: 200, type: 'weekly' },
                progress: 0,
                completed: false
            }
        ],
        achievements: [
            {
                id: 'first_kill',
                name: 'İlk Kan',
                description: 'İlk zombini öldür',
                target: 1,
                reward: { tokens: 25, type: 'achievement' },
                progress: 0,
                completed: false
            },
            {
                id: 'zombie_slayer',
                name: 'Zombi Katili',
                description: '1000 zombi öldür',
                target: 1000,
                reward: { tokens: 1000, type: 'achievement' },
                progress: 0,
                completed: false
            },
            {
                id: 'round_master',
                name: 'Round Ustası',
                description: '50 round tamamla',
                target: 50,
                reward: { tokens: 800, type: 'achievement' },
                progress: 0,
                completed: false
            }
        ]
    };

    static init() {
        this.loadProgress();
        this.checkDailyReset();
        this.checkWeeklyReset();
    }

    static loadProgress() {
        const saved = localStorage.getItem('missionProgress');
        if (saved) {
            const progress = JSON.parse(saved);
            Object.keys(this.missions).forEach(category => {
                this.missions[category].forEach((mission, index) => {
                    if (progress[category] && progress[category][index]) {
                        Object.assign(mission, progress[category][index]);
                    }
                });
            });
        }
    }

    static saveProgress() {
        localStorage.setItem('missionProgress', JSON.stringify(this.missions));
    }

    static checkDailyReset() {
        const lastReset = localStorage.getItem('lastDailyReset');
        const today = new Date().toDateString();

        if (lastReset !== today) {
            this.resetDailyMissions();
            localStorage.setItem('lastDailyReset', today);
        }
    }

    static checkWeeklyReset() {
        const lastReset = localStorage.getItem('lastWeeklyReset');
        const now = new Date();
        const weekStart = new Date(now.setDate(now.getDate() - now.getDay()));
        const weekKey = weekStart.toDateString();

        if (lastReset !== weekKey) {
            this.resetWeeklyMissions();
            localStorage.setItem('lastWeeklyReset', weekKey);
        }
    }

    static resetDailyMissions() {
        this.missions.daily.forEach(mission => {
            mission.progress = 0;
            mission.completed = false;
        });
        this.saveProgress();
    }

    static resetWeeklyMissions() {
        this.missions.weekly.forEach(mission => {
            mission.progress = 0;
            mission.completed = false;
        });
        this.saveProgress();
    }

    static updateProgress(missionId, amount = 1) {
        let updated = false;

        Object.keys(this.missions).forEach(category => {
            this.missions[category].forEach(mission => {
                if (mission.id === missionId && !mission.completed) {
                    mission.progress = Math.min(mission.progress + amount, mission.target);
                    if (mission.progress >= mission.target) {
                        this.completeMission(mission);
                    }
                    updated = true;
                }
            });
        });

        if (updated) {
            this.saveProgress();
        }
    }

    static completeMission(mission) {
        mission.completed = true;

        // Ödül ver
        const currentTokens = parseInt(localStorage.getItem('coins') || '0');
        localStorage.setItem('coins', currentTokens + mission.reward.tokens);

        // Bildirim göster
        this.showMissionComplete(mission);
    }

    static showMissionComplete(mission) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(45deg, #4ade80, #22c55e);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(74, 222, 128, 0.4);
            z-index: 2000;
            font-family: 'Courier New', monospace;
            font-size: 16px;
            border: 2px solid #16a34a;
        `;

        notification.innerHTML = `
            <div style="font-weight: bold; margin-bottom: 5px;">🎉 GÖREV TAMAMLANDI!</div>
            <div>${mission.name}</div>
            <div style="font-size: 14px; opacity: 0.9;">+${mission.reward.tokens} Jeton</div>
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 5000);
    }

    static getAllMissions() {
        return {
            daily: this.missions.daily,
            weekly: this.missions.weekly,
            achievements: this.missions.achievements
        };
    }

    static getActiveMissions() {
        const active = {};
        Object.keys(this.missions).forEach(category => {
            active[category] = this.missions[category].filter(m => !m.completed);
        });
        return active;
    }
}

// Görev güncellemeleri için olaylar
window.addEventListener('zombieKilled', () => {
    MissionSystem.updateProgress('kill_zombies_25');
    MissionSystem.updateProgress('kill_zombies_500');
    MissionSystem.updateProgress('first_kill');
    MissionSystem.updateProgress('zombie_slayer');
});

window.addEventListener('roundCompleted', () => {
    MissionSystem.updateProgress('survive_5_rounds');
    MissionSystem.updateProgress('survive_25_rounds');
    MissionSystem.updateProgress('round_master');
});

window.addEventListener('specialAbilityUsed', () => {
    MissionSystem.updateProgress('use_special_abilities_10');
});

window.addEventListener('itemPurchased', () => {
    MissionSystem.updateProgress('buy_5_items');
});

// Sayfa yüklendiğinde görev sistemini başlat
document.addEventListener('DOMContentLoaded', () => {
    MissionSystem.init();
});
