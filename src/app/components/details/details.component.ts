import { Collaborator } from './../../models/collaborator';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public collaborator: Collaborator) { }

  ngOnInit(): void {
  }

}
