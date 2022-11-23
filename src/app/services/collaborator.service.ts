import { NotificationService } from './notification.service';
import { Collaborator } from './../models/collaborator';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from, EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {

  constructor(
    private firestore: AngularFirestore,
    private notification: NotificationService
  ) { }

  public createCollaborator(collaborator: Collaborator): Observable<any> {
    const promise = this.firestore.collection("collaborators").add(collaborator);
    return from(promise).pipe(
      catchError(error => {
        this.notification.showMessage("Erro ao cadastrar.");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public findAll(): Observable<any> {
    const promise = this.firestore.collection("collaborators").get();
    return from(promise).pipe(
      map((response: any) => {
        return response.docs.map((doc: any) => {
          const collaborator: Collaborator = doc.data() as Collaborator;
          collaborator.id = doc.id;
          return collaborator;
        })
      }),
      catchError(error => {
        this.notification.showMessage("Erro ao buscar dados.");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public findById(id: string): Observable<any> {
    const promise = this.firestore.collection("collaborators").doc(id).get();
    return from(promise).pipe(
      map(doc => {
        const collaborator: Collaborator = doc.data() as Collaborator;
        collaborator.id = doc.id;
        return collaborator;
      }),
      catchError(error => {
        this.notification.showMessage("Erro ao buscar pelo id");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public deleteCollaborator(id: string) {
    const promise = this.firestore.collection("collaborators").doc(id).delete();
    return from(promise).pipe(
      catchError(error => {
        this.notification.showMessage("Erro ao excluir.");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public updateCollaborator(collaborator: Collaborator) {
    const promise = this.firestore.collection("collaborators").doc(collaborator.id).update(collaborator);
    return from(promise).pipe(
      catchError(error => {
        this.notification.showMessage("Erro ao atualizar.");
        console.error(error);
        return EMPTY;
      })
    );
  }
}