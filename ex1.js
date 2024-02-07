var myArray = [];
function addTask(task) {
    var length;
    var count = 0;
    //Pushes value to array 'myArray'
    length = myArray.push(task);
    console.log(task + " has been added to the array");
    //Tracks the number of elements in the array
    myArray.forEach(function (value) {
        count++;
    });
    console.log("There are " + count + " elements in the array\n");
    return length;
}
function listAllTasks() {
    //Prints out each element of array
    myArray.forEach(function (task) {
        console.log(task);
    });
}
function deleteTask(task) {
    //Starts off at index 1
    var index = myArray.indexOf(task, 0);
    //Checks to see if value exists in array
    if (index > -1) {
        myArray.splice(index, 1);
        console.log(task + " has been deleted");
    }
    //If it doesnt:
    else {
        console.log("Item not found");
    }
    return myArray.length;
}
addTask("Eat Lunch");
listAllTasks();
deleteTask("Go shopping");
deleteTask("Eat Lunch");
