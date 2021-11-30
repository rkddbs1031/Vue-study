<template>
  <div id="todo2">
    <TodoHeader msg="JSON파일을 이용한 To do List"></TodoHeader>
    <TodoInput2 v-on:addList="addList"></TodoInput2>
    <TodoList2
      v-bind:props="todoDatas"
      v-on:removeList="removeList"
    ></TodoList2>
  </div>
</template>

<script>
import TodoHeader from "../components/todoJson/TodoHeader.vue";
import TodoInput2 from "../components/todoJson/TodoInput2.vue";
import TodoList2 from "../components/todoJson/TodoList2.vue";
import TodoData from "../components/todoJson/todo.json";

export default {
  data() {
    return {
      todoDatas: [],
      // categories: [],
    };
  },
  created() {
    let respObj = TodoData;
    let todosNum = TodoData.todos.length;

    for (let i = 0; i < todosNum; i++) {
      this.todoDatas.push(respObj.todos[i].title);
    }
  },
  methods: {
    //자식컴포넌트인 TodoInput에서 받아온 데이터를 todoDatas에 저장한다.
    addList(newList) {
      this.todoDatas.push(newList);
      console.log(this.todoDatas);
    },
    removeList(list, index) {
      // console.log(list, index);
      // console.log(this.todoDatas.splice(index, 1));
      this.todoDatas.splice(index, 1);
    },
  },
  components: {
    TodoHeader,
    TodoInput2,
    TodoList2,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
