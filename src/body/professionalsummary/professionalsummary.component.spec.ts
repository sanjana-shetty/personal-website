import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalsummaryComponent } from './professionalsummary.component';

describe('ProfessionalsummaryComponent', () => {
  let component: ProfessionalsummaryComponent;
  let fixture: ComponentFixture<ProfessionalsummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalsummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
