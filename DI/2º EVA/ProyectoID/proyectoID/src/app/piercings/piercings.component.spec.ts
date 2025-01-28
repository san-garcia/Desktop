import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiercingsComponent } from './piercings.component';

describe('PiercingsComponent', () => {
  let component: PiercingsComponent;
  let fixture: ComponentFixture<PiercingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiercingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiercingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
