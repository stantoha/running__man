   let humans = document.querySelectorAll('.human');
   let i = -1;
   let j = Number;

   function humanHide() {
       humans.forEach(item => {
           item.classList.add('hide');
       });
   }

   humanHide();

   let showHuman = function () {
       i++;
       if (i >= 0 && i < humans.length) {
           if (humans[i].classList.contains('hide')) {
               humans[i].classList.remove('hide');
               humans[i].classList.add('fade');
           }
       } else {
           if (i === humans.length) {
               i = 0;
               showHuman();
           }
       }


       setTimeout(showHuman, 2000);

   };
   setTimeout(showHuman, 2000);


   let rpgHuman=document.querySelector('.rpg__human'),
   head=rpgHuman.querySelector('.head'),
   neck=rpgHuman.querySelector('.neck'),
   hand=rpgHuman.querySelector('.hand'),
   leg=rpgHuman.querySelector('.leg'),
   rightHandBottom=rpgHuman.querySelector('.right .hand__section__bottom'),
   leftHandBottom=rpgHuman.querySelector('.left .hand__section__bottom'),
   leftLegTop=rpgHuman.querySelector('.left .leg__section__top'),
   rightLegTop=rpgHuman.querySelector('.right .leg__section__top'),
   rightLegBottom=rpgHuman.querySelector('.right .leg__section__bottom'),
   leftLegBottom=rpgHuman.querySelector('.left .leg__section__bottom'),
   rightKnee=rpgHuman.querySelector('.right .knee'),
   leftKnee=rpgHuman.querySelector('.left .knee'),
   chest=rpgHuman.querySelector('.chest'),
   hips=rpgHuman.querySelector('.hips'),
   footLeft=rpgHuman.querySelector('.rpg__human .left .foot'),
   footRight=rpgHuman.querySelector('.rpg__human .right .foot'),
   rocket=rpgHuman.querySelector('.rocket'),
   klasses=['rpg__right__hand__skew','left__leg__section__bottom','right__leg__section__bottom',
   'right__knee','right__leg__section__top','rpg__foot','rpg__human__body'];

   let  changePos=function(item,j){
    if(showHuman){
   item.classList.add(klasses[j]);
    }
   } 
   
   let changeBodyPos=function(){
    changePos(rightHandBottom,0);
    changePos(leftLegBottom,1);
    changePos(rightLegBottom,2);
    changePos(rightKnee,3);
    changePos(rightLegTop,4);
    changePos(footLeft,5);
    changePos(footRight,5);
    changePos(rpgHuman,6);
   }


   let launch=setTimeout(changeBodyPos,6500);
   

   let rocketLaunch=function(){
       launch;
       rocket.classList.remove('rocket');
       rocket.classList.add('rocket__launch');
   }


   setTimeout(rocketLaunch,8000) ;





