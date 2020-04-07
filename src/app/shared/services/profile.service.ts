import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../models/profile';
import { map } from 'rxjs/operators';

@Injectable()
export class ProfileService {

  url = 'http://localhost:8080/profile';

  constructor(private http: HttpClient) { }

  getImageProfile() {
    return this.http.get('/assets/usuario1.json');
  }

  uploadImageProfile() {
  }

}
