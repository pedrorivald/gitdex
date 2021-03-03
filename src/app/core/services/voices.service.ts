import { LanguageService } from './language.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoicesService {

  voices: SpeechSynthesisVoice[] = [];

  constructor(private languageService: LanguageService) { }

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

  reset() {
    this.voices = [];
  }
}
