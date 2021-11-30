<template>
  <!--<div class="view__btn">
     <button
      v-for="(item, index) in view"
      :key="index"
      @click="viewChange(item, index)"
    >
      {{ item }}
    </button> 
  </div>-->
  <div class="todo">
    <ul class="todo-list list" v-if="viewType == `list`">
      <li v-for="(list, index) in props" :key="index">
        <span>{{ list }}</span>
        <button v-on:click="removeList(list, index)">clear</button>
        <!-- v-on:click과 @:click 는 같은 것 -->
      </li>
    </ul>

    <ul class="todo-list thumbnail" v-else>
      <li v-for="(list, index) in props" :key="index">
        <img :src="list.thumbnail" alt="" />
        <span>{{ list.title }}</span>
        <button @click="removeList(list, index)">clear</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["props"],
  data() {
    return {
      viewType: "list",
      view: ["list", "thumbnail"],
    };
  },
  created() {},
  methods: {
    removeList(list, index) {
      this.$emit("removeList", list, index);
      // console.log("삭제할꼬양");
    },
    viewChange(item) {
      this.viewType = item;
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
  border-bottom: 1px solid #eee;
  padding: 15px 25px;
  width: 100%;
}

.todo ul.list li {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.todo ul.list li:before {
  content: "▪";
  display: block;
  position: absolute;
  margin-left: 10px;
  font-size: 20px;
}
.todo ul.list li span {
  margin-left: 40px;
}
.todo ul.list li button {
  border: none;
  background: #eee;
  padding: 10px;
  cursor: pointer;
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
