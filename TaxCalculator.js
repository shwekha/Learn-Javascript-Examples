function selfRelief(yearlyIncome){
    return yearlyIncome * 20/100;
}

function parentRelief(numberOfParent){
    if(numberOfParent >= 0 && numberOfParent <=2){
        return numberOfParent * 1000000;
    }
}

function marriedRelief(isMarried, numberOfChildren){
    let result = 0;
    if(isMarried === true){
        result = result + 1000000 + numberOfChildren * 500000;
    }else{
        numberOfChildren = 0;
    }
    return result;
}

function TotalRelief(yearlyIncome,numberOfParent,isMarried,numberOfChildren){
    const self = selfRelief(yearlyIncome);
    const parent = parentRelief(numberOfParent);
    const married = marriedRelief(isMarried,numberOfChildren);
    return yearlyIncome - (self + parent + married);
}

const total = TotalRelief(30000000,0,false,2);
console.log("Total Relief: " + total);

let taxAmount = 0

if(total > 0 && total <= 2000000){
    taxAmount= 0;
}else if(total > 2000000 && total <= 5000000){
    taxAmount = taxAmount + (total-2000000) * 5/100;
}else if(total > 5000000 && total <= 10000000){
    taxAmount = taxAmount + (3000000 * 5/100) + (total-5000000) * 10/100;
}else if(total > 10000000 && total <= 20000000){
    taxAmount = taxAmount + (3000000 * 5/100) + (5000000 * 10/100) + (total-10000000) * 15/100;
}else if(total > 20000000 && total <= 30000000){
    taxAmount = taxAmount + (3000000 * 5/100) + (5000000 * 10/100) + (10000000 * 15/100) +(total-20000000) * 20/100;
}else{
    taxAmount = taxAmount + (3000000 * 5/100) + (5000000 * 10/100) + (10000000 * 15/100) + (10000000 * 20/100) +
    (total-30000000) * 25/100;
}

console.log("YearlyTax is : " + taxAmount);
const monthlyTax = taxAmount/12;
console.log("MonthlyTax is : " + monthlyTax)

