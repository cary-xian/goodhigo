<template>
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
</template>
<script>

 export default ({
      name: 'pageFoot',
      data(){
          return{

          }
      }

  });
</script>
<style scoped>
    #pagefoot{
        margin: 547% auto;
        background: #000;
        color:#fff;
        height: 200px;
        line-height: 92px;
        padding: 0;
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
