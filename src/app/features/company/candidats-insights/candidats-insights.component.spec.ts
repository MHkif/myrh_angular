import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatsInsightsComponent } from './candidats-insights.component';

describe('CandidatsInsightsComponent', () => {
  let component: CandidatsInsightsComponent;
  let fixture: ComponentFixture<CandidatsInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatsInsightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatsInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
