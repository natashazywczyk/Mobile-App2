export interface myInterface 
{
    myTasks: Array<string>;
    addTask(task:string):number;
    listAllTasks():void;
    deleteTask(task:string):number;
}

class myTasks implements myInterface
{
    constructor() 
    {
        //Calling functions
        /*this.addTask("Eat Lunch");
        this.listAllTasks();
        this.deleteTask("Go shopping");
        this.deleteTask("Eat Lunch"); */   
    }

    myTasks: Array<string> = [];
    addTask(task: string):number 
    {
        let length: number;
        let count: number = 0;

        length = this.myTasks.push(task);
        console.log(task + " has been added to array\n");

         //Tracks the number of elements in the array
        this.myTasks.forEach((value) => {
            count++;
        })

        console.log("There are " + count + " elements in the array");
        return length;
    }

    listAllTasks():void
    {
        this.myTasks.forEach((task) =>
        {
            console.log(task);
        })
    }

    deleteTask(task: string): number 
    {
        let count:number = 0;

        //Starts off at index 1
        let index = this.myTasks.indexOf(task, 0);

        //Checks to see if value exists in array
        if (index > -1) 
        {
            this.myTasks.splice(index, 1);
            console.log("\n" + task + " has been deleted");
        }
        //If it doesnt:
        else 
        {
            console.log("\n" + task + " was not found");
        }

         //Tracks the number of elements in the array
        this.myTasks.forEach((value) => {
            count++;
        })
        
        console.log("There are " + count + " elements in array");

        return this.myTasks.length;
    }

}

let callTasks = new myTasks();

callTasks.addTask("Eat Lunch");
callTasks.listAllTasks();
callTasks.deleteTask("Go Shopping");
callTasks.deleteTask("Eat Lunch");