let seconds=document.querySelector('#counter').textContent;
let gamestarter=document.querySelector('.game-starter');
let discloud=document.querySelector('.distantcloud');
let cloud=document.querySelector('.cloud');
let hill=document.querySelector('.hill');
let distrees=document.querySelector('.distantTrees');
let bushes=document.querySelector('.bushes');
let trees=document.querySelector('.trees');
let ground=document.querySelector('.ground');
let idle=document.querySelector('.idle');
let obstacle=document.querySelector('.obstacle');
let gameover=document.querySelector('.gameover');
let groundbushes=document.querySelector('.groundbushes');

// The initial block to alert about game start

let countdown=setInterval(() => {
    seconds--;
    document.querySelector('#counter').textContent=seconds;
    if(seconds<=0)
    {
     gamestarter.remove();
     discloud.classList.add('cloudanimation');
     cloud.classList.add('cloudani');
     hill.classList.add('hillani');
     distrees.classList.add('distanttreeani');
     trees.classList.add('treeani');
     bushes.classList.add('bushesani');
     ground.classList.add('groundani');
     obstacle.classList.add('obstacleani');
    //  idle.classList.add('idleani');
     groundbushes.classList.add('groundbushesani');
    
// arrow key press then jump

        document.onkeydown =function(e){
        console.log("key is ",e.keyCode);
        if(e.keyCode==38){
         idle.classList.add('idlejumpani');
             setTimeout(() => {
            idle.classList.remove('idlejumpani');    
            }, 700);
        }
        if(e.keyCode==39){
            iX=parseInt(window.getComputedStyle(idle,null).getPropertyValue('left'));
            idle.style.left= iX + 112 +"px";
        }
        if(e.keyCode==37){
            iX=parseInt(window.getComputedStyle(idle,null).getPropertyValue('left'));
            idle.style.left= iX - 112 +"px";
        }
    }  

setInterval(() => {
    dx=parseInt(window.getComputedStyle(idle,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(idle,null).getPropertyValue('right'));

    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('right'));

offsetX=Math.abs(dx-ox);
offsetY=Math.abs(dy-oy);
console.log(offsetX,offsetY)
if(offsetX<500 && offsetY<1000){
    gameover.style.visibility='visible';
    obstacle.classList.remove('obstacleani');
}

}, 100);

}

}, 1000);





