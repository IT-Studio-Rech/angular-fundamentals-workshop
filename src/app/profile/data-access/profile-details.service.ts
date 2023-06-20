import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProfileDetails} from "./model/ProfileDetails";

@Injectable({
  providedIn: 'root'
})
export class ProfileDetailsService {
  constructor(private http: HttpClient) { }

  saveProfileDetails(userProfile: ProfileDetails) {
    // Hiermit wird eine HTTP-Anfrage ausgelöst, die von unserem Interceptor abgefangen wird
    return this.http.post('/user-profile', userProfile);
  }

  getProfileDetails() {
    // Hiermit wird eine HTTP-Anfrage ausgelöst, die von unserem Interceptor abgefangen wird
    return this.http.get<ProfileDetails>('/user-profile');
  }
}
