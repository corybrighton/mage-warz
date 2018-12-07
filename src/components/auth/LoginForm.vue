<template>
  <div class="LoginForm">
    <form @submit.prevent="login">
      <input type="email" placeholder="email" v-model="creds.email">
      <input type="password" placeholder="password" v-model="creds.password">
      <button type="submit">Submit</button>
    </form>
    {{creds.email}}
  </div>
</template>

<script>
  export default {
    name: 'LoginForm',
    data() {
      return {
        creds: {
          email: '',
          password: ''
        }
      }
    },
    computed: {},
    methods: {
      login() {
        this.$store.dispatch('login', this.creds)
      }
    }
  }

</script>

<style>


</style>