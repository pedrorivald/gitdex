import { ReposService } from '../../services/repos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { user } from 'src/app/shared/models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.scss'],
})
export class HomeUserComponent implements OnInit {
  voices: SpeechSynthesisVoice[] = [];
  loginUser: string = '';
  subscription!: Subscription;

  constructor(
    public userService: UserService,
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
      this.userService
        .getUser(this.loginUser)
        .subscribe((data: user) => {
          this.userService.user = data;
          if(!this.userService.existUser()) {
            this.navigateBack();
          }else {
            this.userService.getStars(this.userService.user.login);
          }
        });
    });
  }

  navigateBack() {
    this.userService.reset();
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
