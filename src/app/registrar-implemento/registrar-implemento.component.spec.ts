import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarImplementoComponent } from './registrar-implemento.component';

describe('RegistrarImplementoComponent', () => {
  let component: RegistrarImplementoComponent;
  let fixture: ComponentFixture<RegistrarImplementoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarImplementoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarImplementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
