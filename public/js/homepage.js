let rkList = document.querySelector("#rk-list");
let yrList = document.querySelector("#yr-list");
let carousel = document.querySelector("#carousel");

const movieButtonHandler = async (event) => {
  try {
    const response = await fetch(`/api/movies`, {
      method: 'GET',
    });

    const moviedata = await response.json();
    let sortedMovies = moviedata.sort((i1,i2) => (i1.rating < i2.rating) ? 1 : (i1.rating < i2.rating) ? -1 : 0);
    for (i = 0; i < 10; i++) {
      let li = document.createElement('li');
      li.setAttribute("a", href=`/item/${sortedMovies.id}`);
      rkList.innerText = sortedMovies.name;
      li.appendChild(rkList);
    }
  } catch (error) {
    alert(response.statusText);
  }
}

const tvButtonHandler = async (event) => {
  try {
    const response = await fetch(`/api/tvs`, {
      method: 'GET',
    });

    const tvdata = await response.json();
    let sortedTvs = tvdata.sort((i1,i2) => (i1.rating < i2.rating) ? 1 : (i1.rating < i2.rating) ? -1 : 0);
    for (i = 0; i < 10; i++) {
      let li = document.createElement('li');
      li.setAttribute("a", href=`/item/${sortedTvs.id}`);
      rkList.innerText = sortedTvs.name;
      li.appendChild(rkList);
    }
  } catch (error) {
    alert(response.statusText);
  }
}

const gameButtonHandler = async (event) => {
  try {
    const response = await fetch(`/api/games`, {
      method: 'GET',
    });

    const gamedata = await response.json();
    let sortedGames = gamedata.sort((i1,i2) => (i1.rating < i2.rating) ? 1 : (i1.rating < i2.rating) ? -1 : 0);
    for (i = 0; i < 10; i++) {
      let li = document.createElement('li');
      li.setAttribute("a", href=`/item/${sortedGames.id}`);
      rkList.innerText = sortedGames.name;
      li.appendChild(rkList);
    }
  } catch (error) {
    alert(response.statusText);
  }
}

async function fetchYear() {
  try {
    const response = await fetch(`/api/years`, {
      method: 'GET',
    });

    const yeardata = await response.json();
    let sortedYears = yeardata.sort((i1,i2) => (i1.year < i2.year) ? 1 : (i1.year < i2.year) ? -1 : 0);
    for (i = 0; i < sortedYears.length; i++) {
      let li = document.createElement('li');
      li.setAttribute("a", href=`/year/${sortedYears.year}`);
      rkList.innerText = sortedYears.year;
      li.appendChild(rkList);
    }
  } catch (error) {
    alert(response.statusText);
  }
}

async function carouselRender() {
  try {
    const response = await fetch(`/`, {
      method: 'GET',
    });

    const itemdata = await response.json();
    while (true) {
      carousel.setAttribute("data-carousel-item", "active");
      img = document.createElement('img');
      img.src = itemdata[0].url;
      img.setAttribute("class", "absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2");
      img.setAttribute("alt", "...");
      carousel.appendChild(img);
      let last = itemdata.pop();
      itemdata.upshift(last);
      carousel.setAttribute("data-carousel-item", "");
    }
  } catch (error) {
    alert(response.statusText);
  }
}

document
  .querySelector('#button1')
  .addEventListener('click', movieButtonHandler);

document
  .querySelector('#button2')
  .addEventListener('click', tvButtonHandler);

document
  .querySelector('#button3')
  .addEventListener('click', gameButtonHandler);

fetchYear();
carouselRender();