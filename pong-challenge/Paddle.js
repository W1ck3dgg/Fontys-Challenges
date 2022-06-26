//paddle speed of the AI
const SPEED = 0.10

export default class Paddle {
  constructor(paddleElem) {
    this.paddleElem = paddleElem
    this.reset()
  }

  get position() {
    return parseFloat(
      getComputedStyle(this.paddleElem).getPropertyValue("--position")
    )
  }

  //makes the position of the paddle follow the position of the mouse.
  set position(value) {
    this.paddleElem.style.setProperty("--position", value)
  }

  rect() {
    return this.paddleElem.getBoundingClientRect()
  }

  //reset paddle in the center.
  reset() {
    this.position = 50
  }

  //increments the speed of the AI paddle, but also its a limiter.
  update(delta, ballHeight) {
    this.position += SPEED * delta * (ballHeight - this.position)
  }
}
