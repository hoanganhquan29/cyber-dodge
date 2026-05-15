import * as PIXI from 'pixi.js';

export class StartMenu {
    constructor(app) {
        this.app = app;
        this.container = new PIXI.Container();
        this.container.zIndex = 300;
        this.container.visible = false; 
        this.app.stage.addChild(this.container);
        
        this.init();
    }

    async init() {
        try {
            const texture = await PIXI.Assets.load('/assets/images/menu-bg.png');
            
            this.background = new PIXI.Sprite(texture);
            
            this.background.width = this.app.screen.width;
            this.background.height = this.app.screen.height;
            
            this.container.addChildAt(this.background, 0);

            this.setupText();
            
            this.show();
        } catch (error) {
            console.error("Lỗi tải ảnh background:", error);
        }
    }

    setupText() {
        const titleStyle = new PIXI.TextStyle({
            fontFamily: 'PixelFont',
            fill: '#ffffff',
            fontSize: 64,
            dropShadow: true,
            dropShadowBlur: 4,
            dropShadowDistance: 6,
        });

        this.title = new PIXI.Text({ text: 'CYBER DODGE', style: titleStyle });
        this.title.anchor.set(0.5);
        this.title.x = this.app.screen.width / 2;
        this.title.y = this.app.screen.height / 2 - 100;

        this.startText = new PIXI.Text({
            text: 'Press ENTER to Start',
            style: {
                fontFamily: 'PixelFont',
                fill: '#00ff00',
                fontSize: 24
            }
        });
        this.startText.anchor.set(0.5);
        this.startText.x = this.app.screen.width / 2;
        this.startText.y = this.app.screen.height / 2 + 20;

        this.container.addChild(this.title);
        this.container.addChild(this.startText);
    }

    show() {
        this.container.visible = true;
    }

    hide() {
        this.container.visible = false;
    }
}