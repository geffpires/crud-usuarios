import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioDTO } from '../models/usuarioDTO.entity';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-usuarios-view',
  templateUrl: './usuarios-view.component.html',
  styleUrls: ['./usuarios-view.component.css']
})
export class UsuariosViewComponent implements OnInit {

  private isLoading: boolean = true;
  private usuario: UsuarioDTO;

  constructor(private activateRoute: ActivatedRoute, private service: UsuarioService) { 
    
  }

  ngOnInit() {
    const id: number = +this.activateRoute.snapshot.paramMap.get("id");
    this.service.getById(id).subscribe((result) => {
      this.usuario = result;
      this.isLoading = false;
  });

  }

}
