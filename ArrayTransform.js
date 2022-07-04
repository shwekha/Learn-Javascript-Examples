let personList = [
        "Adam",
        "Alex",
        "Aaron",
        "Ben",
        "Carl",
        "Dan",
        "David",
        "Edward",
        "Fred",
        "Frank",
        "George",
        "Hal",
        "Hank",
        "Ike",
        "John",
        "Jack",
        "Joe",
        "Larry",
        "Monte",
        "Matthew",
        "Mark",
        "Nathan",
        "Otto",
        "Paul",
        "Peter",
        "Roger",
        "Roger",
        "Steve",
        "Thomas",
        "Tim",
        "Ty",
        "Victor",
        "Walter",
    ];
    
const arrayTransform = (arr,name) => {
    return arr.map((value) => {
        let newObj = {};
        if(value === name){
            newObj['name'] = value;
            newObj['check'] = true;
        }
        else{
            newObj['name'] = value;
            newObj['check'] = false;
        }
        return newObj;
    });
    
}

const transformArray = arrayTransform(personList,"Walter");
console.log(transformArray);