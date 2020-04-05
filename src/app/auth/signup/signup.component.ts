import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditImageComponent } from 'src/app/shared/dialog-edit-image/dialog-edit-image.component';
import { Profile } from '../../shared/models/profile';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @Output() editarFoto = new EventEmitter();

  imagemAtual$: Observable<Profile>;

  constructor(private dialog: MatDialog) {

  }


  ngOnInit() { }


  onAtualizar() {
    const dialogRef = this.dialog.open(DialogEditImageComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.editarFoto.emit();
      } else {
        dialogRef.close();
      }
    });
  }

}
