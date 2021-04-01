var man = document.querySelector('.man');
var html = document.querySelector('html');
var movingbox = document.querySelector('.rock');






//man jump

html.addEventListener('click',function(e){
    man.style.bottom='60px';
    man.style.transition ='.55s ease-out all';
    setTimeout(function(){
        man.style.bottom='0px';
    },750);
    e.preventdefault;
})



function move(who,fast){

    who.style.right='10px';
        var moves = -50;

        setInterval(function(){
            moves+=1;
            who.style.right = `${moves}px`;
            if(moves==600){
                moves=-50;
                
                
            }
            
            
        },fast);
        
        
}



               


move(movingbox,1);






