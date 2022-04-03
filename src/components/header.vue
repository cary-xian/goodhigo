<template>
  <div class="head">
       <div class="nav">
          <img class='logo_min ' src="../assets/logo.png" alt="网站标识">   
          <div id="webinfo">
             <ul>
              <li id="map"><i id="icon"></i>&nbsp;网站地图</li>
              <div id="slider"></div>
              <li>{{$store.getters.showname}}</li>
              <li id="local" style="font-size:0.71rem"> &nbsp;{{$store.getters.show}} </li>
              <div class="local">
                  <sel/>
              </div>
              </ul>
          </div>
          <div id="managebar">
            <ul>
                <li><a href="#">登录/注册</a></li>
                <li ><a href="#">客服中心</a></li>
                <li ><a href="#" >关于我们</a></li>
                <li id="map2"><i id="icon2"></i>&nbsp;消息<span style="font-size:0.75em">{{msgnum}}</span></li>
                <div id="slider2" class="slider2">
                    <msgbox/>
                </div>
                <li><a href="#">我的账户</a></li>
            </ul>
          </div>
          <div class="switch" id="switch">
                <input type="checkbox" name="open" id="open" >
                <label for="open" class="btn">
                      <span></span>
                      <span></span>
                      <span ></span>
                </label>
                <ul>
                <li><a href="#">登录/注册</a></li>
                <li ><a href="#">客服中心</a></li>
                <li ><a href="#" >关于我们</a></li>
                <li id="map3"><i id="icon3"></i>&nbsp;消息<span style="font-size:0.75em">{{msgnum}}</span></li>
                <div id="slider3" class="slider3">
                    <msgbox/>
                </div>
                <li><a href="#">我的账户</a></li>
            </ul>
          </div>
         
      </div>
      <div class="title">
              <a id="logo" class="logo" href="#"><img class="logo-pic" id="logo-pic" src="../../public/title.png" alt="网站标志"></a>
              <div id="search" class="search">
                  <input type="text" @click="ed_click" @blur="ed_blur" value="亲，有什么可以帮到您！" id="search_text">
                  <button class="search_btn" id="search_btn" >搜索</button>
              </div>
      </div>
      
  </div>
</template>

<script>
import pageSel from '../views/selLocaltion.vue'
import pageMsg from '../views/messagebox.vue'
import $ from 'jquery'
import {mapState} from 'vuex'
export default {
  name: 'pageHead',
  props: {
    msg: String
  },
  data(){
    return{
        
    }
  },
  methods:{
      hidebox1:()=>{
          $(".local").fadeOut(1000);
      },
      hidebox2:()=>{
          $("#slider2").fadeOut(1000);
            //  改变标签的文本内容
          $("#icon2").text('');
          $("#map2").css({'color':'#fff'});
      },
      hidebox3:()=>{
          $("#slider3").fadeOut(1000);
            //  改变标签的文本内容
          $("#icon3").text('');
          $("#map3").css({'color':'#000'});
      },
      ed_click:()=>{
        $("#search_text").css({"border-color":"#000"});
        //  attr元素本身的属性方法，prop是jq对象的属性方法
        if($("#search_text").prop("value")==="亲，有什么可以帮到您！"){ 
              $("#search_text").prop("value","");
        }
        
      },
      ed_blur:function(){
          if($("#search_text").prop("value")===""){
              $("#search_text").prop("value","亲，有什么可以帮到您！");
        }else if($("#search_text").prop("value")==="亲，有什么可以帮到您！"){ 
              $("#search_text").prop("value","");
        }
      }
  },
  computed:{
      ...mapState(['msgnum'])
  },
  mounted:function(){
       $("#map").hover(()=>{
            $("#slider").fadeIn(1000);
            $("#icon").text('');
            $("#map").css({'color':'red'});
       },()=>{
            $("#slider").fadeOut(1000);
            //  改变标签的文本内容
            $("#icon").text('');
            $("#map").css({'color':'#fff'});
        });

        $("#map2").click(()=>{
            $("#slider2").fadeIn(1000);
            $("#icon2").text('');
            $("#map2").css({'color':'red'});
            $("span").css({'color':'#fff'});
         });

         $("#map3").click(()=>{
            $("#slider3").fadeIn(1000);
            $("#icon3").text('');
            $("#map3").css({'color':'red'});
            $("span").css({'color':'#000'});
         });

       $("#local").click(()=>{
          $(".local").fadeIn(200);

       });

      
      //  通过高德地图api获取用户定位
        var context=this.$store; 
        var ajax=new XMLHttpRequest(); 
        function getLocation(ajax,context) {
           return new Promise(
              (resolve)=>{
                console.log(ajax.readyState);
              //创建对象
                ajax.open('get','https://restapi.amap.com/v3/ip?key=287ddf87df81da421212c5467033b917');
                console.log(ajax.readyState);
                //配置对象  1
                ajax.send();
                ajax.onload=function(){
                     if(ajax.status==200){
                          var city=ajax.responseText;
                          resolve(city);
                     }
                }
              }).then(
                  (value)=>{
                      // console.log(value);
                        //  context.$store.state.localtion=city.split("city:")[1].split(",")[0];
                       return value;
                  }
                  
              ).catch(
                ()=>{
                    context.state.localtion="定位失败！"
                }
              );
        }
        async function n(ajax,context){
            var t=await getLocation(ajax,context);
            context.commit('saveLocalInfo',t.split(/"city":"/)[1].split(/","/)[0]);
        }
        
         n(ajax,context);

  },components:{
      "sel":pageSel,'msgbox':pageMsg
  }
  
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .head{
        width: 100%;
        
   }
  
   .nav{
        margin: 0 auto;
        padding-left:6%;
        width: 100%;
        height: 45px;
        background: #000;
    }
   .logo_min{
       margin-top: 5px;
       width: 30px;
       height:30px;
    }
   #f{
        margin: 5px auto;
        display: block;
        width: 25px;
        height: 3px;
        background: #fff;
   }
  
   ul{
      list-style-type:none;
      font-family: 'icomoon';
   }
   ul li{
      width: 100px;
      height: 100%;
      float: left;
      color:#fff;
      padding-top:6px ;
      font-size: 0.71rem;
      z-index: 1000;
   }
   #managebar ul li a{
      color:#fff;
      font-size: 0.71rem;
      text-decoration:none;
   }
   #map2{
       font-size: 0.71rem;
   }
   #managebar li a:hover{
        color:red;
   }
   #managebar{
      margin-top: 4px;
      position: absolute;
      right:60px;
   }
   #webinfo{
     margin-left: 3px;
     padding: 0;
     margin-top: 4px;
   }
  #webinfo ul,#managebar ul{
       margin: 0;
       padding: 0;
      height: 90%;
      line-height: 90%;
      overflow: hidden;
  }
   #slider{
      position: absolute;
      top:40px;
      left: 0;
      display: none;
       width: 500px;
       height: 100px;
       border: 1px solid #333;
       background: white;
       z-index: 1500;
   }
  .slider2{
       position: absolute;
       top:40px;
       right: 102px;
       display: none;
       width: 400px;
       height: 200px;
       border: 1px solid #333;
       background: white;
       z-index: 1500;
       border:  1px solid #000;
   }
   .slider3{
       position: absolute;
       top:40px;
       right: 102px;
       display: none;
       width: 400px;
       height: 200px;
       border: 1px solid #333;
       background: white;
       z-index: 1500;
       border:  1px solid #000;
   }
  #icon,#icon2{
    font-style:normal;
    color:#fff;
    font-size: 0.75em;
  }
  
  #search_text{
      display:flex;
      flex-grow: 0.8;
      border:0;
      margin: 0;
      padding:0;
      padding-left:20px;
      /* outline （轮廓）是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。 */
      outline:0;
  }
  .search_btn{
      display: flex;
      flex-grow: 0.2;
      border: 0;
      color:white;
      background: #000;
      font-size: 1rem;
      /* 弹性盒子，图片和文字对齐居中 */
      justify-content: center;
      align-items:center;
      
  }
  .search{
     position: absolute;
     right: 20px;
     top: 10px;
     display: flex;
     flex-direction: row;
     justify-content:space-around;
     width: 600px;
     margin: 0;
     padding: 0;
     height: 70%;
     border: 4px solid #000;
  }
  .logo{
    position: relative;
    display: inline-block;
    padding: 0;
    margin: 0;
    margin-top: 8px;
    width: 200px;
    height: 80px;
    background: pink;
  }
   #logo:hover{
       transform: scale(.8);  
   }
  .logo-pic{
      padding: 0;
      margin:0;
      position: absolute;
      width: 100%;
      height: 100%;
  }
  .title{
    position: relative;
    margin: 0 auto;
    padding: 0;
    width: 70%;
    height:100px ;
    text-align: left;
    transition: all .7s ease-in-out;
  }
  #icon2{
    margin-right: 5px;
  }
  
  .local{
      position: absolute;
      top:40px;
      right:670px;
      display: none;
      width: 300px;
      height: 150px;
      background: #fff;
      text-align: center;
      z-index: 1500;
  }
  span{
      margin-left: 5px;
      display:inline-block;
      width: 20px;
      height: 20px;
      border: 0;
      border-radius: 15px;
      background: red;
      font-size:12px ;
      text-align: center;
  }
  .switch{
      display: none;
      position: absolute;
      top:2px;
      right: 5px;
      margin: 0;
      padding: 0;
      background: #fff;
      width: 40px;
      height: 40px;
  }
  .switch ul{
      display: none;
      z-index: 99999;
  }
  .btn{
      display: block;
      width: 100%;
      height: 100%;
      padding-left: 0;
      text-align: center;
      transition: all 1s ease-in-out;
  }
  #open{
       display: none;
      
  }
  .btn span{
        margin-top: 4px ;
        padding: 0;
        display: block;
        width: 30px;
        height: 4px;
        background: #000;
      
  }
  .btn span:first-child{
        margin-top: 3px ;
  }
 .btn:hover{
      background: #ccc;
 }
  .switch #open:checked~ .btn span:nth-child(1){
       transform:translateY(8px)  rotate(-135deg);
  }  
  .switch #open:checked~ .btn span:nth-child(2){
        transform: translateX(-1000px);
  }
  .switch #open:checked~ .btn span:nth-child(3){
        transform: translateY(-8px) rotate(135deg);
  }
  .switch #open:checked~ ul{
        position: absolute;
        right: 0;
        top:45px;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction:column ;
        justify-content: space-around;
        border:1px solid #000 ;
        width: 100px;
        background: #fff;
  }
  .switch ul li{
        width: 100px;
        text-align: center;
  }
</style>
