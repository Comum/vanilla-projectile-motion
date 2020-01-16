import utils from "../../src/scripts/utils/utils";

describe("generateRandomColour::", function() {
  it("should return a hex colour code", function() {
    const hexValue = utils.generateRandomColour();

    expect(hexValue.length).toBe(7);
    expect(hexValue[0]).toBe("#");
  });
});

describe("generateRandomNumber::", function() {
  describe("when parameters are not provided", function() {
    let max;
    let min;
    let number;

    beforeEach(function() {
      max = 100;
      min = 50;
      number = utils.generateRandomNumber(max, min);
    });

    it("should return a number between the default min and max", function() {
      expect(number).toBeGreaterThanOrEqual(min);
      expect(number).toBeLessThan(max + 1);
    });
  });

  describe("when parameters are provided", function() {
    let max;
    let min;
    let number;

    beforeEach(function() {
      max = 100;
      min = 0;
      number = utils.generateRandomNumber(max, min);
    });

    it("should return a number between min and max", function() {
      expect(number).toBeGreaterThanOrEqual(min);
      expect(number).toBeLessThan(max + 1);
    });
  });
});

describe("halveValue::", function() {
  it("should return the value halved", function() {
    expect(utils.halveValue(10)).toBe(5);
  });
});

describe("generateProjectileSize::", function() {
  let max;
  let min;
  let number;

  beforeEach(function() {
    max = 50;
    min = 25;
    number = utils.generateProjectileSize(max, min);
  });

  it("should return a halved number between the default min and max", function() {
    expect(number).toBeGreaterThanOrEqual(min);
    expect(number).toBeLessThan(max + 1);
  });
});

describe("updateValueWidthinDelimiter::", function() {
  describe("when the value is within the size", function() {
    let value;
    let size;
    let max;
    let response;

    beforeEach(function() {
      value = 45;
      size = 10;
      max = 100;
      response = utils.updateValueWidthinDelimiter(value, size, max);
    });

    it("should return the value", function() {
      expect(response).toBe(45);
    });
  });

  describe("when the value is not within the delimiter", function() {
    describe("and when the value would be below 0", function() {
      let value;
      let size;
      let max;
      let response;

      beforeEach(function() {
        value = 2;
        size = 10;
        max = 100;
        response = utils.updateValueWidthinDelimiter(value, size, max);
      });

      it("should return the size", function() {
        expect(response).toBe(10);
      });
    });

    describe("and when the value would be greater than max", function() {
      let value;
      let size;
      let max;
      let response;

      beforeEach(function() {
        value = 95;
        size = 10;
        max = 100;
        response = utils.updateValueWidthinDelimiter(value, size, max);
      });

      it("should return the max minues the size", function() {
        expect(response).toBe(90);
      });
    });
  });
});

describe("generateRandomVelocity::", function() {
  let max;
  let min;
  let number;

  beforeEach(function() {
    max = 5;
    min = 1;
    number = utils.generateRandomVelocity();
  });

  it("should return a number between min and max", function() {
    expect(number).toBeGreaterThanOrEqual(min);
    expect(number).toBeLessThan(max + 1);
  });
});

describe("generateRandomVelocityWithMultiplier::", function() {
  let max;
  let min;
  let number;

  beforeEach(function() {
    max = 5;
    min = -5;
    number = utils.generateRandomVelocityWithMultiplier();
  });

  it("should return a number between min and max", function() {
    expect(number).toBeGreaterThanOrEqual(min);
    expect(number).toBeLessThan(max + 1);
  });
});

describe("calculateNewVelocity::", function() {
  let velocity;
  let response;

  beforeEach(function() {
    velocity = 3;
    response = utils.calculateNewVelocity(velocity);
  });

  it("should return the velocity minus 10% and inverted", function() {
    expect(response).toBe(-2.7);
  });
});

describe("calculateNewPosition::", function() {
  describe("when the axis is x", function() {
    let position;
    let velocity;
    let axis;
    let response;

    beforeEach(function() {
      position = 10;
      velocity = 3;
      axis = "x";
      response = utils.calculateNewPosition(position, velocity, axis);
    });

    it("should return the new calculated position", function() {
      expect(response).toBe(13);
    });
  });

  describe("when the axis is x", function() {
    let position;
    let velocity;
    let axis;
    let response;

    beforeEach(function() {
      position = 10;
      velocity = 3;
      axis = "y";
      response = utils.calculateNewPosition(position, velocity, axis);
    });

    it("should return the new calculated position", function() {
      expect(response).toBe(12.02);
    });
  });
});

describe("generateParam::", function() {
  it("should return the two arguments concatenated", function() {
    expect(utils.generateParam("foo", "bar")).toBe("foobar");
  });
});

describe("isPositionInsideDelimiters::", function() {
  describe("when the position is inside the delimiters", function() {
    let position;
    let size;
    let delimiter;
    let response;

    beforeEach(function() {
      position = 50;
      size = 3;
      delimiter = 100;
      response = utils.isPositionInsideDelimiters(position, size, delimiter);
    });

    it("should return true", function() {
      expect(response).toBe(true);
    });
  });

  describe("when the position is outside the delimiters", function() {
    describe("and when the position is lesser than the delimiter", function() {
      let position;
      let size;
      let delimiter;
      let response;

      beforeEach(function() {
        position = 5;
        size = 10;
        delimiter = 100;
        response = utils.isPositionInsideDelimiters(position, size, delimiter);
      });

      it("should return false", function() {
        expect(response).toBe(false);
      });
    });

    describe("and when the position is greater than the delimiter", function() {
      let position;
      let size;
      let delimiter;
      let response;

      beforeEach(function() {
        position = 95;
        size = 10;
        delimiter = 100;
        response = utils.isPositionInsideDelimiters(position, size, delimiter);
      });

      it("should return false", function() {
        expect(response).toBe(false);
      });
    });
  });
});
