<template>
  <div class="header">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
};
</script>

<style>
.header h1 {
  border-bottom: 1px solid #eee;
  font-size: 23px;
  padding: 25px 0;
  /* background: #fff; */
  color: #42b983;
}
</style>
