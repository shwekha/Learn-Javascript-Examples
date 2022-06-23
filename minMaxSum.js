let array = [1, 2, 3, 4, 5];

function findMinMaxSum(arr){
    let max = arr[0];
    let min = arr[0];
    let sumValue = 0;

    for (let i=0; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
        if(min > arr[i]){
            min = arr[i];
        }
        sumValue += arr[i];   
    }
console.log(sumValue)
    // let maxSum = sumValue - min;
    // let minSum = sumValue - max;

    // console.log(maxSum);
    // console.log(minSum);
}
const result = findMinMaxSum(array);
console.log(result);
