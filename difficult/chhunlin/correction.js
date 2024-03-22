function score(x,y,z){
    let grade = 0;
    if(x === 2){
        grade++;
    }
    if(y === 4){
        grade++;
    }
    if(z === "green"){
        grade++;
    }
    return grade;
    
}
console.log(score(1,4,'green'));
