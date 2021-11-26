const search = document.querySelector(".search");
const searchButton = document.querySelector(".search-button");

function searchMovies() {
  if (search.value === "") {
    alert("Empty line");
  } else {
    document.querySelector(".movies__items").innerHTML = "";
    allItems.style.display = "none";

    const strSearch =
      "https://api.themoviedb.org/3/search/multi?api_key=df8f85ffb066b306a0a4ffe1f75439ba&query=" +
      search.value;
    loadSearchMovies(strSearch);
  }
}

searchButton.onclick = searchMovies;

search.onkeypress = function searchPressKey(event) {
  if (event.keyCode === 13) {
    searchMovies();
  }
};

let moviesSearchID = [];

async function loadSearchMovies(link) {
  let response = await fetch(link, {
    method: "GET",
  });
  if (response.ok) {
    moviesSearch = (await response.json()).results;
    for (let i = 0; i < moviesSearch.length; i++) {
      moviesSearchID.push(moviesSearch[i].id);
    }

    setMovies(moviesSearchID);
  } else {
    alert("error");
  }
}
