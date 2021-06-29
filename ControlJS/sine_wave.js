// Move the mouse across the screen as a sine wave.
const robot = require("robotjs");

// Speed up the mouse.
robot.setMouseDelay(2);

let twoPI = Math.PI * 2.0;
let screenSize = robot.getScreenSize(); // Could make this argument/parameter (given dimensions {height, width})
let height = (screenSize.height / 2) - 10;
let width = screenSize.width;
console.log(height)
console.log(width)

let count = 0;
for (var x = 0; x < width; x++)
{
	y = height * Math.sin((twoPI * x) / width) + height;
	count++;
	if (count % 4) console.log(`{x: ${x}, y: ${y}}`)
	robot.moveMouse(x, y);
}

console.log(count)