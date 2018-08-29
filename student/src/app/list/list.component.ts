import { Component, OnInit } from '@angular/core';
import {OperationService} from "../operation.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
students;
  constructor(private operand: OperationService) { }

   
 
 
  ngOnInit() {
   this.students= this.operand.get();
  }
  remove(student){
    this.operand.delete(student);

  }

}
