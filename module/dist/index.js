"use strict";
var course = "Next Level Web development";
console.log(course); // Output: "Next Level Web development"
var add = function (num1, num2) { return num1 + num2; };
var result = add(40, 50);
console.log(result); // Output: 90
var pooorUser = {
    name: "saidee hasan",
    blance: 0,
    addBalance: function (blance) {
        return "New balance: ".concat(this.blance + blance);
    }
};
console.log(pooorUser.addBalance(50)); // Output: "New balance: 50"
