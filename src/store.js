import { reactive } from "vue";
import axios from "axios";
export const store = reactive({
  SEARCH_MOVIES_API_URL:
    "https://api.themoviedb.org/3/search/movie?api_key=0cdad7839165b3a45d1b472d26ea1c15",
  SEARCH_SERIES_API_URL:
    "https://api.themoviedb.org/3/search/tv?api_key=0cdad7839165b3a45d1b472d26ea1c15",
  searchMovie: "",
  movies: null,
  searchTv: "",
  tv: null,
  resultsMovie: null,
  resultsTv: null,
  pagination: null,
  error: null,
  loading: true,

  fetchMovies(urlMovies) {
    axios
      .get(urlMovies)
      .then((response) => {
        console.log(response.data);
        this.resultsMovie = response.data.resultsMovie;
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
        console.error(err.message);
        this.error = this.error.message;
      });
  },
  fetchTv(urlTv) {
    axios
      .get(urlTv)
      .then((response) => {
        console.log(response.data);
        this.resultsTv = response.data.resultsTv;
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
        console.error(err.message);
        this.error = this.error.message;
      });
  },
});
