import { NotificationService } from './../../services/notification.service';
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

  constructor(
    fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private notification: NotificationService
  ) {
    this.formCadastro = fb.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  public signInGoogle(): void {
    this.authService.authenticateByGoogle().subscribe(credencials => {
      this.notification.showMessage("Bem-vindo(a)!");
      this.router.navigate(["/home"]);
    })
  }

  public createUserEmailAndPassword(): void {
    const user: User = this.formCadastro.value;
    this.authService.createUserEmailAndPassword(user).subscribe(response => {
      this.notification.showMessage("Usuário cadastrado.");
      this.router.navigate(["/login"]);
    });
  }
}
