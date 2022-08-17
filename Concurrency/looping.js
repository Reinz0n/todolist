const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// example map
const newArray = array.map(function(item) {
    return item * 2;
});

console.log(newArray);

// example filter
const newArray2 = array.filter(function(item) {
    return item % 2 === 0;
});

console.log(newArray2);

// example reduce
const newArray3 = array.reduce(function(total, item) {
    return total + item;
} , 0);

console.log(newArray3);

// example forEach
array.forEach(function(item) {
    console.log(item);
} );

// example every
const newArray4 = array.every(function(item) {
    return item < 10;
}
);

console.log(newArray4);

// example some
const newArray5 = array.some(function(item) {
    return item == 5;
});

console.log(newArray5);