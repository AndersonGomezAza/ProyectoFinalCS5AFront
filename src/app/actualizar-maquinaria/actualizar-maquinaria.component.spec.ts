import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarMaquinariaComponent } from './actualizar-maquinaria.component';

describe('ActualizarMaquinariaComponent', () => {
  let component: ActualizarMaquinariaComponent;
  let fixture: ComponentFixture<ActualizarMaquinariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarMaquinariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarMaquinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
