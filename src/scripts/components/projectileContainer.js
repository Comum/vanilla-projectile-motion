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
    this.clearButton.addEventListener("click", this.onClickClearButton);

    this.updateBound = this.update.bind(this);
    requestAnimationFrame(this.updateBound);
  }

  setCanvasSize() {
    this.canvas.width = this.container.offsetWidth;
    this.canvas.height = this.container.offsetHeight;
  }

  onClickContainer(event) {
    const { clientX, clientY } = event;

    this.projectiles.push(new Projectile(clientX, clientY));
    // remove next line
    requestAnimationFrame(this.updateBound);
  }

  onClickClearButton() {
    this.projectiles = [];
  }

  update() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (const projectile of this.projectiles) {
      console.log("projectile", projectile);
    }
    //requestAnimationFrame(this.updateBound);
  }
}

export default ProjectileContainer;
