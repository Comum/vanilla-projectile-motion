class ProjectileContainer {
  constructor() {
    this.projectiles = [];

    this.container = document.querySelector("#canvas-container");
    this.clearButton = document.querySelector("#clear-button");
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.setCanvasSize();

    this.container.appendChild(this.canvas);
    this.container.addEventListener("click", this.onClickContainer);
    this.clearButton.addEventListener("click", this.onClickClearButton);
  }

  setCanvasSize() {
    this.canvas.width = this.container.offsetWidth;
    this.canvas.height = this.container.offsetHeight;
  }

  onClickContainer() {
    console.log("I was clicked");
  }

  onClickClearButton() {
    this.projectiles = [];
  }
}

export default ProjectileContainer;
