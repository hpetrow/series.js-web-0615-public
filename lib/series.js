'use strict';

var Series = function(str){
  this.digits = str.split("").map(function (num) {
    return parseInt(num);
  });
};

Series.prototype.slices = function(n) {
  var slicesArr = [];
  if (n > this.digits.length) {
    throw new Error("Slice size is too big.");
  }
  else {
    for (var i = 0; i <= this.digits.length-n; i++) {
      slicesArr.push(this.digits.slice(i, i + n));
    }
  }
  return slicesArr;
};
