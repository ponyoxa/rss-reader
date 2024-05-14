<template>
  <div class="sidebar">
    <h2>Categories</h2>
    <ul>
      <li v-for="category in categories" :key="category.id">
        {{ category.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Sidebar',
  data() {
    return {
      categories: [
        { id: 1, name: 'Technology' },
        { id: 2, name: 'Design' },
        // 他のカテゴリ...
      ],
    };
  },
});
</script>

<style scoped>
.sidebar {
  background-color: #f4f4f4;
  padding: 1em;
  border-radius: 0.5em;
  box-shadow: 0 0 1em #00000022;
}

h2 {
  margin-top: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 0.5em 0;
  cursor: pointer;
}
</style>