/**
 * Traverse the DOM tree using querySelector() and querySelectorAll()
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
 */

import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "../assets/images/everyday.svg"
);

const main = document.querySelector(".maincontent");

const content = `
  <article class="backpack" id="everyday">
    <figure class="backpack__image">
      <img src=${everydayPack.image} alt="" />
    </figure>
    <h1 class="backpack__name">${everydayPack.name}</h1>
    <ul class="backpack__features">
      <li class="backpack__volume">Volume:<span> ${
        everydayPack.volume
      }l</span></li>
      <li class="backpack__color">Color:<span> ${everydayPack.color}</span></li>
      <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
      <li class="backpack__pockets">Number of pockets:<span> ${
        everydayPack.pocketNum
      }</span></li>
      <li class="backpack__strap">Left strap length:<span> ${
        everydayPack.strapLength.left
      } inches</span></li>
      <li class="backpack__strap">Right strap length:<span> ${
        everydayPack.strapLength.right
      } inches</span></li>
      <li class="backpack__lid">Lid status:<span> ${
        everydayPack.lidOpen
      }</span></li>
    </ul>
  </article>
`;

main.innerHTML = content;

//className - can be set to a different name
console.log(document.querySelector("ul li:first-child").className);

//classList capabilities
console.log(document.querySelector("ul li:last-child").classList);
console.log(
  document.querySelector("ul li:last-child").classList.add("new-class")
);
console.log(
  document.querySelector("ul li:last-child").classList.remove("new-class")
);
console.log(
  document.querySelector("ul li:last-child").classList.toggle("new-class") //adds if not there, remove if it is
);
console.log(
  document
    .querySelector("ul li:last-child")
    .classList.replace("new-class", "test")
);

//attributes
document.querySelector("a").hasAttribute("href"); //true or false
document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href", "some url");
document.querySelector("a").setAttribute("title", "some url"); //creates new attribute
document.querySelector("a").removeAttribute("title");

console.log(document.querySelectorAll("ul li"));
