/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const newAnchor = document.createElement("a");
const newLiElement = document.createElement('li');
newLiElement.textContent = 'Section1';
newLiElement.style.color = 'orange';
newLiElement.style.fontSize = "1.25em";
newLiElement.style.padding = "1.25em";
const mainHeading = document.querySelector('ul');
mainHeading.appendChild(newLiElement)

const newLiElement2 = document.createElement('li');
newLiElement2.textContent = 'Section2';
newLiElement2.style.color = 'orange';
newLiElement2.style.fontSize = "1.25em";
newLiElement2.style.padding = "1.25em";
const mainHeading2 = document.querySelector('ul');
mainHeading.appendChild(newLiElement2)

const newLiElement3 = document.createElement('li');
newLiElement3.textContent = 'Section3';
newLiElement3.style.color = 'orange';
newLiElement3.style.fontSize = "1.25em";
newLiElement3.style.padding = "1.25em";
const mainHeading3 = document.querySelector('ul');
mainHeading.appendChild(newLiElement3)


// Add class 'active' to section when near top of viewport
document.addEventListener('click', function() {
  const mainHeading = document.querySelector('li');
  mainHeading.style.backgroundColor = 'orange';
})


// Scroll to anchor ID using scrollTO event
function scrollTo(hash) {
    location.hash = "section1" + hash;
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
