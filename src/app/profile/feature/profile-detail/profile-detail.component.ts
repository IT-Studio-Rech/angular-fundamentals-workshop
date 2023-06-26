import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss'],
})
export class ProfileDetailComponent {
  firstName: string = '';
  lastName: string = '';
  street: string = '';
  houseNumber: string = '';
  country: string = '';
  phoneNumber: string = '';

  countries = ['Deutschland', 'USA', 'Frankreich', 'UK', 'Italien', 'Spanien'];

  constructor() {
  }

  saveProfile(form: NgForm) {
    if (form.valid) {
      const profileDetails = {
        firstName: this.firstName,
        lastName: this.lastName,
        street: this.street,
        houseNumber: this.houseNumber,
        country: this.country,
        phoneNumber: this.phoneNumber,
      };

      console.log(`profile details saved ${JSON.stringify(profileDetails)}`);
    }
  }
}
