<template>
  <div>
    这里是Page1T1
  </div>
</template>

<script>
export default {
  name: 'Page1T1',
  created () {
    let url = 'http://10.7.130.35:8022/alone-web/v1/moduleItem/index'
    this.$http.get(url, {
      pageNo: 1,
      pageSize: 4
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style scoped>

</style>
