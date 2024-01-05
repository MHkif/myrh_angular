import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { JobApplicantService } from 'src/app/job-applicant.service';
import { JobApplicant } from 'src/app/model/jobApplicant.model';
import { Offer } from 'src/app/model/offer.model';
import { OfferService } from 'src/app/service/offer.service';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.css'],
})
export class OfferDetailComponent implements OnInit {
  offer!: Observable<Offer>;
  showModal = false;
  jobApplicantForm!: FormGroup;
  first_name_Error: string = '';
  last_name_Error: string = '';
  email_Error: string = '';

  constructor(
    private route: ActivatedRoute,
    private offerService: OfferService,
    private jobApplicantService: JobApplicantService,
    private builder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.offer = this.offerService.getOne(this.route.snapshot.params['id']);
    this.jobApplicantForm = this.builder.group({
      first_name: this.builder.control(
        '',
        Validators.compose([
          Validators.required,
          // Validators.minLength(8),
          Validators.maxLength(30),
        ])
      ),
      last_name: this.builder.control(
        '',
        Validators.compose([
          Validators.required,
          // Validators.minLength(8),
          Validators.maxLength(30),
        ])
      ),
      email: this.builder.control(
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(8),
          Validators.maxLength(30),
        ])
      ),
      resume: this.builder.control(''),
    });
  }

  uploadFile(event:any) {
    this.jobApplicantForm.value.resume = event.target.files[0];
    console.log(this.jobApplicantForm.value.resume)
    console.log(typeof this.jobApplicantForm.value.resume)
  }
  OnApply(offer: Offer): void {
    let jobApplicant: JobApplicant = {
      JobApplicantId: {
        jobSeeker_id: 0,
        offer_id: offer.id,
      },
      jobSeeker: {
        id: 0,
        first_name: this.jobApplicantForm.value.first_name,
        last_name: this.jobApplicantForm.value.last_name,
        email: this.jobApplicantForm.value.email,
        password: '',
        enabled: false,
        image: '',
      },
      resume: this.jobApplicantForm.value.resume,
      isViewed: false,
      createdDate: '2024-01-03T00:21:19.7076409',
    };

    if (this.jobApplicantForm.valid) {
      this.jobApplicantService.save(jobApplicant).subscribe({
        next: (res: JobApplicant) => {
          alert('Action made successfully!');
          alert(JSON.stringify(res));

          this.showModal = false;
        },
        error: (err: any) => {
          console.error(err);
          alert('Error  : ' + err);
        },
      });
    } else {
      if (this.jobApplicantForm?.get('first_name')?.hasError('required')) {
        this.first_name_Error = 'First name is required.';
      } else if (
        this.jobApplicantForm?.get('first_name')?.hasError('maxlength')
      ) {
        this.first_name_Error = 'First must be less than 30 characters long.';
      } else {
        this.first_name_Error = '';
      }

      if (this.jobApplicantForm?.get('last_name')?.hasError('required')) {
        this.last_name_Error = 'Last name is required.';
      } else if (
        this.jobApplicantForm?.get('last_name')?.hasError('maxlength')
      ) {
        this.last_name_Error =
          'Last name must be less than 30 characters long.';
      } else {
        this.last_name_Error = '';
      }

      if (this.jobApplicantForm?.get('email')?.hasError('required')) {
        this.email_Error = 'Email is required.';
      } else if (this.jobApplicantForm?.get('email')?.hasError('minlength')) {
        this.email_Error = 'Email must be at least 8 characters long.';
      } else if (this.jobApplicantForm?.get('email')?.hasError('maxlength')) {
        this.email_Error = 'Email must be less than 30 characters long.';
      } else {
        this.email_Error = '';
      }
    }
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }
}
