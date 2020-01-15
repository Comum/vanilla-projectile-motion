import Projectile from "./projectile";

class ProjectileContainer {
  constructor() {
    this.projectiles = [];

    this.container = document.querySelector("#canvas-container");
    const { x, y, width } = this.container.getBoundingClientRect();
    this.containerX = x;
    this.containerY = y;
    this.containerWidth = width;
    this.clearButton = document.querySelector("#clear-button");
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.setCanvasSize();

    this.container.appendChild(this.canvas);
    this.container.addEventListener("click", this.onClickContainer.bind(this));
    this.clearButton.addEventListener(
      "click",
      this.onClickClearButton.bind(this)
    );

    this.updateBound = this.update.bind(this);
    requestAnimationFrame(this.updateBound);
  }

  /**
   * @name ProjectileContainer.setCanvasSize
   *
   * @description
   * Updates the position of the projectile
   */
  setCanvasSize() {
    this.canvas.width = this.container.offsetWidth;
    this.canvas.height = this.container.offsetHeight;
  }

  /**
   * @name ProjectileContainer.onClickContainer
   *
   * @description
   * Creates a projectile when a click occours inside the canvas
   *
   * @param {object} event click event
   */
  onClickContainer(event) {
    const { clientX, clientY } = event;
    const initialX = clientX - this.containerX;
    const initialY = clientY - this.containerY;

    this.projectiles.push(
      new Projectile(initialX, initialY, this.canvas.width, this.canvas.height)
    );
  }

  /**
   * @name ProjectileContainer.onClickClearButton
   *
   * @description
   * Clears the projectile list
   */
  onClickClearButton() {
    this.projectiles = [];
  }

  /**
   * @name ProjectileContainer.update
   *
   * @description
   * Updates all the projectiles in the canvas
   */
  update() {
    this.clearCanvas.call(this);

    for (const projectile of this.projectiles) {
      projectile.update();

      this.ctx.save();
      this.ctx.fillStyle = projectile.colour;
      this.ctx.beginPath();
      this.ctx.arc(
        projectile.positionX,
        projectile.positionY,
        projectile.size,
        0,
        Math.PI * 2
      );
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.restore();
    }
    requestAnimationFrame(this.updateBound);
  }

  /**
   * @name ProjectileContainer.clearCanvas
   *
   * @description
   * Clears the canvas
   */
  clearCanvas() {
    this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "white";
    this.ctx.fill();
  }
}

export default ProjectileContainer;
