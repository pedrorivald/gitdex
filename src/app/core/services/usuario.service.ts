import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repositorio } from 'src/app/shared/models/repositorio';
import { Usuario } from 'src/app/shared/models/usuario';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private readonly API = environment.API;

  public totalEstrelas: number = 0;
  public usuario: Usuario = {
    login: '',
  };
  public repositorios: Repositorio[] = [];
  public clicouEnterBoolean: boolean = true;

  constructor(private http: HttpClient, private router: Router) {}

  reset() {
    this.totalEstrelas = 0;
    this.usuario = {
      login: '',
    };
    this.repositorios = [];
    this.clicouEnterBoolean = false;
  }

  getUser(name: string) {
    this.http
      .get<Usuario>(`${this.API}users/${name}`)
      .pipe(take(1))
      .subscribe((dados: Usuario) => {
        this.usuario = dados;
        if(this.existeUsuario()) {
          this.router.navigate(['/user']);
        }
      });
  }

  getRepos(name: string) {
    return this.http
      .get<Repositorio[]>(
        `${this.API}users/${name}/repos`
      )
      .pipe(take(1));
  }

  getStars(name: string) {
    this.getRepos(name).subscribe((dados: Repositorio[]) => {
      dados.forEach((repositorio) => {
        this.totalEstrelas = repositorio.stargazers_count + this.totalEstrelas;
      });
    });
  }

  existeUsuario() {
    return this.usuario.login != '' ? true : false;
  }

  existeRepositorio() {
    return this.repositorios[0].owner.login != '' ? true : false;
  }

  clicouEnter() {
    this.clicouEnterBoolean = !this.clicouEnterBoolean;
    return this.clicouEnterBoolean;
  }
}
