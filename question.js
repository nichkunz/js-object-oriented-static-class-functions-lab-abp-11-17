'use strict';

class Question {
  constructor(content) {
    this.content = content;
    this.save();
  }
  save() {
    this.constructor._All.push(this);
  }
  static All() {
    return this._All;
  }
  static Find(id){
    this.All()[id - 1];
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
