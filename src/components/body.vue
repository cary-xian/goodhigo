<template>
    <div id="pagebody">
        <div class="webside_nav">
             <ul>
                 <li><router-link to="/home">新闻</router-link></li>
                 <div id="b"></div>
                 <li><router-link to="/market">美图欣赏</router-link></li>
                 <div id="b"></div>
                 <li><router-link to="/mab">母婴世界</router-link></li>
                 <div id="b"></div>
                 <li><router-link to="/mobile">美文欣赏</router-link></li>
                 <div id="b"></div>
                 <li><router-link to="/insurance">健康</router-link></li>
                 <div id="b"></div>
                 <li><router-link to="/traval">观光旅游</router-link></li>
             </ul>
            <router-view id="page-view"></router-view>
        </div>
        <div id="pagefoot">
            <div>
                本页面用于展示
            </div>
            <div class="ualificate-info">
                <a target="_black" href="#">
                    <img align="absmiddle" src="//img.alicdn.com/tps/i2/T1C3z7FudfXXcsE9Te-40-42.png" alt="网监局">
                </a>
                <a target="_black" href="#">
                    <img align="absmiddle" width="40" src="//gw.alicdn.com/tfs/TB1HxCbreL2gK0jSZPhXXahvXXa-65-70.gif">
                </a>
                <a target="_black" href="#">
                    <img align="absmiddle" alt="网监局" src="//img.alicdn.com/tps/i4/T1VVv9FABeXXbtCInf-38-42.png">
                </a>
            </div>
        </div>
    </div>
</template>
<script>

 export default ({
      name: 'pageBody',
      data(){
          return{

          }
      }

  });
</script>
<style scoped>
    .webside_nav{
        width: 100%;
        height: 45px;
        background: black;
    }
    .webside_nav ul{
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: 100%;
        width: 95%;
        margin: 0;
        padding: 0;
    }
    .webside_nav ul li{
        width: 100px;
        height: 100%;
        font-size: 16px;
        line-height: 40px;
        margin-right: 5px;
        color: white;
        list-style-type: none;
    }
    .webside_nav ul li:last-child{
        margin-right: 0;
    }
    .webside_nav ul li:hover{
        color:red;
    }
    .webside_nav ul li a{
        color:#fff;
        font-size: 0.85rem;
        text-decoration: none;
    }
    .webside_nav  ul li a:hover{
         color: red;
    }
    #b{
        background: white;
        width: 3px;
        height: 30px;
        margin-top: 5px;
    }
    #page-view{
       background: #fff;
       height: 6830px;
       flex-wrap: wrap;   
    } 
    #pagebody{
        position: relative;
        margin: 0;
        padding: 0;
        width: 100%; 
        height: 7166px;
    }
    
    #pagefoot{
        position: absolute;
        bottom: 0 ;
        width: 100%;
        height: 300px;
        background: #000;
        color:#fff;
        line-height: 92px;
        
    }
    #ualificate-info{
        width: 70%;
        margin: 0;
        padding: 0;
    }
    #ualificate-info a{
        display: block;
        padding-left: 20px;
    }  

</style>
