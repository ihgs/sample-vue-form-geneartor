<template>
  <div class="container">
    <div class="panel panel-default">
      <div class="panel-heading">Dynamic Form: {{type}}</div>
      <div class='panel-body'>
        <vue-form-generator :schema='schema' :model='model' :options='formOptions'></vue-form-generator>
      </div>
      <button class="btn btn-primary" v-on:click="send">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import VueFormGenerator from 'vue-form-generator'
import 'vue-form-generator/dist/vfg.css'
import Vue from 'vue'
Vue.use(VueFormGenerator)
export default {
  mounted: function () {
    var that = this
    const url = '/api/' + this.type
    axios.get(url).then(function (response) {
      that.model = response.data.model
      that.schema = response.data.schema
    })
  },
  data () {
    return {
      model: null,
      schema: null,
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true
      },
      type: this.$route.query.type
    }
  },
  methods: {
    send: function (evnet) {
      alert('POST /' + this.type + '  body:' + JSON.stringify(this.model))
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
