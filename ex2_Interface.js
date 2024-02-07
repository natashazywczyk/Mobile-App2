"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myTasks = /** @class */ (function () {
    function myTasks() {
        this.myTasks = [];
        //Calling functions
        /*this.addTask("Eat Lunch");
        this.listAllTasks();
        this.deleteTask("Go shopping");
        this.deleteTask("Eat Lunch"); */
    }
    myTasks.prototype.addTask = function (task) {
        var length;
        var count = 0;
        length = this.myTasks.push(task);
        console.log(task + " has been added to array\n");
        //Tracks the number of elements in the array
        this.myTasks.forEach(function (value) {
            count++;
        });
        console.log("There are " + count + " elements in the array");
        return length;
    };
    myTasks.prototype.listAllTasks = function () {
        this.myTasks.forEach(function (task) {
            console.log(task);
        });
    };
    myTasks.prototype.deleteTask = function (task) {
        var count = 0;
        //Starts off at index 1
        var index = this.myTasks.indexOf(task, 0);
        //Checks to see if value exists in array
        if (index > -1) {
            this.myTasks.splice(index, 1);
            console.log("\n" + task + " has been deleted");
        }
        //If it doesnt:
        else {
            console.log("\n" + task + " was not found");
        }
        //Tracks the number of elements in the array
        this.myTasks.forEach(function (value) {
            count++;
        });
        console.log("There are " + count + " elements in array");
        return this.myTasks.length;
    };
    return myTasks;
}());
var callTasks = new myTasks();
callTasks.addTask("Eat Lunch");
callTasks.listAllTasks();
callTasks.deleteTask("Go Shopping");
callTasks.deleteTask("Eat Lunch");
