let card =document.querySelectorAll(".card");
let back =document.querySelectorAll(".back");
let front =document.querySelectorAll(".front");

let img = document.querySelectorAll('img');
for(let i of img){
    i.addEventListener('dragstart', function(event) {
        event.preventDefault();
    });
};


for(let i=0;i<back.length;i++){
   back[i].addEventListener('click',function(){
        back[i].style.transform = 'rotateX(180deg)';
        front[i].style.transform = 'rotateX(360deg)';
    });
};
for(let i=0;i<front.length;i++){
    front[i].addEventListener('click',function(){
         back[i].style.transform = 'rotateX(0deg)';
         front[i].style.transform = 'rotateX(180deg)';
     });
 };

