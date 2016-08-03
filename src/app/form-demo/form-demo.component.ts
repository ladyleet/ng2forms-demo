import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Submissions } from './submissions.model';

@Component({
  selector: 'app-form-demo',
  templateUrl: 'form-demo.component.html',
  styleUrls: ['form-demo.component.css']
})
export class FormDemoComponent implements OnInit {

  submissions: Submissions = { firstName: '', lastName: '', email: '' };

  constructor() { }

  ngOnInit() {
  }

  submitForm(myForm:NgForm) {
    alert(JSON.stringify(myForm.value));
  }

}
