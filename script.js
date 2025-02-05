const images = ["image/home-page/001.jpg", "image/home-page/002.jpg", "image/home-page/003.jpg", "image/home-page/004.jpg", "image/home-page/005.jpg", "image/home-page/006.jpg", "image/home-page/007.jpg", "image/home-page/008.jpg", "image/home-page/009.jpg"];
let currentImageIndex = 0;
const imageContainer = document.getElementById("image-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
let timer;
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

function updateImage() {
  const activeImage = imageContainer.querySelector("img.active");
  const nextImage = document.createElement('img');
  nextImage.src = images[currentImageIndex];
  nextImage.alt = `Image ${currentImageIndex + 1}`;

  nextImage.onload = () => {
    imageContainer.appendChild(nextImage);

    // Update the ::before background-image with transition
    imageContainer.style.setProperty('--background-image', `url(${images[currentImageIndex]})`);

    setTimeout(() => {
      nextImage.classList.add('active');
      if (activeImage) {
        activeImage.classList.remove('active');
        setTimeout(() => {
          imageContainer.removeChild(activeImage);
        }, 1000); // Match transition duration
      }
    }, 10);
  }
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    showNextImage();
  }, 3000);
}

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateImage();
}

prevBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateImage();
  startTimer();
});

nextBtn.addEventListener("click", () => {
  showNextImage();
  startTimer();
});

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  navLinks.classList.toggle('active');
});

updateImage();
startTimer();
