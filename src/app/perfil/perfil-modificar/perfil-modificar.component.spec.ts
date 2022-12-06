import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilModificarComponent } from './perfil-modificar.component';

describe('PerfilModificarComponent', () => {
  let component: PerfilModificarComponent;
  let fixture: ComponentFixture<PerfilModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilModificarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
