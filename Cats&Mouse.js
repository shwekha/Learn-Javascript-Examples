function catsAndMouse(catA, catB, mouseC){
    var differenceCatAMouseC = Math.abs(catA-mouseC);
    var differenceCatBMouseC = Math.abs(catB-mouseC);
    
    if (differenceCatAMouseC < differenceCatBMouseC){
        return "Cat A"
    }
    else if(differenceCatAMouseC > differenceCatBMouseC){
        return "Cat B";
    }else{
        return "Mouse C";
    }
}

const whoCatchFirst = catsAndMouse(3, 5, 7);
console.log(whoCatchFirst);