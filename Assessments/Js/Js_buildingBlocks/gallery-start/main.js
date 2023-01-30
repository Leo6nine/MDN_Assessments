const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const arrayOfImages = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg']

/* Declaring the alternative text for each image file */
const imgAltTxt = new Object()
imgAltTxt.txt1 = 'Closeup of a human eye'
imgAltTxt.txt2 = 'Something like Waves'
imgAltTxt.txt3 = 'Small Flowers'
imgAltTxt.txt4 = 'Egyptian Art'
imgAltTxt.txt5 = 'Resting butterfly'

/* Looping through images */
for (let arrayOfImage of arrayOfImages) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', arrayOfImage);
    newImage.setAttribute('alt', Object.values(imgAltTxt));
    thumbBar.appendChild(newImage);
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