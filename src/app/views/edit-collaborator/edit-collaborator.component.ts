import { ActivatedRoute, Router } from '@angular/router';
import { CollaboratorService } from './../../services/collaborator.service';
import { Collaborator } from './../../models/collaborator';
import { NotificationService } from './../../services/notification.service';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-collaborator',
  templateUrl: './edit-collaborator.component.html',
  styleUrls: ['./edit-collaborator.component.css']
})
export class EditCollaboratorComponent implements OnInit {

  public collaborator!: Collaborator;

  constructor(
    private notification: NotificationService,
    private collaboratorService: CollaboratorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initilizeFields();
  }

  private initilizeFields(): void {
    const id = this.route.snapshot.params["id"];
    this.collaboratorService.findById(id).subscribe(collaborator => {
      this.collaborator = collaborator;
    });
  }

  public updateCollaborator(form: NgForm): void {
    if(form.valid) {
      this.collaboratorService.updateCollaborator(this.collaborator).subscribe(response => {
        this.notification.showMessage("Atualizado com sucesso.");
        this.router.navigate(["/dashboard"]);
      });
    }
    else {
      this.notification.showMessage("Dados inválidos.");
    }
  }
}
