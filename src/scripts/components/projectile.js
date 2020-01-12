import constants from "../constants/constants";
import utils from "../utils/utils";

class Projectile {
  constructor(initialPositionX, initialPositionY) {
    this.positionX = initialPositionX;
    this.positionY = initialPositionY;

    this.colour = utils.generateRandomColour();
    this.size = utils.generateRandomNumber(
      constants.projectileMinSize,
      constants.projectileMinSize
    );
  }

  update() {
    console.log("Projectile.update", this);
    // this.positionX = this.calculateNewPosition("x");
    // this.positionY = this.calculateNewPosition("y");
  }
}

export default Projectile;
