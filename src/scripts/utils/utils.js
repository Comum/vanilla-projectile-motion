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

const generateRandomNumber = () =>
  Math.floor(
    Math.random() * constants.PROJECTILE_MAX_SIZE +
      constants.PROJECTILE_MIN_SIZE
  );

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

export default {
  generateRandomColour,
  generateRandomNumber,
  generateProjectileSize,
  halve,
  updateValueForDefault
};
