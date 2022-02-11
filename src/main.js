// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');

var buttonRandomCover = document.querySelector('.random-cover-button');
var buttonMakeOwnCover = document.querySelector('.make-new-button');
var buttonHome = document.querySelector('.home-button');
var buttonViewSavedCovers = document.querySelector('.view-saved-button');
var buttonSaveCover = document.querySelector('.save-cover-button');

var home = document.querySelector('.home-view');
var form = document.querySelector('.form-view');
var viewSavedCovers = document.querySelector('.saved-view');


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
// Global variable
var currentCover;

// Add your event listeners here 👇
buttonRandomCover.addEventListener('click', generateRandomCover);
buttonMakeOwnCover.addEventListener('click', makeOwnCover);
buttonViewSavedCovers.addEventListener('click', toggleViewSaved);
//buttonSaveCover.addEventListener('click', saveCover); // use this on later iterations


// Create your event handlers and other functions here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateRandomCover() {
  coverImage.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];

  // Update current cover to match displayed cover
  currentCover = new Cover(
    coverImage.src, coverTitle.innerText,
    tagline1.innerText, tagline2.innerText
  );
}

function hideAll() {
  home.classList.add('hidden');
  form.classList.add('hidden');
  viewSavedCovers.classList.add('hidden');
}
function makeOwnCover() {
  hideAll();
  form.classList.remove('hidden');
  buttonHome.classList.remove('hidden');
  buttonRandomCover.classList.add('hidden');
  buttonSaveCover.classList.add('hidden');
}

function toggleViewSaved() {
  hideAll();
  viewSavedCovers.classList.remove('hidden');
  buttonHome.classList.remove('hidden');
  buttonRandomCover.classList.add('hidden');
  buttonViewSavedCovers.classList.remove('hidden');
  buttonSaveCover.classList.add('hidden');
}

// Main body of code here 👇

// Generate random cover on load
generateRandomCover();




















// // Create variables targetting the relevant DOM elements here 👇
// // Iter 0
// var coverImage = document.querySelector('.cover-image');
// var coverTitle = document.querySelector('.cover-title');
// var tagline1 = document.querySelector('.tagline-1');
// var tagline2 = document.querySelector('.tagline-2');
// // Iter 1
// var buttonRandomCover = document.querySelector('.random-cover-button');
// // Iter 2
// var buttonMakeOwnCover = document.querySelector('.make-new-button');
//
// // We've provided a few variables below
// var savedCovers = [
//   new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
// ];
// var currentCover;
//
// // Add your event listeners here 👇
// buttonRandomCover.addEventListener('click', generateRandomCover);
// buttonMakeOwnCover.addEventListener('click', makeOwnCover);
//
// // Create your event handlers and other functions here 👇
// function generateRandomCover() {
//   // currentCover = new Cover(coverImage.src, coverTitle.innerText, tagline1.innerText, tagline2.innerText);
//   // coverTitle.innerText = currentCover.title;
//   // savedCovers.push(new Cover(coverImage.src, "Whitney", "sunsets", "sorrows"))
//   coverImage.src = covers[getRandomIndex(covers)];
//   coverTitle.innerText = titles[getRandomIndex(titles)];
//   tagline1.innerText = descriptors[getRandomIndex(descriptors)];
//   tagline2.innerText = descriptors[getRandomIndex(descriptors)];
// }
//
// function makeOwnCover() {
//   // delete hidden line 29
//     // use .innerHTML?
//   // append hidden to line 17
// }
//
// // We've provided one function to get you started
// function getRandomIndex(array) {
//   return Math.floor(Math.random() * array.length);
// }
//
// coverImage.src = covers[getRandomIndex(covers)];
// coverTitle.innerText = titles[getRandomIndex(titles)];
// tagline1.innerText = descriptors[getRandomIndex(descriptors)];
// tagline2.innerText = descriptors[getRandomIndex(descriptors)];
