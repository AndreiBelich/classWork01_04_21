"use strict";

function Student(firstName, lastName, age, isMale){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isMale = isMale;
}

function StudentPrototype(){
  this.toString = function(){
    return `${this.firstName} ${this.lastName}. I'm ${this.age} years old.`;
  }

  this.say = function(message){
    return `Студент ${this.firstName} говорит:\n${message}`;
  }
}

Student.prototype = new StudentPrototype();

const student = new Student("Alex", "Adams", 27, true);
console.log(student.say("Hello world<3"));