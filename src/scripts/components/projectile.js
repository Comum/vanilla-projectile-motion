import utils from "../utils/utils";

class Projectile {
  constructor(initialPositionX, initialPositionY, width, height) {
    this.width = width;
    this.height = height;

    this.colour = utils.generateRandomColour();
    this.size = utils.generateProjectileSize();
    this.positionX = utils.updateValueWidthinDelimiter(
      initialPositionX,
      this.size,
      this.width
    );
    this.positionY = utils.updateValueWidthinDelimiter(
      initialPositionY,
      this.size,
      this.height
    );

    const velocityX = utils.generateRandomVelocityWithMultiplier();
    this.vx = velocityX;

    const velocityY = utils.generateRandomVelocity();
    this.vy = velocityY;
  }

  /**
   * @name Projectile.update
   *
   * @description
   * Updates the position of the projectile
   */
  update() {
    this.positionX = this.updatePosition("x", this.width);
    this.positionY = this.updatePosition("y", this.height);
  }

  /**
   * @name Projectile.updatePosition
   *
   * @description
   * Updates the position of the projectile in the axis passed
   *
   * @param {string} axis
   * @param {number} delimiter
   * @returns {number}
   */
  updatePosition(axis, delimiter) {
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

    return utils.updateValueWidthinDelimiter(newPosition, this.size, delimiter);
  }
}

export default Projectile;
