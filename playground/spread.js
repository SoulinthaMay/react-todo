// function add (a, b, c) {
//     return a + b + c;
// }

// console.log(add(3, 1, 2));

// var toAdd = [9, 5, 1];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [...groupB, 3, ...groupA];

// console.log(final);

var person = ['Soulintha', 19];
var personTwo = ['May', 20];
//Hi May, you are 20
function greet (name, age) {
    console.log('Hi '+ name + ', you are '+ age);
}
greet(...person);
greet(...personTwo);

var names = ['Mike', 'Ben'];
var names2 = ['Jen', 'Kavin'];
var final = ['Soulintha', ...names, ...names2];

final.forEach(function (name){
    console.log('Hi ' + name);
});