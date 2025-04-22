<template>
  <div id="social" >
    <div class="mt-[200PX] flex flex-col items-center justify-center">
        <div class="text-5xl font-bold "><span class="px-2">
            Support Social Media
        </span></div>
    <div class="mt-[100PX] section_1 w-11/12 sm:w-10/12 rounded-[32PX]  px-[32PX] py-[23PX] sm:px-[64PX] sm:py-[55PX]  flex flex-col items-center justify-between lg:flex-row lg:items-baseline bg-[#F5FBFD]">
        <div class="mr-0 lg:mr-5  flex flex-col items-center lg:items-start " >
            <div class="flex items-center justify-center">
                <div class="w-[46PX] h-[46PX] mr-3"><img :src="pic1" alt=""></div>
                <div class="text-2xl font-bold">Telegram</div>
            </div>
            <div class="mt-[25PX] w-full  sm:w-[397PX] sm:h-[494PX]"  >
                <img  :src="pic2" alt="">
            </div>
        </div>

        <div class="flex  flex-col mt-[30PX] lg:mt-0 ">
            <div class="text-2xl font-bold">How to Use</div>
            <div class="bg-white   mt-[15PX] px-[15PX] py-[10PX] sm:px-[25PX] sm:py-[19PX] rounded-[32PX] flex flex-col items-start">
               <div class="text-left text-lg mt-[20PX] first:mt-0" v-for="item in useContent">
                <span class="text-left">{{ item }}</span>
               </div>
            </div>
        </div>
        
    </div>

    <div class="section_2 w-11/12 sm:w-10/12 mt-[20PX] flex flex-col lg:flex-row  rounded-[32PX] bg-[#F5FBFD] px-[32PX] py-[23PX] sm:px-[64PX] sm:py-[55PX]">
            <div class="flex flex-1 flex-col ">
                <div class="flex flex-col ">
                    <div class="flex  flex-start  ">
                        <span class="bg-white font-medium text-xl px-[24PX] py-[16PX] rounded-xl">
                            “Coming  soon.”
                        </span>
                    </div>
                    <div class="mt-[79PX] flex items-center">
                        <div class="w-[64PX] h-[64PX] mr-[24PX]" >
                            <img :src="pic3" alt="">
                        </div>
                        <div class="w-[125PX] h-[50PX] flex items-center">
                            <img :src="pic4" alt="">
                        </div>
                    </div>
                  
                </div>
                <div class="mt-5 leading-relaxed text-left text-sm">
                    ID-Bot is a Web3 social tool specially designed for mainstream social platforms such as Telegram and X.
                </div>
                <div class="mt-6 px-3 text-center w-11/12 sm:w-4/12  lg:w-8/12   text-white py-3.5  rounded-[75PX] bg-black text-base">
                   <span class="">Coming Soon</span>
                </div>
            </div>
            <div class="flex mt-5 relative lg:mt-0 flex-2 ">
                <div>
                    <img class="" :src="pic5" alt="">
                </div>
                <div class="absolute w-[60PX] sm:w-[60PX] sm:h-[88PX] md:w-[177PX] md:h-[177PX] bottom-[25PX] md:bottom-[50PX] left-[-22PX] md:left-[-44PX]">
                    <img class="w-full h-full" :src="pic6" alt="">
                </div>
            </div>
       
        </div>
    </div>
  </div>
</template>
<script setup >
import pic1 from '@/assets/image/social_img_1.png?url'
import pic2 from '@/assets/image/social_img_2.png?url'
import pic3 from '@/assets/image/social_img_3.png?url'
import pic4 from '@/assets/image/social_img_4.png?url'
import pic5 from '@/assets/image/social_img_5.png?url'
import pic6 from '@/assets/image/social_img_6.png?url'
const useContent=[
    "1. The first use scenario for users includes adding Bot to the address book for private chat or directly calling Bot commands through the group",
    "2. The user's platform ID will be used as the unique identity identification. Through the platform ID, bind or generate a wallet account->get the wallet address->generate MetaID and its basic user information. Users only need to use /createmetaid to achieve the above functions",
    "3. Bot integrates the /help command to help users quickly understand which commands the application contains, with command descriptions, specific functions, etc.",
    "4. Users can send transactions to the chain through Bot commands. They can specify which public chain the transaction is sent to through optional commands. For example, input /buzz Hello MetaID --btc, which means that the text Hello MetaID will be sent to the BTC network and will be displayed in related social applications such as ShowNow bitbuzz and other hardware that support the simplebuzz protocol"
]

</script>
<style lang='scss' scoped>

</style>