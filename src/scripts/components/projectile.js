import constants from "../constants/constants";
import utils from "../utils/utils";

class Projectile {
  constructor(initialPositionX, initialPositionY) {
    this.initialPositionX = initialPositionX;
    this.initialPositionY = initialPositionY;

    this.colour = utils.generateRandomColour();
    this.size = utils.generateRandomNumber(
      constants.projectileMinSize,
      constants.projectileMinSize
    );
  }
}

export default Projectile;
