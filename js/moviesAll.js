const allItems = document.querySelector(".all-items");

allItems.onclick = function loadMoviesAll() {
  for (let i = 2; i <= 5; i++) {
    setMoviesID(
      "https://api.themoviedb.org/3/movie/popular?api_key=df8f85ffb066b306a0a4ffe1f75439ba&language=en-US&page=" +
        i,
      100
    );
  }
  allItems.style.display = "none";
};
