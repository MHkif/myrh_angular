import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.css'],
})
export class OfferFormComponent implements OnInit {
  offerForm!: FormGroup;
  constructor(private builder: FormBuilder) {}
  ngOnInit(): void {
    this.offerForm = this.builder.group({
      category: this.builder.control(
        '',
        Validators.compose([Validators.required])
      ),
      entreprise: this.builder.control(
        '',
        Validators.compose([Validators.required])
      ),
      salary: this.builder.control(
        '',
        Validators.compose([Validators.required])
      ),
      contrat: this.builder.control(
        '',
        Validators.compose([Validators.required])
      ),
      city: this.builder.control('', Validators.compose([Validators.required])),
      level: this.builder.control(
        '',
        Validators.compose([Validators.required])
      ),
      domaine: this.builder.control(
        '',
        Validators.compose([Validators.required])
      ),
      title: this.builder.control(
        '',
        Validators.compose([Validators.required])
      ),
      description: this.builder.control(
        '',
        Validators.compose([Validators.required])
      ),
      first_name: this.builder.control(
        '',
        Validators.compose([Validators.required])
      ),
      last_name: this.builder.control(
        '',
        Validators.compose([Validators.required])
      ),
      status_publisher: this.builder.control(
        '',
        Validators.compose([Validators.required])
      ),
      email: this.builder.control(
        '',
        Validators.compose([Validators.required])
      ),
      telephone: this.builder.control(
        '',
        Validators.compose([Validators.required])
      ),
      image: this.builder.control(
        '',
        Validators.compose([Validators.required])
      ),
    });
  }
  onSubmit() {
    console.log(this.offerForm.value);
  }
}
