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
var buttonMakeMyBook = document.querySelector('.create-new-book-button');


var home = document.querySelector('.home-view');
var form = document.querySelector('.form-view');
var viewSavedCovers = document.querySelector('.saved-view');

var userCoverInput = document.querySelector('#cover');
var testCoverInput = "";

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
// Global variable
var currentCover;

// Add your event listeners here 👇
buttonRandomCover.addEventListener('click', generateRandomCover);
buttonMakeOwnCover.addEventListener('click', toggleMakeOwnCover);
buttonViewSavedCovers.addEventListener('click', toggleViewSaved);
buttonHome.addEventListener('click', toggleHome)
buttonMakeMyBook.addEventListener('click', makeMyBook);
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
  buttonRandomCover.classList.add('hidden');
  buttonSaveCover.classList.add('hidden');
  buttonHome.classList.add('hidden');
}

function toggleMakeOwnCover() {
  hideAll();
  form.classList.remove('hidden');
  buttonHome.classList.remove('hidden');
}

function toggleViewSaved() {
  hideAll();
  viewSavedCovers.classList.remove('hidden');
  buttonHome.classList.remove('hidden');
  buttonViewSavedCovers.classList.remove('hidden');
}

function toggleHome() {
  hideAll()
  home.classList.remove('hidden');
  buttonRandomCover.classList.remove('hidden');
  buttonSaveCover.classList.remove('hidden');
  buttonViewSavedCovers.classList.remove('hidden');
}

function makeMyBook() {
  testCoverInput = userCoverInput.value;
  covers.push(testCoverInput);
   event.preventDefault();
}

// Generate random cover on load
generateRandomCover();
