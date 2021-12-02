<template>
  <!-- isModal true이면 modal클래스가 isClose가 true이면 close클래스가 실행되어 style변경 -->
  <div :class="isModal ? 'modal__show' : 'close'">
    <input type="text" v-model="modifyValue" @keyup.enter="save" />
    <div class="Mbtn">
      <button @click="save" class="save_btn">저장하기</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["propValue"],
  data() {
    return {
      isModal: true,
      modifyValue: "",
    };
  },
  created() {
    this.modifyValue = this.propValue;
    console.log(this.modifyValue);
  },
  methods: {
    save() {
      if (this.isModal) {
        //저장하기 버튼 누르면 모달창이 없어져야하므로 isModal를 false로 한다.
        this.isModal = false;
        let btnValue = this.isModal;
        this.$emit("save", btnValue, this.modifyValue);
      }
    },
  },
};
</script>

<style>
.modal__show {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background: #ffff;
  width: 60%;
  height: 400px;
  box-shadow: 2px 5px 10px 0px #ededed;
}
.modal__show input {
  border: none;
  outline: none;
  width: 70%;
  padding: 20px 10px;
  border-radius: 10px;
  background: #f8f8f8;
  box-shadow: 0 0px 3px rgb(225 225 225 / 81%);
}
.modal__show .Mbtn {
}
.modal__show .Mbtn .save_btn {
  width: 100px;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 12px 10px;
  font-size: 13px;
  margin-top: 70px;
  color: #fff;
  background: #42b983;
  box-shadow: 0px 7px #2d875e;
  font-weight: bold;
  border-radius: 5px;
  transform: translateY(0);
  transition: 0.2s;
}
.modal__show .Mbtn .save_btn:hover {
  box-shadow: 0px 3px #2d875e;
  transform: translateY(5px);
}
.close {
  display: none;
}
</style>
