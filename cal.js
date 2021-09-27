const display1El = document.querySelector(".display1");
const display2El = document.querySelector(".display2");
const tempResultEl = document.querySelector(".temp");
const numbersEl = document.querySelectorAll(".data");
const operationEl = document.querySelectorAll(".operation");
const equalEl = document.querySelector(".equal");
const clearAllEl = document.querySelector(".allclear");
const clearLastEl = document.querySelector(".clear-last-entry");

var dis1Num ='';
var dis2Num ='';
var result =null;
var lastOperation = '';
var haveDot = false;

numbersEl.forEach( (number) => {
    number.addEventListener("click",(event)=> {
        if(event.target.innerText === "." && !haveDot){
            haveDot=true;
        }else if(event.target.innerText==='.' && haveDot){
        return;
        }
        dis2Num += event.target.innerText;
        display2El.innerText=dis2Num;
    })
})

operationEl.forEach(operation => {
    operation.addEventListener('click',(event) =>{
        if(!dis2Num) result;
        haveDot =false;
        const operationName = event.target.innerText;
        if(dis1Num && dis2Num && lastOperation){
            mathOperation();
        }else{
            result =parseFloat(dis2Num);
        }
        clearVar(operationName);//clear display number 2 and move result to display no 1 and show result in temp
        lastOperation=operationName;
        console.log(result);
    })
})

function clearVar(name=''){ //for default value we are emplty call here
    dis1Num +=dis2Num+ ' '+name+' ';
    display1El.innerText=dis1Num;
    display2El.innerText='';//update value on display 1
    dis2Num='';//js varible where we store null value in dis2Num variable
    tempResultEl.innerText=result;
}
function mathOperation(){
    if(lastOperation ==='X'){
        result=parseFloat(result)*parseFloat(dis2Num);
    }else if(lastOperation==='+'){
        result=parseFloat(result)+parseFloat(dis2Num);
    }
    else if(lastOperation==='-'){
        result=parseFloat(result)-parseFloat(dis2Num);
    }
    else if(lastOperation==='/'){
        result=parseFloat(result)/parseFloat(dis2Num);
    }
    else if(lastOperation==='%'){
        result=parseFloat(result)%parseFloat(dis2Num);
    }
}

equalEl.addEventListener('click',(event)=>{
    if(!dis2Num || !dis1Num)
    return;
    haveDot=false;
    mathOperation();
    clearVar();
    display2El.innerText=result;
    tempResultEl.innerText='';
    dis2Num=result;
    dis1Num='';
})
clearAllEl.addEventListener('click',(event)=>{
    display1El.innerText='0';
    display2El.innerText='0';
    dis1Num='';
    dis2Num='';
    result='';
    tempResultEl.innerText='0';
})
clearLastEl.addEventListener('click',(event)=>{
    display2El.innerText='';
    dis2Num='';
})

window.addEventListener('keydown',(event)=>{
    if(
    event.key ==='0'||
    event.key ==='1'||
    event.key ==='2'||
    event.key ==='3'||
    event.key ==='4'||
    event.key ==='5'||
    event.key ==='6'||
    event.key ==='7'||
    event.key ==='8'||
    event.key ==='9'||
    event.key ==='.'
    ){
        clickButtonEl(event.key);
    }else if(
        event.key ==='+'||
        event.key ==='-'||
        event.key ==='/'||
        event.key ==='%'
    ){
        clickOperation(event.key);
    }
    else if(event.key ==='*'){
        clickOperation('X');
    }else if(event.key=='Enter'|| event.key=="="){
        clickEqual();
    }
    else if(event.key=='Backspace'){
        backSpace();
    }
    else if(event.key=='Escape'){
        clearallspace();
    }
})
function clickButtonEl(key){
    numbersEl.forEach(button =>{
        if(button.innerText===key){
            button.click();
        }
    })
}
function clickOperation(key){
    operationEl.forEach(button =>{
        if(button.innerText===key){
            button.click();
        }
    })
}
function clickEqual(){
    equalEl.click();
}
function backSpace(){
    clearLastEl.click();
}
function clearallspace(){
    clearAllEl.click();
}