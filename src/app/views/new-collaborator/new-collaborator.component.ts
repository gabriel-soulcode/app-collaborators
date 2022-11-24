import { UploadService } from './../../services/upload.service';
import { Router } from '@angular/router';
import { CollaboratorService } from './../../services/collaborator.service';
import { Collaborator } from './../../models/collaborator';
import { NotificationService } from './../../services/notification.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-collaborator',
  templateUrl: './new-collaborator.component.html',
  styleUrls: ['./new-collaborator.component.css']
})
export class NewCollaboratorComponent implements OnInit {

  public formCollaborator: FormGroup;

  public isLoadUpload: boolean = false;
  private fotoUrl: string = "";

  constructor(
    fb: FormBuilder,
    private notification: NotificationService,
    private collaboratorService: CollaboratorService,
    private router: Router,
    private uploadService: UploadService
  ) {
    this.formCollaborator = fb.group({
      nome: ["", [Validators.required]],
      cpf: ["", [Validators.required]],
      dataNascimento: ["", [Validators.required]],
      cargo: ["", [Validators.required]],
      setor: ["", [Validators.required]],
      estado: ["", [Validators.required]],
      cidade: ["", [Validators.required]],
      remuneracao: ["", [Validators.required, Validators.min(0)]],
      email: ["", [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
  }

  public createCollaborator(): void {
    if(this.formCollaborator.valid) {
      const collaborator: Collaborator = this.formCollaborator.value;
      collaborator.fotoUrl = this.fotoUrl;
      this.collaboratorService.createCollaborator(collaborator).subscribe(response => {
        this.notification.showMessage("Cadastrado com sucesso.");
        this.router.navigate(["/dashboard"]);
      });
    }
    else {
      this.notification.showMessage("Dados inválidos.");
    }
  }

  public uploadFile(event: any): void {
    this.isLoadUpload = true;
    const file: File = event.target.files[0];
    this.uploadService.uploadFoto(file).subscribe(uploadResult  => {
      this.isLoadUpload = false;
      const storageReference = uploadResult.ref;
      const promiseFileUrl = storageReference.getDownloadURL();
      promiseFileUrl.then((fotoUrl: string) => {
        this.fotoUrl = fotoUrl;
      })
    });
  }
}
