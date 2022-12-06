import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Perfil } from 'src/app/models/perfil';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil-modificar',
  templateUrl: './perfil-modificar.component.html',
  styleUrls: ['./perfil-modificar.component.css'],
})
export class PerfilModificarComponent implements OnInit, OnDestroy {
  private suscripcion = new Subscription();
  formulario: FormGroup;
  perfil: Perfil;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.mostrarForm();
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  guardar() {
    if (this.formulario.valid) {
      this.perfil = this.formulario.value;

      this.suscripcion.add(
        this.usuarioService.putPerfil(this.perfil).subscribe({
          next: () => {
            this.router.navigate(['perfil/ver']);
          },
          error: () => {
            alert('ERROR usuarioService.putPerfil');
          },
        })
      );
    } else {
      alert('ERROR CARGA DE FORMULARIO');
    }
  }

  cancelar() {
    this.router.navigate(['perfil/ver']);
  }

  mostrarForm() {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        const id = params['id'];

        if (id) {
          this.usuarioService.obtenerPerfil(id).subscribe({
            next: (p: Perfil) => {
              this.perfil = p;

              this.formulario = this.fb.group({
                id: [p.id, Validators.required],
                nombre: [p.nombre, Validators.required],
                email: [p.email, Validators.required],
                telefono: [p.telefono, Validators.required],
                direccion: [p.direccion, Validators.required],
              });
            },
            error: () => {
              alert('ERROR usuarioService.obtenerPerfil');
            },
          });
        }
      },
      error: () => {
        alert('ERROR activatedRoute.params');
      },
    });
  }
}
