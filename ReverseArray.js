let Array = [1,3,2,6,9,1,100,122,122,100,3];

//Way 1
function ReverseArray(arr){
    let reverse = [];

    for(i = arr.length - 1 ; i >= 0 ; i--){
        reverse.push(arr[i]);
    }
    return reverse;
}

const result = ReverseArray(Array);
console.log(result);

//Way 2
let toReverse = Array.reverse();
console.log("Reversed Array is : " + toReverse);