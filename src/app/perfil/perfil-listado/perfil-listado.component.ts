import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Perfil } from 'src/app/models/perfil';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil-listado',
  templateUrl: './perfil-listado.component.html',
  styleUrls: ['./perfil-listado.component.css'],
})
export class PerfilListadoComponent implements OnInit, OnDestroy {
  private suscripcion = new Subscription();
  @Input() perfil: Perfil;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.obtenerPerfil(this.perfil.id).subscribe({
      next: () => {},
      error: () => {
        alert('ERROR usuarioService.obtenerPerfil');
      },
    });
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }
}
