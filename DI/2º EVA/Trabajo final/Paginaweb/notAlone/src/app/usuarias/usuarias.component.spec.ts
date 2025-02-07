import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariasComponent } from './usuarias.component';

describe('UsuariasComponent', () => {
  let component: UsuariasComponent;
  let fixture: ComponentFixture<UsuariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuariasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
