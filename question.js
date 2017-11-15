'use strict';

class Question {
  constructor() {
    this.constructor._All.push(this)
    this.save();
  }
}

function save(){
    this.constructor._All.push(this)
  }

// Static All(){
//     this.constructor._All.push(this);
// }

Question._All = [];
