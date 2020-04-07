import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditImageComponent } from 'src/app/shared/dialog-edit-image/dialog-edit-image.component';
import { Profile } from '../../shared/models/profile';
import { ProfileService } from '../../shared/services/profile.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @Output() editarFoto = new EventEmitter();

  imagemAtual$: Profile;
  imgURL: any;
  imageType = 'data:image/PNG;base64,';

  constructor(private dialog: MatDialog,
              private profileService: ProfileService,
              private sanitizer: DomSanitizer
              ) { }

  ngOnInit() {
    this.getImage();
  }

  getImage() {
    this.profileService.getImageProfile()
      .subscribe((data: any) => {
        const objectURL = 'data:image/jpeg;base64,' + data.image;

        this.imgURL = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      });
  }

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
