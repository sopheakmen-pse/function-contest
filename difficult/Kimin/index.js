function studentsrank(rank) {
    if (rank <= 50) {
        return "E";
    } else if (rank <= 70) {
        return "D";
    } else if (rank <= 80) {
        return "C";
    } else if (rank <= 90) {
        return "B";
    } else if (rank <= 100) {
        return "A";
    }
}


console.log(studentsrank(50)); 
console.log(studentsrank(70)); 
console.log(studentsrank(80)); 
console.log(studentsrank(90)); 
console.log(studentsrank(100)); 




