<script>
import { store } from '../store';

export default {
  name: "AppMain",
  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <main>
    <section>
      <h2>Movies</h2>
      <div v-for="movie in store.results.movies">
        {{ movie.title }}
        {{ movie.title }}
        {{ movie.original_title }}
        <img class="language_flag" :src="`https://unpkg.com/language-icons/icons/${movie.original_language}.svg`">
        {{ movie.vote_average }}
      </div>
    </section>

    <section>
      <h2>Series</h2>
      <div v-for="serie in store.results.series">
        {{ serie.title }}
        {{ serie.name }}
        {{ serie.original_name }}
        <img class="language_flag" :src="`https://unpkg.com/language-icons/icons/${serie.original_language}.svg`">
        {{ serie.vote_count }}
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.language_flag {
  width: 30px;
  // aspect-ratio: 2 / 1;
}
</style>