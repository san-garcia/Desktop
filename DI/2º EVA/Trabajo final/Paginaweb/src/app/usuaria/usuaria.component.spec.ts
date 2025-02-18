import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariaComponent } from './usuaria.component';

describe('UsuariaComponent', () => {
  let component: UsuariaComponent;
  let fixture: ComponentFixture<UsuariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuariaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
