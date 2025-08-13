let arr = [1, 2, 3, 4];
let div = document.getElementById("output");

// Step 1: Return array after 3 seconds
let myPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res(arr); // resolve with initial array
    }, 3000);
});

myPromise
    // Step 2: Filter even numbers after 1 second
    .then((data) => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                let evens = data.filter(num => num % 2 === 0);
                div.innerHTML = evens;
                res(evens);
            }, 1000);
        });
    })
    // Step 3: Multiply by 2 after 2 more seconds
    .then((evens) => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                let doubled = evens.map(num => num * 2);
                div.innerHTML = doubled;
                res(doubled);
            }, 2000);
        });
    });
