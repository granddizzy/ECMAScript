const url1 = 'https://jsonplaceholder.typicode.com/users';

const getData = async (url) => {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error.message);
  }
};

const mainSectionEl = document.querySelector('.mainSection');
const userContainerTemplateEl = document.querySelector('#userTemplate');

const fetchData = await getData(url1);

fetchData.forEach(
  function (el) {
    mainSectionEl.appendChild(getCompletedTemplate(el));
  }
)

mainSectionEl.addEventListener('click', (e) => {
  if (e.target.classList.contains('userContainer__deleteCross')) {
    const closestParent = e.target.closest('.userContainer');
    const userId = closestParent.getAttribute('data-id');
    deleteUser(userId);
  }
});

function getCompletedTemplate(userData) {
  const userContainerEl = userContainerTemplateEl.content.cloneNode(true);

  userContainerEl.querySelector(".userContainer").setAttribute('data-id', userData.id)

  userContainerEl.querySelector(".userInfo__name").textContent = userData.name;
  userContainerEl.querySelector(".userInfo__username").textContent = userData.username;
  userContainerEl.querySelector(".userInfo__phone").textContent = userData.name;
  userContainerEl.querySelector(".userInfo__website").textContent = userData.name;

  userContainerEl.querySelector(".address__street").textContent = userData.address.street;
  userContainerEl.querySelector(".address__suite").textContent = userData.address.suite;
  userContainerEl.querySelector(".address__city").textContent = userData.address.city;
  userContainerEl.querySelector(".address__zipcode").textContent = userData.address.zipcode;
  userContainerEl.querySelector(".address__lat").textContent = userData.address.geo.lat;
  userContainerEl.querySelector(".address__lng").textContent = userData.address.geo.lng;

  userContainerEl.querySelector(".company__name").textContent = userData.company.name;
  userContainerEl.querySelector(".company__catchPhrase").textContent = userData.company.catchPhrase;
  userContainerEl.querySelector(".company__bs").textContent = userData.company.bs;

  return userContainerEl;
}

function deleteUser(userId) {
  const delEl = mainSectionEl.querySelector(`[data-id="${userId}"]`);
  delEl.remove();
}