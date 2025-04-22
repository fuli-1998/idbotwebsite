<template>
  <div id="faq" class="flex mt-[200PX] mb-[100PX] sm:mb-[350PX] items-center justify-center">
     <div class="w-11/12 sm:w-10/12">
        <div class="text-5xl font-bold">FAQ</div>
        <div class="grid mt-[100PX] grid-cols-1 gap-x-[19PX] gap-y-[40PX] md:grid-cols-2">
            <div class="bg-[#F5FBFD] rounded-[20PX] p-8" v-for="item in content">
                <div class="flex flex-start flex-col sm:flex-row">
                    <div class="mr-[19PX] flex w-[90PX] h-[90PX] sm:w-[130PX] sm:h-[130PX]"><img class="" :src="item.icon" alt=""></div>
                    <div class="font-bold mt-5 sm:mt-0 flex-1 text-left text-2xl"><span>{{ item.title }}</span></div>
                </div>
                <div class="mt-[19PX]">
                    <p class="text-[15PX]  text-left" v-html="item.value"></p>
                </div>
            </div>
        </div>
     </div>
  </div>
</template>
<script setup>
import pic1 from '@/assets/image/faq_img_1.png'
import pic2 from '@/assets/image/faq_img_2.png'
import pic3 from '@/assets/image/faq_img_3.png'
import pic4 from '@/assets/image/faq_img_4.png'
    const content=[
        {
            icon:pic1,
            title:'Does it support full data on-chain?',
            value:`<div>Yes, IDBot supports full data on-chain, including text, images, and videos, all of which are stored on the Bitcoin network or its sidechains. Data uploaded through IDBot can be viewed as permanently preserved and tamper-proof.</div>`
        },
        {
            icon:pic2,
            title:`What is ID-Bot’s tokenomics`,
            value:`<div>All user operations using ID-Bot will be recorded.The related Tokenomics plan will be released later, so please stay tuned.</div>`
        },
        {
            icon:pic3,
            title:'Is it based on a custodial wallet or a non-custodial wallet?',
            value:`
            <div>IDBot is based on a custodial wallet, but each user's address is independent and secure, managed jointly by cold and hot wallets, with a security level comparable to centralized exchanges. IDBot is designed as a tool for putting traditional social media data on-chain rather than as a professional wallet, so we recommend that users do not transfer large amounts of funds into the IDBot wallet and avoid keeping funds there long-term.</div>           
            <div class='mt-5'>If you need to use a professional non-custodial wallet, we recommend using Metalet (https://metalet.space), which also supports Bitcoin and its sidechains.</div>
            `
        },
        {
            icon:pic4,
            title:'Why should I use IDBot?',
            value:`<div >IDBot is a bot that runs on traditional social media. Its goal is to put users' data from traditional social media on-chain on the Bitcoin network. IDBot can provide you with the following benefits:</div>
            <ul class='mt-5 list-disc'>
                <li>It puts your social data from the traditional internet on-chain, giving your data the properties of permanence and immutability.</li>    
                <li>The on-chain data is based on the MetaID protocol, allowing your data to break information silos and appear across multiple Web3 applications</li>   
                <li>After your data is on-chain, you have the opportunity to receive token incentives related to the MetaID protocol and the IDBot project.</li>   
            </ul>
            `
        },
    ]

</script>
<style lang='scss' scoped>

</style>