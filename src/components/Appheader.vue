<script>
import { store } from '../store';
import SearchBox from './SearchBox.vue';

export default {
  name: "AppHeader",
  emits: ['makeSearch'],
  components: { SearchBox },
  data() {
    return {
      store,
    }
  },
  methods: {
    performSearch() {
      const urlMovies = this.store.SEARCH_MOVIES_API_URL + `&query=${this.store.searchMovie}`;
      const urlSeries = this.store.SEARCH_SERIES_API_URL + `&query=${this.store.searchMovie}`;
      this.store.fetchResults(urlMovies, 'movies')
      this.store.fetchResults(urlSeries, 'series')
    }
  }
}
</script>
<template>
  <header>
    <div class="logo">
      <h1>Boolflix</h1>
    </div>

    <SearchBox @makeSearch="performSearch()">Search</SearchBox>
  </header>
</template>