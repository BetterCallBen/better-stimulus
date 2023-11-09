import { Controller } from "stimulus";

// Connects to data-controller="search-movie"
export default class extends Controller {
  static targets = ["input", "list"];
  connect() {
    console.log("search");
    console.log(this.listTarget);
  }

  searchMovie(event) {
    event.preventDefault();
    this.listTarget.innerHTML = "";
    this.fetchOmdb();
    this.inputTarget.value = "";
  }

  fetchOmdb() {
    fetch(`http://www.omdbapi.com/?s=${this.inputTarget.value}&apikey=adf1f2d7`)
      .then((response) => response.json())
      .then((data) => {
        data.Search.forEach((movie) => {
          this.insertMovie(movie);
        });
      });
  }

  insertMovie(movie) {
    const movieHtml = `<li>
            <h2>${movie.Title}</h2>
            <img src="${movie.Poster}" alt="">
          </li>`;

    this.listTarget.insertAdjacentHTML("beforeend", movieHtml);
  }
}
