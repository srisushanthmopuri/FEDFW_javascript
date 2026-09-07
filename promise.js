// Promise example
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Promise Resolve Successfully");
    } else {
        reject("Promise is rejected");
    }
});

// Handling the promise (removed extra semicolon before .catch)
promise
.then((message) => {
    console.log(message);
})
.catch((message) => {
    console.log(message);
});

// Function returning a promise (fixed Promise capitalization)
function getVerify(name) {
    let promise = new Promise((resolve, reject) => {
        if (name != null) {
            resolve("Name of a person is: " + name);
        } else {
            reject("Name should not be empty");
        }
    });
    return promise;
}

getVerify("Sushanth") 
.then((message) => {
    console.log(message);
})
.catch((message) => {
    console.log(message);
});