import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarMaquinariaComponent } from './registrar-maquinaria.component';

describe('RegistrarMaquinariaComponent', () => {
  let component: RegistrarMaquinariaComponent;
  let fixture: ComponentFixture<RegistrarMaquinariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarMaquinariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarMaquinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
