
const createCounter = () => {
    let count = 0;

    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        get() {
            return count;
        }
    };
};

const counter = createCounter();
counter.increment();
counter.decrement();
counter.decrement();
// console.log(counter.get());

//Adder
const add = (a, b) => a + b; 
const createAdder = a => b => a+b;

const add10 = createAdder(10);
// console.log(add10(-2));
// console.log(add10(20));
// const add100 = createAdder(100);
// console.log(add100(-90));

//Tipper
/* Create createTipper which takes in the base tip (.15 for 15% tip)

*/

const createTipper = (tip) => {
    return (bill) => tip * bill;
};

const getTip15 = createTipper(0.15);
const getTip20 = createTipper(0.20);
const getTip25 = createTipper(0.25);

console.log(getTip15(100));
console.log(getTip20(100));
console.log(getTip25(100));
