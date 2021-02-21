import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(public usuarioService: UsuarioService, private router: Router) {}

  ngOnInit() {
    this.usuarioService.clicouEnter();
  }

  onEnter() {
    this.usuarioService.clicouEnter();
    // this.usuarioService.getUser(this.myForm.value.user);
    // this.usuarioService.getStars(this.myForm.value.user)
    this.router.navigate(['/user', this.myForm.value.user]);
  }
}
