let rkList = document.querySelector("#rk-list");
let yrList = document.querySelector("#yr-list");

const movieButtonHandler = async (event) => {
  try {
    const response = await fetch(`/api/movies`, {
      method: 'GET',
    });

    const moviedata = await response.json();
    rkList.innerHTML = "";
    let sortedMovies = moviedata.sort((i1,i2) => (i1.reviews[0].rating < i2.reviews[0].rating) ? 1 : (i1.reviews[0].rating < i2.reviews[0].rating) ? -1 : 0);
    for (i = 0; i < 10; i++) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.setAttribute("href", `/api/items/${sortedMovies[i].id}`);
      a.innerText = sortedMovies[i].name;
      a.setAttribute("class", "hover:text-yellow-400");
      li.appendChild(a);
      rkList.appendChild(li);
    }
    console.log(rkList);
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
    rkList.innerHTML = "";
    let sortedTvs = tvdata.sort((i1,i2) => (i1.reviews[0].rating < i2.reviews[0].rating) ? 1 : (i1.reviews[0].rating < i2.reviews[0].rating) ? -1 : 0);
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
    rkList.innerHTML = "";
    let sortedGames = gamedata.sort((i1,i2) => (i1.reviews[0].rating < i2.reviews[0].rating) ? 1 : (i1.reviews[0].rating < i2.reviews[0].rating) ? -1 : 0);
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
    yrList.innerHTML = "";
    // let sortedYears = yeardata.sort((i1,i2) => (i1.year < i2.year) ? 1 : (i1.year < i2.year) ? -1 : 0);
    let sortedYears = yeardata;
    console.log(yeardata);
    for (i = 0; i < sortedYears.length; i++) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.setAttribute("href", `/api/misc/year/${sortedYears[i].year}`);
      a.setAttribute("class", "hover:text-yellow-400");
      a.innerText = sortedYears[i].year;
      li.appendChild(a);
      yrList.appendChild(li);
    }
    console.log(yrList);
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
