import { Component } from '@angular/core';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent {
  //TODO :   PDR-46-avoir-des-statistiques-des-offres-demploi-par-candidats
  current!: string;

}
