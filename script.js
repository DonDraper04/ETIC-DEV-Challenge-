
const plus=document.querySelector(".plus")
const moins = document.querySelector(".moins")
const COMPTE= document.querySelector(".Compte")
const commander=document.querySelectorAll(".commande")
let compte = 1;
const PRIX =document.querySelector(".prix")
const PRIXT =document.querySelector(".prixT")
const PRIXOR =document.querySelector(".prixOR")

plus.addEventListener('click',(e)=>{
    e.preventDefault();
    compte=compte+1;
    COMPTE.innerText=`${compte}`;
    PRIX.innerText=`${compte}`*750 + " DZD";
    PRIXT.innerText=`${compte}`*750+2050 + " DZD";
    PRIXOR.innerText=((`${compte}`*750)/0.47).toFixed(2) + " DZD"

})

moins.addEventListener('click',(e)=>{
    e.preventDefault();
    if (compte===0){}
    else{
    compte=compte-1;
    COMPTE.innerText=`${compte}`;}
    PRIX.innerText=`${compte}`*750 + " DZD";
    PRIXOR.innerText=((`${compte}`*750)/0.47).toFixed(2) + " DZD"
    PRIXT.innerText=(`${compte}`*750+2050) + " DZD";
})

commander.forEach((aj)=>{aj.addEventListener('click',(e)=>{
    e.preventDefault();
    compte=0;
    COMPTE.innerText=`${compte}`;
    PRIX.innerText=`${compte}`*750 + " DZD";
    PRIXT.innerText=`${compte}`*750+2050 + " DZD";
    PRIXOR.innerText=((`${compte}`*750)/0.47).toFixed(2) + " DZD"
})})

