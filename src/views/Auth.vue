<template>
  <div class="Auth">
    <h1>Welcome to the Mage Warz</h1>
    <login-form />
  </div>
</template>

<script>
  import LoginForm from '@/components/auth/LoginForm.vue'
  export default {
    name: 'auth',
    data() {
      return {

      }
    },
    computed: {
    },
    methods: {},
    components: {
      LoginForm
    }
  }

</script>

<style>


</style>