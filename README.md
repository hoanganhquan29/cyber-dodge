# Cyber Dodge

Cyber Dodge là một trò chơi sinh tồn 2D chạy trên trình duyệt web được phát triển bằng JavaScript và PixiJS. Người chơi điều khiển UFO để né tránh enemy UFO và cố gắng sống sót càng lâu càng tốt nhằm đạt điểm số cao nhất.

---

# Gameplay Preview

## Main Menu

<img width="1909" height="903" alt="image" src="https://github.com/user-attachments/assets/3dba8cf4-0fa5-457d-abdc-72fb09b143fb" />


---

## Gameplay

<img width="1915" height="906" alt="image" src="https://github.com/user-attachments/assets/1725d9f5-a6d0-42c0-8d62-265ef8559898" />


---

# Gameplay Features

* Điều khiển UFO bằng WASD
* Enemy AI truy đuổi player theo thời gian thực
* Hệ thống collision detection
* Score system theo thời gian sống sót
* Game Over và Restart system
* Start Menu UI
* Gameplay HUD
* Hệ thống âm thanh (BGM + Sound Effects)
* Background theo theme UFO / Space
* Pixel UI Font
* Modular architecture dễ mở rộng

---

# Technology Stack

* HTML5
* CSS3
* JavaScript (ES6)
* PixiJS
* Vite
* GitHub Pages

---

# Project Structure

```txt
src/
├── core/
│   ├── Game.js
│   ├── GameManager.js
│   └── InputManager.js
│
├── entities/
│   ├── Player.js
│   └── Enemy.js
│
├── systems/
│   ├── AudioSystem.js
│   ├── CollisionSystem.js
│   ├── EnemySpawner.js
│   └── ScoreSystem.js
│
├── ui/
│   ├── GameplayBackground.js
│   ├── GameOverScreen.js
│   ├── HUD.js
│   └── StartMenu.js
│
├── styles/
│   └── style.css
│
└── main.js
```

---

# Systems Overview

## Player System

* Realtime movement với delta time
* Giới hạn player trong màn hình
* UFO sprite rendering

## Enemy System

* Dynamic enemy spawning
* Enemy AI chase behavior
* Difficulty scaling theo thời gian

## Collision System

* Circle collision detection
* Trigger Game Over khi va chạm xảy ra

## UI System

* Main Menu
* HUD Score
* Game Over Screen
* Pixel Font UI

## Audio System

* Background Music
* Hit Sound Effect
* Game Over Sound

---

# Installation

Clone repository:

```bash
git clone https://github.com/hoanganhquan29/cyber-dodge.git
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

# Build Production

```bash
npm run build
```

---

# Skills & Concepts Practiced

Thông qua dự án này, tôi đã thực hành:

* Game loop architecture
* Object-Oriented Programming (OOP)
* Real-time input handling
* Collision detection
* Modular system design
* Entity management
* Basic AI movement
* Audio integration
* Frontend game development với PixiJS

---

# Future Improvements

* Particle effects
* Sprite animation
* Multiple enemy types
* Power-up system
* Mobile support
* Online leaderboard

---

# Author

Hoàng Anh Quân
