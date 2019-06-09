let calc1 = {
    total: 0,
    add: function(num) {
        this.total += num
    }
}
calc1.add(5)
console.log(calc1.total)

/* 

Object.values()
Object.keys()
can't do both need to loop


methods frequently refrence other properties in the same object
Introduction to "this"
*/
let graceHopper = {
    first: 'Grace',
    last: 'Hopper',
    rank: 'Rear Ad',
    getThis: function() {
        return this
    }
}

console.log(graceHopper.getThis())

let calc = {
    num1: 20,
    num2: 30,
    sum: function () {
        return this.num1 + this.num2;
    },
    difference: function () {
        return this.num1 - this.num2;
    }
};

console.log(calc.sum());
calc.num2 = 15;
console.log(calc.difference());
