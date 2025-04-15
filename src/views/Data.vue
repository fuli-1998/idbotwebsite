<template>
  <div id="data" class="mt-[200PX]  ">
        <div class="flex flex-col items-center justify-center ">
            <div class="title flex items-center justify-center">
            <span class="text-5xl font-bold">Data details</span>
        </div>
        <div>
            <div class="section_1 mt-[146PX] flex items-center justify-center">
              <div class="flex w-11/12 sm:w-10/12 flex-col items-center md:flex-row  p-8 sm:p-12 rounded-[32PX] bg-[#F5FBFD]  justify-between">
                <div class="flex flex-col  items-start">
                    <div><img :src="icon" alt=""></div>
                    <div class="font-bold text-3xl">Date</div>
                    <div class="text-lg text-left">We have carefully built an intuitive and transparent social data transaction visualization information center for you.</div>
                </div>

                <div class="mt-5 md:mt-0">
                    <img :src="pic1" alt="">
                </div>
              </div>
            </div>
            <div class="w-full flex items-center justify-center">
                <div class="section_2 w-11/12 sm:w-10/12 mt-[22PX] grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 lg:grid-cols-3   " >
                
                <div class="px-[30PX] py-[40PX] rounded-[32PX] bg-[#F5FBFD] "  v-for="item in setcion2List">
            <div class="flex  text-left justify-center" v-if="item.title !== 'chanis'">
                <div class="flex  flex-1 flex-col ">
                  
                    <div class="text-xl font-bold ">{{ item.title }}</div>
                    <div class="text-3xl font-bold mt-[24PX]">{{ item.value }}</div>
                </div>
                <div class="flex flex-1 flex-row items-center justify-end">
                    <img :src="item.img" alt="">
                </div>
                
            </div>

            <div class="flex flex-col items-start text-left justify-between" v-else>
                <div class="">{{ item.title }}</div>
                <div class="mt-[20PX] flex w-full items-center justify-between" v-for="ele in item.value">
                    <div class="flex items-center">
                        <div class="w-[24PX] h-[24PX] mr-[6PX]">
                            <img class="w-full h-full " :src="ele.icon" alt="">
                        </div>
                        <div class="text-sm font-medium">
                            {{ ele.chain }}
                        </div>
                    </div>
                    <div class="text-xl font-bold">{{ ele.value }}</div>
                </div>
            </div>
        </div>
         
        
    </div>
            </div>
        </div>
        </div>
  </div>
</template>
<script setup >
import icon from '@/assets/image/home_section_icon.svg?url'
import pic1 from '@/assets/image/data_img_1.png?url'

import pic2 from '@/assets/image/data_img_2.png?url'
import pic3 from '@/assets/image/data_img_3.png?url'
import btc from '@/assets/image/btc-icon.png?url'
import mvc from '@/assets/image/mvc-icon.png?url'


const setcion2List=[
    {
        
        title:'Users',
        value:'--',
        img:pic2
    },
    {
        title:'Transactions',
        value:'--',
        img:pic3
    },
    {
        title:'chanis',
        value:[
            {
                chain:'Bitcoin',
                icon:btc,
                value:'--'
            },
            {
                 chain:'MVC',
                 icon:mvc,
                 value:'--'
            }
        ],
        
    }
]
</script>
<style lang='scss' scoped>

</style>