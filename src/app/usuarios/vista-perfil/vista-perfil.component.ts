import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/perfil';

import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-vista-perfil',
  templateUrl: './vista-perfil.component.html',
  styleUrls: ['./vista-perfil.component.css'],
})
export class VistaPerfilComponent implements OnInit {
  perfil: Perfil;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    const id = Math.round(Math.random() * (4 - 1) + 1);

    this.usuarioService.obtenerPerfil(id).subscribe({
      next: (respuesta: Perfil) => {
        this.perfil = respuesta;
      },
      error: () => {
        alert('Error al obtener el perfil');
      },
    });
  }
}
