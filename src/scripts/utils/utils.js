import constants from "../constants/constants";

/**
 * @name generateRandomColour
 *
 * @description
 * Generates a hex value to be used as a color
 *
 * @returns {string}
 */
function generateRandomColour() {
  const hexValues = "0123456789ABCDEF";
  let color = "#";
  let i;

  for (i = 0; i < 6; i++) {
    color += hexValues[generateRandomNumber(16, 0)];
  }

  return color;
}

/**
 * @name generateRandomNumber
 *
 * @description
 * Generates a number between max and min values
 *
 * @param {number} max max value - default constants.PROJECTILE_MAX_SIZE
 * @param {number} min min value - default constants.PROJECTILE_MIN_SIZE
 * @returns {number}
 */
const generateRandomNumber = (
  max = constants.PROJECTILE_MAX_SIZE,
  min = constants.PROJECTILE_MIN_SIZE
) => Math.floor(Math.random() * Math.floor(max - min)) + min;

/**
 * @name halveValue
 *
 * @description
 * Halves the number provided
 *
 * @param {number} value
 * @returns {number}
 */
const halveValue = value => value / 2;

/**
 * @name generateProjectileSize
 *
 * @description
 * Generates projectile size by first calling a generateRandomNumber() and then
 * halving it by calling halveValue()
 *
 * @returns {number}
 */
const generateProjectileSize = () => {
  const number = generateRandomNumber();
  return halveValue(number);
};

/**
 * @name updateValueWidthinDelimiter
 *
 * @description
 * This function will calculate a new position based on the delimiters
 * dsso the projectile will not extend past it
 *
 * @param {number} value value to start of
 * @param {number} size size of the projectile
 * @param {number} max max value allowed
 * @returns {number}
 */
const updateValueWidthinDelimiter = (value, size, max) => {
  if (value - size < 0) {
    return size;
  }

  if (value + size > max) {
    return max - size;
  }

  return value;
};

/**
 * @name generateRandomVelocity
 *
 * @description
 * Calls generateRandomNumber() with min and max value to get a velocity
 *
 * @returns {number}
 */
const generateRandomVelocity = () =>
  generateRandomNumber(constants.MAX_X_VELOCITY, constants.MIN_X_VELOCITY);

/**
 * @name generateRandomVelocityWithMultiplier
 *
 * @description
 * Calls generateRandomVelocity() and then generateRandomNumber() to generate a random multiplier
 * to randomize a direction in the axis velocity
 *
 * @returns {number} number can be either positive or negative
 */
const generateRandomVelocityWithMultiplier = () => {
  const originalVelocity = generateRandomVelocity();
  const multiplier = generateRandomNumber(2, 1) === 1 ? 1 : -1;

  return multiplier * originalVelocity;
};

/**
 * @name calculateNewVelocity
 *
 * @description
 * Calculates the new velocity (reduces it by constants.VELOCITY_PERCENTAGE_REDUCTION)
 *
 * @param {number} velocity velocity of the projectile
 * @return {number}
 */
const calculateNewVelocity = velocity =>
  (velocity - velocity * constants.VELOCITY_PERCENTAGE_REDUCTION) * -1;

/**
 * @name calculateNewPosition
 *
 * @description
 * Calculates the new position based on position, velocity and axis (the axis is needed because
 * the x and y functions are different)
 *
 * @param {number} position
 * @param {number} velocity
 * @param {string} axis
 * @returns {number}
 */
const calculateNewPosition = (position, velocity, axis) => {
  let newPosition = position + velocity;

  if (axis === "y") {
    newPosition = newPosition - 0.5 * constants.ACELERATION * 2;
  }

  return newPosition;
};

/**
 * @name generateParam
 *
 * @description
 * Generates a parameter with the axis value
 *
 * @param {string} param object parameter
 * @param {string} axis axis of the movement
 * @returns {string}
 */
const generateParam = (param, axis) => `${param}${axis}`;

/**
 * @name isPositionInsideDelimiters
 *
 * @description
 * Checks if the position is inside the bounds of the canvas
 *
 * @param {number} position position of the projectile
 * @param {number} size size of the projectile
 * @param {number} delimiter delimiter of the axis of the canvas
 * @returns {boolean}
 */
const isPositionInsideDelimiters = (position, size, delimiter) =>
  position + size < delimiter && position - size > 0;

export default {
  generateRandomColour,
  generateRandomNumber,
  generateProjectileSize,
  halveValue,
  updateValueWidthinDelimiter,
  generateRandomVelocity,
  generateRandomVelocityWithMultiplier,
  calculateNewVelocity,
  calculateNewPosition,
  generateParam,
  isPositionInsideDelimiters
};
