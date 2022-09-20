let dia = document.querySelector('#dia')
let hora = document.querySelector('#hora')
let min = document.querySelector('#min')
let seg = document.querySelector('#seg')
const domingo = "20 sep 2023"




function countDown(){
    const dataLimit = new Date(domingo);
    const currentDate = new Date();
    const totalSeconds = (dataLimit - currentDate) / 1000;
   
    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    
    if(dataLimit > currentDate){
        dia.innerHTML=`${days}:`
        hora.innerHTML=`${formatTime(hours)}:`
        min.innerHTML=`${formatTime(minutes)}:`
        seg.innerHTML=`${formatTime(seconds)}`
    

    }else{
        clearInterval(atualizaHora)
        
        dia.innerHTML=`0:`
        hora.innerHTML=`00:`
        min.innerHTML=`00:`
        seg.innerHTML=`00`
    }
   
}

function formatTime(time){
    
    return time < 10 ? `0${time}` : time;
}


let atualizaHora = setInterval(countDown, 1000)




