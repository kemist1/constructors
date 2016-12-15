var Shape = require('./Shape.js');
console.log(Shape);
var Triangle = function(side1, side2, side3){
    this.side1;
    this.side2;
    this.side3;
}

Triangle.prototype = new Shape();

module.exports = Triangle;