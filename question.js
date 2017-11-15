'use strict';

class Question {
  constructor(content) {
    this.content = content;
    this.save;
  }
  save () {
    
  }
  static All() {
    return this._All;
  }
}

Question._All = [];




//
// function save(){
//     this.constructor._All.push(this)
//   }
//
// function All(){
//     this.constructor._All.push(this);
// }
//
// Question._All = [];
