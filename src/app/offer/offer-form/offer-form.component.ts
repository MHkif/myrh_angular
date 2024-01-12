
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Offer} from 'src/app/model/offer.model';
import {OfferService} from 'src/app/service/offer.service';

import {CompanySubscriptionServiceService} from "../../service/company/company-subscription-service.service";
import {CompanySubscribeRequest, SubscriptionStatus} from "../../model/company.model";
import {ToastService} from "angular-toastify";
import {AppState} from "../../store/state/app.state";

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.css'],
})
export class OfferFormComponent implements OnInit {
  offerForm!: FormGroup;
  showModal: boolean = false;
  companyAuth:any;

  constructor(
    private builder: FormBuilder,
    private offerService: OfferService,
    private store: Store<AppState>,
    private companySubscriptionServiceService:CompanySubscriptionServiceService,
    private _toastService: ToastService
  ) {
  }

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
    // this.companyAuth.id = 1;
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
          // alert(JSON.stringify(res));
          this._toastService.success("offer saved successfully !")
        },
        error: (err: any) => {
          console.error('Error : ', err);
          this._toastService.error(err.error.message)
          //TODO:NOT EXCEPTION NEED TO BE HANDLED BY THE SHOWING PAYMENT MODAL
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

  handleNewSubscription(subscription: string) {
    console.log("handle new subscription" + subscription);

    //TODO: CHECKOUT THE SUBSCRIPTION STATUS
    let subscribeRequest:CompanySubscribeRequest = {
        subscriptionStatus: subscription as unknown as SubscriptionStatus,
        companyId: '1',
        token: "token"

    }
    this.companySubscriptionServiceService.subscribe(subscribeRequest).subscribe(
        (res: String) => {
          console.log("subscription done")
          this._toastService.success("subscription done successfully ! "+subscription)
          this.showModal = false;
        },
        (err: any) => {
          this.showModal = false;
          this._toastService.error(err.error.message)
          console.log('Error : ', err);
        }
    )
  }
}
