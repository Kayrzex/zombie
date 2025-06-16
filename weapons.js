// Gelişmiş silah sistemi
class WeaponSystem {
    static weapons = {
        // Mevcut silahlar
        pistol: {
            damage: 70, speed: 12, fireRate: 300, name: 'Tabanca',
            unlocked: true, cost: 0, ammo: Infinity, reloadTime: 0
        },
        rifle: {
            damage: 120, speed: 15, fireRate: 150, name: 'Tüfek',
            unlocked: true, cost: 0, ammo: Infinity, reloadTime: 0
        },
        shotgun: {
            damage: 200, speed: 10, fireRate: 800, name: 'Pompalı',
            unlocked: true, cost: 0, ammo: Infinity, reloadTime: 0
        },
        laser: {
            damage: 150, speed: 20, fireRate: 100, name: 'Lazer',
            unlocked: true, cost: 0, ammo: Infinity, reloadTime: 0
        },

        // Yeni silahlar
        machinegun: {
            damage: 80, speed: 18, fireRate: 80, name: 'Makineli Tüfek',
            unlocked: false, cost: 200, ammo: Infinity, reloadTime: 0,
            special: 'rapidFire'
        },

        rocketLauncher: {
            damage: 400, speed: 8, fireRate: 2000, name: 'Roketatar',
            unlocked: false, cost: 500, ammo: Infinity, reloadTime: 0,
            special: 'explosive', explosionRadius: 80
        },

        flamethrower: {
            damage: 60, speed: 6, fireRate: 50, name: 'Alev Silahı',
            unlocked: false, cost: 300, ammo: Infinity, reloadTime: 0,
            special: 'flame', flameLength: 100, flameDuration: 1000
        },

        railgun: {
            damage: 500, speed: 25, fireRate: 1500, name: 'Ray Silahı',
            unlocked: false, cost: 800, ammo: Infinity, reloadTime: 0,
            special: 'pierce' // Tüm düşmanları delip geçer
        },

        freezeGun: {
            damage: 100, speed: 12, fireRate: 400, name: 'Dondurucu',
            unlocked: false, cost: 400, ammo: Infinity, reloadTime: 0,
            special: 'freeze', freezeDuration: 3000
        },

        electricGun: {
            damage: 150, speed: 15, fireRate: 600, name: 'Elektrik Tabancası',
            unlocked: false, cost: 450, ammo: Infinity, reloadTime: 0,
            special: 'chain', chainRange: 100, maxChain: 3
        }
    };

    static unlockWeapon(weaponType, coins) {
        const weapon = this.weapons[weaponType];
        if (weapon && !weapon.unlocked && coins >= weapon.cost) {
            weapon.unlocked = true;
            localStorage.setItem(`weapon_${weaponType}_unlocked`, 'true');
            return weapon.cost;
        }
        return 0;
    }

    static loadUnlockedWeapons() {
        Object.keys(this.weapons).forEach(weaponType => {
            if (localStorage.getItem(`weapon_${weaponType}_unlocked`) === 'true') {
                this.weapons[weaponType].unlocked = true;
            }
        });
    }

    static getAvailableWeapons() {
        return Object.entries(this.weapons)
            .filter(([_, weapon]) => weapon.unlocked)
            .map(([type, weapon]) => ({ type, ...weapon }));
    }

    static getLockedWeapons() {
        return Object.entries(this.weapons)
            .filter(([_, weapon]) => !weapon.unlocked)
            .map(([type, weapon]) => ({ type, ...weapon }));
    }
}
