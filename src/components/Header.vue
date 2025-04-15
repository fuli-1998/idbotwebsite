<template>
  <div class="header-wrap mt-1 sm:mt-5 w-11/12 md:w-9/12 lg:w-6/12 flex items-center justify-between">
    <div class="flex flex-1 my-4 sm:mx-8">
        <img :src="icon" class="mr-1" alt="">
       <img :src="title" alt="">
    </div>
    <div class="nav flex-2 items-center justify-around ">
        <a href="#"  >Home</a>
        <a href="#"  >Data</a>
        <a href="#"  >Social Media</a>
        <a href="#"  >FAQ</a>
    </div>
  
  </div>
</template>

<script setup >
import icon from '@/assets/image/icon.svg?url'
import title from '@/assets/image/ID-Bot.svg?url'

// import { ChevronDownIcon } from '@heroicons/vue/20/solid'
</script>
<style lang='scss' scoped>
.header-wrap{
    // margin: 0 auto;
    
    border-radius: 999px;
    position: absolute;
    background-color: #fff;
    left: 50%;
  top: 0;
  transform: translate(-50%, 0);
     //min-width: 50%;
    // width: 50%;
    .nav{
      
      a{
        color: #000 !important;
      }
    }
}

</style>