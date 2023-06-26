import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileDetails } from './interfaces/profile-details.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileDetailsService {
  constructor(private http: HttpClient) {}

  // TODO: saveProfileDetails -> saveProfileDetails$ + Rückgabetyp definieren
  saveProfileDetails(userProfile: ProfileDetails) {
    // Hiermit wird eine HTTP-Anfrage ausgelöst, die von unserem Interceptor abgefangen wird
    return this.http.post('/user-profile', userProfile);
  }

  // TODO: getProfileDetails -> getProfileDetails$ + Rückgabetyp definieren
  getProfileDetails() {
    // Hiermit wird eine HTTP-Anfrage ausgelöst, die von unserem Interceptor abgefangen wird
    return this.http.get<ProfileDetails>('/user-profile');
  }
}
