class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = pointValue;
        this.moveSpeed = game.settings.spaceshipSpeed;
    }

    update(delta) {
        this.x -= this.moveSpeed * (delta/10);

        if(this.x <= 0 - this.width){
            this.x = game.config.width;
        }
    }

    reset() {
        this.x = game.config.width;
    }
}