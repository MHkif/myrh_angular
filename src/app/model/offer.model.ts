export interface Offer {
  id: number;
  title: string;
  description: string;
  company: any;
  profile: any;
  city: any;
  level: any;
  status: any;
  salary: number;
}

export interface PageOffers {
  content: Array<Offer>;
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


export enum OfferStatus {
  ACCEPTED="ACCEPTED",
  PENDING="PENDING",
  REFUSED="REFUSED"
}
