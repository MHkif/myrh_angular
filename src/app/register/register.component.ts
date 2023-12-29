import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor() {}

  form = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.form.value);
  }
}
