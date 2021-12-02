<template>
  <div class="todo">
    <ul class="todo-list list" v-if="viewType == `list`">
      <li
        v-for="(list, index) in propsdata"
        :key="index"
        :class="list.checked ? 'isCompleted' : ''"
      >
        <!-- isCompleted클래스가 추가되면 style변경 -->
        <div class="view">
          <input
            type="checkbox"
            :checked="list.checked"
            @change="toggleCheckbox(list, $event)"
            :id="index"
          />
          <!-- check를 하면  toggleCheckbox 실행-->
          <label :for="index">{{ list.title }}</label>
        </div>
        <div class="btn">
          <button v-on:click="removeList(index)">❌</button>
          <button v-on:click="modifyList(list, index)">✍</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["propsdata"],
  data() {
    return {
      viewType: "list",
      // list_index: "",
      // list_index는 수정 value값을 넘겨주기 위해서
    };
  },
  created() {
    console.log(this.propsdata);
  },
  methods: {
    removeList(index) {
      this.$emit("removeList", index);
    },
    modifyList(list, index) {
      // console.log(list, index, "넘겨옴");
      // this.list_index = index;
      // let num = this.list_index;
      this.$emit("modifyList", list.title, index);
    },
    toggleCheckbox(list, e) {
      console.log(list, list.id, e.target.checked);
      //e.target.checked는 true가 됨.
      this.$emit("toggleCheckbox", {
        id: list.id,
        checked: e.target.checked,
      });
      console.log(list.checked, "스타일변경");
    },
  },

  components: {},
};
</script>

<style scoped>
.todo {
  width: 100%;
  max-width: 1200px;
  margin: 50px auto 100px;
}

/* list */
.todo ul.list {
  width: 900px;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 0px 3px rgb(0 0 0 / 5%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.todo ul.list li {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding: 15px 25px;
  width: 100%;
}
.isCompleted {
  text-decoration: line-through;
}
.todo ul.list li label {
  margin-left: 20px;
  cursor: pointer;
}
.todo ul.list li button {
  border: none;
  background: #f8f7f7;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  margin-left: 10px;
}

/* thumbnail */
.todo ul.thumbnail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.todo ul.thumbnail li {
  flex: 0 0 32%;
  background: #fff;
  margin-bottom: 50px;
}
/* .todo ul.thumbnail li:before {
}
.todo ul.thumbnail li span {
}
.todo ul.thumbnail li button {
} */
</style>
