import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilDatosAlimenticiosComponent } from './perfil-datos-alimenticios.component';

describe('PerfilDatosAlimenticiosComponent', () => {
  let component: PerfilDatosAlimenticiosComponent;
  let fixture: ComponentFixture<PerfilDatosAlimenticiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilDatosAlimenticiosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilDatosAlimenticiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
