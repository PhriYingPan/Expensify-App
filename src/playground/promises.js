const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('wrong')
        // resolve('This is my resolved data');
    }, 1500);
    
});

console.log('before');

promise.then((data) => {
    console.log(data);
}).catch(() => {
    console.log('error: ', error);
});