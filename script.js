/* window.addEventListener('DOMContentLoaded',{ */


    let humans=document.querySelectorAll('.human');

humans.forEach(item=>{
    item.classList.add('hide');
});
let showHuman=function(){
    for(let i=0;i<humans.length;i++){
        humans[i].classList.remove('hide');
    } 
};
let timerId=setTimeout(
   showHuman(),5000
);




/* }); */