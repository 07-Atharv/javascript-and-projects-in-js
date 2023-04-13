console.log("call back concept in java script");
// These response is coming from server
const students = [
    {
        name: "Atharv",
        subject: "Python"
    },
    {
        name: "Max",
        subject: "PHP"
    }
]
// call back is function inside function 
// after all the operation then call back is called
// enrl stdnt has been holded the call back until he student is pushed
function enrollFunction(student) {
    // background run function
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            let error = true;
            students.push(student);
            console.log("Students have been enrolled");
            if (!error) {
                resolve();
            }
            else {
                reject();
            }
            // after 3000 the push oprn will be performed
        }, 5000);
    })
}
function getStudents() {
    setTimeout(() => {
        let str = "";
        students.forEach(function (element) {
            let abc = `${element.name}`;
            console.log(abc);
            console.log("Students have been fetched");
        }, 1000);
    });
}
let newStudent =
{
    name: "John", subject: "Python"
};
enrollFunction(newStudent).then(function () { getStudents() }).catch(function () { console.log("Error 404") });
getStudents();


// callback is a function which can be passed as an argument to another function , which then invoked outer function to complete somw kind of routine or action