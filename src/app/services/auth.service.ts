import { NotificationService } from './notification.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, from, EMPTY } from 'rxjs';
import { GoogleAuthProvider } from 'firebase/auth';
import { User } from '../models/user';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private firebaseAuth: AngularFireAuth,
    private notification: NotificationService
  ) { }

  // Método para autenticar via Google
  public authenticateByGoogle(): Observable<any> {
    const provider = new GoogleAuthProvider();
    // Autenticar retorna uma promise
    const promise = this.firebaseAuth.signInWithPopup(provider);
    // Converter a promise em um observable
    return from(promise).pipe(
      // Operador para tratamento de Erros
      catchError(error => {
        // Respota para usuário
        this.notification.showMessage("Erro ao autenticar com Google.");
        // Reposta para o dev
        console.error(error);
        // retorno vazio
        return EMPTY;
      })
    );
  }

  authenticateByEmailAndPassword(user: User): Observable<any> {
    // const email = user.email;
    // const senha = user.senha;
    const { email, senha } = user;
    const promise = this.firebaseAuth.signInWithEmailAndPassword(email, senha);
    return from(promise).pipe(
      catchError(error => {
        if(error.code == "auth/user-not-found"){
          this.notification.showMessage("Usuário não cadastrado.");
        }
        else if(error.code == "auth/wrong-password") {
          this.notification.showMessage("Senha incorreta.");
        }
        else {
          this.notification.showMessage("Erro ao autenticar.");
          console.error(error);
        }
        return EMPTY;
      })
    );
  }

  
  createUserEmailAndPassword(user: User): Observable<any> {
    const { email, senha } = user;
    const promise = this.firebaseAuth.createUserWithEmailAndPassword(email, senha);
    return from(promise).pipe(
      catchError(error => {
        alert("Erro ao cadastrar usuário.");
        console.error(error);
        return EMPTY;
      })
    );
  }

  logout() {
    const promise = this.firebaseAuth.signOut();
    return from(promise);
  }
}
