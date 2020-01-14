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
    this.positionX = this.updateValues("x");
    this.positionY = this.updateValues("y");
  }

  updateValues(type) {
    if (type === "x") {
      let newPosition = this.positionX + this.vx;
      if (newPosition + this.size < this.width && newPosition - this.size > 0) {
        return newPosition;
      }

      this.vx =
        (this.vx - this.vx * constants.VELOCITY_PERCENTAGE_REDUCTION) * -1;

      if (newPosition + this.size >= this.width) {
        return this.width - this.size;
      }

      if (newPosition - this.size <= 0) {
        return 0 + this.size;
      }
    }

    if (type === "y") {
      let newPosition =
        this.positionY + this.vy - 0.5 * constants.ACELEARTION * 2;
      if (
        newPosition + this.size < this.height &&
        newPosition - this.size > 0
      ) {
        return newPosition;
      }

      this.vy =
        (this.vy - this.vy * constants.VELOCITY_PERCENTAGE_REDUCTION) * -1;

      if (newPosition + this.size >= this.height) {
        return this.height - this.size;
      }

      if (newPosition - this.size <= 0) {
        return 0 + this.size;
      }
    }
  }
}

export default Projectile;
