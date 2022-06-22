let students = [
    {
        name: "David Ray",
        mark: 12,
    },
    {
        name: "Nyan Ray",
        mark: 1,
    },
    {
        name: "Ko Ray",
        mark: 2,
    },
    {
        name: "Lin Ray",
        mark: 40,
    },
    {
        name: "Tin Ray",
        mark: 90,
    },
    {
        name: "Deok Ray",
        mark: 1,
    },
    {
        name: "Koooo Ray",
        mark: 100,
    },

]

function findTopStudentName(arr){
    let highestMark = 0;
    let highestStudentName = "";
    for(var i = 0; i<arr.length; i++){
        if(arr[i].mark > highestMark){
            highestMark = arr[i].mark;
            highestStudentName = arr[i].name;
        }
    }
    return highestStudentName;
}

const findTopStudent = findTopStudentName(students)
console.log(findTopStudent)