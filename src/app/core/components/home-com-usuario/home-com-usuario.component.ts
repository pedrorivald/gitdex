import { ReposService } from './../../services/repos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { empty, Observable, Subscription } from 'rxjs';
import { Repositorio } from 'src/app/shared/models/repositorio';
import { Usuario } from 'src/app/shared/models/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-home-com-usuario',
  templateUrl: './home-com-usuario.component.html',
  styleUrls: ['./home-com-usuario.component.scss'],
})
export class HomeComUsuarioComponent implements OnInit {
  voices: SpeechSynthesisVoice[] = [];
  loginUser: string = '';
  subscription!: Subscription;

  constructor(
    public usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
    public reposService: ReposService
  ) {}

  ngOnInit(): void {
    this.getVoices();
    this.getUser();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getUser() {
    this.subscription = this.route.params.subscribe((params: any) => {
      this.loginUser = params['login'] || '';
      this.usuarioService
        .getUser(this.loginUser)
        .subscribe((dados: Usuario) => {
          this.usuarioService.usuario = dados;
          if(!this.usuarioService.existeUsuario()) {
            this.navigateBack();
          }else {
            this.usuarioService.getStars(this.usuarioService.usuario.login);
          }
        });
    });
  }

  navigateBack() {
    this.usuarioService.reset();
    this.reposService.reset();
    this.reset();
    this.router.navigate(['']);
  }

  reset() {
    this.voices = [];
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
