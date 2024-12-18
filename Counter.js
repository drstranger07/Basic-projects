const CounterLabel= document.getElementById("CounterLabel");
const decrbtn= document.getElementById("decrbtn");
const incrbtn= document.getElementById("incrbtn");
const resetbtn= document.getElementById("resetbtn");
let count=0;

incrbtn.onclick=function(){
   count++;
   CounterLabel.textContent=count;
}
decrbtn.onclick=function(){
    count--;
    CounterLabel.textContent=count;
}
resetbtn.onclick=function(){
    count=0;
    CounterLabel.textContent=count;
}
 
 