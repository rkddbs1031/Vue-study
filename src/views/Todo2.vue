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
      //list와 valueNum은 수정하기 버튼을 눌렀을 때 ModalView컴포넌트로 넘겨줘야하기 때문에 생성
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
      if (newList == "") {
        alert("오늘 해야 할 일을 작성해 주세요🤩");
      } else {
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
      }
    },
    toggleCheckbox({ id, checked }) {
      console.log(id, checked, "toggleCheckbox 넘겨왓서용");
      const chckNum = this.todoDatas.findIndex((item) => {
        console.log(item, "item", id, "id", item.id, "item.id");
        return item.id == id;
      });

      console.log(chckNum, "chckNum");
      this.todoDatas[chckNum].checked = checked;
      //id값을 가지고 있는 todoDatas배열의 인덱스 번호를 찾아 chckNum에 선언한 뒤 그 부분의 checked는 true로 저장
      //그러므로 TodoList2에 li가 true가 되며 style변경
      console.log(this.todoDatas, "checked되고 전체 todoDatas");
    },
    removeList(index) {
      this.todoDatas.splice(index, 1);
    },
    modifyList(list, index) {
      this.valueNum = index;

      if (!this.isModalViewed) {
        //isModalViwed가 true이면 ModalView 컴포넌트가 실행
        this.isModalViewed = true; //모달창 나타남.
        this.list = list; //수정하고자 하는 text의 값을 this.list에 일단 저장
      }
    },
    save(btnValue, mValue) {
      //btnValue는 저장하기 버튼을 누르면서 isModal이 false가 되어있으므로 false값이
      //mValue는 수정한 텍스트

      //수정하기 버튼 누른 index값이 valueNum에 저장되어 있음! => 79번째 줄
      this.todoDatas[this.valueNum].title = mValue;
      this.isModalViewed = btnValue; //ModalView가 화면에 나타나지 않음
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
