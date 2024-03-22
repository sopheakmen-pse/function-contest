let x = score(94);

function score(number){
    if(number<=50){
        document.getElementById('score').innerHTML = 'E';
    }else  if(number<=69){
        document.getElementById('score').innerHTML = 'D';
    }else  if(number<=79){
        document.getElementById('score').innerHTML = 'C';
    }else  if(number<=89){
        document.getElementById('score').innerHTML = 'B';
    }else  if(number>=90){
        document.getElementById('score').innerHTML = 'A';
    }
    return number;
}



