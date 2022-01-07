/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

const navigation = `
        <ul>
            <li><a>HOME</a></li>
            <li><a>ABOUT</a></li>
            <li><a>CONTACT</a></li>
            <li><a>BLOG</a></li>
            <li><a>EMAIL</a></li>
        </ul>
`;

const main = document.querySelector(".siteheader");

const newNav = document.createElement("nav");
newNav.classList.add("navigation");
newNav.setAttribute("id", "test");
newNav.innerHTML = navigation;

main.append(newNav);
