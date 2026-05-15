Cyber Dodge

Cyber Dodge là một trò chơi sinh tồn 2D chạy trên trình duyệt web, được phát triển bằng JavaScript và PixiJS.
Người chơi điều khiển nhân vật để né tránh các enemy truy đuổi và cố gắng sống sót càng lâu càng tốt để đạt điểm số cao nhất.

Demo

Sẽ được deploy bằng GitHub Pages.

Tính năng chính
Điều khiển nhân vật bằng phím WASD
Hệ thống spawn enemy theo thời gian
AI enemy tự động truy đuổi người chơi
Hệ thống phát hiện va chạm
Hệ thống tính điểm theo thời gian sống sót
Game Over và Restart
Fullscreen responsive canvas
Kiến trúc source code chia module rõ ràng
Công nghệ sử dụng
HTML5
CSS3
JavaScript (ES6)
PixiJS
Vite
GitHub Pages
Cấu trúc dự án
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
│   ├── EnemySpawner.js
│   ├── CollisionSystem.js
│   └── ScoreSystem.js
│
├── ui/
│
├── styles/
│   └── style.css
│
└── main.js
Các hệ thống trong game
Hệ thống Player
Xử lý input bàn phím
Di chuyển mượt bằng delta time
Giới hạn nhân vật trong màn hình
Hệ thống Enemy
Spawn enemy động theo thời gian
Enemy AI truy đuổi player
Tăng độ khó theo thời gian chơi
Hệ thống Collision
Kiểm tra va chạm dạng hình tròn
Chuyển trạng thái Game Over khi va chạm xảy ra
Hệ thống Score
Tính điểm theo thời gian sống sót
Cập nhật điểm realtime trên UI
Cài đặt dự án

Clone repository:

git clone https://github.com/YOUR_USERNAME/cyber-dodge.git

Cài dependency:

npm install

Chạy môi trường development:

npm run dev
Build production
npm run build
Deploy

Dự án được deploy bằng GitHub Pages.

Kiến thức và kỹ năng áp dụng

Thông qua dự án này, tôi đã thực hành:

Thiết kế game loop
Lập trình hướng đối tượng (OOP)
Xử lý input realtime
Collision detection
Modular architecture
Entity management
AI movement cơ bản
Frontend game development với PixiJS
Hướng phát triển trong tương lai
Sprite animation
Sound effect và background music
Particle effects
Nhiều loại enemy
Hệ thống power-up
Hỗ trợ mobile
Tác giả

Quân Hoàng