import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanogramaGeneralPage } from './planograma-general.page';

describe('PlanogramaGeneralPage', () => {
  let component: PlanogramaGeneralPage;
  let fixture: ComponentFixture<PlanogramaGeneralPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanogramaGeneralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
