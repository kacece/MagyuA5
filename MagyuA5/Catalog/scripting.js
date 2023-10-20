const imageSlider = document.querySelector('.image-slider');
const images = imageSlider.querySelectorAll('img');
let currentImage = 0;

function showImage(imageIndex) {
    images.forEach((image, index) => {
        if (index === imageIndex) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

function nextImage() {
    currentImage = (currentImage + 1) % images.length;
    showImage(currentImage);
}

function previousImage() {
    currentImage = (currentImage - 1 + images.length) % images.length;
    showImage(currentImage);
}

showImage(currentImage);

setInterval(nextImage, 5000); // Automatically slide to the next image every 5 seconds
