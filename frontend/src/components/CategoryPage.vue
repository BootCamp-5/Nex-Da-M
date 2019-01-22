<template>
  <div>
    <h1>서울사이버대학</h1>
    {{movie}}
  </div>
</template>

<script>
export default {
  created: function () {
    var id = this.$route.params.id
    this.$http.get(`/api/category`).then((response) => {
      this.movie = response.data
    })
  },
  data: function () {
    return {
      movie: []
    }
  }
}
</script>

<style lang="css">
</style>
