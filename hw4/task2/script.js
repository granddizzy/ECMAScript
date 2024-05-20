const url1 = 'https://dog.ceo/api/breeds/image/random';
const mainSectionEl = document.querySelector('.mainSection');
const beforeImgEl = mainSectionEl.querySelector('.beforeImg');
const afterImgEl = mainSectionEl.querySelector('.afterImg');
const startSlideEl = mainSectionEl.querySelector('.startSlide');

const getData = async (url) => {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error.message);
  }
};

function startSlide() {
  const countSlide = 10;
  const interval = 3;

  startSlideEl.style.display = 'none';

  for (let i = 0; i < countSlide; i++) {
    setTimeout(async () => {
      const data = await getData(url1);
      showImage(data.message, i % 2);
    }, i * 1000 * interval);
  }

  setTimeout(async () => {
    afterImgEl.style.opacity = '0';
    beforeImgEl.style.opacity = '0';
    startSlideEl.style.display = 'block'
  }, (countSlide - 1) * 1000 * interval + 1000 * interval);
}

function showImage(imgUrl, mode) {
  if (mode === 0) {
    afterImgEl.src = imgUrl;
    afterImgEl.style.opacity = '1';
    beforeImgEl.style.opacity = '0';
  } else {
    beforeImgEl.src = imgUrl;
    afterImgEl.style.opacity = '0';
    beforeImgEl.style.opacity = '1';
  }
}

startSlideEl.addEventListener('click', () => {
  startSlide();
});

startSlide();