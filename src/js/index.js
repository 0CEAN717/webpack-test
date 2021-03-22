import '../scss/main.scss';
import moment from 'moment';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

const firstName = "Jakub";
const age = 18;

const emptyParagraph = document.querySelector(".week-summary__description--js");
emptyParagraph.innerHTML = "Nawet nie uzupełniałem teśći HTML";

//Function declaration
function greetOld(age, firstName) {
  console.log(`Siema nazywam się ${firstName} i mam ${age} lat`);
}
//greetOLD(age, firstName);

//Arrow function
const greet = (age, firstName) => {
    console.log(`Siema nazywam się ${firstName} i mam ${age} lat`);
}
greet(18, 'Jakub')



function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}
createContent(".week-summary__description--js", "Witaj świecie!");
createContent(".week-summary__title--js", "Podmieniony tytuł!");


const deathStar = {
    diameter: 120000,
    fire: (target) => {
        console.log(`${target} destroyed 💥`)
    },
isOperating: true,
levels: 357,
name: 'Death Star',
population: 10000,
isLightOn: true,
commander: {
    name: 'Darth Vader',
    age: 44
}
}

const myProperty = 'name'

//const showMeProperty = (myProperty) => {
//    console.log(`Twoja własność ${myProperty} to: ${deathStar[myProperty]}');
//}

//showMeProperty('nieistnieje');

const humanOne = {
    name: 'Maciek',
    age: 32,
    address: {
        street: 'Warszawska',
        city: 'Białystok'
    }
}

const humanTwo = {
    name: 'Stefan',
    age: 35,
    address: {
        street: humanOne.address.street,
        city: 'Białystok'
    } 
}

console.log(humanOne);
console.log(humanTwo);

humanOne.age = 35;

console.log(humanOne);
console.log(humanTwo);


const button = document.querySelector('.action--js');

console.log(button)

button.addEventListener('click', () => {
    const heading = document.querySelector(".main__heading--js");
    heading.innerHTML = `Witaj Drogi Odwiedzający, nazywam się Jakub`;
    console.log(heading.classList.contains('main__heading'))
})

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
})

const startOfDay = moment().startOf('day').fromNow();

const timePlaceholder = document.querySelector('.time--js');
timePlaceholder.innerHTML = startOfDay;