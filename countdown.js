const countdown= document.getElementById("countdown");

const targetDate= new Date("December 31, 2025 23:59:59").getTime();
//create interval
const timer= setInterval(()=>{
    const now= new Date().getTime();
    const difference= targetDate - now;

    const days= Math.floor(difference/(1000*60*60*24));
    const hours= Math.floor((difference%(1000*60*60*24))/(1000*60*60));
    const minutes= Math.floor((difference%(1000*60*60))/(1000*60));
    const seconds= Math.floor((difference % (1000*60))/1000);

    countdown.textContent= `${days}d ${hours}h ${minutes}m ${seconds}s`

},1000);
if(difference <=0){
    clearInterval(timer);
    countdown.textContent="🎊🎊🎂My brother bithday!"
}