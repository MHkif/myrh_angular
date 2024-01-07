import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfferService } from 'src/app/service/offer.service';
import {OfferStatus, PageOffers} from "../../../model/offer.model";

@Component({
  selector: 'app-admin-offer-list',
  templateUrl: './admin-offer-list.component.html',
  styleUrls: ['./admin-offer-list.component.css']
})
export class AdminOfferListComponent implements OnInit {

    offers!: PageOffers ;
    constructor(
      private router: Router,
      private offerService: OfferService,
    ) {
    }
    ngOnInit(): void {
      this.offerService.getAll().subscribe(
        data=>{
          this.offers = data;
          console.log(data)
        },

        error => {
          console.log(error);
        }
      )

    }


  protected readonly OfferStatus = OfferStatus;

  changeVisibility(offerId: number, event: any) {
    console.log(offerId, event.target.value);
    this.offerService.changeVisibility(offerId, event.target.value).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
