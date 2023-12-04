// import statements here
import { initialPageLoad } from "./homepage"
import { loadMenu } from "./menu"
import { loadAbout } from "./about"
import { loadHome } from "./home"

// Select DOM elements
const homeTab = document.getElementsByClassName('home')
const menuTab = document.getElementsByClassName('menu')
const aboutTab = document.getElementsByClassName('about')
console.log(homeTab)
console.log(menuTab)

// functions
let clearContent = function() {
    const tab = document.getElementsByClassName('tab');
    tab[0].parentNode.removeChild(tab[0]);
}

// call initial page load function from Homepage.js (should b the entire homepage with header and content -> this will create
// the DOM elements so we can select them when we switch tabs)
initialPageLoad()


// event listeners

menuTab[0].addEventListener('click', () =>  {
    clearContent();
    loadMenu()
})

aboutTab[0].addEventListener('click', () => {
    clearContent();
    loadAbout();
})

homeTab[0].addEventListener('click', () => {
    clearContent();
    loadHome();
})

document.addEventListener('click', function(e) {
    console.log(e.target)
})

