import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarRecetaComponent } from './buscar-receta.component';

describe('BuscarRecetaComponent', () => {
  let component: BuscarRecetaComponent;
  let fixture: ComponentFixture<BuscarRecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarRecetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscarRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
