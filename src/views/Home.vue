<template>
    <div id="home" class="home-wrap flex flex-col items-center pb-[116PX]">
    <div class="header-wrap mt-1 sm:mt-5 w-11/12 md:w-9/12 lg:w-6/12 flex items-center justify-between">
    <div class="flex w-2/5 my-4 sm:mx-8">
        <img :src="icon" class="mr-1" alt="">
       <img :src="title" alt="">
    </div>
    <div class="nav hidden sm:flex w-3/5 items-center justify-around ">
        <a href="#home"  >Home</a>
        <a href="#data"  >Data</a>
        <a href="#social"  >Social Media</a>
        <a href="#faq"  >FAQ</a>
    </div>

    <div class="sm:hidden mr-5 relative">
        <img @click="trggleMenu" class="cursor-pointer" :src="colspan"  alt="">
        <div v-if="isShow" class="nav col-nav px-[30PX] py-1 bg-white rounded-xl text-left absolute right  ">
          
          <div class="flex leading-8 flex-col">
         <div class="w-full" v-for="item in navLink">
            <div class="hover:opacity-80">
                <a :href="item.url">{{ item.value }}</a>
            </div>
         </div>
      </div>
      </div>
    
    </div>



  </div>

  <div id="home" class="w-full mt-5 sm:mt-20 flex flex-col">
      <div class="section w-11/12 flex items-center justify-center">
        <span class="font-black text-5xl lg:text-8xl">We Are The Bots Make Your
            Web2 Social Data On-Chain</span>
      </div>
      <div class="section_2   sm:w-11/12 flex flex-col items-center justify-center sm:flex lg:flex-row mt-16 sm:mt-32 ">
        <div class="bg-white w-10/12 md:w-6/12 text-left flex flex-1 flex-col rounded-xl items-center justify-center p-6 ">
            <div class="text-xl md:text-2xl font-bold ">“IDBOT is a social media robot based on the metaid protocol that connects web2 to web3.”</div>
            <div class="ttext-base md:text-lg mt-6">By sending specific commands to the Bot, users can obtain user MetaID, wallet address, Tokens balance, and upload chat text, pictures and other resources to BTC and BTC layer2 network. In addition, it also supports transferring Tokens, trading (buying and selling) Tokens (including FT and NFT) through commands, etc.</div>
        </div>
        <div class="flex mx-8 mt-10 lg:mt-0  flex-1 items-center justify-center ">
            <img :src="pic1" alt="">
        </div>
        <div class="flex flex-1 items-center justify-center">
            <img :src="pic2" alt="">
        </div>

      </div>
     
    
  </div> 



    </div>
    <div class="section_3 bg-white w-full mt-[148PX] flex flex-col items-center justify-center">
        <div class="section_3_1 w-11/12 sm:w-10/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:grid-cols-4  items-start justify-around rounded-[32PX] bg-[#F5FBFD] px-[32PX] py-[23PX] sm:px-[64PX] sm:py-[55PX]">
            <div class="flex   flex-col ">
                <div class="flex items-center">
                    <div class="mr-2 xl:mr-6">
                        <img :src="pic3" alt="">
                    </div>
                    <div class="text-2xl font-bold xl:text-4xl">ID-BOT</div>
                </div>
                <div class="mt-5 leading-relaxed text-left text-sm">
                    ID-Bot is a Web3 social tool specially designed for mainstream social platforms such as Telegram and X. It helps users of mainstream social platforms such as TG and X to quickly understand the use of MetaID applications and their ecosystems. By sending specific instructions to Bot, users can obtain user MetaID, wallet address, Tokens balance, and upload chat content text, pictures and other resources to BTC and BTC layer2 network. In addition, it also supports transferring Tokens, trading (buying and selling) Tokens (including FT and NFT) through instructions, etc.
                </div>
                <div class="launch_app mt-6 text-center w-11/12 sm:w-7/12 text-white py-3.5 px-3 rounded-[75PX] bg-black text-base">
                    <a :href="tgUrl" target="_blank" rel="noopener noreferrer">Launch App</a>
                </div>
            </div>
            <div class="  flex  items-center justify-center">
                <img :src="pic4" alt="">
            </div>
            <div class=" flex items-center justify-center">
                <img :src="pic5" alt="">
            </div>
            <div class="flex flex-col   ">
               <div>
                <img :src="pic6" alt="">
               </div>
               <div>
                <img :src="pic7" alt="">
               </div>
            </div>
        </div>
        <div class="section_3_2 w-10/12 mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 lg:grid-cols-3  " >
            <div class=" p-[30PX] rounded-[32PX] bg-[#F5FBFD]"  v-for="item in setcion3List">
                <div class="flex items-start text-left justify-between">
                    <div class="flex  flex-1 flex-col">
                        <div class="w-[56PX] h-[56PX]">
                            <img :src="item.icon" alt="">
                        </div>
                        <div class="text-xl font-bold mt-4">{{ item.title }}</div>
                    </div>
                    <div class="flex-1 ">
                        <img :src="item.img" alt="">
                    </div>
                </div>
            </div>
            
        </div>

      </div>
</template>
<script setup >
import {ref} from 'vue'
import icon from '@/assets/image/icon.svg?url'
import title from '@/assets/image/ID-Bot.svg?url'
import pic1 from '@/assets/image/home_img1.png?url'
import pic2 from '@/assets/image/home_img2.png?url'
import pic3 from '@/assets/image/home_img3.png?url'
import pic4 from '@/assets/image/home_img4.png?url'
import pic5 from '@/assets/image/home_img5.png?url'
import pic6 from '@/assets/image/home_img6.png?url'
import pic7 from '@/assets/image/home_img7.png?url'
import pic8 from '@/assets/image/home_img8.png?url'
import pic9 from '@/assets/image/home_img9.png?url'
import pic10 from '@/assets/image/home_img10.png?url'
import icon2 from '@/assets/image/home_section_icon.svg?url'
import colspan from '@/assets/image/colspan.png?url'

const tgUrl=`https://t.me/Official_IDBot`

const navLink=[
  {
    url:`#home`,
    value:`Home`
  },
  {
    url:`#data`,
    value:`Data`
  },
  {
    url:`#social`,
    value:`Social`
  },
  {
    url:`#faq`,
    value:`FAQ`
  },
]
const isShow=ref(false)

function trggleMenu(){
    isShow.value = !isShow.value
}
const setcion3List=[
    {
        icon:icon2,
        title:'Base On Bitcoin Network',
        img:pic8
    },
    {
        icon:icon2,
        title:'Full Data On-Chain',
        img:pic9
    },
    {
        icon:icon2,
        title:'Metaid Protocol Supported',
        img:pic10
    }
]
</script>
<style lang='scss' scoped>
.home-wrap{
    height: auto;
    background-image: url('@/assets/image/backgroud.png');
}
.header-wrap{
    // margin: 0 auto;
    
    border-radius: 999px;
    // position: absolute;
    background-color: #fff;
//     left: 50%;
//   top: 0;
//   transform: translate(-50%, 0);
     //min-width: 50%;
    // width: 50%;
    .nav{
      a{
        color: #000 !important;
      }
    }
}

#home{
    
   
    display: flex;
    align-items: center;
    justify-content: center;
    .section{
        // width: 70%;
        text-align: center;
    }
}

.launch_app{
    a{
        color: #fff !important;
    }
}

.col-nav{
    left: 50%;
    top: 150%;
    translate: (-50% 0);
}

</style>