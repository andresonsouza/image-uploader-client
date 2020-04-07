import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-dialog-edit-image',
  templateUrl: './dialog-edit-image.component.html',
  styleUrls: ['./dialog-edit-image.component.scss']
})
export class DialogEditImageComponent {

  constructor(private http: HttpClient,
              private profileService: ProfileService) { }

  public selectedFile;
  public event1;
  imgURL: any;
  receivedImageData: any;
  base64Data: any;
  convertedImage: any;
  pic: any;

  public onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    // Below part is used to display the selected image
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };
  }

  onUpload() {

    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);

    this.http.post('http://localhost:8080/api/profile', uploadData)
      .subscribe(
        res => {
          console.log(res);
          this.receivedImageData = res;
          this.base64Data = this.receivedImageData.pic;
          this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data;
        },
        err => console.log('Error Occured duringng saving: ' + err)
      );

  }

  // onUpload() {

  //   const uploadData = new FormData();
  //   uploadData.append('myFile', this.selectedFile, this.selectedFile.name);

  //   this.httpClient.post('http://localhost:8080/api/profile', uploadData)
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //         this.receivedImageData = res;
  //         this.base64Data = this.receivedImageData.pic;
  //         this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data;
  //       },
  //       err => console.log('Error Occured duringng saving: ' + err)
  //     );

  // }

}
