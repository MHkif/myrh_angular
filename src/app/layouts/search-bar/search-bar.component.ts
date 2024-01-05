import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferService } from 'src/app/service/offer.service';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  searchForm!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    private service: OfferService
  ) {}
  ngOnInit(): void {
    this.searchForm = this.builder.group({
      mot_cle: this.builder.control(
        ''
        // Validators.compose([Validators.required])
      ),
      city: this.builder.control(
        ''
        //Validators.compose([Validators.required])
      ),
      level: this.builder.control(
        ''
        // Validators.compose([Validators.required])
      ),
      activity: this.builder.control(
        ''
        // Validators.compose([Validators.required])
      ),
      job: this.builder.control(
        ''
        // Validators.compose([Validators.required])
      ),
    });
  }

  onSearch() {
    const hasEmptyFields =
      this.searchForm.value.mot_cle.trim() === '' &&
      this.searchForm.value.city.trim() === '' &&
      this.searchForm.value.level.trim() === '' &&
      this.searchForm.value.activity.trim() === '' &&
      this.searchForm.value.job.trim() === '';

    if (hasEmptyFields) {
      alert('At least one field is required.');
    } else {
      const searchMap: Map<string, string> = new Map([
        ['title', this.searchForm.value.mot_cle],
        ['city', this.searchForm.value.city],
        ['level', this.searchForm.value.level],
        ['domain', this.searchForm.value.activity],
        ['job', this.searchForm.value.job],
      ]);
      this.router.navigate(['offers'], {
        queryParams: {
          page: 1,
          size: 5,
          title: this.searchForm.value.mot_cle,
        },
      });
    }
  }
}
