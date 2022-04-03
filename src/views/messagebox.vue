<template>
    <div id="msgbox">
        <ul>
            <li v-for="msg in $store.getters.showMsg" :key="msg.name" @click="li_click()">
                {{msg.name}} 
            </li>
        </ul>
    </div>
</template>
<script>
 import {mapGetters,mapMutations} from 'vuex'
export default {
   
    name:'pageaMsg',
    data:function(){
        return{
                
            }
           
    },computed:{
        ...mapGetters(['showMsg']),
        ...mapMutations(['setMsgNum'])
    },
    methods:{
        li_click:function(){
            this.$parent.hidebox2()||this.$parent.hidebox3();
        }
    },
    mounted:function(){
       
        this.$store.commit('setMsgNum',this.$store.getters.showMsg.length)
    }
}
</script>
<style scoped>
   #msgbox {
        margin: 2px auto;
        overflow: hidden;
        width: 280px;
        
   }
   #msgbox li{
       width: 280px;
       height: 60px;
       text-align: center;
       line-height: 60px;
       font-size: 16px;
       color:#000;
       list-style-type:none;
   }
</style>