import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HorarioDeClasesPage } from './horario-de-clases.page';

describe('HorarioDeClasesPage', () => {
  let component: HorarioDeClasesPage;
  let fixture: ComponentFixture<HorarioDeClasesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioDeClasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
