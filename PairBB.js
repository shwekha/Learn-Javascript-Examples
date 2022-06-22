let choArray = [1,3,2,4,5,3,2,2];

//Way 1
function birthdayBar(arr, pairValue, PairCount){
    for(let i = 0; i<= arr.length; i++){
        addValue = arr[i];
        if(i + (PairCount - 1) < arr.length){
            for(let j=1 ; j < PairCount; j++){
                addValue += arr[i + j];
            }
        }
        if(addValue === pairValue){
            PairCount += 1;
        }
    }
    return PairCount;

}

const result = birthdayBar(choArray, 4, 2);
console.log(result);

//Way 2

function birthdayBar(arr, pairValue, PairCount){
    let result = 0;
    for(let index = 0; index <= arr.length; index++){
        let value = arr[i];
        if(index + (PairCount - 1) < arr.length){
            for(let i=1 ; i < PairCount; i++){
                let nextIndex = index + i;
                value += arr[nextIndex];
            }
        }
        if(value === pairValue){
            result++;
        }
    }
    return result;
}
const resultPair = birthdayBar(choArray, 4, 2);
console.log(resultPair);