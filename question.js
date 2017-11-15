'use strict';

class Question {
  constructor() {
    this.constructor._All.push(this);
    this.save();

  }

save(){
    this.constructor._All.push(this)
  }


Question._All = [];
