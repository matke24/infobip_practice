const Knight = require("./horse");


test("Hose can move", () => {

  const startX = 2;
  const startY = 1;
  
  const knight = new Knight(startX, startY);

  console.log(knight.x + " " + knight.y)

  expect(knight.isUserCoordinateValid(startX,startY)).not.toBeFalsy()

  expect(knight.canMove(3,3)).toBeTruthy()
  expect(knight.canMove(1,3)).toBeTruthy()

  expect(knight.canMove(2,3)).not.toBeTruthy()
  expect(knight.canMove(-3,3)).not.toBeTruthy()

  expect(knight.canMove(2,5)).toBeFalsy()

  expect(knight.canMove(0,3)).not.toBeTruthy()

  expect(knight.canMove(3,0)).not.toBeTruthy()

  expect(knight.moveToNewPosition(3,3)).toBeTruthy()
  expect(knight.moveToNewPosition(4,-3)).not.toBeTruthy()

});
