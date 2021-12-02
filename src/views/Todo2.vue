<template>
  <div id="todo2">
    <TodoHeader msg="JSON파일을 이용한 To do List"></TodoHeader>
    <TodoInput2 v-on:addList="addList"></TodoInput2>
    <TodoList2
      v-bind:propsdata="todoDatas"
      v-on:removeList="removeList"
      v-on:modifyList="modifyList"
      @toggleCheckbox="toggleCheckbox"
    ></TodoList2>
    <ModalView
      v-if="isModalViewed"
      v-on:save="save"
      v-bind:propValue="list"
    ></ModalView>
  </div>
</template>

<script>
import TodoHeader from "../components/todoJson/TodoHeader.vue";
import TodoInput2 from "../components/todoJson/TodoInput2.vue";
import TodoList2 from "../components/todoJson/TodoList2.vue";
import ModalView from "../components/todoJson/ModalView.vue";
import TodoData from "../components/todoJson/todo.json";

export default {
  data() {
    return {
      todoDatas: [],
      isModalViewed: false,
      list: "",
      valueNum: "",
    };
  },
  created() {
    let respObj = TodoData;
    let todosNum = TodoData.todos.length;

    for (let i = 0; i < todosNum; i++) {
      this.todoDatas.push(respObj.todos[i]);
    }
  },
  methods: {
    //자식컴포넌트인 TodoInput에서 받아온 데이터를 todoDatas에 저장한다.
    addList(newList) {
      if (this.list.length > 0) {
        this.todoDatas.push({
          id: this.todoDatas[this.todoDatas.length - 1].id + 1,
          title: newList,
          checked: false,
        });
      } else {
        this.todoDatas.push({
          id: this.todoDatas.length + 1,
          title: newList,
          checked: false,
        });
      }
    },
    toggleCheckbox({ id, checked }) {
      console.log({ id, checked }, "toggleCheckbox 넘겨왓서용");
      this.todoDatas[id - 1].checked = checked;
      console.log(this.todoDatas, "checked되고 전체 todoDatas");
    },
    removeList(index) {
      this.todoDatas.splice(index, 1);
    },
    modifyList(list, num) {
      this.valueNum = num;

      if (!this.isModalViewed) {
        //isModalViwed가 true이면 ModalView 컴포넌트가 실행
        this.isModalViewed = true;
        this.list = list;
      }
    },
    save(btnValue, mValue) {
      this.todoDatas[this.valueNum].title = mValue;
      this.isModalViewed = btnValue;
      console.log(btnValue, mValue, this.isModalViewed);
    },
  },
  components: {
    TodoHeader,
    TodoInput2,
    TodoList2,
    ModalView,
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
