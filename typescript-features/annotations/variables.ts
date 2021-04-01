let apples = 5;
let speed = 'fast';
let hasName = true;
let nothingMuch = null;
let nothing = undefined;
let now = new Date();

let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, true, false];

class Car {

};
let car: Car = new Car();

let point: { x: number; y: number } = {
    x: 10,
    y: 20
};

const logNumber = (i: number) => {
    console.log(i);
}

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i=0; i<numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}

console.log(numberAboveZero);
