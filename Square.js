var Shape = require('./Shape.js');
//
var Square = function(side1, side2, side3, side4){
    this.side1;
    this.side2;
    this.side3;
    this.side4
}

Square.prototype = new Shape();

module.exports = Square;