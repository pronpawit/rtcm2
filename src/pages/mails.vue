<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-4 h11001">
        <q-input outlined v-model="text" label="ชื่อ นามสกุล" />
      </div>
      <div class="col-8 center">
        <h5>{{text}}</h5>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data () {
    return {
      text: ''
    }
  }
}
</script>
<style>
  h5{
    text-align: center
  }
  .h11001{
    margin-top: 2%
  }
</style>
