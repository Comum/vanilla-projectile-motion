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

  setCanvasSize() {
    this.canvas.width = this.container.offsetWidth;
    this.canvas.height = this.container.offsetHeight;
  }

  onClickContainer(event) {
    const { clientX, clientY } = event;
    const initialX = clientX - this.containerX;
    const initialY = clientY - this.containerY;

    this.projectiles.push(new Projectile(initialX, initialY));
    // remove next line
    requestAnimationFrame(this.updateBound);
  }

  onClickClearButton() {
    console.log("clear", this);
    this.projectiles = [];
    // remove next line
    requestAnimationFrame(this.updateBound);
  }

  update() {
    console.log("update");
    this.ctx.clearRect(0, 0, this.width, this.height);

    if (this.projectiles.length === 0) {
      console.log("should clear canvas");
    }

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
    //requestAnimationFrame(this.updateBound);
  }
}

export default ProjectileContainer;
