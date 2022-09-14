let dia = document.querySelector('#dia')
let hora = document.querySelector('#hora')
let min = document.querySelector('#min')
let seg = document.querySelector('#seg')
const domingo = "18 sep 2022"




function countDown(){
    const dataDomingoMadruga = new Date(domingo);
    const currentDate = new Date();

    const totalSeconds = (dataDomingoMadruga - currentDate) / 1000;
   
    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
 

    dia.innerHTML=`${days}:`
    hora.innerHTML=`${formatTime(hours)}:`
    min.innerHTML=`${formatTime(minutes)}:`
    seg.innerHTML=`${formatTime(seconds)}`


  

}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}



countDown();

let atualizaHora = setInterval(countDown, 1000)




