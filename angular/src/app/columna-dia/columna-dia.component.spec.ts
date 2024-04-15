import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnaDiaComponent } from './columna-dia.component';

describe('ColumnaDiaComponent', () => {
  let component: ColumnaDiaComponent;
  let fixture: ComponentFixture<ColumnaDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnaDiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColumnaDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
