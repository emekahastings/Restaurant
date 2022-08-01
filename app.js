let x= document.querySelector('.x')
let menu= document.querySelector('.menu')
let ham= document.getElementById('ham')

ham.addEventListener('click', function openslide(){
    
    menu.style.width= '250px'
    
 })
   function close(event){
       event.preventDefault()
       menu.style.width= '0px'
   }
   x.addEventListener('click', close)
 
   let buttons= document.querySelectorAll('.hi')
   let collection= document.getElementById('collection')
   let dishlist= document.querySelectorAll('.first')
   let resize= document.getElementById('resize')

  
   buttons.forEach(function(button){
        button.addEventListener('click', function(event){
            let filter= event.target.value
            if(filter==='breakfast'){
                dishlist.forEach(function(dish){
                   if(dish.classList.contains('brk')){
                       dish.style.display='block'
                       resize.style.display='flex'
                   }else{
                       dish.style.display='none'
                   }}
               )}

               if(filter==='all'){
                dishlist.forEach(function(dish){
                   if(dish.classList.contains('first')){
                       dish.style.display='block'
                       
                   }else{
                       dish.style.display='none'
                   }}
               )}

               if(filter==='dinner'){
                dishlist.forEach(function(dish){
                   if(dish.classList.contains('dinner')){
                       dish.style.display='block'
                       
                   }else{
                       dish.style.display='none'
                   }}
               )}

               if(filter==='lunch'){
                dishlist.forEach(function(dish){
                   if(dish.classList.contains('lunch')){
                       dish.style.display='block'
                   }else{
                       dish.style.display='none'
                   }}
               )}
           
        })
      })
    
let hrs= document.querySelector('.hrs')     
let mins= document.querySelector('.mins') 
let secs= document.querySelector('.secs') 

function getTime(){
    let time= new Date
    let hours= time.getHours()
    console.log(hours)
    let minutes= time.getMinutes()
    let seconds= time.getSeconds()

    hrs.innerHTML= hours +":"
    mins.innerHTML= minutes + ":"
    secs.innerHTML=seconds
    
}
getTime()
    
   
