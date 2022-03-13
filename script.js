   let humans=document.querySelectorAll('.human');
    let  i=-1;
    
    function humanHide(){
        humans.forEach(item=>{
            item.classList.add('hide');
        });
    }

    humanHide();

let showHuman=function(){
    i++;
    if(i>=0 && i<humans.length){
        if(humans[i].classList.contains('hide')){
            humans[i].classList.remove('hide'); 
            humans[i].classList.add('fade'); 
    }
    }
    else{
        if(i===humans.length){
            i=0;
            showHuman();
        }
    }
    
   
    setTimeout(showHuman,2000);

};
setTimeout(showHuman,2000);



/* 
const myFunction = () => {
    showHuman();
    setTimeout(myFunction, 1000);
  };
  setTimeout(myFunction(), 1000); */