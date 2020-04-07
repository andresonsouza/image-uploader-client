import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  imgURL: any;
  imageType = 'data:image/PNG;base64,';

  constructor(private profileService: ProfileService,
              private sanitizer: DomSanitizer) { }

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

}
