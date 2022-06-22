function catsAndMouse(x, y, z){
    var a = Math.abs(x-z);
    var b = Math.abs(y-z);

    if(a === b){
        return "Mouse C"
    }
    else if (a < b){
        return "Cat A"
    }
    else if(a > b){
        return "Cat B";
    }else{
        return "Error";
    }
}

const whoCatchFirst = catsAndMouse(3, 5, 7);
console.log(whoCatchFirst);