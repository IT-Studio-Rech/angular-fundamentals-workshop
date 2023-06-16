import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProfileDetails} from './interfaces/profile-details.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileDetailsService {
  constructor(private _http: HttpClient) {
  }

  saveProfileDetails$(userProfile: ProfileDetails) {
    // Hiermit wird eine HTTP-Anfrage ausgelöst, die von unserem Interceptor abgefangen wird
    return this._http.post('/user-profile', userProfile);
  }

  getProfileDetails$() {
    // Hiermit wird eine HTTP-Anfrage ausgelöst, die von unserem Interceptor abgefangen wird
    return this._http.get<ProfileDetails>('/user-profile');
  }
}
