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
.panel {
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
  border-color: #ddd;
}
.panel-heading {
  color: #333;
  background-color: #f5f5f5;
  border-color: #ddd;

  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.panel-body {
  padding: 15px;
}
</style>
