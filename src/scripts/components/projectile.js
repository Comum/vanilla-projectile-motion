import utils from "../utils/utils";

class Projectile {
  constructor(initialPositionX, initialPositionY, maxWidth, maxHeight) {
    this.colour = utils.generateRandomColour();
    this.size = utils.generateProjectileSize();

    this.positionX = utils.updateValueForDefault(
      initialPositionX,
      this.size,
      maxWidth
    );
    this.positionY = utils.updateValueForDefault(
      initialPositionY,
      this.size,
      maxHeight
    );

    console.log("positionX: ", this.positionX);
    console.log("positionY: ", this.positionY);
  }

  update() {
    console.log("Projectile.update", this);
    // this.positionX = this.calculateNewPosition("x");
    // this.positionY = this.calculateNewPosition("y");
  }
}

export default Projectile;
