const carouselSlides = document.getElementById("carousel-slides");
const width = 300;

const nextFrame = function () {
  if (
    carouselSlides.scrollLeft >=
    carouselSlides.childElementCount * width - width
  ) {
    carouselSlides.scrollLeft = 0;
  } else {
    carouselSlides.scrollLeft += width;
  }
};

const previousFrame = function () {
  carouselSlides.scrollLeft -= width;
};

const selectFrame = function (button) {
  const scrollPosition = button * width - width;
  carouselSlides.scroll(scrollPosition, 0);
};

export { nextFrame, previousFrame, selectFrame };
