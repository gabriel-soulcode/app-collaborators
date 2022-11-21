import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(fb: FormBuilder, private authService: AuthService) {
    this.formLogin = fb.group({
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

  public signInEmailAndPassword(): void {
    const user: User = this.formLogin.value;
    this.authService.authenticateByEmailAndPassword(user).subscribe(credencials => {
      alert("Autenticado com Email e Senha!")
    });
  }
}
