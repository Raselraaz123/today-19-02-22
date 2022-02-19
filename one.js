var myName = 'Rasel';
// console.log(myName);
myName = 'Rasel Raaz'
console.log(myName);
let number = 500;
console.log(number);
number = 1000;
console.log(number)
const maa = 'Rabaya';
console.log(maa);
// let maa = 'Rabayas'
// console.log(maa);
if (number > 0) {
    console.log(true)
}
else {
    console.log(false)
}
if (100 < 30) {
    console.log(100, "is lass than 30")
}
else {
    console.log(100, 'is biger than 30');
}
if (number == 1000) {
    console.log(true)
}
else {
    console.log(false);
}
if (number != 1000) {
    console.log(true)
}
else {
    console.log(false)
}
if (number != 700) {
    console.log(true)
}
else {
    console.log(false)
}
if (number >= 1004) {
    console.log("rasel")
}
else {
    console.log('Roman')
}
if (number >= 900) {
    console.log('rabaya')
}
else {
    console.log('other')
}
if (number <= 300) {
    console.log(true)
}
else {
    console.log("game over")
}
if (number <= 20000) {
    console.log("is true game start")
}
else {
    console.log(false, 'tring')
}


const num = [50, 20, 30, 70, 200, 100];
console.log(num);
num.push(500);
console.log(num);
num.pop()
console.log(num);
num.pop()
console.log(num.length)
console.log(num.indexOf(20))
console.log(num.indexOf(70));
num.unshift(499);
console.log(num);
num[2] = 90;
console.log(num);
console.log(Math.max(...num))
console.log(num.indexOf(5000) != -1);
console.log(num.includes(2222))
for (i = 0; i <= 10; i++) {
    console.log('namber:' + i)
}
let age = 55;
while (age < 30) {
    console.log('in side the loop' + age)
    age++
}
console.log('out of loop ' + age)
function sumName(name1, name2) {
    const Name = name1 + name2;
    return Name;
}
const fullname = sumName('Rasel ', 'Rana')
console.log(fullname);
const name = {
    fullname: 'Rasel',
    age: 40,
    roll: 3,
    Home:"Dhaka"
}
console.log(name.age);