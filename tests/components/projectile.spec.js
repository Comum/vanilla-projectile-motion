import Projectile from "../../src/scripts/components/projectile";

describe("Projectile::", function() {
  let initialPositionX;
  let initialPositionY;
  let width;
  let height;
  let projectile;
  let updatePositionFn;

  beforeEach(function() {
    initialPositionX = 100;
    initialPositionY = 100;
    width = 250;
    height = 250;
    projectile = new Projectile(
      initialPositionX,
      initialPositionY,
      width,
      height
    );
  });

  describe("when a Projectile is generated", function() {
    it("should have all properties set", function() {
      expect(projectile.width).toBe(250);
      expect(projectile.height).toBe(250);
      expect(projectile.positionX).toBe(100);
      expect(projectile.positionY).toBe(100);
      expect(typeof projectile.colour).toBe("string");
      expect(typeof projectile.size).toBe("number");
      expect(typeof projectile.vx).toBe("number");
      expect(typeof projectile.vy).toBe("number");
    });
  });

  describe("when the Projectile update is called", function() {
    beforeEach(function() {
      updatePositionFn = jest.spyOn(projectile, "updatePosition");
      projectile.update();
    });

    it("should update the positions in both axis", function() {
      expect(projectile.positionX).not.toBe(initialPositionX);
      expect(projectile.positionY).not.toBe(initialPositionY);
    });

    it("should have called updatePositionFn() twice ", function() {
      expect(updatePositionFn).toHaveBeenCalledTimes(2);
    });
  });
});
