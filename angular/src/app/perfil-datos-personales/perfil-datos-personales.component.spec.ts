import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilDatosPersonalesComponent } from './perfil-datos-personales.component';

describe('PerfilDatosPersonalesComponent', () => {
  let component: PerfilDatosPersonalesComponent;
  let fixture: ComponentFixture<PerfilDatosPersonalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilDatosPersonalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilDatosPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
