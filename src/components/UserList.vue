<template>
  <div>
    <h2>{{title}}</h2>
    <b-table striped hover :items='items' :fields='fields'>
      <template slot="actions" slot-scope="row">
        <b-dropdown right split text="Detail" v-on:click="detail">
          <b-dropdown-item  v-for="action in row.value" v-on:click="actFn" value="action" :key="action" target="aa">{{action}}</b-dropdown-item>
        </b-dropdown>
      </template>
    </b-table>
    <b-pagination-nav  align="center" size="md" :link-gen="linkGen" :number-of-pages="maxPage" v-model="currentPage" :per-page="10">
    </b-pagination-nav>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  mounted: function () {
    this.getData()
  },
  watch: {
    currentPage: function () {
      this.getData()
    }
  },
  data () {
    return {
      title: '',
      items: [],
      fields: {},
      currentPage: parseInt(this.$route.query.page),
      maxPage: 1
    }
  },
  methods: {
    linkGen (pageNum) {
      return '#users/?page=' + pageNum
    },
    getData () {
      var that = this
      const url = '/api/users?_page=' + this.currentPage
      axios.get(url).then(function (response) {
        that.title = response.data.meta.title
        that.maxPage = Math.ceil(response.data.meta.size / 10)
        that.fields = response.data.meta.table_schema.fields
        that.items = response.data.data
      })
    },
    detail (event) {

    },
    actFn (event) {
      console.log(event.target.target)
    }
  }
}
</script>
