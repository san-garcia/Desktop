import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariasPagina2Component } from './usuarias-pagina2.component';

describe('UsuariasPagina2Component', () => {
  let component: UsuariasPagina2Component;
  let fixture: ComponentFixture<UsuariasPagina2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuariasPagina2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariasPagina2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
