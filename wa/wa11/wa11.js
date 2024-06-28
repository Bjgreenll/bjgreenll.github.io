const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ['tropical1.jpg', `tropical2.jpg`, `tropical3.jpg`, `tropical4.jpg`, `tropical5.jpg`];
const alts = {

  'tropical1.jpg' : 'flowers',
  'tropical2.jpg' : 'sea weed',
  'tropical3.jpg' : 'Coral reef',
  'tropical4.jpg' : 'shells',
  'tropical5.jpg' : 'reef'

}

/* Looping through images */

for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `img11/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
