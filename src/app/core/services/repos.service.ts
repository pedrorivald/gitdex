import { UsuarioService } from './user.service';
import { Injectable } from '@angular/core';
import { empty, Observable } from 'rxjs';
import { Repositorio } from 'src/app/shared/models/repo';

@Injectable({
  providedIn: 'root'
})
export class ReposService {

  repos: Observable<Repositorio[]> = empty();
  listRepo: Repositorio[] = [];
  public showReposBoolean: boolean = false;
  public paginaAtual = 1;

  constructor(private usuarioService: UsuarioService) { }

  public showRepos() {
    this.showReposBoolean = !this.showReposBoolean;
    this.repos = this.usuarioService.getRepos(
      this.usuarioService.usuario.login
    );
    this.repos.subscribe((repos) => {
      this.listRepo = repos;
    });
  }

  reset() {
    this.repos = empty();
    this.listRepo = [];
    this.showReposBoolean = false;
    this.paginaAtual = 1;
  }
}
