<template>
  <div class="add__todo">
    <input
      type="text"
      placeholder="작성 해 보세요"
      v-model="newList"
      v-on:keyup.enter="addList"
    />
    <button v-on:click="addList">추가</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newList: "",
    };
  },
  methods: {
    //enter 눌렀을 때 or 버튼 눌렀을 때 실행
    addList() {
      if (this.newList !== "") {
        let value = this.newList && this.newList.trim();
        console.log(value);
        this.$emit("addList", value);
        this.clearInputbox();
      }
    },
    //input박스 텍스트 리셋
    clearInputbox() {
      this.newList = "";
    },
  },
};
</script>

<style>
.add__todo {
  margin-top: 100px;
}
.add__todo input {
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
.add__todo button {
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 15px 18px;
  box-shadow: 0 0px 3px rgb(0 0 0 / 5%);
  color: #222;
  background: #fff;
  cursor: pointer;
  font-weight: 600;
}
</style>
