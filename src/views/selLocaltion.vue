<template>
    <div id="localtion">
        <p >{{show}}</p>
        <p id="p">________手动定位_______</p>
        <div id="target" data-toggle="distpicker">
              <select v-model="address.province"></select>
              <select v-model="address.city"></select>
              <select v-model="address.area"></select>
        </div>
        <distpicker/>
        <input id="btn" type="button" @click="btnClick()" value="确定">
        
        
    </div>
</template>
<script>
import Distpicker from 'distpicker'
import {mapGetters} from 'vuex'
// import $ from 'jquery'
export default {
    name:'pageSel',
    components: { "distpicker":Distpicker },
    data:function(){
        return{
            address:{province: '',city:'',area:''},
            placeholders: {
                province: '-省-',
                city: '-市-',
                area: '-区-'
            }
           
        }
    },
    methods:{
        // 选择省市区
       btnClick:function(){
           if(this.address.area!="")  this.$store.commit('saveLocalInfo',this.address.area);
           this.$parent.hidebox1();
       }
    },
    computed:{
         ...mapGetters(['show'])
    }
}
</script>
<style scoped>
     #localtion{
         width: 100%;
         height: 100%;
         margin: 0;
         padding: 0;
     }
     #target{
         margin: 5px auto;
         padding: 0;
         width: 100%;
         overflow: hidden;

     }
    #target select{
        width: 80px;
        height: 30px;
        font-size: 0.69rem;
    }
    p{
        margin: 0 auto;
        padding: 0;
        font-size:0.71rem ;
        width: 130px;
        height: 26px;
    }
    #p{
        margin: 5px auto;
        font-size: 0.35rem;
        width: 260px;
    }
    #btn{
      margin-top: 5px;
      width: 60px;
      height: 30px;
      font-size: 0.71rem;
      outline: 0;
      background: #000;
      color: #fff;
      border: 0;
    }
    #btn:hover{
        background: #666;
    }
</style>