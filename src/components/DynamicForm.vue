<template>
  <div class="container">
    <div>
      <select v-model="selected" options="formtype">
        <option>form1</option>
        <option>form2</option>
      </select>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">Dynamic Form</div>
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
    const url = '/api/' + this.selected
    axios.get(url).then(function (response) {
      that.model = response.data.model
      console.log(that.model)
      that.schema = response.data.schema
    })
  },
  data () {
    return {
      loaded: false,
      model: {
      },
      schema: null,
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true
      },
      selected: 'form1'
    }
  },
  watch: {
    selected: function () {
      var that = this
      const url = '/api/' + this.selected
      axios.get(url).then(function (response) {
        that.model = response.data.model
        console.log(that.model)
        console.log('----------------')
        that.schema = response.data.schema
      })
    }
  },
  methods: {
    send: function (evnet) {
      alert(JSON.stringify(this.model))
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
