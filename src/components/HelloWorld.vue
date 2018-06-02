<template>
  <div class="container">
    <div class="panel panel-default">
      <div class="panel-heading">Form</div>
      <div class='panel-body'>
        <vue-form-generator :schema='schema' :model='model' :options='formOptions'></vue-form-generator>
      </div>
    </div>
  </div>
</template>

<script>
import VueFormGenerator from 'vue-form-generator'
import Vue from 'vue'
Vue.use(VueFormGenerator)
export default {
  data () {
    return {
      model: {
        id: 1,
        name: 'John Doe',
        password: 'J0hnD03!x4',
        skills: ['Javascript', 'VueJS'],
        email: 'john.doe@gmail.com',
        status: true
      },
      schema: {
        fields: [{
          type: 'input',
          inputType: 'text',
          label: 'ID (disabled text field)',
          model: 'id',
          readonly: true,
          disabled: true
        }, {
          type: 'input',
          inputType: 'text',
          label: 'Name',
          model: 'name',
          placeholder: 'Your name',
          featured: true,
          required: true
        }, {
          type: 'input',
          inputType: 'password',
          label: 'Password',
          model: 'password',
          min: 6,
          required: true,
          hint: 'Minimum 6 characters',
          validator: VueFormGenerator.validators.string
        }, {
          type: 'select',
          label: 'Skills',
          model: 'skills',
          values: ['Javascript', 'VueJS', 'CSS3', 'HTML5']
        }, {
          type: 'input',
          inputType: 'email',
          label: 'E-mail',
          model: 'email',
          placeholder: 'User\'s e-mail address'
        }, {
          type: 'checkbox',
          label: 'Status',
          model: 'status',
          default: true
        }]
      },

      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true
      }
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
