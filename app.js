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

  
   buttons.forEach(function(button){
        button.addEventListener('click', function(event){
            let filter= event.target.value
            if(filter==='breakfast'){
                dishlist.forEach(function(dish){
                   if(dish.classList.contains('brk')){
                       dish.style.display='block'
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
    
     
    
   
//    buttons.forEach(function(button){
//        button.addEventListener('click', function(event){
//            let filter= event.target.value
//              if(filter==='all'){
//                carlist.forEach(function(dish){
//                    if(dish.classList.contains('')){
//                        car.style.display='block'
//                    }else{
//                        car.style.display='none'
//                    }
//                })
               
//              } 
//               if(filter==='breakfast'){
//                  dishlist.forEach(function(dish){
//                      if(dish.classList.contains('brk')){
//                          dish.style.display='inline' 
//                         console.log('yes')               
//                         } else{ 
//                            dish.style.display='none'
//                            alert('no') 
//                         }
//                  })
//              } else if(filter==='honda'){
//                  carlist.forEach(function(car){
//                      if(car.classList.contains('honda')){
//                          car.style.display='inline'
//                          car.style["-webkit-transform"]= "translate(0px, 0"
//                      }else{
//                          car.style.display='none'
//                      }
//                  })
//              }else if(filter==='toyota'){
//                carlist.forEach(function(car){
//                    if(car.classList.contains('toyo')){
//                        car.style.display='inline'
//                    }else{
//                        car.style.display='none'
//                    }
//                })
//            } else if(filter==='honda'){
//                carlist.forEach(function(car){
//                    if(car.classList.contains('honda')){
//                        car.style.display='inline'
                      
//                    }else{
//                        car.style.display='none'
//                    }
//                })
//            }   else if(filter==='benz'){
//                carlist.forEach(function(car){
//                    if(car.classList.contains('benz')){
//                        car.style.display='inline'
//                    }else{
//                        car.style.display='none'
//                    }
//                })
//            }   
                 
             
//        })
     
      
//    })
      