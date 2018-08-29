import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
   students=[
     {
    name: "Shankar",
    address:"XYZ street",
    tele:15174654512,

   },
   {
    name: "Ehsaan",
    address:"ABC street",
    tele:15174694512,

   },
   {
    name: "Loy",
    address:"WGEF street",
    tele:15171654512,

   },
   {
    name: "Simba",
    address:"XYZ-12 street",
    tele:15174654510,

   },
   {
    name: "Sham",
    address:"YZ street",
    tele:15174654412,

   }];
  constructor() { }
  get(){
    return this.students;
  }
  add(student){
   this.students.push(student);

  }
  delete(student){
    let index = this.students.indexOf(student);
    if(index>=0)
     {
    this.students.splice(index,1);
     }
 
   }
}
