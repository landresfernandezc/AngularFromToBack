import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  //Properties
  firstName: string;
  lastName: string;
  age: number;
  address;
  foo:any;
  hasKids:boolean;
  numberArray:number[];
  stringArray:string[];
  mixedArray:any[];
  tupleArray:[string,boolean,number];
  unusable:void;
  u:undefined;
  n:null;
  //Methods
  constructor() {
    this.firstName = 'Andres';
    this.lastName = 'Fernandez';
    this.age = 26;
    this.address = {
      street: 'Second right street 50 meters North',
      city: 'Alajuela',
      state: 'San Ramon',
    };
    this.hasKids=false;
    this.numberArray=[1,2,3];
    this.stringArray=['Hello','World']
    this.mixedArray=[1,2,3,'4'];
    this.tupleArray=['1',false,3];
    this.unusable=undefined;
    this.u=undefined;
    this.n=null;
    this.addNumbers(2,4)
  }
  sayHello() {
    console.log(`Hello this is ${this.firstName}`);
  }
  getAge() {
    return this.age + 1;
  }
  hasBirthday() {
    this.age += 1;
  }
  addNumbers(num1:number,num2:number):number{
    return num1+num2;
  }
}
