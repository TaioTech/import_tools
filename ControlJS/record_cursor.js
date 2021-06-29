// Gets hex pixel color of where mouse is currently pointing along with the {x,y} positions.

// Get pixel color under the mouse.
let robot = require("robotjs");


(() => {
  let mouse = robot.getMousePos();
  let hex = robot.getPixelColor(mouse.x, mouse.y);

  let pos = {x: mouse.x, y: mouse.y, color: hex};

  while(true) {
    // Get mouse position.
    mouse = robot.getMousePos();
    // Get pixel color in hex format.
    hex = robot.getPixelColor(mouse.x, mouse.y);

    changed = (mouse.x === pos.x && mouse.y === pos.y) ? false : true
    if (changed) {
      pos.x = mouse.x
      pos.y = mouse.y
      pos.color = mouse.hex
    }

    if (changed) {
      console.log("Pixel color: #" + hex + " at cursor position {x:" + pos.x + ", y:" + pos.y + "}");
    }
  }
})()
