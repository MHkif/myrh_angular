import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-candidat-register',
  templateUrl: './candidat-register.component.html',
  styleUrls: ['./candidat-register.component.css']
})
export class CandidatRegisterComponent {
  signUpForm!: FormGroup;
  name_Error: any;
  email_Error: any;
  password_Error: any;
  confirm_pass_Error: any;

  onSubmit() {
    console.log(this.signUpForm.value)
  }
}
