<template>
  <div id="footer" class="flex px-5 sm:px-0 items-center justify-center pb-[20PX]">
    <div class="flex  items-center justify-between w-full  sm:w-10/12">
        <div class="flex sm:w-1/2  items-center">
            <div>
                <img :src="pic1" alt="">
            </div>
            <div>
               <span class="font-medium">ID-BOT</span>
            </div>
        </div>

        <div class="flex sm:w-1/2  ">
           
                <div class="link-group flex  w-full items-center justify-evenly">
                <a  :href="githubUrl" target="_blank">GitHub Source</a>
                <a class="mx-3 sm:mx-0" :href="metaidUrl" target="_blank">About MetaID</a>
                <div class="flex ">
                <div >
                    <a class="w-[20PX] h-[20PX]" :href=xUrl target="_blank" rel="noopener noreferrer">
                        <img :src="pic2" alt="">
                    </a>
                </div>
                <div >
                    <a  class="w-[20PX] h-[20PX]" :href=tgUrl target="_blank" rel="noopener noreferrer">
                        <img :src="pic3" alt="">
                    </a>
                </div>
            </div>
           
            </div>
        
          
        </div>
    </div>
  </div>
</template>
<script setup >
import pic1 from '@/assets/image/footer-icon.png?url'
import pic2 from '@/assets/image/footer-x.png?url'
import pic3 from '@/assets/image/footer-twitter.png?url'

const githubUrl=`https://github.com/IDBOT-dev/MetaID_Bot`
const metaidUrl=`https://metaid.io`
const xUrl=`https://x.com/bot_id56853`
const tgUrl=`https://t.me/MetaID_telegram_bot`

</script>
<style lang='scss' scoped>
.link-group{
    a{
        color: #333 !important;
        &:hover{
            opacity: 0.8 !important;
        }
    }
}
</style>