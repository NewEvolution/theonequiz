// IIFE #########################################

// 1
var FruitMaker = function() {
  var fruitArr = ["apples", "bananas", "cherries", "huckleberries"];

  // 2
  return {
    getFruits: function() {
      return fruitArr;
    },
    addFruit: function(fruit) {
      fruitArr.push(fruit);
    }
  };
}();