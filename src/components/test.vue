<template>
	<div class="test">{{$route.params.id}}</div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: 'test',
    }
  },
  methods: {

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
</style>
