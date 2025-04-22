const bot_host=import.meta.env.VITE_BOT_HOST

export async function getInfo() {
    const url=`${bot_host}/api/info`
    const res= await fetch(url).then((response)=>response.json()).then((data)=>{
        return data
    })
    return res
   


}