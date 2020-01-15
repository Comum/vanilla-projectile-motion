import utils from "../utils/utils";
import constants from "../constants/constants";

class Projectile {
  constructor(initialPositionX, initialPositionY, width, height) {
    this.width = width;
    this.height = height;

    this.colour = utils.generateRandomColour();
    this.size = utils.generateProjectileSize();
    this.positionX = utils.updateValueForDefault(
      initialPositionX,
      this.size,
      this.width
    );
    this.positionY = utils.updateValueForDefault(
      initialPositionY,
      this.size,
      this.height
    );

    const velocityX = utils.generateRandomVelocityWithMultiplier();
    this.vx = velocityX;

    const velocityY = utils.generateRandomVelocity();
    this.vy = velocityY;
  }

  update() {
    this.positionX = this.updateValues("x", this.width);
    this.positionY = this.updateValues("y", this.height);
  }

  updateValues(axis, delimiter) {
    const velocityParam = utils.generateParam("v", axis);
    const positionParam = utils.generateParam("position", axis.toUpperCase());
    let newPosition = utils.calculateNewPosition(
      this[positionParam],
      this[velocityParam],
      axis
    );

    if (utils.isPositionInsideDelimiters(newPosition, this.size, delimiter)) {
      return newPosition;
    }

    const velocity = this[velocityParam];
    this[velocityParam] = utils.calculateNewVelocity(velocity);

    return utils.getPositionNextToDelimiter(newPosition, this.size, delimiter);
  }
}

export default Projectile;
