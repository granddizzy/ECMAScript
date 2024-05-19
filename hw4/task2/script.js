const url1 = 'https://dog.ceo/api/breeds/image/random';
const mainSectionEl = document.querySelector('.mainSection');
const imgEl = mainSectionEl.querySelector('img');

const getData = async (url) => {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error.message);
  }
};

for (let i = 0; i < 10; i++) {
  setTimeout(async () => {
    const data = await getData(url1);
    showImage(data.message);
  }, i * 3000);
}

function showImage(imgUrl) {
  imgEl.src = imgUrl;
}