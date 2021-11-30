// 로컬스토리지에 있는 데이터를 나타내기!
<template>
  <ul class="lists">
    <li v-for="(todoItem, index) in propsdata" :key="index" class="list">
      <span>{{ todoItem }}</span>
      <button
        type="button"
        class="remove__btn"
        v-on:click="removeTodo(propsdata, todoItem, index)"
      >
        X
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  //props속성 추가
  props: ["propsdata"],
  methods: {
    removeTodo(propsdata, todoItem, index) {
      //삭제하기
      // console.log(propsdata,todoItem,index)
      localStorage.removeItem(todoItem);
      propsdata.splice(index, 1);
    },
  },
};
</script>

<style>
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
h1 {
  font-size: 30px;
}
.lists {
  background: #fff;
  width: 900px;
  /* height: 500px; */
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  border-radius: 10px;
  box-shadow: 0 0px 3px rgb(0 0 0 / 5%);
}
.lists .list {
  position: relative;
  border-bottom: 1px solid #eee;
  padding: 10px 14px 8px 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.lists .list::before {
  position: absolute;
  content: "✔";
  font-size: 13px;
  margin-left: -25px;
}
.lists .list .remove__btn {
  border: none;
  outline: none;
  background: #f6f6f6;
  padding: 9px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
