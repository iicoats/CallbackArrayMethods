"use strict";

const numbers = [5,
10, 15, 20, 25, 30];

function onCount(item) {
    console.log(item);
}

numbers.forEach(function(item) {
       console.log(item * 2);
})

const oddNums = numbers.filter((item) => item % 2 !== 0);

