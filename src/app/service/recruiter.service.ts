import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageRecruiter, Recruiter } from '../model/recruiter.model';

@Injectable({
  providedIn: 'root',
})
export class RecruiterService {
  private base_url = 'http://localhost:8080/myrh/api/v1/recruiters';
  constructor(private http: HttpClient) {}

  public getAll(page: number, size: number): Observable<PageRecruiter> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<PageRecruiter>(this.base_url, {
      params,
    });
  }

  public getOne(code: string): Observable<Recruiter> {
    return this.http.get<Recruiter>(this.base_url + '/' + code);
  }

  public save(recruiter: Recruiter): Observable<Recruiter> {
    return this.http.post<Recruiter>(this.base_url, recruiter);
  }
}
