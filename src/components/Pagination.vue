<template>
<div class="column">
  <nav class="pagination is-centered" role="navegation" aria-label="pagination">
    <ul class="pagination-list">
      <li v-show="info.prev != ''" class="pagination-link">
        <a class="page-link" @click="changePage(page - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item">
        <a class="pagination-link is-current" aria-label="Page" aria-current="page">{{ page }}</a>
      </li>
      <li v-show="info.next != ''" class="pagination-link">
        <a class="page-link" @click="changePage(page + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</div>
</template>
<script>
export default {
  name: 'Pagination',
  props: [
    'page',
    'info',
  ],
  methods: {
    changePage(page) {
      this.$emit('updatePage', page);
      this.$emit('fetchItems');
    },
  },
};
</script>
<style lang="scss" scoped>
.page-item {
    cursor: pointer;
}
.pagination-link.is-current{
  background-color: #363636;
  border-color: #363636;
}
.pagination-link{
  a.page-link{
    color : #363636;
  }
}
</style>
