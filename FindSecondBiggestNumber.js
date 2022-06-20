let Array = [1,3,2,6,9,1,100,122,122,100,3];

function FindSecondBiggestNumber(arr){
    let biggestNumber = 0;
    let secondBiggestNumber = -1;

    for(let value of arr){
        if(value > biggestNumber){
            biggestNumber = value;
        }else if(value<biggestNumber && value>secondBiggestNumber){
            secondBiggestNumber = value;
        }
    }
    return secondBiggestNumber;
}

const SBN = FindSecondBiggestNumber(Array);
console.log("Second Biggest Number : " + SBN);