import { reactive } from "vue";
import axios from "axios";
export const store = reactive({
  SEARCH_MOVIES_API_URL:
    "https://api.themoviedb.org/3/search/movie?api_key=0cdad7839165b3a45d1b472d26ea1c15&query=",
  searchMovie: "",
  movies: null,
  fetchMovies: [],
  fetchMovies(url) {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        // this.characters = response.data.results;
        // this.info = response.data.info;
        // this.loading = false;
      })
      .catch((err) => {
        console.log(err);
        console.error(err.message);
      });
  },
});
