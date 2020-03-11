import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {
  id: string;
  constructor(private route: ActivatedRoute) { 
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit() {
  }

}
