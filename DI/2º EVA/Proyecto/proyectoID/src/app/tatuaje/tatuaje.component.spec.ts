import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TatuajeComponent } from './tatuaje.component';

describe('TatuajeComponent', () => {
  let component: TatuajeComponent;
  let fixture: ComponentFixture<TatuajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TatuajeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TatuajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
