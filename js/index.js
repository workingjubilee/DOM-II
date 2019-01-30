

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
  // NOTE: does NOT stop the page from refreshing from nav-container's <a>
});


document.addEventListener('dblclick', e => {
  alert(`This is a ${e.target}!`);
});

document.querySelector('.nav').addEventListener('click', () =>{
  event.preventDefault();
  alert(`Stay a while and listen!`)
  event.stopPropagation();
  // Successfully killed propagation!
  // Also yes, multiple alerts CAN chain! So annoying!
});

logoTag = document.querySelector('.logo-heading')
logoTag.addEventListener('mouseover', () => {
  logoTag.style.animationPlayState = "running";
  event.stopPropagation();
  // Successfully killed propagation!
});

logoTag.addEventListener('mouseout', () => {
  logoTag.style.animationPlayState = "paused";
  event.stopPropagation();
  // together, "mouseover" and "mouseout" can reimplement a CSS :hover.
});

// document.querySelector('.intro').addEventListener('', () => {
//   alert('This is the intro!')
// })
//
// document.querySelector('.footer').addEventListener('', () => {
//   alert('This is the footer!')
// })
//
// document.querySelector('.content-destination').addEventListener('click', () => {
//   alert('Sure is some content here!')
// })

// document.querySelector('.main-navigation').addEventListener('scroll', () => {
//   console.log('Scrolled?');
//   // this doesn't work, hm.
// })
//
// document.querySelector('body').addEventListener('scroll', e => {
//   console.log('Scrolled?');
//   // this doesn't work, either?
// })

// window.addEventListener('scroll', e => {
//   console.log('Scrolled?');
//   // apparently "scroll" requires attachment to the window?
// })

document.addEventListener('scroll', e => {
  console.log('Scrolled?');
  // or document!
})

document.querySelector('body').addEventListener('wheel', () => {
  console.log('Wheeled?');
  // Oh, THIS works.
})

window.addEventListener('resize', () => {
  console.log('Resize!');
  // Works if attached to window but not document!
})

window.addEventListener("load", e=> {
  alert("Time to annoy you with JS!");
});

// document.querySelector('.main-navigation').addEventListener('wheel', () => {
//   console.log('Pow?');
//   // this doesn't work, hm.
//   // oh, it works when HOVERING over this, I think because it's a mouse input?
// })

btnTag = document.querySelectorAll('.btn')
console.log(btnTag);
// btnTag.forEach(i => { btnTag[i].addEventListener('blur', () => {
//   console.log('Boo!');
//   // Doesn't work?
// }}));
// will figure this out.

// btnTag[0].addEventListener('fadeout', () => {
//   console.log('Boo!');
//   // Doesn't work? with either blur or fadeout.
// });
//
// btnTag[1].addEventListener('fadeout', () => {
//   console.log('Boo!');
//   // Doesn't work? with either blur or fadeout.
// })
//
// btnTag[2].addEventListener('fadeout', () => {
//   console.log('Boo!');
//   // Doesn't work? with either blur or fadeout.
// })

// btnTag[0...].addEventListener('focusout', () => {
//   console.log('Boo!');
//   // Doesn't work?
// })

let keylogger = [];
window.addEventListener('keyup', e => {
  keylogger.push(e.code);
  console.log(keylogger);
  // doesn't work yet? hmm. undefined array of the same length?
  // oh I get it, it needs the counter function enclosure thing, will add later, dirty hack is...
  // finally got the keycode logging working! NOW I AM A MAST3R HAX0R who can keylog a site's inputs... eh.
})

document.addEventListener('keydown', e => {
  console.log(`bwoop!`);
});

// Interesting note: if keydown is an alert() it steals focus and prevents a keyup event from triggering in the document or window objects on my OS/browser combination.
// Also, keyup results in less multipresses than keydown!


// document.querySelectorAll('.nav-link').addEventListener('click',() => {
//   alert('Stop poking me!');
//   // NOTE: Interestingly, did NOT work!
//   // Uncaught TypeError: document.querySelectorAll(...).addEventListener is not a function
// imgTag = document.querySelectorAll('img');
// console.log(imgTag);
// imgTag[0]
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
