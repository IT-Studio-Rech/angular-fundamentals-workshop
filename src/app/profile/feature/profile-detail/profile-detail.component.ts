import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProfileDetailsService} from "../../data-access/profile-details.service";
import {firstValueFrom, tap} from "rxjs";
import {ProfileDetails} from "../../data-access/model/ProfileDetails";

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent {
  profileForm: FormGroup;
  countries = ['Deutschland', 'USA', 'Frankreich', 'UK', 'Italien', 'Spanien'];

  constructor(private _fb: FormBuilder, private _profileDetailsService: ProfileDetailsService) {
    this.profileForm = this._fb.group({
      vorname: ['', Validators.required],
      nachname: ['', Validators.required],
      strasse: ['', Validators.required],
      hausnummer: ['', Validators.required],
      land: ['', Validators.required],
      telefonnummer: ['', Validators.required]
    });

    firstValueFrom(this._profileDetailsService.getProfileDetails().pipe(
      tap(details => this.profileForm.patchValue(details))
    )).then(details => console.log('Profile details loaded. Details: ' + JSON.stringify(details)));
  }

  saveProfile() {
    const profileDetails: ProfileDetails = this.profileForm.value;
    firstValueFrom(this._profileDetailsService.saveProfileDetails(profileDetails)).then((result) => console.log('Save profile details - Result:', result));
  }
}
