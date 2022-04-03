<template>
    <div id="market">
      <p>
           您当前位置:美图欣赏
      </p>
      <div id="img_box">
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/308/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/201/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/202/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/203/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/204/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/235/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/206/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/236/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/208/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/209/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/210/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/211/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/212/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/213/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/214/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/215/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/216/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/217/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/218/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/219/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/220/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/221/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/221/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/222/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/223/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/240/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/225/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/243/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/227/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/228/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/229/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/230/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/231/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/232/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/233/308/210"><p name="titile">精美图片</p></div>
                        <div name="pic" ><img name="p" data-funlazy="https://picsum.photos/id/234/308/210"><p name="titile">精美图片</p></div>
           
       </div>
          
           
       
    </div>
</template>
<script>
import $ from 'jquery'
export default {
  
    name: 'pageMarket',
      data(){
          return{
              
          }
      },mounted:function(){
          //图片懒加载
          //不给图片标签的src赋值,或则统一赋一张图片地址
          //通过元素的顶点的页面顶点的距离(element.offsetTop)与浏览器的可视区域的高度(window.innerHeight)
          //和页面的滚出浏览器的可视区域的高度(document.body.scrollTop)的和相比较,小于就将图片的src赋真实的地址
          //大于就不做处理,这样就降低了服务器的压力
          var pics=$("[name='p']");
          for(var i=0;i<2;i++){
            pics[i].src=pics[i].getAttribute('data-funlazy');
          }
          $(document).scroll(
              ()=>{
                   for (var i=2;i<pics.length;i++) {
                     //获取浏览器可视区域高度
                    var winH = window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight;
                    //获取滚动条的位置
                    var scrolTop = document.documentElement.scrollTop||document.body.scrollTop;
                    var offsettop=pics[i].offsetTop;
                    console.log(offsettop+"/"+winH+scrolTop);
                    if( offsettop<winH+scrolTop){
                        pics[i].src=pics[i].getAttribute('data-funlazy');
                    }
                
                   }
                    
                
          });
      }
          // var pageTop=window.screenX

}
</script>
<style scoped>
    #market{
        width: 100%;
        height: 6830px;
    }
   [name='p']{
     margin: 2px auto;
     padding:0;
     height: 90%;
     width: 100%;
     line-height: 90%;
     text-align: left;
     font-size: .1em;
   }
   #img_box{
       display:flex;
       flex-wrap: wrap;
       margin: 5px auto;
       width: 100%;
       height: 100%;
       overflow: hidden;
   }
   [name='pic']{
       margin-left: 10px;
       margin-top: 5px;
       width: 400px;
       height: 400px; 
       border: 1px solid #000;

   }
   
   [name="titile"]{
     padding: 0;
     height: 20px;
     line-height: 20px;
     font-family:monospace;
     font-size: 16px;
     font-weight: bolder;
     text-align: center;
     color:black;
   }
</style>