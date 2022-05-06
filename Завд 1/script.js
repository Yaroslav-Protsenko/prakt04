let currentColor = document.querySelector("#currentColor");
currentColor.textContent = 'black';
palitra.addEventListener('click',function(event){
    
    currentColor.innerHTML = event.target.getAttribute('id');
    currentColor.style.background = currentColor.textContent;
    currentColor.style.color = "beige";
});

polotno.addEventListener('click',function(event){
    
    event.target.style.background = currentColor.textContent;
});
