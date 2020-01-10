# Projectile motion

This repo is my proposed solution to the below challenge.

# The challenge

- whenever a user clicks the page / container, create a projectile (example ball) with properties
  - random colour
  - random size between 50 and 100px
- as soon as the projectile is created it is launched with:
  - random velocity
  - random trajectory
- everytime the projectile hits a delimiter of the page / container its velocity is reduced
  - top and bottom delimiter influence the `y velocity`
  - left and right delimiter influence the `x velocity`

## Documentation

### Equations

- X = Xinicial + Vx \* T
- Y = Yinicial + Vinicial _ T - 0.5 _ A \* T2

### Velocity equations

- Vx = constant
- Vy = -V \* T

### Constants:

- T - Time
- A - Gravity acceleration

# How to run

- `npm i`: install dependencies
- `npm start`: run the application
- `npm test`: run the tests
