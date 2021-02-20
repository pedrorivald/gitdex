import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  listRepo: Repositorio[] = [];
  showReposBoolean: boolean = false;

  voices: SpeechSynthesisVoice[] = [];

  public paginaAtual = 1;

  constructor(public usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.getVoices();
  }

  navigateBack() {
    this.usuarioService.reset();
    this.reset();
    this.router.navigate(['']);
  }

  reset() {
    this.repos = empty();
    this.listRepo = [];
    this.showReposBoolean = false;
    this.voices = [];
    this.paginaAtual = 1;
  }

  showRepos() {
    this.showReposBoolean = !this.showReposBoolean;
    this.repos = this.usuarioService.getRepos(this.usuarioService.usuario.login)
    this.repos.subscribe((repos) => {
      this.listRepo = repos;
    });
  }

  getVoices() {
    this.voices = window.speechSynthesis?.getVoices();
  }

  speakBio(word: string) {
    this.getVoices();
    const ptBrVoice = this.voices?.find((voice) => /pt-BR/.test(voice.lang));
    const voice = ptBrVoice || this.voices[0];
    this.speak(word, voice);
  }

  speak(word: string, voice: SpeechSynthesisVoice | null) {
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = word;
    utterance.lang = 'pt-BR';
    utterance.voice = voice;
    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
  }

}
