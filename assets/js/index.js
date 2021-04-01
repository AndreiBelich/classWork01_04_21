"use strict";

function Ladder(){
  this.value = 0;
}

function LadderPrototype(){
  this.up = function(){
    this.value++;
    return this;
  }

  this.down = function(){
    if(this.value > 0){
      this.value--;
    }
    return this;
  }

  this.showStep = function(){
    return this.value;
  }
}

Ladder.prototype = new LadderPrototype();

const ladder = new Ladder();
ladder.up()
      .up()
      .up()
      .down()
      .showStep();