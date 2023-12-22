const images = ["/img/pilt1.jpg", "/img/pilt2.jpg", "/img/pilt3.jpg", "/img/pilt4.jpg"];
const currentMainImage = document.querySelector(".image-container img");
const myButton = document.querySelector('button');


myButton.addEventListener('click', changeImage);

function changeImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    currentMainImage.src = images[randomIndex];
}