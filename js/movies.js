function loadItems(movieItem, itemVar) {
  for (let i = 0; i < movieItem.length; i++) {
    itemVar.push(movieItem[i].name);
  }
}

function loadMovies(movieItem) {
  const moviesItems = document.querySelector(".movies__items");

  let movieCategories = [];
  let movieCountries = [];

  loadItems(movieItem.genres, movieCategories);
  loadItems(movieItem.production_countries, movieCountries);

  moviesItems.innerHTML +=
    `
        <div class="movies__item">
            <div class="movies__item-img">
              <img
                src="` +
    "http://image.tmdb.org/t/p/w300" +
    movieItem.backdrop_path +
    `"
                alt=""
                title="` +
    movieItem.original_title +
    `"
              />
            </div>
            <div class="movies__item-info">
              <div class="movies__item-category">` +
    movieCategories +
    `</div>
              <div class="movies__item-name">` +
    movieItem.original_title +
    `</div>
              <div class="movies__item-country">` +
    movieCountries +
    `</div>
              <div class="movies__item-released">` +
    movieItem.release_date +
    `</div>
              <div class="movies__item-duration"><span>` +
    movieItem.runtime +
    `</span> min</div>
              <div class="movies__item-rating">` +
    movieItem.vote_average +
    `</div>
            </div>
        </div>`;
}

let moviesID = [];

async function setMoviesID(
  link = "https://api.themoviedb.org/3/movie/popular?api_key=df8f85ffb066b306a0a4ffe1f75439ba&language=en-US&page=1",
  length = 10
) {
  let response = await fetch(link, {
    method: "GET",
  });
  if (response.ok) {
    const movies = (await response.json()).results;
    for (let i = 0; i < movies.length; i++) {
      if (moviesID.length < length) {
        moviesID.push(movies[i].id);
      }
    }
    setMovies(moviesID);
  } else {
    console.log("Error");
  }
}
setMoviesID();

async function setMovie(itemID) {
  let response = await fetch(
    "https://api.themoviedb.org/3/movie/" +
      itemID +
      "?api_key=df8f85ffb066b306a0a4ffe1f75439ba",
    {
      method: "GET",
    }
  );
  if (response.ok) {
    itemID = await response.json();

    console.log(itemID); //

    loadMovies(itemID);
  } else {
    console.log("Error");
  }
}

function setMovies(item) {
  for (let i = 0; i < item.length; i++) {
    setMovie(item[i]);
  }
}

// треба створити функцію ,щоб отримувати ід , апотім по них знаходити елемент
// і далі пробудовувати новйи елемент циклом, в цикл вставити функцію для побудови
// і кількість її поіторвів, а сама фунція побудови на запуск
// модна створити ще 2 цикла , які один буде сторінки переключати, а інший еоементи виводити
