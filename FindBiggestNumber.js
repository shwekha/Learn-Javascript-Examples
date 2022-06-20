let Array = [1,3,2,6,9,1,100,122,122,100,3];

function FindBiggestNumber(arr){
    let biggest = arr[0];

    for(var i = 0; i<arr.length; i++){
        if(biggest < arr[i]){
            biggest = arr[i];
        }
    }
    return biggest;
}

const BiggestNumber = FindBiggestNumber(Array);
console.log("Biggest Number is " + BiggestNumber);

