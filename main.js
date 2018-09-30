const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4;

//Instead of for method
imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    //Reset the opacity
    imgs.forEach(img => (img.style.opacity = 1));

    //Change current image to src of clicked image
    current.src = e.target.src;

    //Add fade in class
    current.classList.add('fade-in')

    //Remove fade in class after .5 secounds
    setTimeout(() => current.classList.remove('fade-in'), 500); 

    //Change the opacity to opacity var
    e.target.style.opacity = opacity;
}