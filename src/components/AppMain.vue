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
    <section v-for="(result, title) in store.results">
      <h2>{{ title }}</h2>

      <template v-if="result">
        <div v-if="title === 'movies'">
          {{ result.title }}
          {{ result.original_title }}
          {{ result.original_language }}
          <img class="language_flag" :src="`https://unpkg.com/language-icons/icons/${result.original_language}.svg`">
      </div>

      <div v-else>
        {{ result.name }}
        {{ result.original_name }}
      </div>

      <div>
        {{ result.vote_average }}
      </div>
    </template>
  </section>
    <!-- <ul>
    <li v-for="result in store.results">
      <h2>Film</h2>
      <span>{{ result.title }}</span>
      <span>{{ result.original_title }}</span>
                                    <span>{{ result.original_language }}</span>
        <img class="language_flag" :src="`https://unpkg.com/language-icons/icons/${result.original_language}.svg`">
                                    <span>{{ result.vote_average }}</span>
                                  </li>
                                </ul>
                                <ul>
                                  <li>
                                    <h2>Serie</h2> -->
    <!-- <span>{{ result.title }}</span>
                                      <span>{{ result.original_title }}</span>
                                      <span>{{ result.original_language }}</span>
                                      <img class="language_flag" :src="`https://unpkg.com/language-icons/icons/${result.original_language}.svg`">
                                      <span>{{ result.vote_average }}</span> -->
    <!-- </li>
                                </ul> -->
  </main>
</template>

<style lang="scss" scoped>
.language_flag {
  width: 30px;
  aspect-ratio: 2 / 1;
}
</style>