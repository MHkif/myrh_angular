import {Component, OnInit} from '@angular/core';
import {OfferService} from "../../../service/offer.service";
import {JobSeekerOfferInsightsResponse} from "../../../model/offer.model";

@Component({
  selector: 'app-candidates-insights',
  templateUrl: './candidates-insights.component.html',
  styleUrls: ['./candidates-insights.component.css']
})
export class CandidatesInsightsComponent implements OnInit{

  candidatesOfferInsights:Array<JobSeekerOfferInsightsResponse> =[];


  constructor(private OfferService:OfferService) { }

  ngOnInit(): void {
    this.OfferService.getAllCandidatesOfferInsights(1).subscribe((data)=>{
      console.log(data)
      this.candidatesOfferInsights = data;
    },error => {
      console.log(error)
    })
  }
}
