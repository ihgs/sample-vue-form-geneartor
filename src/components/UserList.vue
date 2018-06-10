<template>
  <div>
    <h2>List</h2>
    <b-table striped hover :items='items' :fields='fields'></b-table>
    <b-pagination-nav  align="center" size="md" :link-gen="linkGen" :number-of-pages="maxPage" v-model="currentPage" :per-page="10">
    </b-pagination-nav>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  mounted: function () {
    var that = this
    const url = '/api/users?_page=' + this.currentPage
    axios.get(url).then(function (response) {
      that.maxPage = parseInt(response.data.meta.size)/10
      that.fields = response.data.meta.table_schema.fields
      that.items = response.data.data
    })
  },
  watch: {
    currentPage: function () {
      var that = this
      const url = '/api/users?_page=' + this.currentPage
      axios.get(url).then(function (response) {
        that.items = response.data.data
      })
    }
  },
  data () {
    return {
      items: [],
      fields: {},
      currentPage: parseInt(this.$route.query.page),
      maxPage: 1
    }
  },
  methods: {
    linkGen (pageNum) {
      return '#users/?page=' + pageNum
    }
  }
}
</script>
