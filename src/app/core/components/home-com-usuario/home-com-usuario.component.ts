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

  voices: SpeechSynthesisVoice[] = [];

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getVoices();
  }

  showRepos() {
    this.showReposBoolean = !this.showReposBoolean;
    this.repos = this.usuarioService.getRepos(this.usuarioService.usuario.login)
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
