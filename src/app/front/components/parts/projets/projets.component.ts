import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  projet: string;
}

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {
 cardSelect = [];
 projet = ['test', 'deuxieme', 'troisieme', 'Oden', 'Luffy', 'Zoro', 'Dernier'];
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    for (let i = 0; i < this.projet.length; i++) {
      this.cardSelect[i] = false;
    }
  }
  openDialog(id){
    const dialogRef = this.dialog.open(DialogProjetOpen, {
      data: {projet: this.projet[id]}
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

  constructor(
    public dialogRef: MatDialogRef<DialogProjetOpen>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData)
  {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
