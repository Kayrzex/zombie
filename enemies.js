// Yeni düşman türleri
class EnemyTypes {
    static getEnemyConfig(type, round) {
        const configs = {
            // Hızlı zombi (az can, çok hızlı)
            speedZombie: {
                hp: 120,
                speed: 4.5,
                damage: 25,
                color: 'lightblue',
                points: 8,
                coins: 2,
                size: { width: 50, height: 50 }
            },

            // Tank zombi (çok can, yavaş)
            tankZombie: {
                hp: 500,
                speed: 1,
                damage: 50,
                color: 'darkred',
                points: 15,
                coins: 3,
                size: { width: 80, height: 80 }
            },

            // Zehirli zombi (ölürken zehir bulutu)
            poisonZombie: {
                hp: 200,
                speed: 2,
                damage: 30,
                color: 'green',
                points: 12,
                coins: 2,
                size: { width: 64, height: 64 },
                special: 'poison'
            },

            // Uçan düşman (havada uçar)
            flyingEnemy: {
                hp: 150,
                speed: 3,
                damage: 20,
                color: 'purple',
                points: 10,
                coins: 2,
                size: { width: 48, height: 48 },
                special: 'flying'
            },            // Bölünen zombi (ölünce 2 küçük zombiye bölünür)
            splitterZombie: {
                hp: 300,
                speed: 1.5,
                damage: 35,
                color: 'orange',
                points: 20,
                coins: 4,
                size: { width: 70, height: 70 },
                special: 'split'
            },

            // Sürünen zombi (yerde sürünen, hızlı)
            crawlerZombie: {
                hp: 80,
                speed: 2.5,
                damage: 15,
                color: 'green',
                points: 10,
                coins: 2,
                size: { width: 32, height: 32 },
                special: 'crawler'
            },

            // Mini boss (her 3 round'da bir)
            miniBoss: {
                hp: 800,
                speed: 2,
                damage: 60,
                color: 'gold',
                points: 50,
                coins: 8,
                size: { width: 90, height: 90 },
                special: 'miniBoss'
            }
        };

        // Round'a göre HP ve speed artışı
        const config = { ...configs[type] };
        if (config) {
            config.hp = Math.floor(config.hp * (1 + (round - 1) * 0.3));
            config.speed = Math.min(config.speed * (1 + (round - 1) * 0.1), config.speed * 2);
        }

        return config;
    }

    static getRandomEnemyType(round) {
        const types = ['speedZombie', 'tankZombie'];        // Round ilerledikçe yeni düşman türleri ekle
        if (round >= 2) types.push('poisonZombie');
        if (round >= 2) types.push('crawlerZombie');
        if (round >= 3) types.push('flyingEnemy');
        if (round >= 4) types.push('splitterZombie');
        if (round >= 3 && round % 3 === 0 && Math.random() < 0.3) {
            types.push('miniBoss');
        }

        return types[Math.floor(Math.random() * types.length)];
    }
}
