// Gelişmiş menü sistemi
class MenuSystem {
    static createMainMenu() {
        return `
        <div id="mainMenu" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: linear-gradient(135deg, #0a0a0a, #1a1a2e, #16213e);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            color: white;
            font-family: 'Courier New', monospace;
        ">
            <div style="text-align: center; margin-bottom: 50px;">
                <h1 style="
                    font-size: 64px;
                    background: linear-gradient(45deg, #ff6b6b, #ffd93d, #6bcf7f, #4ecdc4, #45b7d1);
                    background-size: 400% 400%;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: gradientShift 3s ease-in-out infinite;
                    text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
                    margin: 0;
                ">ZOMBIE DEFENSE</h1>
                <p style="font-size: 24px; margin: 10px 0; color: #aaa;">Ultimate Survival Experience</p>
            </div>

            <div style="display: flex; flex-direction: column; gap: 20px; min-width: 300px;">
                <button class="menu-btn" onclick="MenuSystem.showGame()" style="
                    padding: 15px 30px;
                    font-size: 20px;
                    background: linear-gradient(45deg, #ff6b6b, #ee5a52);
                    border: none;
                    border-radius: 10px;
                    color: white;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
                " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(255, 107, 107, 0.6)'"
                   onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(255, 107, 107, 0.4)'">
                    🎮 OYUNA BAŞLA
                </button>

                <button class="menu-btn" onclick="MenuSystem.showSkillTree()" style="
                    padding: 15px 30px;
                    font-size: 20px;
                    background: linear-gradient(45deg, #4ecdc4, #44a08d);
                    border: none;
                    border-radius: 10px;
                    color: white;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(78, 205, 196, 0.4);
                " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(78, 205, 196, 0.6)'"
                   onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(78, 205, 196, 0.4)'">
                    🌟 YETENEKLERİM                </button>

                <button class="menu-btn" onclick="MenuSystem.showMissions()" style="
                    padding: 15px 30px;
                    font-size: 20px;
                    background: linear-gradient(45deg, #8b5cf6, #a855f7);
                    border: none;
                    border-radius: 10px;
                    color: white;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
                " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(139, 92, 246, 0.6)'"
                   onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(139, 92, 246, 0.4)'">
                    📋 GÖREVLER
                </button>

                <button class="menu-btn" onclick="MenuSystem.showAchievements()" style="
                    padding: 15px 30px;
                    font-size: 20px;
                    background: linear-gradient(45deg, #ffd93d, #ffb74d);
                    border: none;
                    border-radius: 10px;
                    color: white;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(255, 217, 61, 0.4);
                " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(255, 217, 61, 0.6)'"
                   onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(255, 217, 61, 0.4)'">
                    🏆 BAŞARIMLAR                </button>

                <button class="menu-btn" onclick="MenuSystem.showGameModes()" style="
                    padding: 15px 30px;
                    font-size: 20px;
                    background: linear-gradient(45deg, #f59e0b, #d97706);
                    border: none;
                    border-radius: 10px;
                    color: white;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
                " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(245, 158, 11, 0.6)'"
                   onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(245, 158, 11, 0.4)'">
                    🎮 OYUN MODLARI
                </button>

                <button class="menu-btn" onclick="MenuSystem.showStats()" style="
                    padding: 15px 30px;
                    font-size: 20px;
                    background: linear-gradient(45deg, #a855f7, #7c3aed);
                    border: none;
                    border-radius: 10px;
                    color: white;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(168, 85, 247, 0.4);
                " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(168, 85, 247, 0.6)'"
                   onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(168, 85, 247, 0.4)'">
                    📊 İSTATİSTİKLER
                </button>

                <button class="menu-btn" onclick="MenuSystem.showSettings()" style="
                    padding: 15px 30px;
                    font-size: 20px;
                    background: linear-gradient(45deg, #6b7280, #4b5563);
                    border: none;
                    border-radius: 10px;
                    color: white;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(107, 114, 128, 0.4);
                " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(107, 114, 128, 0.6)'"
                   onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(107, 114, 128, 0.4)'">
                    ⚙️ AYARLAR
                </button>
            </div>

            <div style="position: absolute; bottom: 20px; text-align: center; color: #666;">
                <p>💰 Jeton: <span id="menuCoins">${localStorage.getItem('coins') || '0'}</span></p>
                <p>🏆 En Yüksek Skor: <span id="menuHighScore">${localStorage.getItem('highScore') || '0'}</span></p>
            </div>

            <style>
                @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                .menu-btn:active {
                    transform: translateY(1px) !important;
                }
            </style>
        </div>
        `;
    }

    static createSkillTreeMenu() {
        const skills = SkillTree.skills;
        const effects = SkillTree.getActiveEffects();
        const coins = parseInt(localStorage.getItem('coins') || '0');

        let skillsHTML = '';
        const branches = ['attack', 'defense', 'utility', 'special'];
        const branchNames = {
            attack: '⚔️ Saldırı',
            defense: '🛡️ Savunma',
            utility: '🔧 Yardımcı',
            special: '✨ Özel'
        };

        branches.forEach(branch => {
            const branchSkills = SkillTree.getSkillsByBranch(branch);
            skillsHTML += `
                <div style="background: rgba(0,0,0,0.7); padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                    <h3 style="color: #ffd700; margin-top: 0;">${branchNames[branch]}</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">
            `;

            branchSkills.forEach(skill => {
                const canUpgrade = SkillTree.canUpgradeSkill(skill.id);
                const cost = skill.cost * (skill.currentLevel + 1);
                const maxed = skill.currentLevel >= skill.maxLevel;

                skillsHTML += `
                    <div style="
                        border: 2px solid ${maxed ? '#ffd700' : canUpgrade ? '#4ecdc4' : '#666'};
                        border-radius: 10px;
                        padding: 15px;
                        background: rgba(255,255,255,0.1);
                        ${canUpgrade && !maxed ? 'cursor: pointer;' : ''}
                    " ${canUpgrade && !maxed ? `onclick="MenuSystem.upgradeSkill('${skill.id}')"` : ''}>
                        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                            <span style="font-size: 24px;">${skill.icon}</span>
                            <div>
                                <div style="font-weight: bold; color: white;">${skill.name}</div>
                                <div style="font-size: 12px; color: #aaa;">Level ${skill.currentLevel}/${skill.maxLevel}</div>
                            </div>
                        </div>
                        <div style="color: #ccc; font-size: 14px; margin-bottom: 10px;">${skill.description}</div>
                        <div style="font-size: 12px;">
                            ${maxed ?
                        '<span style="color: #ffd700;">✅ MAX LEVEL</span>' :
                        canUpgrade ?
                            `<span style="color: #4ecdc4;">💰 ${cost} Jeton</span>` :
                            '<span style="color: #666;">🔒 Kilitli</span>'
                    }
                        </div>
                    </div>
                `;
            });

            skillsHTML += '</div></div>';
        });

        return `
        <div id="skillTreeMenu" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: linear-gradient(135deg, #0a0a0a, #1a1a2e, #16213e);
            display: flex;
            flex-direction: column;
            z-index: 1000;
            color: white;
            font-family: 'Courier New', monospace;
            overflow-y: auto;
        ">
            <div style="padding: 20px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;">
                    <h1 style="color: #ffd700; font-size: 36px; margin: 0;">🌟 YETENEK AĞACI</h1>
                    <div style="display: flex; gap: 20px; align-items: center;">
                        <span style="font-size: 18px;">💰 ${coins} Jeton</span>
                        <button onclick="MenuSystem.showMainMenu()" style="
                            padding: 10px 20px;
                            background: #666;
                            border: none;
                            border-radius: 5px;
                            color: white;
                            cursor: pointer;
                        ">Geri Dön</button>
                    </div>
                </div>

                <div style="max-width: 1200px; margin: 0 auto;">
                    ${skillsHTML}
                </div>
            </div>
        </div>
        `;
    }

    static showMainMenu() {
        this.hideAllMenus();
        document.body.insertAdjacentHTML('beforeend', this.createMainMenu());
    }
    static showGame() {
        this.hideAllMenus();

        // Oyun ekranlarını göster
        const startScreen = document.getElementById('startScreen');
        const gameCanvas = document.getElementById('gameCanvas');
        const ui = document.getElementById('ui');

        if (startScreen) startScreen.style.display = 'flex';
        if (gameCanvas) gameCanvas.style.display = 'block';
        if (ui) ui.style.display = 'block';

        // Oyunu başlat
        if (typeof startGame === 'function') {
            startGame();
        }
    }

    static showSkillTree() {
        this.hideAllMenus();
        document.body.insertAdjacentHTML('beforeend', this.createSkillTreeMenu());
    }

    static upgradeSkill(skillId) {
        const coins = parseInt(localStorage.getItem('coins') || '0');
        const cost = SkillTree.upgradeSkill(skillId, coins);

        if (cost > 0) {
            localStorage.setItem('coins', coins - cost);
            this.showSkillTree(); // Menüyü yenile
        }
    }

    static hideAllMenus() {
        const menus = ['mainMenu', 'skillTreeMenu', 'achievementsMenu', 'statsMenu', 'settingsMenu', 'missionsMenu', 'gameModesMenu'];
        menus.forEach(menuId => {
            const menu = document.getElementById(menuId);
            if (menu) menu.remove();
        });
    }
    static showAchievements() {
        this.hideAllMenus();
        const achievements = AchievementSystem.achievements;
        const progress = AchievementSystem.getProgress();

        let achievementsHTML = '';
        Object.values(achievements).forEach(achievement => {
            const status = achievement.unlocked ? 'Tamamlandı' : 'Kilitli';
            const color = achievement.unlocked ? '#4ade80' : '#64748b';

            achievementsHTML += `
                <div style="
                    background: rgba(0,0,0,0.7);
                    padding: 20px;
                    border-radius: 10px;
                    border: 2px solid ${color};
                    margin-bottom: 15px;
                    display: flex;
                    align-items: center;
                    gap: 20px;
                ">
                    <div style="font-size: 40px;">${achievement.icon}</div>
                    <div style="flex: 1;">
                        <div style="font-size: 20px; font-weight: bold; color: white;">${achievement.name}</div>
                        <div style="color: #ccc; margin: 5px 0;">${achievement.description}</div>
                        <div style="color: ${color}; font-size: 14px;">
                            ${status} ${achievement.unlocked ? '' : `- Ödül: ${achievement.reward} Jeton`}
                        </div>
                    </div>
                </div>
            `;
        });

        const achievementsMenuHTML = `
        <div id="achievementsMenu" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: linear-gradient(135deg, #0a0a0a, #1a1a2e, #16213e);
            display: flex;
            flex-direction: column;
            z-index: 1000;
            color: white;
            font-family: 'Courier New', monospace;
            overflow-y: auto;
        ">
            <div style="padding: 20px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;">
                    <h1 style="color: #ffd700; font-size: 36px; margin: 0;">🏆 BAŞARIMLAR</h1>
                    <div style="display: flex; gap: 20px; align-items: center;">
                        <span style="font-size: 18px;">İlerleme: ${progress.unlocked}/${progress.total} (${progress.percentage}%)</span>
                        <button onclick="MenuSystem.showMainMenu()" style="
                            padding: 10px 20px;
                            background: #666;
                            border: none;
                            border-radius: 5px;
                            color: white;
                            cursor: pointer;
                        ">Geri Dön</button>
                    </div>
                </div>

                <div style="max-width: 800px; margin: 0 auto;">
                    ${achievementsHTML}
                </div>
            </div>
        </div>
        `;

        document.body.insertAdjacentHTML('beforeend', achievementsMenuHTML);
    }

    static showStats() {
        this.hideAllMenus();
        const stats = AchievementSystem.stats;

        const statsMenuHTML = `
        <div id="statsMenu" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: linear-gradient(135deg, #0a0a0a, #1a1a2e, #16213e);
            display: flex;
            flex-direction: column;
            z-index: 1000;
            color: white;
            font-family: 'Courier New', monospace;
            overflow-y: auto;
        ">
            <div style="padding: 20px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;">
                    <h1 style="color: #a855f7; font-size: 36px; margin: 0;">📊 İSTATİSTİKLER</h1>
                    <button onclick="MenuSystem.showMainMenu()" style="
                        padding: 10px 20px;
                        background: #666;
                        border: none;
                        border-radius: 5px;
                        color: white;
                        cursor: pointer;
                    ">Geri Dön</button>
                </div>

                <div style="max-width: 800px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                    <div style="background: rgba(0,0,0,0.7); padding: 20px; border-radius: 10px; border: 2px solid #ef4444;">
                        <h3 style="color: #ef4444; margin-top: 0;">⚔️ Savaş İstatistikleri</h3>
                        <div style="margin: 10px 0;">Toplam Öldürme: ${stats.totalKills}</div>
                        <div style="margin: 10px 0;">Boss Öldürme: ${stats.bossKills}</div>
                        <div style="margin: 10px 0;">En Yüksek Round: ${stats.maxRound}</div>
                        <div style="margin: 10px 0;">En Hızlı Kill Streak: ${stats.fastestKillStreak}</div>
                    </div>

                    <div style="background: rgba(0,0,0,0.7); padding: 20px; border-radius: 10px; border: 2px solid #3b82f6;">
                        <h3 style="color: #3b82f6; margin-top: 0;">🎯 Nişan İstatistikleri</h3>
                        <div style="margin: 10px 0;">Toplam Atış: ${stats.shots}</div>
                        <div style="margin: 10px 0;">İsabet: ${stats.hits}</div>
                        <div style="margin: 10px 0;">İsabet Oranı: ${stats.shots > 0 ? Math.round((stats.hits / stats.shots) * 100) : 0}%</div>
                    </div>

                    <div style="background: rgba(0,0,0,0.7); padding: 20px; border-radius: 10px; border: 2px solid #f59e0b;">
                        <h3 style="color: #f59e0b; margin-top: 0;">💰 Ekonomi</h3>
                        <div style="margin: 10px 0;">Toplam Jeton: ${stats.totalCoins}</div>
                        <div style="margin: 10px 0;">Harcanan Puan: ${SkillTree.getTotalSpentPoints()}</div>
                        <div style="margin: 10px 0;">Açılan Silah: ${stats.unlockedWeapons}</div>
                    </div>

                    <div style="background: rgba(0,0,0,0.7); padding: 20px; border-radius: 10px; border: 2px solid #10b981;">
                        <h3 style="color: #10b981; margin-top: 0;">🏆 Başarımlar</h3>
                        <div style="margin: 10px 0;">Açılan: ${AchievementSystem.getUnlockedAchievements().length}</div>
                        <div style="margin: 10px 0;">Toplam: ${Object.keys(AchievementSystem.achievements).length}</div>
                        <div style="margin: 10px 0;">İlerleme: ${AchievementSystem.getProgress().percentage}%</div>
                    </div>
                </div>
            </div>
        </div>
        `;

        document.body.insertAdjacentHTML('beforeend', statsMenuHTML);
    }

    static showSettings() {
        this.hideAllMenus();

        // Ses ayarlarını localStorage'dan al
        const musicVolume = parseInt(localStorage.getItem('musicVolume') || '50');
        const soundVolume = parseInt(localStorage.getItem('soundVolume') || '70');
        const soundEnabled = localStorage.getItem('soundEnabled') !== 'false';

        const settingsMenuHTML = `
        <div id="settingsMenu" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: linear-gradient(135deg, #0a0a0a, #1a1a2e, #16213e);
            display: flex;
            flex-direction: column;
            z-index: 1000;
            color: white;
            font-family: 'Courier New', monospace;
            overflow-y: auto;
        ">
            <div style="padding: 20px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;">
                    <h1 style="color: #6b7280; font-size: 36px; margin: 0;">⚙️ AYARLAR</h1>
                    <button onclick="MenuSystem.showMainMenu()" style="
                        padding: 10px 20px;
                        background: #666;
                        border: none;
                        border-radius: 5px;
                        color: white;
                        cursor: pointer;
                    ">Geri Dön</button>
                </div>

                <div style="max-width: 600px; margin: 0 auto;">
                    <!-- Ses Ayarları -->
                    <div style="background: rgba(0,0,0,0.7); padding: 20px; border-radius: 10px; border: 2px solid #8b5cf6; margin-bottom: 20px;">
                        <h3 style="color: #8b5cf6; margin-top: 0;">🔊 SES AYARLARI</h3>

                        <div style="margin: 20px 0;">
                            <label style="display: flex; align-items: center; gap: 10px; cursor: pointer;">
                                <input type="checkbox" id="soundToggle" ${soundEnabled ? 'checked' : ''}
                                       onchange="MenuSystem.toggleSound()" style="transform: scale(1.5);">
                                <span style="font-size: 18px;">Ses Efektlerini Aç/Kapat</span>
                            </label>
                        </div>

                        <div style="margin: 20px 0;">
                            <label style="display: block; margin-bottom: 10px;">
                                Müzik Seviyesi: <span id="musicVolumeDisplay">${musicVolume}%</span>
                            </label>
                            <input type="range" id="musicVolumeSlider" min="0" max="100" value="${musicVolume}"
                                   oninput="MenuSystem.updateMusicVolume(this.value)"
                                   style="width: 100%; height: 8px; background: #374151; border-radius: 5px; outline: none;">
                        </div>

                        <div style="margin: 20px 0;">
                            <label style="display: block; margin-bottom: 10px;">
                                Efekt Seviyesi: <span id="soundVolumeDisplay">${soundVolume}%</span>
                            </label>
                            <input type="range" id="soundVolumeSlider" min="0" max="100" value="${soundVolume}"
                                   oninput="MenuSystem.updateSoundVolume(this.value)"
                                   style="width: 100%; height: 8px; background: #374151; border-radius: 5px; outline: none;">
                        </div>

                        <button onclick="MenuSystem.testSound()" style="
                            padding: 10px 20px;
                            background: #8b5cf6;
                            border: none;
                            border-radius: 5px;
                            color: white;
                            cursor: pointer;
                            margin-right: 10px;
                        ">🔫 Test Sesi</button>
                    </div>

                    <!-- Oyun Ayarları -->
                    <div style="background: rgba(0,0,0,0.7); padding: 20px; border-radius: 10px; border: 2px solid #06b6d4;">
                        <h3 style="color: #06b6d4; margin-top: 0;">🎮 OYUN AYARLARI</h3>

                        <button onclick="MenuSystem.resetProgress()" style="
                            padding: 10px 20px;
                            background: #dc2626;
                            border: none;
                            border-radius: 5px;
                            color: white;
                            cursor: pointer;
                            margin: 10px 0;
                        ">🗑️ İlerlemeyi Sıfırla</button>

                        <div style="color: #9ca3af; font-size: 14px; margin-top: 10px;">
                            Bu işlem tüm jetonlarınızı, yükseltmelerinizi ve başarımlarınızı siler.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        document.body.insertAdjacentHTML('beforeend', settingsMenuHTML);
    }

    static showMissions() {
        this.hideAllMenus();
        document.body.insertAdjacentHTML('beforeend', this.createMissionsMenu());
    }

    static createMissionsMenu() {
        const missions = MissionSystem.getAllMissions();

        let dailyHTML = '';
        missions.daily.forEach(mission => {
            const progress = Math.min(100, (mission.progress / mission.target) * 100);
            const status = mission.completed ? '✅ Tamamlandı' : `${mission.progress}/${mission.target}`;
            const bgColor = mission.completed ? 'rgba(74, 222, 128, 0.2)' : 'rgba(139, 92, 246, 0.2)';

            dailyHTML += `
                <div style="
                    background: ${bgColor};
                    border: 2px solid ${mission.completed ? '#4ade80' : '#8b5cf6'};
                    border-radius: 10px;
                    padding: 15px;
                    margin: 10px 0;
                ">
                    <div style="color: white; font-size: 18px; font-weight: bold;">${mission.name}</div>
                    <div style="color: #ccc; font-size: 14px; margin: 5px 0;">${mission.description}</div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
                        <div style="color: white; font-size: 16px;">${status}</div>
                        <div style="color: #ffd93d; font-size: 16px;">+${mission.reward.tokens} Jeton</div>
                    </div>
                    <div style="background: rgba(0,0,0,0.3); border-radius: 5px; height: 8px; margin-top: 8px;">
                        <div style="
                            background: linear-gradient(45deg, #8b5cf6, #a855f7);
                            height: 100%;
                            border-radius: 5px;
                            width: ${progress}%;
                            transition: width 0.3s ease;
                        "></div>
                    </div>
                </div>
            `;
        });

        let weeklyHTML = '';
        missions.weekly.forEach(mission => {
            const progress = Math.min(100, (mission.progress / mission.target) * 100);
            const status = mission.completed ? '✅ Tamamlandı' : `${mission.progress}/${mission.target}`;
            const bgColor = mission.completed ? 'rgba(74, 222, 128, 0.2)' : 'rgba(255, 107, 107, 0.2)';

            weeklyHTML += `
                <div style="
                    background: ${bgColor};
                    border: 2px solid ${mission.completed ? '#4ade80' : '#ff6b6b'};
                    border-radius: 10px;
                    padding: 15px;
                    margin: 10px 0;
                ">
                    <div style="color: white; font-size: 18px; font-weight: bold;">${mission.name}</div>
                    <div style="color: #ccc; font-size: 14px; margin: 5px 0;">${mission.description}</div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
                        <div style="color: white; font-size: 16px;">${status}</div>
                        <div style="color: #ffd93d; font-size: 16px;">+${mission.reward.tokens} Jeton</div>
                    </div>
                    <div style="background: rgba(0,0,0,0.3); border-radius: 5px; height: 8px; margin-top: 8px;">
                        <div style="
                            background: linear-gradient(45deg, #ff6b6b, #ee5a52);
                            height: 100%;
                            border-radius: 5px;
                            width: ${progress}%;
                            transition: width 0.3s ease;
                        "></div>
                    </div>
                </div>
            `;
        });

        let achievementHTML = '';
        missions.achievements.forEach(mission => {
            const progress = Math.min(100, (mission.progress / mission.target) * 100);
            const status = mission.completed ? '✅ Tamamlandı' : `${mission.progress}/${mission.target}`;
            const bgColor = mission.completed ? 'rgba(74, 222, 128, 0.2)' : 'rgba(255, 217, 61, 0.2)';

            achievementHTML += `
                <div style="
                    background: ${bgColor};
                    border: 2px solid ${mission.completed ? '#4ade80' : '#ffd93d'};
                    border-radius: 10px;
                    padding: 15px;
                    margin: 10px 0;
                ">
                    <div style="color: white; font-size: 18px; font-weight: bold;">${mission.name}</div>
                    <div style="color: #ccc; font-size: 14px; margin: 5px 0;">${mission.description}</div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
                        <div style="color: white; font-size: 16px;">${status}</div>
                        <div style="color: #ffd93d; font-size: 16px;">+${mission.reward.tokens} Jeton</div>
                    </div>
                    <div style="background: rgba(0,0,0,0.3); border-radius: 5px; height: 8px; margin-top: 8px;">
                        <div style="
                            background: linear-gradient(45deg, #ffd93d, #ffb74d);
                            height: 100%;
                            border-radius: 5px;
                            width: ${progress}%;
                            transition: width 0.3s ease;
                        "></div>
                    </div>
                </div>
            `;
        });

        return `
        <div id="missionsMenu" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: linear-gradient(135deg, #0a0a0a, #1a1a2e, #16213e);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            z-index: 1000;
            color: white;
            font-family: 'Courier New', monospace;
            overflow-y: auto;
            padding: 20px;
        ">
            <h1 style="
                font-size: 48px;
                background: linear-gradient(45deg, #8b5cf6, #a855f7, #ffd93d);
                background-size: 400% 400%;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                animation: gradientShift 3s ease-in-out infinite;
                text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
                margin: 0 0 30px 0;
            ">📋 GÖREVLER</h1>

            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; max-width: 1400px; width: 100%;">
                <!-- Günlük Görevler -->
                <div style="background: rgba(139, 92, 246, 0.1); border: 2px solid #8b5cf6; border-radius: 15px; padding: 20px;">
                    <h2 style="color: #8b5cf6; margin-top: 0; text-align: center; font-size: 24px;">
                        📅 GÜNLÜK GÖREVLER
                    </h2>
                    ${dailyHTML}
                </div>

                <!-- Haftalık Görevler -->
                <div style="background: rgba(255, 107, 107, 0.1); border: 2px solid #ff6b6b; border-radius: 15px; padding: 20px;">
                    <h2 style="color: #ff6b6b; margin-top: 0; text-align: center; font-size: 24px;">
                        📊 HAFTALIK GÖREVLER
                    </h2>
                    ${weeklyHTML}
                </div>

                <!-- Başarımlar -->
                <div style="background: rgba(255, 217, 61, 0.1); border: 2px solid #ffd93d; border-radius: 15px; padding: 20px;">
                    <h2 style="color: #ffd93d; margin-top: 0; text-align: center; font-size: 24px;">
                        🏆 BAŞARIMLAR
                    </h2>
                    ${achievementHTML}
                </div>
            </div>

            <button onclick="MenuSystem.showMainMenu()" style="
                margin-top: 30px;
                padding: 15px 30px;
                font-size: 20px;
                background: linear-gradient(45deg, #6b73ff, #000dff);
                border: none;
                border-radius: 10px;
                color: white;
                cursor: pointer;
                transition: all 0.3s ease;
            ">🏠 ANA MENÜ</button>
        </div>
        `;
    }

    // Ses ayar fonksiyonları
    static toggleSound() {
        const enabled = document.getElementById('soundToggle').checked;
        localStorage.setItem('soundEnabled', enabled);

        if (window.soundManager) {
            window.soundManager.effectsVolume = enabled ? 0.7 : 0;
        }
    }

    static updateMusicVolume(value) {
        document.getElementById('musicVolumeDisplay').textContent = value + '%';
        localStorage.setItem('musicVolume', value);

        if (window.soundManager) {
            window.soundManager.musicVolume = value / 100;
        }
    }

    static updateSoundVolume(value) {
        document.getElementById('soundVolumeDisplay').textContent = value + '%';
        localStorage.setItem('soundVolume', value);

        if (window.soundManager) {
            window.soundManager.effectsVolume = value / 100;
        }
    }

    static testSound() {
        if (window.synthSounds) {
            window.synthSounds.shootSound();
        }
    }

    static resetProgress() {
        if (confirm('Tüm ilerlemenizi silmek istediğinizden emin misiniz? Bu işlem geri alınamaz!')) {
            // Tüm localStorage verilerini temizle
            const keysToRemove = [
                'coins', 'highScore', 'maxHealthBonus', 'speedBonus', 'rapidFireBonus', 'luckyShot',
                'pistolUpgrade', 'rifleUpgrade', 'shotgunUpgrade', 'laserUpgrade',
                'characterSelectShown'
            ];

            keysToRemove.forEach(key => localStorage.removeItem(key));

            // Achievement ve skill verilerini temizle
            Object.keys(AchievementSystem.achievements).forEach(id => {
                localStorage.removeItem(`achievement_${id}`);
            });

            Object.keys(AchievementSystem.stats).forEach(stat => {
                localStorage.removeItem(`stat_${stat}`);
            });

            Object.keys(SkillTree.skills).forEach(skillId => {
                localStorage.removeItem(`skill_${skillId}`);
            });

            Object.keys(WeaponSystem.weapons).forEach(weaponType => {
                localStorage.removeItem(`weapon_${weaponType}_unlocked`);
            });

            alert('İlerleme sıfırlandı! Sayfa yeniden yükleniyor...');
            location.reload();
        }
    }

    static showGameModes() {
        this.hideAllMenus();
        document.body.insertAdjacentHTML('beforeend', this.createGameModesMenu());
    }

    static createGameModesMenu() {
        return `
        <div id="gameModesMenu" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: linear-gradient(135deg, #0a0a0a, #1a1a2e, #16213e);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            color: white;
            font-family: 'Courier New', monospace;
        ">
            <h1 style="
                font-size: 48px;
                background: linear-gradient(45deg, #f59e0b, #d97706, #92400e);
                background-size: 400% 400%;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                animation: gradientShift 3s ease-in-out infinite;
                text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
                margin: 0 0 50px 0;
            ">🎮 OYUN MODLARI</h1>

            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; max-width: 800px;">
                <!-- Normal Mod -->
                <div class="game-mode-card" onclick="MenuSystem.startGameMode('normal')" style="
                    background: linear-gradient(135deg, #4f46e5, #3730a3);
                    border: 3px solid #6366f1;
                    border-radius: 15px;
                    padding: 30px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: center;
                " onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 10px 30px rgba(99, 102, 241, 0.5)'"
                   onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">
                    <div style="font-size: 48px; margin-bottom: 15px;">⚔️</div>
                    <h3 style="color: white; margin: 0 0 10px 0; font-size: 24px;">NORMAL MOD</h3>
                    <p style="color: #c7d2fe; margin: 0; font-size: 16px;">
                        Klasik zombi savunması. Round'lar halinde gelen zombileri yok et!
                    </p>
                </div>

                <!-- Time Attack -->
                <div class="game-mode-card" onclick="MenuSystem.startGameMode('timeAttack')" style="
                    background: linear-gradient(135deg, #dc2626, #991b1b);
                    border: 3px solid #ef4444;
                    border-radius: 15px;
                    padding: 30px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: center;
                " onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 10px 30px rgba(239, 68, 68, 0.5)'"
                   onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">
                    <div style="font-size: 48px; margin-bottom: 15px;">⏱️</div>
                    <h3 style="color: white; margin: 0 0 10px 0; font-size: 24px;">ZAMAN YARIŞI</h3>
                    <p style="color: #fecaca; margin: 0; font-size: 16px;">
                        5 dakikan var! Mümkün olduğunca çok zombi öldür.
                    </p>
                </div>

                <!-- Survival -->
                <div class="game-mode-card" onclick="MenuSystem.startGameMode('survival')" style="
                    background: linear-gradient(135deg, #059669, #047857);
                    border: 3px solid #10b981;
                    border-radius: 15px;
                    padding: 30px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: center;
                " onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 10px 30px rgba(16, 185, 129, 0.5)'"
                   onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">
                    <div style="font-size: 48px; margin-bottom: 15px;">🛡️</div>
                    <h3 style="color: white; margin: 0 0 10px 0; font-size: 24px;">HAYATTA KALMA</h3>
                    <p style="color: #a7f3d0; margin: 0; font-size: 16px;">
                        Sonsuz dalgalar! Ne kadar dayanabilirsin?
                    </p>
                </div>

                <!-- Boss Rush -->
                <div class="game-mode-card" onclick="MenuSystem.startGameMode('bossRush')" style="
                    background: linear-gradient(135deg, #7c2d12, #451a03);
                    border: 3px solid #ea580c;
                    border-radius: 15px;
                    padding: 30px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: center;
                " onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 10px 30px rgba(234, 88, 12, 0.5)'"
                   onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">
                    <div style="font-size: 48px; margin-bottom: 15px;">👹</div>
                    <h3 style="color: white; margin: 0 0 10px 0; font-size: 24px;">BOSS FIRRTINASI</h3>
                    <p style="color: #fed7aa; margin: 0; font-size: 16px;">
                        Sadece boss'lar! Arka arkaya gelen dev düşmanlar.
                    </p>
                </div>
            </div>

            <button onclick="MenuSystem.showMainMenu()" style="
                margin-top: 40px;
                padding: 15px 30px;
                font-size: 20px;
                background: linear-gradient(45deg, #6b73ff, #000dff);
                border: none;
                border-radius: 10px;
                color: white;
                cursor: pointer;
                transition: all 0.3s ease;
            ">🏠 ANA MENÜ</button>
        </div>
        `;
    }

    static startGameMode(mode) {
        this.hideAllMenus();

        // Oyun modunu global değişkende sakla
        if (typeof window !== 'undefined') {
            window.selectedGameMode = mode;
        }

        // Oyun ekranlarını göster
        const startScreen = document.getElementById('startScreen');
        const gameCanvas = document.getElementById('gameCanvas');
        const ui = document.getElementById('ui');

        if (startScreen) startScreen.style.display = 'flex';
        if (gameCanvas) gameCanvas.style.display = 'block';
        if (ui) ui.style.display = 'block';

        // Oyunu başlat
        if (typeof startGame === 'function') {
            startGame();
        }
    }
}
