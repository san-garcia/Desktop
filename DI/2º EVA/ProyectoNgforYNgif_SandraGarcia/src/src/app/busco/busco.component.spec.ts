import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscoComponent } from './busco.component';

describe('BuscoComponent', () => {
  let component: BuscoComponent;
  let fixture: ComponentFixture<BuscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
