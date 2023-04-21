import { reactive } from "vue";
import axios from "axios";
export const store = reactive({
  SEARCH_MOVIES_API_URL:
    "https://api.themoviedb.org/3/search/movie?api_key=0cdad7839165b3a45d1b472d26ea1c15",
  SEARCH_SERIES_API_URL:
    "https://api.themoviedb.org/3/search/tv?api_key=0cdad7839165b3a45d1b472d26ea1c15",
  // IMAGE_API_URL: "https://image.tmdb.org/t/p/",
  // size_image: "w342/",
  searchMovie: "",
  results: {
    movies: null,
    series: null,
  },
  pagination: null,
  error: null,
  loading: true,

  // getMovies() {
  //   const urlMovies = `${this.SEARCH_MOVIES_API_URL}&query=${this.store.searchMovie}`;
  //   return axios.get(urlMovies);
  // },
  // getSeries() {
  //   const urlSeries = `${this.SEARCH_SERIES_API_URL}&query=${this.store.searchMovie}`;
  //   return axios.get(urlSeries);
  // },

  fetchResults(url, mediaType) {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        this.results.movies = response.data.results.movies;
        this.results.series = response.data.results.series;
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
        console.error(err.message);
        this.error = this.error.message;
      });
  },
});
