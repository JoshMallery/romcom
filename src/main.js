
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
var savedCoversSection = document.querySelector('.saved-covers-section');

var userCoverInput = document.querySelector('#cover');
var userTitleInput = document.querySelector('#title');
var userFirstDescriptor = document.querySelector('#descriptor1');
var userSecondDescriptor = document.querySelector('#descriptor2');

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

buttonRandomCover.addEventListener('click', generateRandomCover);
buttonMakeOwnCover.addEventListener('click', toggleMakeOwnCover);
buttonViewSavedCovers.addEventListener('click', toggleViewSaved);
buttonHome.addEventListener('click', toggleHome)
buttonMakeMyBook.addEventListener('click', makeMyBook);
buttonSaveCover.addEventListener('click', saveCover);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateRandomCover() {
  var randCover = covers[getRandomIndex(covers)];
  var randTitle = titles[getRandomIndex(titles)];
  var randDescriptor1 = descriptors[getRandomIndex(descriptors)];
  var randDescriptor2 = descriptors[getRandomIndex(descriptors)];
  createCover(randCover, randTitle, randDescriptor1, randDescriptor2);
}

function createCover(cover, title, descriptor1, descriptor2) {
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

  savedCoversSection.innerHTML = "";
  
  for (i = 0; i < savedCovers.length; i++) {
    savedCoversSection.innerHTML += `
    <section class="mini-cover">
      <img class="cover-image" id="${i}" ondblClick="deleteSelected(this)" src="${savedCovers[i].cover}">
      <h2 class="cover-title">${savedCovers[i].title}</h2>
      <h3 class="tagline">A tale of ${savedCovers[i].tagline1} and ${savedCovers[i].tagline2}</h3>
      <img class="overlay" src="./assets/overlay.png">
    </section>`;
  }
}

function toggleHome() {
  hideAll();
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

  createCover(userCoverInput.value, userTitleInput.value, userFirstDescriptor.value, userSecondDescriptor.value);
  clearInputs();
  toggleHome();
}

function saveCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
}

function clearInputs() {
  userCoverInput.value = "";
  userTitleInput.value = "";
  userFirstDescriptor.value = "";
  userSecondDescriptor.value = "";
}

 function deleteSelected(picture) {
  var arrayIndex = picture.id;
  savedCovers.splice(arrayIndex,1);
  toggleViewSaved();
 }

generateRandomCover();
