import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, from } from 'rxjs';
import { GoogleAuthProvider } from 'firebase/auth';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private firebaseAuth: AngularFireAuth) { }

  public authenticateByGoogle(): Observable<any> {
    const provider = new GoogleAuthProvider();
    const promise = this.firebaseAuth.signInWithPopup(provider); // Retorna uma promise
    return from(promise); // Converter a promise em um observable
  }

  authenticateByEmailAndPassword(user: User): Observable<any> {
    // const email = user.email;
    // const senha = user.senha;
    const { email, senha } = user;
    const promise = this.firebaseAuth.signInWithEmailAndPassword(email, senha);
    return from(promise);
  }

  
  createUserEmailAndPassword(user: User): Observable<any> {
    const { email, senha } = user;
    const promise = this.firebaseAuth.createUserWithEmailAndPassword(email, senha);
    return from(promise);
  }
}
