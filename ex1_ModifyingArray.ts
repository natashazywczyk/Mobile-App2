let myArray: string[] = [];

function addTask(task: string): number {
    let length: number;
    let count: number = 0;

    //Pushes value to array 'myArray'
    length = myArray.push(task);
    console.log(task + " has been added to the array");

    //Tracks the number of elements in the array
    myArray.forEach((value) => {
        count++;
    })

    console.log("There are " + count + " elements in the array\n");

    return length;
}

function listAllTasks(): void {
    //Prints out each element of array
    myArray.forEach((task) => {
        console.log(task);
    })
}

function deleteTask(task: string): number 
{
    //Starts off at index 1
    let index = myArray.indexOf(task, 0);

    //Checks to see if value exists in array
    if (index > -1) 
    {
        myArray.splice(index, 1);
        console.log(task + " has been deleted");
    }
    //If it doesnt:
    else 
    {
        console.log("Item not found");
    }

    return myArray.length;
}

//Calling functions
addTask("Eat Lunch");
listAllTasks();
deleteTask("Go shopping");
deleteTask("Eat Lunch");