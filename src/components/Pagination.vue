<template>
  <div>
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li class="page-item" :class="{'disabled': !childPaginations.has_pre}">
          <a class="page-link border-light" href="#" aria-label="Previous" @click.prevent="getPagination(childPaginations.current_page-1)">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="page in childPaginations.total_pages"
          :key="page"
          :class="{'active': childPaginations.current_page === page}"
        >
          <a class="page-link border-light" href="#" @click.prevent="getPagination(page)">{{page}}</a>
        </li>
        <li class="page-item" :class="{'disabled': !childPaginations.has_next}">
          <a class="page-link border-light" href="#" aria-label="Next" @click.prevent="getPagination(childPaginations.current_page+1)">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['childPaginations'],
  methods: {
    getPagination (page) {
      const vm = this
      vm.$emit('changePage', page)
    }
  }
}
</script>
