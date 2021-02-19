import { Component, OnInit } from '@angular/core';
import { empty, Observable } from 'rxjs';
import { Repositorio } from 'src/app/shared/models/repositorio';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-home-com-usuario',
  templateUrl: './home-com-usuario.component.html',
  styleUrls: ['./home-com-usuario.component.scss']
})
export class HomeComUsuarioComponent implements OnInit {

  repos: Observable<Repositorio[]> = empty();
  showReposBoolean: boolean = false;

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {

  }

  showRepos() {
    this.showReposBoolean = !this.showReposBoolean;
    this.repos = this.usuarioService.getRepos(this.usuarioService.usuario.login)
  }

}
