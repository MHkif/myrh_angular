import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Offer } from 'src/app/model/offer.model';
import { OfferService } from 'src/app/service/offer.service';
import { AppState } from '../../store/state/app.state';

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.css'],
})
export class OfferFormComponent implements OnInit {
  offerForm!: FormGroup;
  showModal!: boolean;

  constructor(
    private builder: FormBuilder,
    private offerService: OfferService,
    private store: Store<AppState>
  ) {}
  ngOnInit(): void {
    this.showModal = false;
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
    });
  }
  // uploadFile(event: any) {
  //   this.offerForm.value.image = event.target.files[0];
  //   console.log(this.offerForm.value.image);
  //   console.log(typeof this.offerForm.value.image);
  // }
  onSubmit() {
    let offer: Offer = {
      id: 0,
      title: this.offerForm.value.title,
      description: this.offerForm.value.description,
      company: {
        id: 1,
      },
      profile: {
        id: this.offerForm.value.domaine,
      },

      city: {
        id: this.offerForm.value.city,
      },

      level: this.offerForm.value.level,
      status: this.offerForm.value.status,
      salary: 1200,
    };
    if (this.offerForm.valid) {
      this.offerService.save(offer).subscribe({
        next: (res: Offer) => {
          alert(JSON.stringify(res));
        },
        error: (err: any) => {
          console.error('Error : ', err.error);
          this.showModal = true;
        },
      });
    } else {
      alert('not submitted');
    }
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }
}
