import constants from "../constants/constants";

function generateRandomColour() {
  const hexValues = "0123456789ABCDEF";
  let color = "#";
  let i;

  for (i = 0; i < 6; i++) {
    color += hexValues[Math.floor(Math.random() * 16)];
  }

  return color;
}

const generateRandomNumber = (
  max = constants.PROJECTILE_MAX_SIZE,
  min = constants.PROJECTILE_MIN_SIZE
) => Math.floor(Math.random() * max + min);

const halve = value => value / 2;

const generateProjectileSize = () => {
  const number = generateRandomNumber();
  return halve(number);
};

const updateValueForDefault = (value, size, max) => {
  if (value - size < 0) {
    return size;
  }

  if (value + size > max) {
    return max - size;
  }

  return value;
};

const generateRandomVelocity = () =>
  generateRandomNumber(constants.MAX_X_VELOCITY, constants.MIN_X_VELOCITY);

const generateRandomVelocityWithMultiplier = () => {
  const originalVelocity = generateRandomVelocity();
  const multiplier = generateRandomNumber(2, 1) === 1 ? 1 : -1;

  return multiplier * originalVelocity;
};

export default {
  generateRandomColour,
  generateRandomNumber,
  generateProjectileSize,
  halve,
  updateValueForDefault,
  generateRandomVelocity,
  generateRandomVelocityWithMultiplier
};
