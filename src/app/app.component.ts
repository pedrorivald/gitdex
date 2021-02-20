import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuarioService } from './core/services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myForm: FormGroup = new FormGroup({
    user: new FormControl()
  });

  constructor(public usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarioService.clicouEnter();
  }

  backNavigation() {

  }

  onEnter() {
    this.usuarioService.clicouEnter();
    this.usuarioService.getUser(this.myForm.value.user);
    this.usuarioService.getStars(this.myForm.value.user)
    // this.usuarioService.getRepos(this.myForm.value.user);s
  }
}
