import { Component, OnInit } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl,
  FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formlist',
  templateUrl: './formlist.component.html',
  styleUrls: ['./formlist.component.css']
})
export class FormlistComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder)
  { }

  ngOnInit() {
    this.myForm = this.fb.group({
    url:[],
    items: this.fb.array(
       [this.buildItem('aaa'), this.buildItem('')]
       )
   });
  }
    buildItem(val: string) {
      return new FormGroup({
        name: new FormControl(val, Validators.required),
        quantity: new FormControl(100)
      })
    }

submit() {
    console.log("Reactive Form submitted: ", this.myForm.value);
  }
}
