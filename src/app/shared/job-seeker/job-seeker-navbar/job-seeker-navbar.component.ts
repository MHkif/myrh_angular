import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  JobSeekerApplicationSocketConfigService
} from "../../../service/jobSeeker/job-application-config/job-seeker-application-socket-config.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-job-seeker-navbar',
  templateUrl: './job-seeker-navbar.component.html',
  styleUrls: ['./job-seeker-navbar.component.css']
})
export class JobSeekerNavbarComponent implements OnInit , OnDestroy{

    notifications: any[] = [];
    newNotification: boolean = false;
    jobSeekerId: number = 1;
    constructor(
      private jobSeekerApplicationSocketService: JobSeekerApplicationSocketConfigService
    ) {
    }



  ngOnInit(): void {
      this.jobSeekerApplicationSocketService.
      subscribeToNotification("/topic/job_seeker/", this.jobSeekerId, () => {});

      this.jobSeekerApplicationSocketService.notificationsSubject.subscribe((notification) => {
        console.log("notificationsSubject")
        console.log(notification)
        this.notifications.push(notification);

        this.newNotification = true;
        setTimeout(() => {
          this.newNotification = false;
        }, 5000);

      });
    }

  ngOnDestroy(): void {
    this.jobSeekerApplicationSocketService.notificationsSubject.unsubscribe();

  }

}
