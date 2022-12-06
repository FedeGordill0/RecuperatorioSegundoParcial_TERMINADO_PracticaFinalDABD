import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilListadoComponent } from './perfil-listado.component';

describe('PerfilListadoComponent', () => {
  let component: PerfilListadoComponent;
  let fixture: ComponentFixture<PerfilListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilListadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
