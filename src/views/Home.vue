<template>
  <div class="home container-fluid">
    <div class="row justify-content-center">
      <h1 class="col-12 mt-5">SpellBooks</h1>
      <div class="col-6">
        <button :disabled="!ready()" :class="{'btn-success':ready()}" class="btn btn-warning" @click="goToSpellbook">Go
          To Spellbook</button>
        <div v-for="spellbook in spellbooks">
          <h3 :class="{'border-danger': selectedSpellbook.id == spellbook._id}" class="border rounded m-2" @click="selectedSpellbook.id=spellbook._id">{{spellbook.name}}</h3>
        </div>
      </div>
      <div class="col-6 d-flex flex-column">
        <button class="btn btn-warning" @click="createSpellbook">Add Spellbook</button>
        <input type="text" placeholder="Spellbook Title" v-model="newSpellbook.name">
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'home',
    data() {
      return {
        newSpellbook: {
          name: ''
        },
        selectedSpellbook: {
          id: ''
        }
      }
    },
    components: {
    },
    mounted() {
      this.$store.dispatch('getSpellbooks')
    },
    computed: {
      spellbooks() {
        return this.$store.state.spellbooks
      }
    },
    methods: {
      createSpellbook() {
        this.$store.dispatch('createSpellbook', this.newSpellbook)
      },
      goToSpellbook() {
        this.$store.dispatch('goToSpellbook', this.selectedSpellbook)
      },
      ready() {
        return this.selectedSpellbook.id.length > 0
      }
    }

  }
</script>