import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../models/profile';

@Injectable()
export class ProfileService {

  readonly url: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

}
