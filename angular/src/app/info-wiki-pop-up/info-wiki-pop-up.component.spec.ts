import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoWikiPopUpComponent } from './info-wiki-pop-up.component';

describe('InfoWikiPopUpComponent', () => {
  let component: InfoWikiPopUpComponent;
  let fixture: ComponentFixture<InfoWikiPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoWikiPopUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoWikiPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
