"use strict";
//make shape constructor//

function Shape(){
    this.type = 'Shape';
}
Shape.prototype.get_type = function(){
    return this.constructor;
}
module.exports = Shape;
