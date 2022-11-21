import { User } from './../../models/user';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  public formCadastro: FormGroup;

  constructor(fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.formCadastro = fb.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  public signInGoogle(): void {
    this.authService.authenticateByGoogle().subscribe(credencials => {
      alert("Autenticado com Google!");
    })
  }

  public createUserEmailAndPassword(): void {
    const user: User = this.formCadastro.value;
    this.authService.createUserEmailAndPassword(user).subscribe(response => {
      alert("Usuário cadastrado.");
      this.router.navigate(["/login"]);
    });
  }
}
