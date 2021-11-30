<template>
  <div>
    <ToDoHeader msg="localstorage를 이용한 To do List"></ToDoHeader>
    <ToDoInput v-on:addTodo="addTodo"></ToDoInput>
    <ToDoList v-bind:propsdata="todoItems"></ToDoList>
  </div>
</template>

<script>
import ToDoHeader from "../components/todoPage/ToDoHeader.vue";
import ToDoInput from "../components/todoPage/ToDoInput.vue";
import ToDoList from "../components/todoPage/ToDoList.vue";

export default {
  data() {
    return {
      todoItems: [],
    };
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
  },
  methods: {
    addTodo(todoItem) {
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    },
  },
  components: {
    ToDoInput,
    ToDoList,
    ToDoHeader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
