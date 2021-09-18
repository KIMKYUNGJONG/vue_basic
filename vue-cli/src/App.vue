<template>
  <div>
    <app-header 
      v-bind:data="str"
      v-on:renew="renewStr"
    ></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  data: function() {
    return{
      str: 'Header'
    }
  },
  components: {
    'app-header': AppHeader
  },
  methods: {
    renewStr: function(){
      this.str = 'Renew'
    }
  }
}
</script>

<style>

</style>