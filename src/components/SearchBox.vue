<script>
import { store } from '../store';
export default {
  name: 'SearchBox',
  emits: ['makeSearch'],
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <div class="serchbox">

    <div class="input-group mb-3">
      <input type="search" class="form-control" placeholder="Search something ..." v-model='store.searchMovie'
        @keyup="$emit('makeSearch')">
      <button class="btn btn-outline-secondary" type="button" @keyup="$emit('makeSearch')"
        @click="$emit('makeSearch')">Search</button>
    </div>
  </div>
</template>