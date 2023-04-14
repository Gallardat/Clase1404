import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBiciComponent } from './formulario-bici.component';

describe('FormularioBiciComponent', () => {
  let component: FormularioBiciComponent;
  let fixture: ComponentFixture<FormularioBiciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioBiciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioBiciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
