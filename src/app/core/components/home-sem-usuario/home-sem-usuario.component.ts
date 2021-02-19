import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-home-sem-usuario',
  templateUrl: './home-sem-usuario.component.html',
  styleUrls: ['./home-sem-usuario.component.scss']
})
export class HomeSemUsuarioComponent implements OnInit {

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

}
