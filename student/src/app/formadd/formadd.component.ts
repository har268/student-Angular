import { Component, OnInit } from '@angular/core';
import {OperationService} from '../operation.service';
import {FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-formadd',
  templateUrl: './formadd.component.html',
  styleUrls: ['./formadd.component.css']
})
export class FormaddComponent implements OnInit {
 form;
 students;
  constructor(private operand: OperationService,private formbuilder:FormBuilder) {
    this.form=this.formbuilder.group({
      name: this.formbuilder.control(''),
      address:this.formbuilder.control(''),
      tele:this.formbuilder.control('')

    });
   }
   OnSubmit(student){
     this.operand.add(student);
   }

  ngOnInit() {
  }

}
