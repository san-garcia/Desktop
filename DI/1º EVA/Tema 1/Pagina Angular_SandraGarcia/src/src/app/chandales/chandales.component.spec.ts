import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChandalesComponent } from './chandales.component';

describe('ChandalesComponent', () => {
  let component: ChandalesComponent;
  let fixture: ComponentFixture<ChandalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChandalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChandalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
