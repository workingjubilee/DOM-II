

// my tools are
// document.methods to identify the DOM items I want to manipulate which are:
// 1. .querySelector() for getting the first element by a full HTML/CSS selector query
// 2. .querySelectorAll() for getting all matching selectors for a given query (slow)
// 3. .getElementById() for getting a single ID tagged item
// 4. .getElementsByClassName for getting all elements with a given class
// 5. .getElementsByTagName() for getting all elements with a given tag (don't?)
// I can either declare these as variables (NOTE: these often retrieve STATIC lists which REMAIN IDENTICAL to their CURRENT STATE at the TIME OF RETRIEVAL) for later reference, or I can then chain these into my next magical act: .addEventListener(trip,reelease)
// NOTE also: .addEventListener is not a method of HTMLCollection!
// .addEventListener can be likened to a trap
// 1st parameter (the "trip") accepts a STRING argument, so this is a tripWIRE
// Except unlike most tripwires, you can set it off by all sorts of things, but
// 2nd parameter (the "release") takes a CALLBACK FUNCTION or a compatible OBJECT
// I don't actually know how to make or use an EventListener-enabled object!
// will figure that out sometime

// Sample:
document.querySelector('.nav-container').addEventListener('click', () => {
  alert('Stop poking me!');
  // NOTE: does NOT stop the page from refreshing from nav-container's <a>.
});

document.querySelector('.nav').addEventListener'click', () =>{
  event.preventDefault();
  alert(`Stay a while and listen!`)
  event.stopPropagation();
  // Successfully killed propagation!
  // Also yes, multiple alerts CAN chain!
});

document.querySelector('.logo-heading').addEventListener('click', () => {
  alert('FUN BUS!');
  // NOTE: does NOT stop the page from refreshing from nav-container's <a>.
  event.stopPropagation();
  // Successfully killed propagation!
});

// document.querySelectorAll('.nav-link').addEventListener('click',() => {
//   alert('Stop poking me!');
//   // NOTE: Interestingly, did NOT work!
//   // Uncaught TypeError: document.querySelectorAll(...).addEventListener is not a function
//   // Also applies to getElementsByClassName so PROBABLY does not work on the HTMLCollection?
// });

// Possibly can make work by consulting this, may require APPLY: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// document.getElementsByClassName('nav-link').addEventListener('click',() => {
//   alert('Stop poking me!');
//   // NOTE: Interestingly, did NOT work!
//   // Uncaught TypeError: document.querySelectorAll(...).addEventListener is not a function
// });

// Your code goes here
// * [ ] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use:

// * [ ] `mouseover`
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [ ] `dblclick`

// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly
// * [ ] Stop the navigation from items from refreshing the page by using `preventDefault()`


// ## Stretch Task:
//
// * [ ] Go look at [GSAP](https://greensock.com/) and implement the animations found in that library with your custom events.
//
//
//
// ## Stretch assignment
//
// * [ ] Take a look at the [stretch assignment](stretch-assignment) and follow the instructions in the read me file.
