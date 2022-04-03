<template>
 <div id="app">
      <pageHead/>
      <pageBody/>
 </div>
    
</template>
<script>
import pageHead from './components/header.vue'
import pageBody from './components/body.vue'
export default {
    name:'App',
    components:{
       pageHead,pageBody
    }
}
</script>

<style>
#app {
     width: 100%;
     height: 100%;
     background: #fff;
     text-align: center;
}

</style>
