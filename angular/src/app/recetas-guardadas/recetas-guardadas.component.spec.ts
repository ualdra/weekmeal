import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetasGuardadasComponent } from './recetas-guardadas.component';

describe('RecetasGuardadasComponent', () => {
  let component: RecetasGuardadasComponent;
  let fixture: ComponentFixture<RecetasGuardadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecetasGuardadasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecetasGuardadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
