"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var boos1 = ['Mr', "saidee", "Hasan"];
var boos2 = ['Mr', "saidee", "Hasan"];
var boosList = __assign(__assign({}, boos1), boos2);
console.log(boosList);
