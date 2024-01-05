export interface JobApplicant {
  JobApplicantId: JobApplicantId;
  createdDate: '2024-01-03T00:21:19.7076409';
  jobSeeker: JobSeeker;
  resume: File ;
  isViewed: boolean;
}

export interface JobSeeker {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  image: string;
  enabled: boolean;
}

export interface JobApplicantId {
  jobSeeker_id: number | Blob | string;
  offer_id: number | Blob | string;
}

export interface PageJobApplicant {
  content: Array<JobApplicant>;
  pageable: any;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: any;
  first: boolean;
  numberOfElements: boolean;
  empty: boolean;
}
