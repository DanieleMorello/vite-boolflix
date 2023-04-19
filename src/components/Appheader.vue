<script>
import { store } from '../store';
import SearchBox from './SearchBox.vue';

export default {
  name: "AppHeader",
  components: { SearchBox },
  data() {
    return {
      store,
    }
  },
}
</script>
<template>
  <header>
    <h1>Boolflix</h1>
    <SearchBox @makeSearch="performSearch()"></SearchBox>/>
  </header>
</template>