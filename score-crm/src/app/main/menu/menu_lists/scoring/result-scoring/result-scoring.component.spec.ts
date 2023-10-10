import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultScoringComponent } from './result-scoring.component';

describe('ResultScoringComponent', () => {
  let component: ResultScoringComponent;
  let fixture: ComponentFixture<ResultScoringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultScoringComponent]
    });
    fixture = TestBed.createComponent(ResultScoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
