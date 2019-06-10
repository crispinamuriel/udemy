//Callback - harder to reason about, single argument callback
//cb argument doesnt denote whenter things are going well or not
//order of the arguments that tell us success or fail
//must look at what argument was provided and which was it in order to discern what happened
const getDataCallback = (callback) => {
    setTimeout(() => {
        callback('This is my cb error');
        callback('This is my cb error');
    }, 2000);
};

getDataCallback((err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

//Promises are easier to reason about because we can see if resolve was called success, if reject was called failure
//allows us to run some code after a certian amount of time has passed
//takes two arguments 1) code block to run after time 2) time in miliseconds. 
//promise takes resolve/reject as arguments resolve called with data if things went right reject called with error if things with wrong

//Promise - create a new promise with promise constructor function
const myPromise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        // resolve('This is the Promise data!');
        reject('This is my promise Error');
        reject('This is my promise Error');
    }, 2000);
});

//call a method on our promsie instance use .then
//this lets us define what we want to do when we have successfully recieved our information from the API
//IE when the promise resolves
// to throw an error we instead of calling resolve with the data, we call reject with an error

myPromise.then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
});

