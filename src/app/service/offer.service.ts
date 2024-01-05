import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offer, PageOffers } from '../model/offer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  private base_url = 'http://localhost:8080/myrh/api/v1/offers';

  constructor(private http: HttpClient) {}

  public save(offer: Offer) {
    return this.http.post<Offer>(this.base_url, offer);
  }

  public search(data: Map<string, string>) {
    const params = new HttpParams();

    return this.http.post<Offer>(this.base_url, {
      params,
    });
  }

  public getAll(
    queries: Map<string, string> = new Map()
  ): Observable<PageOffers> {
    let params = new HttpParams();

    queries.forEach((value, key) => {
      params = params.append(key, value);
    });
    return this.http.get<PageOffers>(this.base_url, {
      params,
    });
  }

  public getOne(code: string): Observable<Offer> {
    return this.http.get<Offer>(this.base_url + '/' + code);
  }
}
