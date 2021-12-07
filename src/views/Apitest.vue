<template>
  <div class="header">
    <h1>APi Test</h1>
    <div class="contents">
      <button @click="axios" class="axios_btn">click!</button>
      <div class="axios__list" v-show="isViewd">
        <div class="img__wrap" >
          <img :src=img alt="origin" :title="origin">
        </div>
        <div class="product">
          <h2>{{ brandName }}</h2>
          <p>{{ origin }}</p>
          <div class="price">
            <span>{{ price }}원</span>
            <span class="sale">{{ sale }}%</span>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";



export default {
  data() {
    return {
      product: "",
      img: "",
      brandName : "",
      origin : "",
      price : "",
      sale: "",
      isViewd: false
    };
  },
  created(){
    axios.get("/api/2334948")
      .then((res) => {
        let datas = res.data.listGoods.result[0];
        
        // this.product =datas.goodsnm;
        this.product =datas.goodsnm;
        this.img = datas.img_i;
        this.brandName=datas.brand.name;
        this.origin=datas.origin;
        this.price=datas.price;
        this.sale =datas.sale_percent;
      })
      .catch((err) => {
        console.log(err)
      });
     
      // this.price = Number(this.price)

    this.test();  
    
  },
  methods: {
      axios() {
        // setTimeout(()=>{
          this.isViewd = true;  
          // console.log(this.price);
         
        // },1000)  
    },
    test(){
      
    }
  },
};
</script>

<style>
  .contents{
    width: 100%;
    max-width: 1000px;
    margin: 100px auto 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .axios_btn{
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    margin-bottom: 50px;
    cursor: pointer;
    border-radius: 5px;
    background: #404040;
    box-shadow: 0px 7px #000;
    transform: translateY(0);
    transition: 0.2s;
    color: #fff;
    font-weight: bold;
  }
  .axios_btn:hover {
    box-shadow: 0px 4px #000;
    transform: translateY(2px);
}
  .axios__list{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .img__wrap{
    width: 400px;
  }
  .img__wrap img{
    width: 100%;
  }
  .product{text-align: left;}
  .product h2{
    margin-top: 10px;
  }
  .product p{
    margin-top: 10px;
    font-size: 14px;;
  }
  .product .price{
    margin-top: 10px;
  }
  .product .price span:nth-child(1){
    margin-right: 10px;
  }.product .price .sale{
    color: #b90606;
    font-weight: bold;
  }
</style>