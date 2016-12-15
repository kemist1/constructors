var Shape = require('./Shape.js');
//
var Pentagon = function(side1, side2, side3, side4, side5){
    this.side1;
    this.side2;
    this.side3;
    this.side4;
    this.side5;
}

Pentagon.prototype = new Shape();

module.exports = Pentagon;