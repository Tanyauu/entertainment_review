let rkList = document.querySelector("#rk-list");
let yrList = document.querySelector("#yr-list");

const movieButtonHandler = async (event) => {
  try {
    const response = await fetch(`/api/movies`, {
      method: 'GET',
    });

    const moviedata = await response.json();
    let sortedMovies = moviedata.sort((i1,i2) => (i1.avgRating < i2.avgRating) ? 1 : (i1.avgRating < i2.avgRating) ? -1 : 0);
    for (i = 0; i < 10; i++) {
      let li = document.createElement('li');
      li.setAttribute("a", href=`/item/${sortedMovies.id}`);
      li.setAttribute("class", "hover:text-yellow-400");
      rkList.innerText = sortedMovies[i].name;
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
    let sortedTvs = tvdata.sort((i1,i2) => (i1.avgRating < i2.avgRating) ? 1 : (i1.avgRating < i2.avgRating) ? -1 : 0);
    for (i = 0; i < 10; i++) {
      let li = document.createElement('li');
      li.setAttribute("a", href=`/item/${sortedTvs.id}`);
      li.setAttribute("class", "hover:text-yellow-400");
      rkList.innerText = sortedTvs[i].name;
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
    let sortedGames = gamedata.sort((i1,i2) => (i1.avgRating < i2.avgRating) ? 1 : (i1.avgRating < i2.ravgRating) ? -1 : 0);
    for (i = 0; i < 10; i++) {
      let li = document.createElement('li');
      li.setAttribute("a", href=`/item/${sortedGames.id}`);
      li.setAttribute("class", "hover:text-yellow-400");
      rkList.innerText = sortedGames[i].name;
      li.appendChild(rkList);
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
    for (i = 0; i < sortedYears.length; i++) {
      let li = document.createElement('li');
      li.setAttribute("a", href=`/api/misc/year/${sortedYears.year}`);
      li.setAttribute("class", "hover:text-yellow-400");
      rkList.innerText = sortedYears[i].year;
      li.appendChild(rkList);
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
