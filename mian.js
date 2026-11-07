 // Question 1
let value = Number(prompt("Enter a number"));

for (let count = 1; count <= 10; count++) {
    console.log(value + " x " + count + " = " + (value * count));
}


// Question 2
for (let number = 1; number <= 50; number++) {
    if (number % 5 === 0) {
        console.log(number);
    }
}


// Question 3
let even = 0;

while (even < 50) {
    even += 2;
    console.log(even);
}


// Question 4
for (let timer = 10; timer >= 1; timer--) {
    console.log(timer);
}

console.log("Start!");


// Question 5
function sayHello(person) {
    console.log("Hello, " + person + "!");
}

sayHello("Mona");


// Question 6
let randomValue = Math.floor(Math.random() * 10) + 1;

console.log(randomValue);


// Question 7
let marks = [75, 88, 92, 65, 80];
let maxMark = marks[0];
let minMark = marks[0];

for (let j = 1; j < marks.length; j++) {
    if (marks[j] > maxMark) {
        maxMark = marks[j];
    }

    if (marks[j] < minMark) {
        minMark = marks[j];
    }
}

console.log("Highest score: " + maxMark);
console.log("Lowest score: " + minMark);


// Question 8
let degree = -6.3;

console.log(Math.abs(degree));
console.log(Math.ceil(degree));
console.log(Math.floor(degree));
console.log(Math.round(degree));


// Question 9
let fullName = prompt("Enter your full name");
let formattedName = fullName.trim();

console.log(formattedName.length);
console.log(formattedName.toUpperCase());
console.log(formattedName.toLowerCase());
console.log(formattedName.indexOf(" "));

let first = formattedName.split(" ")[0];

console.log(first);


// Question 10
let students = ["Omar", "Nour", "Mariam", "Ali"];

let choice = Math.floor(Math.random() * students.length);

console.log(students[choice]);


// Question 11
let staff = [
    { name: "Omar", age: 24, salary: 4500 },
    { name: "Nour", age: 23, salary: 5200 },
    { name: "Mariam", age: 27, salary: 6100 }
];

for (let k = 0; k < staff.length; k++) {
    console.log(staff[k].name);
    console.log(staff[k].age);
    console.log(staff[k].salary);
}