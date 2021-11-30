<template>
  <div class="input__box">
    <input
      type="text"
      placeholder="오늘의 할일을 작성해 보세요"
      v-model="newTodoItem"
      @keyup.enter="addTodo"
    />
    <button v-on:click="addTodo">추가</button>
  </div>
</template>
<script>
export default {
  name: "ToDoInput",
  //input 박스에 있는 값을 v-model을 이용하여 갖게 된다.
  data() {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    //button을 클릭하거나 enter을 쳤을 때 저장된다.
    addTodo() {
      console.log(this.newTodoItem);
      //로컬 스토리지에 저장하기
      if (this.newTodoItem !== "") {
        let value = this.newTodoItem && this.newTodoItem.trim();
        // localStorage.setItem(value,value);
        this.$emit("addTodo", value); //App 컴포넌트로 이벤트 전달
        this.clearBox();
      }
    },
    clearBox() {
      this.newTodoItem = ""; //input박스 초기화
    },
  },
};
</script>
<style>
.input__box {
  display: flex;
  justify-content: center;
  margin-top: 100px;
}
.input__box input {
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 10px 15px;
  outline: none;
  width: 600px;
  height: 50px;
  margin-right: 10px;
  box-shadow: 0 0px 3px rgb(0 0 0 / 5%);
  font-weight: 600;
}
.input__box button {
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 10px 18px;
  box-shadow: 0 0px 3px rgb(0 0 0 / 5%);
  color: #222;
  background: #fff;
  cursor: pointer;
  font-weight: 600;
}
</style>
