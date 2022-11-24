import { NotificationService } from './notification.service';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {  Observable, from, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private storage: AngularFireStorage,
    private notification: NotificationService
  ) { }

  public uploadFoto(photo: File): Observable<any> {
    const promise = this.storage.upload(`fotos/${Date.now()}`, photo);
    return from(promise).pipe(
      catchError(error => {
        this.notification.showMessage("Erro no envio do arquivo.");
        console.error(error);
        return EMPTY;
      })
    );
  }
}
