import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarImplementoComponent } from './actualizar-implemento.component';

describe('ActualizarImplementoComponent', () => {
  let component: ActualizarImplementoComponent;
  let fixture: ComponentFixture<ActualizarImplementoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarImplementoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarImplementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
