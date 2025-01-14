import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfrezcoComponent } from './ofrezco.component';

describe('OfrezcoComponent', () => {
  let component: OfrezcoComponent;
  let fixture: ComponentFixture<OfrezcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfrezcoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfrezcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
