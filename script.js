/*
My page

мої улюблені сайти: google, w3schools, stackoverflow
За допомогою JavaScript запропонувати користувачу вибрати стиль для сторінки. А саме:

фон для сторінки
тип шпифта на сторінці
вирівнювання для заголовка h1
фон для параграфа зі зсилками
колір тексту у параграфі зі зсилками і для самих зсилок. При чому колір тексту для зсилок призначити у циклі
колір, розмір, товщину тексту у елементі div
тип маркера для маркованого списку на сторінці
Таким чином слід запропонувати користувачу ввести десять налаштувань сторінки і застосувати їх.
ДОДАТОК ДО ЗАВДАННЯ: замість лінків на конкретні сайти, вивести у панелі навігації лінки на три сайти, які вкаже користувач.
Наприклад користувач у віконце prompt() ввів адресу football24.ua - в такому разі треба створити лінку, яка вела б на сайт football24, а текстом цієї лінки (тим, по чому можна клікнути) буде також football24.ua
*/


const sites = [];

for (let i = 0; i < 3; i++) {
  const site = prompt(`Введіть адресу ${i+1}-го улюбленого сайту:`);
  sites.push(site);
}

const links = document.querySelectorAll("a");

links.forEach((link, i) => {
  link.href = "http://" + sites[i];
  link.textContent = sites[i] ;
});


const bgColor = prompt("Введіть колір фону для сторінки:");
document.body.style.background= bgColor;

const fontType = prompt("Введіть тип шрифту для сторінки:");
document.body.style.fontStyle= fontType;

const headingAlign = prompt("Введіть вирівнювання для заголовка h1 (left, center або right):");
document.querySelector('h1').style.textAlign= headingAlign;

const linkBgColor = prompt("Введіть колір фону для параграфа зі зсилками:");
document.querySelector("p").style.backgroundColor = linkBgColor;

const linkTextColor = prompt("Введіть колір тексту для параграфа зі зсилками:");
document.querySelector("p").style.color = linkTextColor;

const linksSelec = document.querySelectorAll("a");
for(let i=0; i<links.length;i++){
linksSelec[i].style.color=linkTextColor;
}

const divColor = prompt("Введіть колір тексту для елементу div:");
document.querySelector("div").style.color= divColor;
const divSize = prompt("Введіть розмір тексту для елементу div:");
document.querySelector("div").style.fontSize = divSize;
const divWeight = prompt("Введіть товщину тексту для елементу div:");
document.querySelector("div").style.fontWeight = divWeight;

const listStyleType = prompt("Введіть тип маркера для маркованого списку (disc, circle або square):");
document.querySelector("ul").style.listStyleType = listStyleType;





