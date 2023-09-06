let rkList = document.querySelector("#rk-list");
let yrList = document.querySelector("#yr-list");

const movieButtonHandler = async (event) => {
  try {
    const response = await fetch(`/api/movies`, {
      method: 'GET',
    });

    const moviedata = await response.json();
    while(rkList.firstChild) {
      rkList.removeChild(rkList.firstChild);
    }
    let sortedMovies = moviedata.sort(function(a, b){return (b.reviews.reduce((x,y) => x + y.rating, 0)/b.reviews.length) - (a.reviews.reduce((x,y) => x + y.rating, 0)/a.reviews.length)});
    for (i = 0; i < 10; i++) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.setAttribute("href", `/api/items/${sortedMovies[i].id}`);
      a.innerText = sortedMovies[i].name;
      a.setAttribute("class", "hover:text-yellow-400");
      li.appendChild(a);
      rkList.appendChild(li);
    }
    // console.log(rkList);
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
    while(rkList.firstChild) {
      rkList.removeChild(rkList.firstChild);
    }
    let sortedTvs = tvdata.sort(function(a, b){return (b.reviews.reduce((x,y) => x + y.rating, 0)/b.reviews.length) - (a.reviews.reduce((x,y) => x + y.rating, 0)/a.reviews.length)});
    for (i = 0; i < 10; i++) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.setAttribute("href", `/api/items/${sortedTvs[i].id}`);
      a.innerText = sortedTvs[i].name;
      a.setAttribute("class", "hover:text-yellow-400");
      li.appendChild(a);
      rkList.appendChild(li);
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
    while(rkList.firstChild) {
      rkList.removeChild(rkList.firstChild);
    }
    let sortedGames = gamedata.sort(function(a, b){return (b.reviews.reduce((x,y) => x + y.rating, 0)/b.reviews.length) - (a.reviews.reduce((x,y) => x + y.rating, 0)/a.reviews.length)});
    for (i = 0; i < 10; i++) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.setAttribute("href", `/api/items/${sortedGames[i].id}`);
      a.innerText = sortedGames[i].name;
      a.setAttribute("class", "hover:text-yellow-400");
      li.appendChild(a);
      rkList.appendChild(li);
    }
  } catch (error) {
    alert(response.statusText);
  }
}

async function fetchYear() {
  try {
    const response = await fetch(`/api/misc/groupyears`, {
      method: 'GET',
    });

    const yeardata = await response.json();
    // let sortedYears = yeardata.sort((i1,i2) => (i1.year < i2.year) ? 1 : (i1.year < i2.year) ? -1 : 0);
    let sortedYears = yeardata;
    // console.log(yeardata);
    for (i = 0; i < sortedYears.length; i++) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.setAttribute("href", `/api/misc/year/${sortedYears[i].year}`);
      a.setAttribute("class", "hover:text-yellow-400");
      a.innerText = sortedYears[i].year;
      li.appendChild(a);
      yrList.appendChild(li);
    }
    // console.log(yrList);
  } catch (error) {
    alert(response.statusText);
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  const el = document.getElementById('button1');
  if (el) {
    el.addEventListener('click', movieButtonHandler);
  }
});

window.addEventListener("DOMContentLoaded", (event) => {
  const el = document.getElementById('button2');
  if (el) {
    el.addEventListener('click', tvButtonHandler);
  }
});

window.addEventListener("DOMContentLoaded", (event) => {
  const el = document.getElementById('button3');
  if (el) {
    el.addEventListener('click', gameButtonHandler);
  }
});

if (yrList) {
  fetchYear();
}

