<template>
  <div id="app">
    Count is {{ count }}
    <button @click="increment">+5</button>
    <button @click="decrement">-3</button>
    <button @click="toast">点我</button>
  </div>
</template>
<script>
  import { mapGetters,mapActions } from 'vuex'
  import { Toast } from 'mint-ui'
  export default {
    computed: {
      ...mapGetters([
        'count'
      ])
    },
    methods:
      {
        increment: function () {
          this.$store.dispatch('increment');
        },

        decrement: function () {
          this.$store.dispatch('decrement')
        },

        toast: function () {
          Toast('提示信息');
        }
      }

  }
</script>
