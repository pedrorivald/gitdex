import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  myForm: FormGroup = new FormGroup({
    user: new FormControl()
  });

  constructor(public usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarioService.clicouEnter();
  }

  onEnter() {
    this.usuarioService.clicouEnter();
    this.usuarioService.getUser(this.myForm.value.user);
    this.usuarioService.getStars(this.myForm.value.user)
    // this.usuarioService.getRepos(this.myForm.value.user);
  }
}
