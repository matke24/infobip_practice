class Knight {
  constructor(startingX, startingY, figureColor) {
    if (this.isUserCoordinateValid(startingX, startingY)) {
      this.x = startingX;
      this.y = startingY;
      this.color = figureColor;
    } else {
      this.x = 2;
      this.y = 1;
    }
  }

  isUserCoordinateValid(userX, userY) {
    let flag = false;
    if (userX > 0 && userX <= 8 && userY > 0 && userY <= 8) {
      flag = true;
    }
    return flag;
  }

  canMove(userX, userY) {
    let flag = false;
    if (this.isUserCoordinateValid(userX, userY)) {
      let horseMove = Math.pow(this.x - userX, 2) + Math.pow(this.y - userY, 2);
      if (horseMove == 5) {
        flag = true;
      }
      console.log(userX + " " + userY);
    }
    return flag;
  }

  moveToNewPosition(userX, userY) {
    let isSet = false;
    if (this.canMove(userX, userY)) {
      this.x = userX;
      this.y = userY;
      isSet = true;
    }
    return isSet;
  }
}

module.exports = Knight;

class Board {
  constructor() {
    this.figures = [
      new Knight("white", 1),
      new Knight("white", 2),
      new Knight("black", 1),
      new Knight("black", 2),
      new Pawn("white", 1),
    ];
  }
}


function print(arr){
    arr.forEach((ele, i) => {
        console.log(`${ele} @ index ${i}`)
    })
}