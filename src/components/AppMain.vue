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
    <ul>
      <li v-for="result in results">
        {{ result.title }}
        {{ result.original_title }}
        {{ result.original_language }}
        {{ result.vote.avverage }}
      </li>
    </ul>
  </main>
</template>

<style lang="scss" scoped></style>