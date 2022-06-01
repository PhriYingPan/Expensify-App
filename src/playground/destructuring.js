// console.log('destructuring');

// const person = {
//     name: 'Conan',
//     age: 18,
//     location: {
//         city: 'Chicago',
//         temp: 92
//     }
// };

// const { name: firstName = 'Anonymous', age} = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}.`);


// const {city,temp: temperature} = person.location;
// if (city && temp) {
//     console.log(`It's ${temp} in ${city}.`);
// }


//  OBJECT DESTRUCTURING



const book = {
    title: 'Percy Jackson',
    author: 'Rick Riordan',
    publisher: {
        name: 'Penguin'
    }
};

const {title, author} = book;
console.log(`${title} is written by ${author}`);

const {name: publisherName = 'Self-published'} = book.publisher;


console.log(publisherName); 




// ARRAY DESTRUCTURING

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.60', '$2.75'];

const [type, , mediumCost] = item;

console.log(`A medium ${type} costs ${mediumCost}`);