import { LanguageService } from './../../services/language.service';
import { ReposService } from '../../services/repos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { user } from 'src/app/shared/models/user';
import { UserService } from '../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.scss'],
})
export class HomeUserComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  voices: SpeechSynthesisVoice[] = [];
  loginUser: string = '';
  subscription!: Subscription;

  public link = ``;

  constructor(
    public userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    public reposService: ReposService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.getVoices();
    this.getUser();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openQRCode() {
    this.dialog.open(QrcodeDialog);
  }

  copyLink() {
    this._snackBar.open('Link Copiado!', 'X', {
      duration: 1500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['custom-class'],
    });
  }

  getUser() {
    this.subscription = this.route.params.subscribe((params: any) => {
      this.loginUser = params['login'] || '';
      this.userService.getUser(this.loginUser).subscribe((data: user) => {
        this.userService.user = data;
        if (!this.userService.existUser()) {
          this.navigateBack();
        } else {
          this.userService.getStars(this.userService.user.login);
          this.link = `https://gitdex.vercel.app/user/${this.userService.user.login}`;
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

  getLang() {
    return this.languageService.translate.currentLang;
  }

  getVoices() {
    this.voices = window.speechSynthesis?.getVoices();
  }

  speakBio(word: string) {
    this.getVoices();
    const regex = new RegExp(`${this.getLang()}`, 'g');
    const localVoice = this.voices?.find((voice) =>
      regex.test(voice.lang)
    );
    const voice = localVoice || this.voices[0];
    this.speak(word, voice);
  }

  speak(word: string, voice: SpeechSynthesisVoice | null) {
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = word;
    utterance.lang = this.getLang();
    utterance.voice = voice;
    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
  }
}

@Component({
  selector: 'qrcode-dialog',
  templateUrl: './qrcode.html',
  styleUrls: ['./qrcode.scss'],
})
export class QrcodeDialog {}
