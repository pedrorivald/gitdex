import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repositorio } from 'src/app/shared/models/repositorio';
import { Usuario } from 'src/app/shared/models/usuario';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

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

  reposPerPage: number = 10;
  reposPage: number = 1;

  constructor(private http: HttpClient) {
    // this.usuario.login = '';
    this.repositorios.push({
      id: 0,
      node_id: '',
      name: '',
      full_name: '',
      private: false,
      owner: {
        login: '',
        id: 0,
        node_id: '',
        avatar_url: '',
        gravatar_id: '',
        url: '',
        html_url: '',
        followers_url: '',
        following_url: '',
        gists_url: '',
        starred_url: '',
        subscriptions_url: '',
        organizations_url: '',
        repos_url: '',
        events_url: '',
        received_events_url: '',
        type: '',
        site_admin: false,
      },
      html_url: '',
      description: '',
      fork: false,
      url: '',
      forks_url: '',
      keys_url: '',
      collaborators_url: '',
      teams_url: '',
      hooks_url: '',
      issue_events_url: '',
      events_url: '',
      assignees_url: '',
      branches_url: '',
      tags_url: '',
      blobs_url: '',
      git_tags_url: '',
      git_refs_url: '',
      trees_url: '',
      statuses_url: '',
      languages_url: '',
      stargazers_url: '',
      contributors_url: '',
      subscribers_url: '',
      subscription_url: '',
      commits_url: '',
      git_commits_url: '',
      comments_url: '',
      issue_comment_url: '',
      contents_url: '',
      compare_url: '',
      merges_url: '',
      archive_url: '',
      downloads_url: '',
      issues_url: '',
      pulls_url: '',
      milestones_url: '',
      notifications_url: '',
      labels_url: '',
      releases_url: '',
      deployments_url: '',
      created_at: '',
      updated_at: '',
      pushed_at: '',
      git_url: '',
      ssh_url: '',
      clone_url: '',
      svn_url: '',
      homepage: '',
      size: 0,
      stargazers_count: 0,
      watchers_count: 0,
      language: '',
      has_issues: false,
      has_projects: false,
      has_downloads: false,
      has_wiki: false,
      has_pages: false,
      forks_count: 0,
      mirror_url: '',
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: '',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: '',
    });
  }

  getUser(name: string) {
    this.http
      .get<Usuario>(`${this.API}users/${name}`)
      .pipe(take(1))
      .subscribe((dados: Usuario) => {
        this.usuario = dados;
        console.log(dados);
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
