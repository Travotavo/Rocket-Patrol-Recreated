class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        this.isFiring = false;
        this.moveSpeed = 2;

        this.sfxRocket = scene.sound.add('sfx_rocket');
    }

    update(delta){
        if (!this.isFiring){
            if(keyLEFT.isDown && this.x >=borderUISize + this.width){
                this.x  -= this.moveSpeed * (delta/10);
            } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed * (delta/10);
            }
        }

        if (Phaser.Input.Keyboard.JustDown(keyF)){
            this.isFiring = true;
            this.sfxRocket.play();
        }

        if (this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed * (delta/10);
        }

        if (this.y <= borderUISize * 3 + borderPadding) {
            this.isFiring = false;
            this.y = game.config.height - borderUISize - borderPadding;

        }
    }

    reset(){
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}