// // console.log("Hello Session 2");

// // exercise 1.1
// const genre = "horror";
// const rating = 5;
// const pillow = 1; 

// // exercise 1.2 
// if (rating === 5 && genre === "horror" && pillow >0){
//     console.log("Your friend will watch this movie")
// }

// else if (rating === 5 && genre === "horror" && pillow === 0){
//     console.log("Your friend will not watch the movie without a pillow!")
// }
// else {
//     console.log("There is no point watching this movie it has a rubbish rating!")
// }

// Exercise 2.1
// let students = ["sofia","Elizabeth","Sasha","Samantha", "Abigail", "Lorena", "Ayesha", "Adeyo", "Emil"];

// let studentcount = 0;

// for (var i = 0; i < students.length; i++){
//     console.log(`This is student number ${i+1} who is called: ${students[i]}`);
//     studentcount++;

// }
// console.log(`There are ${studentcount} student.`);

// // Exercise 2.3
// let classSize = 0;
// const maxClassSize = 7; 
// let classList = [];

// while (classSize < maxClassSize){
//     classList.push(students[Math.floor(Math.random() * students.length)]);
//     classSize++;
// }
// console.log(classList);

// Exercise 3.0 

// function addTwoNumbers(num1, num2){
//     return num1 + num2;
// }
// console.log(addTwoNumbers(2938,2));

// Alternative solution for problem above: 
// let twoPlusTwo = addTwoNumbers(2,2);
// console.log(twoPlusTwo);

// Multiplication table 
// function  consolelogTimesTableof(number){
//     for (var i = 0; i < 21; i++) {
//         console.log(`${i} * ${number} = ${i*number}`)
//     }
// }
// consolelogTimesTableof(5);

// CountDown
// function countDown(countDownFrom){
//     let i = countDownFrom;
//     while (i !==0){
//         console.log(i);
//         i--;
//     }
// }
// countDown(10);

// Count up 
function countUp(countUpto){
    let i = 0;
    while (i <= countUpto){
        console.log(i);
        i++;
    }
}
countUp(10);


