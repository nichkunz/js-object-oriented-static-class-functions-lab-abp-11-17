'use strict';

class Question {
  constructor() {
    this.save();
  }  
}

let save(){
    this.constructor._All.push(this)
  }

static All(){
    this.constructor._All.push(this);
}

Question._All = [];
