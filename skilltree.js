// Yetenek ağacı sistemi
class SkillTree {
    static skills = {
        // Saldırı dalı
        weaponDamage1: {
            id: 'weaponDamage1',
            name: 'Gelişmiş Mermi',
            description: 'Tüm silahların hasarı +15%',
            icon: '🔥',
            cost: 50,
            maxLevel: 5,
            currentLevel: 0,
            branch: 'attack',
            prerequisites: [],
            effect: (level) => ({ damageMultiplier: 1 + (level * 0.15) })
        },

        criticalHit: {
            id: 'criticalHit',
            name: 'Kritik Vuruş',
            description: '%5 şansla 2x hasar (level başına)',
            icon: '💥',
            cost: 80,
            maxLevel: 3,
            currentLevel: 0,
            branch: 'attack',
            prerequisites: ['weaponDamage1'],
            effect: (level) => ({ critChance: level * 0.05 })
        },

        piercingShots: {
            id: 'piercingShots',
            name: 'Delici Mermiler',
            description: 'Mermiler düşmanları delip geçer',
            icon: '🎯',
            cost: 120,
            maxLevel: 1,
            currentLevel: 0,
            branch: 'attack',
            prerequisites: ['criticalHit'],
            effect: (level) => ({ piercing: level > 0 })
        },

        // Savunma dalı
        healthBoost: {
            id: 'healthBoost',
            name: 'Güçlü Kalp',
            description: 'Maksimum can +25 (level başına)',
            icon: '❤️',
            cost: 40,
            maxLevel: 5,
            currentLevel: 0,
            branch: 'defense',
            prerequisites: [],
            effect: (level) => ({ healthBonus: level * 25 })
        },

        armor: {
            id: 'armor',
            name: 'Zırh',
            description: 'Alınan hasar %10 azalır (level başına)',
            icon: '🛡️',
            cost: 70,
            maxLevel: 3,
            currentLevel: 0,
            branch: 'defense',
            prerequisites: ['healthBoost'],
            effect: (level) => ({ damageReduction: level * 0.1 })
        },

        regeneration: {
            id: 'regeneration',
            name: 'Yenilenme',
            description: 'Saniyede 1 can yeniler',
            icon: '💚',
            cost: 100,
            maxLevel: 3,
            currentLevel: 0,
            branch: 'defense',
            prerequisites: ['armor'],
            effect: (level) => ({ regenRate: level })
        },

        // Yardımcı dal
        moveSpeed: {
            id: 'moveSpeed',
            name: 'Çeviklik',
            description: 'Hareket hızı +20% (level başına)',
            icon: '💨',
            cost: 45,
            maxLevel: 4,
            currentLevel: 0,
            branch: 'utility',
            prerequisites: [],
            effect: (level) => ({ speedMultiplier: 1 + (level * 0.2) })
        },

        coinMagnet: {
            id: 'coinMagnet',
            name: 'Jeton Mıknatısı',
            description: 'Jetonlar otomatik toplanır',
            icon: '🧲',
            cost: 60,
            maxLevel: 1,
            currentLevel: 0,
            branch: 'utility',
            prerequisites: ['moveSpeed'],
            effect: (level) => ({ autoCollect: level > 0 })
        },

        doubleCoin: {
            id: 'doubleCoin',
            name: 'Çifte Jeton',
            description: '2x jeton kazanırsın',
            icon: '💰',
            cost: 150,
            maxLevel: 1,
            currentLevel: 0,
            branch: 'utility',
            prerequisites: ['coinMagnet'],
            effect: (level) => ({ coinMultiplier: level > 0 ? 2 : 1 })
        },

        // Özel dallar
        multiShot: {
            id: 'multiShot',
            name: 'Çoklu Atış',
            description: 'Aynı anda 2 mermi atar',
            icon: '🔫',
            cost: 200,
            maxLevel: 2,
            currentLevel: 0,
            branch: 'special',
            prerequisites: ['weaponDamage1', 'moveSpeed'],
            effect: (level) => ({ extraShots: level })
        },

        timeSlowdown: {
            id: 'timeSlowdown',
            name: 'Zaman Yavaşlatma',
            description: 'Düşmanlar %30 yavaşlar',
            icon: '⏰',
            cost: 180,
            maxLevel: 1,
            currentLevel: 0,
            branch: 'special',
            prerequisites: ['healthBoost', 'moveSpeed'],
            effect: (level) => ({ enemySlowdown: level > 0 ? 0.3 : 0 })
        }
    };

    static loadSkills() {
        Object.keys(this.skills).forEach(skillId => {
            const savedLevel = localStorage.getItem(`skill_${skillId}`);
            if (savedLevel) {
                this.skills[skillId].currentLevel = parseInt(savedLevel);
            }
        });
    }

    static saveSkills() {
        Object.keys(this.skills).forEach(skillId => {
            localStorage.setItem(`skill_${skillId}`, this.skills[skillId].currentLevel);
        });
    }

    static canUpgradeSkill(skillId) {
        const skill = this.skills[skillId];
        if (!skill || skill.currentLevel >= skill.maxLevel) return false;

        // Ön koşulları kontrol et
        for (let prereq of skill.prerequisites) {
            if (this.skills[prereq].currentLevel === 0) return false;
        }

        return true;
    }

    static upgradeSkill(skillId, coins) {
        const skill = this.skills[skillId];
        if (!this.canUpgradeSkill(skillId)) return 0;

        const cost = skill.cost * (skill.currentLevel + 1);
        if (coins >= cost) {
            skill.currentLevel++;
            this.saveSkills();
            return cost;
        }

        return 0;
    }

    static getActiveEffects() {
        const effects = {
            damageMultiplier: 1,
            critChance: 0,
            piercing: false,
            healthBonus: 0,
            damageReduction: 0,
            regenRate: 0,
            speedMultiplier: 1,
            autoCollect: false,
            coinMultiplier: 1,
            extraShots: 0,
            enemySlowdown: 0
        };

        Object.values(this.skills).forEach(skill => {
            if (skill.currentLevel > 0) {
                const skillEffects = skill.effect(skill.currentLevel);
                Object.assign(effects, skillEffects);
            }
        });

        return effects;
    }

    static getSkillsByBranch(branch) {
        return Object.values(this.skills).filter(skill => skill.branch === branch);
    }

    static getTotalSpentPoints() {
        return Object.values(this.skills).reduce((total, skill) => {
            return total + (skill.currentLevel * skill.cost);
        }, 0);
    }
}
