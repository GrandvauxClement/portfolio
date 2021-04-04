import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Projet} from '../../../../models/projet';
import {ProjetService} from '../../../../services/projet.service';
import {Router} from '@angular/router';

export interface DialogData {
  projet: string;
  paginator: [];
}

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {
  isLoading: boolean;
  urlImage = 'http://localhost:8000/image/projet/';
  projets: Projet[];
 cardSelect = [];
 projet = ['test', 'deuxieme', 'troisieme', 'Oden', 'Luffy', 'Zoro', 'Dernier'];
  constructor(public dialog: MatDialog, private projetService: ProjetService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.isLoading = true;
    for (let i = 0; i < this.projet.length; i++) {
      this.cardSelect[i] = false;
    }
    return this.projetService.getProjets().subscribe((data) => {
      this.projets = data['hydra:member'];
      this.isLoading = false;
      console.log(this.projets);
    });
  }
  openDialog(id){
    const dialogRef = this.dialog.open(DialogProjetOpen, {
      width: '95vh',
      data: {projet: this.projets[id]},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result : ${result}');
      });
  }

}
@Component({
  selector: 'dialog-projet-open',
  templateUrl: 'dialog-projet-open.html',
})
export class DialogProjetOpen{
  isLoading: boolean;
  constructor(
    public dialogRef: MatDialogRef<DialogProjetOpen>,
    private projetService: ProjetService, private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: DialogData)
  {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
