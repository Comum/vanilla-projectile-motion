import Projectile from "./projectile";

class ProjectileContainer {
  constructor() {
    this.projectiles = [];

    this.container = document.querySelector("#canvas-container");
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
    // initial value needs to be relative to the box and not the screen
    // use get boundingClientRect in the constructor and subtract the offset from the
    // values above

    this.projectiles.push(new Projectile(clientX, clientY));
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
