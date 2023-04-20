import { reactive } from "vue";
import axios from "axios";
export const store = reactive({
  SEARCH_MOVIES_API_URL:
    "https://api.themoviedb.org/3/search/movie?api_key=0cdad7839165b3a45d1b472d26ea1c15",
  searchMovie: "",
  movies: null,
  results: null,
  pagination: null,
  error: null,
  loading: true,

  fetchMovies(url) {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        this.results = response.data.results;
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
        console.error(err.message);
        this.error = this.error.message;
      });
  },
});
