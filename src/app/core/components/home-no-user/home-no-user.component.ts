import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/user.service';

@Component({
  selector: 'app-home-no-user',
  templateUrl: './home-no-user.component.html',
  styleUrls: ['./home-no-user.component.scss']
})
export class HomeNoUserComponent implements OnInit {

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

}
