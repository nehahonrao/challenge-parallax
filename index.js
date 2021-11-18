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
    }  
}

}, 1000);


