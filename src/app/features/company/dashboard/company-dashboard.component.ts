import {Component, OnInit} from '@angular/core';
import {OfferService} from "../../../service/offer.service";

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent {
  // :   PDR-46-avoir-des-statistiques-des-offres-demploi-par-candidats
  current!: string;


}
