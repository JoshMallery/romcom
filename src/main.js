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
var userTitleInput = document.querySelector('#title');
var userFirstDescriptor = document.querySelector('#descriptor1');
var userSecondDescriptor = document.querySelector('#descriptor2');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
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
  var randCover = covers[getRandomIndex(covers)];
  var randTitle = titles[getRandomIndex(titles)];
  var randDescriptor1 = descriptors[getRandomIndex(descriptors)];
  var randDescriptor2 = descriptors[getRandomIndex(descriptors)];
  instantiateCover(randCover, randTitle, randDescriptor1, randDescriptor2);
}

function instantiateCover(cover, title, descriptor1, descriptor2) {
  coverImage.src = cover;
  coverTitle.innerText = title;
  tagline1.innerText = descriptor1;
  tagline2.innerText = descriptor2;
  currentCover = new Cover(cover, title, descriptor1, descriptor2);
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

  var savedCoversSection = document.querySelector('.saved-covers-section');
  for (i = 0; i < savedCovers.length; i++) {
    savedCoversSection.innerHTML += `
    <img class="cover-image mini-cover" src="${savedCovers[i].cover}">
    <h2 class="mini-cover cover-title">${savedCovers[i].title}</h2>`;

  }

}

function toggleHome() {
  hideAll()
  home.classList.remove('hidden');
  buttonRandomCover.classList.remove('hidden');
  buttonSaveCover.classList.remove('hidden');
  buttonViewSavedCovers.classList.remove('hidden');
}

function makeMyBook() {
  event.preventDefault();

  covers.push(userCoverInput.value);
  titles.push(userTitleInput.value);
  descriptors.push(userFirstDescriptor.value);
  descriptors.push(userSecondDescriptor.value);

  instantiateCover(userCoverInput.value, userTitleInput.value, userFirstDescriptor.value, userSecondDescriptor.value);

  toggleHome();
}

// Generate random cover on load
generateRandomCover();
