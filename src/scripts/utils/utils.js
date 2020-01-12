function generateRandomColour() {
  const hexValues = "0123456789ABCDEF";
  let color = "#";
  let i;

  for (i = 0; i < 6; i++) {
    color += hexValues[Math.floor(Math.random() * 16)];
  }

  return color;
}

const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * max + min);

export default {
  generateRandomColour,
  generateRandomNumber
};
