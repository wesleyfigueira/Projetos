const value = document.getElementById("value");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const resetButton = document.getElementById("reset1");

let count =0;

// defini o innerhtml a ser mudado.
const upDatevalue =() => {
    value.innerHTML =count;
};
//inner html mudado a cada click 
plusButton.addEventListener("click",() => {
    count+=1;
    upDatevalue();
});

minusButton.addEventListener("click",() => {
    count-=1;
    upDatevalue();


});
resetButton.addEventListener("click",() => {
    count =  0;
    upDatevalue();

});


const value2 = document.getElementById("value2");
const plusButton2 = document.getElementById("plus2");
const minusButton2 = document.getElementById("minus2");
const resetButton2 = document.getElementById("reset2");

let count2 =0;

// defini o innerhtml a ser mudado.
const upDatevalue2 =() => {
    value2.innerHTML =count2;
};
//inner html mudado a cada click 
plusButton2.addEventListener("click",() => {
    count2+=1;
    upDatevalue2();
});

minusButton2.addEventListener("click",() => {
    count2-=1;
    upDatevalue2();


});
resetButton2.addEventListener("click",() => {
    count2 =  0;
    upDatevalue2();

});


/*-----------Contador-------------- */

const timerEl = document.getElementById("timer");
const marksList = document.getElementById("marks-list");

let intervalId =0;
let timer = 0;
let marks = [];


const formatTime =(time) =>{
    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000)/6000);
    const seconds = Math.floor((time % 6000)/ 100);
    const hundreadths = time % 100 ;

    return `${hours.toString().padStart(2,"0")}: ${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}:${hundreadths.toString().padStart(2,"0")}`

}

const toggleTimer =() =>{
    const button =document.getElementById("power");
    const action = button.getAttribute("action");

    clearInterval(intervalId);

    if (action == "start" || action =="continue"){
        intervalId = setInterval(() =>{
            timer+=1;
            setTimer(timer);
        },10)
        button.setAttribute("action","pause");
        button.innerHTML = "<i class='fa-solid fa-pause'><i>";
    }else if (action =="pause"){
        button.setAttribute("action","continue");
        button.innerHTML = '<i class="fa-solid fa-play"></i>'
    }
}

const setTimer =(time) => {
    timerEl.innerText = formatTime(time);
}

document.getElementById("power").addEventListener("click",toggleTimer);


/*-------Marcar parada ---------*/

const addMarkToList = (markIndex,markTime) =>{
    marksList.innerHTML +=`<h3>Finalizado ${markIndex}</h3><p> ${formatTime(markTime)}</p>`
}
const markTime =()=>{
    marks.push(timer);
    addMarkToList(marks.length , timer);
}

document.getElementById("mark").addEventListener("click",markTime);

/*---------resetar tempo---------*/
const resetTimer =() =>{
    clearInterval(intervalId);
    timer = 0;
    marks= [];
    setTimer(timer);
    marksList.innerHTML = "";
    const button = document.getElementById("power");
    button.setAttribute("action","start");
    button.innerHTML = '<i class="fa-solid fa-play"></i>';


}
document.getElementById("reset").addEventListener("click",resetTimer);