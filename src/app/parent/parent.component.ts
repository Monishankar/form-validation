import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  register    : FormGroup;
  fName       : FormControlName;
  lName       : FormControlName;
  gender      : FormControlName;
  contact     : FormControlName;
  address     : FormControlName;
  age         : FormControlName;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  finame : any = this.fName;
  laname : any = this.lName;

  constructor(private router : Router) {  }

  ngOnInit() {

    this.register = new FormGroup({
      fName:   new FormControl('',[Validators.required]),
      lName:   new FormControl('',[Validators.required]),
      gender:  new FormControl('',[Validators.required]),
      contact: new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.required]),
      // age:     new FormControl('',[Validators.required]),
    })
  }
  toNext() {
  this.router.navigate(['/child']);
  }

}