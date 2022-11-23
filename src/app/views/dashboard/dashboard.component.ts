import { NotificationService } from './../../services/notification.service';
import { CollaboratorService } from './../../services/collaborator.service';
import { Collaborator } from './../../models/collaborator';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns = ['foto', 'nome', 'email', 'cpf', 'cargo', 'setor', 'excluir', 'editar', 'detalhes'];
  dataSource: Collaborator[] = [];

  constructor(
    private collaboratorService: CollaboratorService,
    private notification: NotificationService
  ) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    this.collaboratorService.findAll().subscribe(collaborators => {
      this.dataSource = collaborators;
    });
  }

  public deleteCollaborator(id: string): void {
    this.collaboratorService.deleteCollaborator(id).subscribe(response => {
      this.notification.showMessage("Apagado.");
      this.initializeTable();
    });
  }
}
