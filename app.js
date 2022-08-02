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
    
      details= [ {
        id:1,
        name: 'Sarah Jones',

        image: 'adora.jpg' ,
        desc: 'The food is amazing and i really enjoyed dinner with my date',
    },
    
        {
    
        id: 2,
        name: 'Susan Smith',
        image: 'princess.jpg' ,
        desc: ' The customer service was on point unlike most places you visit, i am surely coming back here again',
    },
       {
        id: 3,
        name: 'Andrew James',
        image: 'marvin.jpg',
        desc: 'The delivery was efficient even though it was slow, they came through nevertheless and apologized for the delay and i think thats professional'
    
    },
    {
        id: 4,
        name: 'Great Smart',
        image: 'prosper.jpg',
        desc: ' I didnt like the food because they didnt have the vegan option but the booking was easy and the restaurant was classy '
    
    },

    ]
        
    
    let image= document.querySelector('.customer');
    let called=document.querySelector('.name');
    let desc= document.querySelector('.review')
    
    let prev=document.getElementById("previous");
    let next= document.getElementById("next");
    
    
    let currentItem=0;
    
    next.addEventListener("click", function showPerson(){
        let item= details[currentItem]
        console.log(item)
        image.src=details[currentItem].image;
        called.innerHTML= details[currentItem].name;
        Job.textContent= details[currentItem].Job;
        desc.textContent= details[currentItem].desc
        
    })
    // Now we need to make other imags show
    
    next.addEventListener("click", function showPerson(){
        currentItem++
        if (currentItem> details.length-1){
            currentItem=0
        }
        
    })
    
    prev.addEventListener("click", function showPerson (){
        let item= details[currentItem]
        console.log(item)
        image.src=details[currentItem].image;
        called.innerHTML= details[currentItem].name;
        desc.textContent= details[currentItem].desc;
        
        
    })
    
    prev.addEventListener("click", function showPerson(){
        currentItem--
        if (currentItem< 0){
            currentItem= details.length-1
        }
        
    })
   
