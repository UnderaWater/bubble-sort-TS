"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sorter_1 = require("./sorter");
const NumberCollection_1 = require("./NumberCollection");
const numberCollection = new NumberCollection_1.NumberCollection([14, 3, 11, -9]);
const sorter = new sorter_1.Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data);
