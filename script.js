// let age= 25;
// let year = 2019;

// console.log(age, year);

// age = 30;
// console.log(age);
// // const makes the variable not change ever //
// const points = 100;
// console.log(points);
// // var is the older way of creating variables //
// var score = 75;
// console.log(score);

// strings
// console.log('hello,world');

// let email = 'ol3oo4123@gmail.com';
// console.log(email);

// //string concatenation;
// let firstName = 'Brandon';
// let lastName = 'Sanderson';

// let fullName = firstName + ' ' +lastName;
// console.log(fullName);
// //getting characters
// console.log(fullName[2])

// // string length
// console.log(fullName.length);

// //string methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result, fullName)

// let index = email.indexOf('@');
// console.log(index)

// let email = 'mario@thenetninja.co.uk';

// // let result = email.lastIndexOf('n');
// // let result = email.slice(0,10);
// // let result = email.substr(4,10);
// let result = email.replace('m', 'w');
// console.log(result);

// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi);

// math operators +, -, *, /, **, %

// console.log(10/2);
// let result = radius %3
// let result = pi * radius **2;

// order of operation 0 - B I D M A S

// let result = 5 * (10-3) **2;
// console.log(result);

// let likes = 10;

// likes = likes + 1;
// likes++;
// likes--;
// likes += 10;
// likes -= 5;
// likes *= 2;
// likes /= 2;

// console.log(likes);

//NaN - not a number

// console.log(5 / 'hello');
// console.log(5 * 'hello');

// let result = 'the blog has ' + likes + ' likes'
// console.log(result);

//template strings
// const title = 'Best reads of 2019';
// const author = 'Mario';
// const likes = 30;

//concatention way
// let result = 'The blog called ' + title + ' by' + author + 'has ' + likes + ' likes'
// console.log(result);

//template string way
// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

//creating html templates
// let html = `
//     <h2>${title}</h2>
//     <p> ${author}</p>
//     <span>This blog has ${likes}</span>
// `;

// console.log(html);

//let ninjas = ['shaun', 'ryu', 'chun-li'];
// ninjas[1] = 'ken';

// console.log(ninjas);
// console.log(ninjas[1]);

// let ages = [20,25,30,35]
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20]
// console.log(random);

// let result = ninjas.join(',');
// let result = ninjas.indexOf('chun-li');
//let result = ninjas.concat(['ken','crystal']);
// let result = ninjas.push('ken');
//  result = ninjas.pop();
// console.log(result);

//let age = null;

//console.log(age, age + 3, `the age is ${age}`);

//booleans & comparisons
//console.log(true, false, "true", "false");

//methods can return booleans
//let email = 'luigi@thenetninja.co.uk';
//let names = ['mario', 'luigi', 'toad'];

//let result = email.includes('!');
//let result = names.includes('luigi');

//console.log(result);

//comparison operators

//let age = 25;

// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 25);
// console.log(age <= 25);
// console.log(age >= 25);

//let name = 'shaun';

// console.log(name == 'shaun');
// console.log(name == 'Shaun');
// console.log(name > 'crystal');
// console.log(name > 'Shaun');
// console.log(name > 'Crystal');

//let age = 25;

// loose comparison (different types can still be qequal)

// console.log(age == 25);
// console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25');

//strict comparison (diffrent types cannot be equal)

// console.log(age === 25);
// console.log(age === '25')
// console.log(age !== 25);
// console.log(age !== '25')

//type conversion
//let score = '100';

//score = Number(score);
//console.log(score + 1);
//console.log(typeof score);

//let result = Number('hello');
//let result = String(50);
//let result = Boolean(100);
//let result = Boolean('0');
//let result = Boolean('');

//console.log(result, typeof result);


//Chapter 3 Control Flow

//for loops

// for(let i =0; i < 5; i++){
//   console.log('in loop', i);
// }

// loop.log('loop finihsed');

//const names = ['shaun', 'mario', 'luigi'];

//for(let i = 0; i < names.length; i++){
  //console.log(i);
  //console.log(names[i]);
  //let html = `<div>${names[i]}</div>`;
  //console.log(html);
//}

//while loops

//const names = ['shaun', 'mario', 'luigi'];
//let i = 0;
//while(i < 5){
  //console.log('in loop: ', i);
  //i++;
//}

// let i= 0;
// while(i < names.length){
//   console.log(names[i]);
//   i++;
// }

// do while loops

// let i = 5;

// do{
//   console.log('val of i is: ', i);
//   i++;
// }while(i < 5)


//if statements
// const age = 25;

// if(age > 20){
//   console.log('you are over 20 years old')
// }


// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi']

// if(ninjas.length > 3){
//   console.log("that's a lot of ninjas")
// }

// const password = 'p@ss';

// if(password.length >=12 && password.includes('@')){
//   console.log('that password is might strong');
// }else if(password.length >= 8 || password.includes('@') && password.length > 5){
//   console.log('that password is strong enough!');
// }else{
//   console.log('password is not strong enough');
// }

//logical NOT (!)

// let user = false;

// if(!user){
//   console.log('you must be longed in to continue');
// }

// console.log(!true);
// console.log(!false);


// break and continue

// const scores = [10, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++){

//   if(scores[i] === 0){
//     continue;
//   }
  
//   console.log('your score: ', scores[i]);
  
//   if(scores[i] == 100){
//     console.log('congrats, you got the top score!');
//     break;
//   }
// }

// switch statements
// const grade = 'D';

// switch(grade){
//   case 'A':
//     console.log('you got an A!');
//     break;
//   case'B':
//     console.log('you got an B!');
//     break;
//   case'C':
//     console.log('you got an C!');
//     break;
//   case'D':
//     console.log('you got an D!');
//     break;
//   case'E':
//     console.log('you got an E!');
//     break;
//   default:
//     console.log('not a valid grade');
// }


// variables & block scope
// let age = 30;


// if(true){
//   let age = 40;
//   let name = 'shaun';
//   console.log('inside 1st code block: ', age, name);

//   if(true){
//     const age = 50;
//     console.log('inside 2nd code block: ', age)
//   }
  
// }

// console.log('outside code block: ', age, name);


// function declaration
// function greet(){
//   console.log('hello there');
// }

// function epression
// const speak = function(){
//   console.log('good day');
// };

// greet();
//greet();

//speak();

// function declaration
// function greet(){
//   console.log('hello there');
// }

//arguments & parameters

// const speak = function(name, time){
//   console.log(`good ${time} ${name}`);
// };

// speak('mario', 'morning');

// const calcArea = function(radius){
//   return = 3.14 * radius**2;
// }

// const area = clacArea(5); 
// console.log(area);


// regular function
// const calcArea = function(radius){
//   return 3.14 * radius**2;
// }

// //arrow function
// const calcArea = radius => 1.14 * radius**2;


// const area = calcArea(5);
// console.log('area is', area);

//practise arrow functions

// const greet = function(){
//   return 'hello, world';
// }

// const greet = function() => 'hello, world';
// const result = greet();


// const bill = function(products, tax){
//   let total = 0;
//   for(let 1= 0; i < products.length; 1++){
//     total += productts[1] + products[i] * tax;
//   }
//   return total;
// }

// const bill = (products, tax) => {
//   let total = 0;
//   for(let 1= 0; i < products.length; 1++){
//     total += products[1] + products[i] * tax;
// }
//   return total;
// };
// console.log(bill[10,15,30], 0.2);


// const name = 'shaun' ;

// //function

// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// //methods
// let resultTow = name.toUpperCase();
// console.log(resultTwo);


// callbakc & foreach 

// const myFunc = (callbackFunc) => {
//   // do something
//   let value = 50;
//   callbackFunc(value);
// };

// myfunc(value =>{
//   //do something
//   console.log(value);
// });


// let people = ['mario','luigi','ryu','shaun','chun-li',]

// const logPerson = (person, index) => {
//   console.log(`${index} - hello ${person}`);
// };

// people.forEach((person => {
//   console.log(index, person);
// });


//get reference to the 'ul'
// const ul = document.querySelector('.ppeople');

// cont people = ['mario','luigi', 'ryu', 'shaun', 'chun-li'];

// let html = ``;

// people.forEach(person => {
//   // creat html template
//   html += <li style="color: purple">${person}</li>

//   console.log(html);
//   ul.innerHTML = html;
// })


// object literals

// let user = {
//   name: 'crystal',
//   age:30,
//   email: 'ol3oo4123@gmail.co.uk',
//   location: 'nj',
//   blogs: ['why, mac & chees rules', '10 things to do']
// };

// console.log(user);
// console.log(user.name);

// user.age = 35;
// console.log(user.age)

// console.log(user['loaction']);
// user['name'] = 'chuni-li';
// console.log(user['name']);

// console.log(typeof user);


// object literals

// const blogs = [
//   { title: 'why mac & cheese rules', likes: 30},
//   { title:'10 things to make with marnite', likes: 50 }
// ];

// console.log(blogs);

// let user = {
//   name: 'crystal',
//   age: 30,
//   email: 'crystal@thenetninja.co.uk',
//   location: 'berlin',
//   blogs: [
//     { title: 'why mac & cheese rules', likes: 30},
//   { title:'10 things to make with marnite', likes: 50 }
//   ],
//   login:function(){
//     console.log('the user logged in');
//   },
//   logout: function(){
//     console.log('the user logged out');
//   },
//   logBlogs: function(){
//     console.log(this.blogs);
//     console.log('this user has written the following blogs:');
//     this.blogs.forEach(blog => {
//       console.log(blog.title, blog.likes);
//     });
//   }
// };

// user.logBlogs();
// console.log(this);



// Math object 

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// random number

// const random = Math.random();

// console.log(random);
// console.log(Math.round(random * 100));


//  primitive values

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference vlaues

// const userOne = { name: 'ryu', age: 30 };
// const userTwo = userOne;

// console.log(userOne, userTwo); 

// userOne.age = 40;
// console.log(userOne, userTwo);


// Chapter 6

// const para = document.querySelector('body > h1');

// console.log(para);


// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');

// // paras.forEach(para => {
// //   console.log(para);
// // });

// console.log(errors);



// get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);

// // get elements by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors[0]);


// get elemets by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[0]);


//const para = document.querySelector('p');

// console.log(para.innerText);
//para.innerText += ' ninjas are awesome!';

//const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//   console.log(para.innerText);
//   para.innerText += ' !new text';
// });

//const content = document.querySelector('.content');

//console.log(content.innerHTML);

//content.innerHTML += '<h2> this is a new h2</h2>';


// const people = ['mario', 'luigi', 'yoshi'];
// people.forEach(person => {
//   content.innerHTML += `<p>${person}</p>`;
// });

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.thenetninja.co.uk');
// link.innerText = 'the net ninja website';

// const mssg = document.querySelector('p');
// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
// mssg.setAttribute('style', 'color: green;');

// const title = document.querySelector('h1');

// // title.setAttribute('style', 'margin; 50px;')

// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = '60px';
// title.style.margin = '';

// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// //content.classList.remove('error');
// content.classList.add('success');


const paras = document.querySelectorAll('p');

paras.forEach(p => {
  if(p.textContent.includes('error')){
    p.classList.add('error');
  }
  if(p.textContent.includes('success')){
    p.classList.add('success');
  }
});

const title = document.querySelector('.title');

title.classList.toggle('test');
title.classList.toggle('test');


